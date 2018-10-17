module.exports = generateTypes

const { readFileSync, writeFileSync } = require('fs')
const { join: pathJoin } = require('path')

const debug = require('debug')('octokit:rest')
const Mustache = require('mustache')
const upperFirst = require('lodash/upperFirst')
const camelcase = require('lodash/camelCase')
const set = require('lodash/set')
const TypeWriter = require('@gimenete/type-writer')
const prettier = require('prettier')

const ROUTES = require('./routes-for-api-docs.json')

const typeMap = {
  integer: 'number',
  'integer[]': 'number[]'
}

function parameterize (definition) {
  if (definition === null) {
    return {}
  }

  const key = definition.name
  const type = typeMap[definition.type] || definition.type
  const enums = definition.enum
    ? definition.enum.map(JSON.stringify).join('|')
    : null

  const deprecated = definition.deprecated ? `\n@deprecated "${key}" has been renamed to "${definition.alias}"` : ''

  return {
    name: pascalcase(key),
    key: key,
    required: !definition.deprecated && definition.required,
    type: enums || type,
    alias: definition.alias,
    deprecated: definition.deprecated,
    allowNull: definition.allowNull,
    jsdoc: jsdoc(definition.description + deprecated)
  }
}

function pascalcase (string) {
  return upperFirst(camelcase(string))
}

function isGlobalParam (name) {
  return name.charAt(0) === '$'
}

function isLocalParam (name) {
  return !isGlobalParam(name)
}

function entries (object) {
  return Object.keys(object).map((key) => [key, object[key]])
}

function toCombineParams (params, param) {
  return params
    .concat(parameterize(param))
}

function toParamAlias (param, i, params) {
  if (!param.alias) {
    return param
  }

  const actualParam = params.find(({ key }) => key === param.alias)
  param.required = !param.deprecated && actualParam.required
  param.type = actualParam.type
  return param
}

function jsdoc (description) {
  return description && '/**\n' + description.split('\n').map(str => '* ' + str) + '\n*/'
}

function generateTypes (languageName, templateFile, outputFile) {
  const templatePath = pathJoin(__dirname, 'templates', templateFile)
  const template = readFileSync(templatePath, 'utf8')
  const typeWriter = new TypeWriter()

  debug(`Generating ${languageName} types...`)

  const childParams = {}
  const namespaces = Object.keys(ROUTES).reduce((namespaces, namespace) => {
    const methods = entries(ROUTES[namespace]).reduce((methods, entry) => {
      const unionTypeNames = Object.keys(entry[1].params)
        .filter(isGlobalParam)
        .reduce((params, name) => {
          return params.concat(pascalcase(name.slice(1)))
        }, [])

      const namespacedParamsName = pascalcase(`${namespace}-${entry[0]}Params`)
      const ownParams = entry[1].params
        .filter((param) => isLocalParam(param.name))
        .reduce(toCombineParams, [])
        .map(toParamAlias)
        // handle "object" & "object[]" types
        .map(param => {
          if (param.type === 'object' || param.type === 'object[]') {
            const childParamsName = pascalcase(`${namespacedParamsName}.${param.key}`)
            param.type = param.type.replace('object', childParamsName)

            if (!childParams[childParamsName]) {
              childParams[childParamsName] = {}
            }
          }

          if (!/\./.test(param.key)) {
            return param
          }

          const childKey = param.key.split('.').pop()
          const parentKey = param.key.replace(/\.[^.]+$/, '')

          param.key = childKey

          const childParamsName = pascalcase(`${namespacedParamsName}.${parentKey}`)
          set(childParams, `${childParamsName}.${childKey}`, param)
        })
        .filter(Boolean)

      const hasParams = unionTypeNames.length > 0 || ownParams.length > 0

      const methodName = camelcase(entry[0])
      let paramTypeName = hasParams
        ? namespacedParamsName
        : pascalcase('EmptyParams')

      let responseType = 'Github.AnyResponse'
      if (entry[1].responses) {
        const typeName = 'Github.' + typeWriter.add(entry[1].responses.map(response => response.body || {}), {
          rootTypeName: pascalcase(`${namespace}-${entry[0]}Response`)
        })
        responseType = 'Github.Response<' + typeName + '>'
      }

      return methods.concat({
        method: methodName,
        paramTypeName,
        unionTypeNames: unionTypeNames.length > 0 && unionTypeNames,
        ownParams: ownParams.length > 0 && { params: ownParams },
        exclude: !hasParams,
        responseType,
        jsdoc: jsdoc(entry[1].description)
      })
    }, [])

    return namespaces.concat({
      namespace: camelcase(namespace),
      methods
    })
  }, [])

  const body = Mustache.render(template, {
    responseTypes: typeWriter.generate('typescript'),
    namespaces,
    childParams: Object.keys(childParams).map(key => {
      return {
        paramTypeName: key,
        params: Object.values(childParams[key])
      }
    })
  })

  const source = prettier.format(body, { parser: languageName.toLowerCase() })

  const definitionFilePath = pathJoin(__dirname, '..', outputFile)
  debug(`Writing ${languageName} declarations file to ${definitionFilePath}`)

  writeFileSync(definitionFilePath, source, 'utf8')
}
