module.exports = generateTypes

const {readFileSync, writeFileSync} = require('fs')
const {join: pathJoin} = require('path')

const debug = require('debug')('octokit:rest')
const Mustache = require('mustache')
const upperFirst = require('lodash/upperFirst')
const camelcase = require('lodash/camelcase')

const ROUTES = require('../lib/routes.json')

const typeMap = {
  Json: 'string'
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
    required: definition.required,
    type: enums || type
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
  return params.concat(parameterize.apply(null, entry))
}

function generateTypes (languageName, templateFile, outputFile) {
  const templatePath = pathJoin(__dirname, 'templates', templateFile)
  const template = readFileSync(templatePath, 'utf8')

  debug(`Generating ${languageName} types...`)

  const namespaces = Object.keys(ROUTES).reduce((namespaces, namespace) => {
    const methods = entries(ROUTES[namespace]).reduce((methods, entry) => {
      const unionTypeNames = Object.keys(entry[1].params)
        .filter(isGlobalParam)
        .reduce((params, name) => {
          return params.concat(pascalcase(name.slice(1)))
        }, [])

      const ownParams = entries(entry[1].params)
        .filter((entry) => isLocalParam(entry[0]))
        .reduce(toCombineParams, [])

      const hasParams = unionTypeNames.length > 0 || ownParams.length > 0

      let paramTypeName = hasParams
        ? pascalcase(`${namespace}-${entry[0]}Params`)
        : pascalcase('EmptyParams')

      return methods.concat({
        method: camelcase(entry[0]),
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
    namespaces
  })

  const definitionFilePath = pathJoin(__dirname, '..', outputFile)
  debug(`Writing ${languageName} declarations file to ${definitionFilePath}`)

  writeFileSync(definitionFilePath, body, 'utf8')
}
