#!/usr/bin/env node

const fs = require('fs')
const pathJoin = require('path').join

const debug = require('debug')('octokit:rest')
const Mustache = require('mustache')
const upperFirst = require('lodash/upperFirst')

const typeMap = {
  Json: 'string',
  String: 'string',
  Number: 'number',
  Boolean: 'boolean'
}

function paramData (key, definition) {
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

function camelcase (string) {
  return string.replace(/(?:-|_)([a-z])/g, function (_, character) {
    return upperFirst(character)
  })
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
  return Object.keys(object).map(function (key) {
    return [key, object[key]]
  })
}

function combineParamData (params, entry) {
  return params.concat(paramData.apply(null, entry))
}

module.exports = function (languageName, templateFile, outputFile) {
  var templatePath = pathJoin(__dirname, 'templates', templateFile)
  var template = fs.readFileSync(templatePath, 'utf8')

    // check routes path
  var routes = require('../lib/routes')
  var definitions = require('../lib/definitions')
  if (!definitions) {
    debug('No routes defined.', 'fatal')
    process.exit(1)
  }

  var requestHeaders = definitions['request-headers']

  debug('Generating ' + languageName + ' types...')

  var params = entries(definitions.params).reduce(combineParamData, [])

  var namespaces = Object.keys(routes).reduce(function (namespaces, namespace) {
    var methods = entries(routes[namespace]).reduce(function (methods, entry) {
      var unionTypeNames = Object.keys(entry[1].params)
                .filter(isGlobalParam)
                .reduce(function (params, name) {
                  return params.concat(pascalcase(name.slice(1)))
                }, [])

      var ownParams = entries(entry[1].params)
                .filter(function (entry) { return isLocalParam(entry[0]) })
                .reduce(combineParamData, [])

      var hasParams = unionTypeNames.length > 0 || ownParams.length > 0

      var paramTypeName = ''
      if (!hasParams) {
        paramTypeName = pascalcase('EmptyParams')
      } else {
        paramTypeName = pascalcase(namespace + '-' + entry[0] + 'Params')
      }

      return methods.concat({
        method: camelcase(entry[0]),
        paramTypeName: paramTypeName,
        unionTypeNames: unionTypeNames.length > 0 && unionTypeNames,
        ownParams: ownParams.length > 0 && { params: ownParams },
        exclude: !hasParams
      })
    }, [])

    return namespaces.concat({
      namespace: camelcase(namespace),
      methods: methods
    })
  }, [])

  var body = Mustache.render(template, {
    requestHeaders: requestHeaders.map(JSON.stringify),
    params: params,
    namespaces: namespaces
  })

  debug('Writing ' + languageName + ' declarations file')

  fs.writeFileSync(pathJoin(__dirname, '..', 'lib', outputFile), body, 'utf8')
}
