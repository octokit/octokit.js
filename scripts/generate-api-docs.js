#!/usr/bin/env node

var writeFileSync = require('fs').writeFileSync
var Path = require('path')

var debug = require('debug')('octokit:rest')
var toCamelCase = require('lodash/camelCase')
var upperFirst = require('lodash/upperFirst')

var ROUTES = require('../lib/routes.json')
var DEFINITIONS = require('../lib/definitions.json')

debug('Generating...')

var sections = {}
var apidocs = ''

function prepareApi (struct, baseType) {
  if (!baseType) {
    baseType = ''
  }

  var lastSection
  Object.keys(struct).sort().forEach(function (routePart) {
    var block = struct[routePart]
    if (!block) {
      return
    }
    var messageType = baseType + '/' + routePart
    if (block.url && block.params) {
      // we ended up at an API definition part!
      var parts = messageType.split('/')
      var section = toCamelCase(parts[1])

      if (!block.method) {
        throw new Error('No HTTP method specified for ' + messageType +
                      'in section ' + section)
      }

      if (lastSection !== section) {
        apidocs += createSectionComment(section)
        lastSection = section
      }

      // add the handler to the sections
      if (!sections[section]) {
        sections[section] = []
      }

      parts.splice(0, 2)
      var funcName = toCamelCase(parts.join('-'))
      apidocs += createComment(section, funcName, block)
    } else {
              // recurse into this block next:
      prepareApi(block, messageType)
    }
  })
}

function createSectionComment (section) {
  return [
    '/**',
    ' * ' + upperFirst(section),
    ' * @namespace ' + section,
    ' */',
    '',
    ''
  ].join('\n')
}

function createComment (section, funcName, block) {
  var method = block['method'].toUpperCase()
  var url = block['url']

  var commentLines = [
    '/**',
    ' * @api {' + method + '} ' + url + ' ' + funcName,
    ' * @apiName ' + funcName,
    ' * @apiDescription ' + block['description'],
    ' * @apiGroup ' + section,
    ' *'
  ]

  var paramsObj = block['params']

      // sort params so Required come before Optional
  var paramKeys = Object.keys(paramsObj)
  paramKeys.sort(function (paramA, paramB) {
    var cleanParamA = paramA.replace(/^\$/, '')
    var cleanParamB = paramB.replace(/^\$/, '')

    var paramInfoA = paramsObj[paramA] || DEFINITIONS['params'][cleanParamA]
    var paramInfoB = paramsObj[paramB] || DEFINITIONS['params'][cleanParamB]

    var paramRequiredA = paramInfoA['required']
    var paramRequiredB = paramInfoB['required']

    if (paramRequiredA && !paramRequiredB) return -1
    if (!paramRequiredA && paramRequiredB) return 1
    return 0
  })

  paramKeys.forEach(function (param) {
    var cleanParam = param.replace(/^\$/, '')
    var paramInfo = paramsObj[param] || DEFINITIONS['params'][cleanParam]

    var paramRequired = paramInfo['required']
    var paramType = paramInfo['type'].toLowerCase()
    var paramDescription = paramInfo['description']
    var paramDefaultVal = paramInfo['default']

    var paramLabel = cleanParam

    // add default value if there is one
    if (typeof paramDefaultVal !== 'undefined') {
      paramLabel += '=' + paramDefaultVal
    }

    // show param as either required or optional
    if (!paramRequired) {
      paramLabel = '[' + paramLabel + ']'
    }

    var allowedValues = ''
    if (paramInfo['enum']) {
      allowedValues = '=' + paramInfo['enum'].map(function (val) {
        return val // "\"" + val + "\"";
      }).join(',')
    }

    commentLines.push(' * @apiParam {' + paramType + allowedValues + '} ' + paramLabel + '  ' + paramDescription)
  })

  commentLines.push(' * @apiExample {js} ex:\ngithub.' + section + '.' + funcName + '({ ... })')

  return commentLines.join('\n') + '\n */\n\n'
}

debug('Converting routes to functions')
prepareApi(ROUTES)

var apidocsPath = Path.join(__dirname, '..', 'doc', 'apidoc.js')
writeFileSync(apidocsPath, apidocs.trim() + '\n')
