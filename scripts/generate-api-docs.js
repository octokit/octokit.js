#!/usr/bin/env node

const {writeFileSync} = require('fs')
const {join: pathJoin} = require('path')

const debug = require('debug')('octokit:rest')
const upperFirst = require('lodash/upperFirst')

const ROUTES = require('../lib/routes.json')

debug('Converting routes to functions')

const apiDocs = Object.keys(ROUTES)
  .map(namespaceName => prepareNamespace(ROUTES[namespaceName], namespaceName))
  .join('\n\n\n')

function prepareNamespace (namespace, namespaceName) {
  return [toSectionComment(namespaceName)]
    .concat(
      Object.keys(namespace).map(apiName => prepareApi(namespace[apiName], apiName, namespaceName))
    ).join('\n\n\n')
}

function prepareApi (api, apiName, namespaceName) {
  return toApiComment(namespaceName, apiName, api)
}

function toSectionComment (namespaceName) {
  return `
/**,
 * ${upperFirst(namespaceName)}
 * @namespace ${upperFirst(namespaceName)}
 */`
}

function toApiComment (namespaceName, apiName, api) {
  if (!api.method) {
    throw new Error(
      `No HTTP method specified for ${namespaceName}.${apiName} in routes.json`
    )
  }

  const method = api['method'].toUpperCase()
  const url = api['url']
  const paramsObj = api['params']
  const params = Object.keys(paramsObj)
    .sort(sortByRequired.bind(null, paramsObj))

  const commentLines = [
    '/**',
    ` * @api {${method}} ${url} ${apiName}`,
    ` * @apiName ${apiName}`,
    ` * @apiDescription ${api['description']}`,
    ` * @apiGroup ${upperFirst(namespaceName)}`,
    ' *'
  ].concat(
    params.map(toApiParamComment.bind(null, paramsObj))
  )

  const paramsString = params.join(', ')

  return commentLines.concat([
    ' * @apiExample {js} async/await',
    ` * const result = await github.${namespaceName}.${apiName}({${paramsString}})`,
    ' * @apiExample {js} Promise',
    ` * github.${namespaceName}.${apiName}({${paramsString}}).then(result => {})`,
    ' * @apiExample {js} Callback',
    ` * github.${namespaceName}.${apiName}({${paramsString}}, (error, result) => {})`
  ]).join('\n') + '\n */'
}

function toApiParamComment (paramsObj, param) {
  const paramInfo = paramsObj[param]

  const paramRequired = paramInfo['required']
  const paramType = paramInfo['type'].toLowerCase()
  const paramDescription = paramInfo['description'] || ''
  const paramDefaultVal = paramInfo['default']

  let paramLabel = param

  // add default value if there is one
  if (typeof paramDefaultVal !== 'undefined') {
    paramLabel += `=${paramDefaultVal}`
  }

  // show param as either required or optional
  if (!paramRequired) {
    paramLabel = `[${paramLabel}]`
  }

  let allowedValues = ''
  if (paramInfo['enum']) {
    allowedValues = `=${paramInfo['enum'].join(',')}`
  }

  return ` * @apiParam {${paramType}${allowedValues}} ${paramLabel}  ${paramDescription}`
}

function sortByRequired (api, paramA, paramB) {
  const paramInfoA = api[paramA]
  const paramInfoB = api[paramB]

  const aIsRequired = paramInfoA['required']
  const bIsRequired = paramInfoB['required']

  if (aIsRequired && !bIsRequired) return -1
  if (!aIsRequired && bIsRequired) return 1
  return 0
}

writeFileSync(
  pathJoin(__dirname, '..', 'doc', 'apidoc.js'),
  apiDocs.trim() + '\n'
)
