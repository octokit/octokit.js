module.exports = generateTypes

const {readFileSync, writeFileSync} = require('fs')
const {join: pathJoin} = require('path')

const debug = require('debug')('octokit:rest')
const Mustache = require('mustache')
const upperFirst = require('lodash/upperFirst')
const camelcase = require('lodash/camelCase')
const set = require('lodash/set')

const ROUTES = require('../lib/routes.json')

const typeMap = {
  integer: 'number',
  'integer[]': 'number[]'
}

function parameterize (key, definition) {
  if (definition === null) {
    return {}
  }

  const type = typeMap[definition.type] || definition.type
  const enums = definition.enum
    ? definition.enum.map(JSON.stringify).join('|')
    : null

  return {
    name: pascalcase(key),
    key: key,
    required: !definition.deprecated && definition.required,
    type: enums || type,
    alias: definition.alias,
    deprecated: definition.deprecated
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

function toCombineParams (params, entry) {
  return params
    .concat(parameterize.apply(null, entry))
}

function toParamAlias (param, i, params) {
  if (!param.alias) {
    return param
  }

  const actualParam = params.find(({key}) => key === param.alias)
  param.required = !param.deprecated && actualParam.required
  param.type = actualParam.type
  return param
}

function generateTypes (languageName, templateFile, outputFile) {
  const templatePath = pathJoin(__dirname, 'templates', templateFile)
  const template = readFileSync(templatePath, 'utf8')

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
      const ownParams = entries(entry[1].params)
        .filter((entry) => isLocalParam(entry[0]))
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

      return methods.concat({
        method: methodName,
        paramTypeName,
        unionTypeNames: unionTypeNames.length > 0 && unionTypeNames,
        ownParams: ownParams.length > 0 && { params: ownParams },
        exclude: !hasParams
      })
    }, [])

    return namespaces.concat({
      namespace: camelcase(namespace),
      methods
    })
  }, [])

  const body = Mustache.render(template, {
    namespaces,
    childParams: Object.keys(childParams).map(key => {
      return {
        paramTypeName: key,
        params: Object.values(childParams[key])
      }
    })
  })

  const definitionFilePath = pathJoin(__dirname, '..', outputFile)
  debug(`Writing ${languageName} declarations file to ${definitionFilePath}`)

  writeFileSync(definitionFilePath, body, 'utf8')
}
