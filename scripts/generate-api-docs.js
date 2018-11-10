#!/usr/bin/env node

const { writeFileSync } = require('fs')
const { join: pathJoin } = require('path')

const _ = require('lodash')
const debug = require('debug')('octokit:rest')

const ROUTES = require('@octokit/routes')

debug('Converting routes to functions')

const apiDocs = Object.keys(ROUTES)
  .filter(namespaceName => namespaceName !== 'scim')
  .map(namespaceName => prepareNamespace(namespaceName))
  .join('\n\n\n')

function normalize (methodName) {
  return _.camelCase(methodName.replace(/^edit/, 'update'))
}

function prepareNamespace (namespaceName) {
  return [toSectionComment(namespaceName)]
    .concat(
      ROUTES[namespaceName]
        .filter(endpoint => !/legacy$/.test(endpoint.idName))
        .map(endpoint => toApiComment(namespaceName, normalize(endpoint.idName), endpoint))
    ).join('\n\n\n')
}

function toSectionComment (namespaceName) {
  return `
/**,
 * ${_.upperFirst(namespaceName)}
 * @namespace ${_.upperFirst(namespaceName)}
 */`
}

function toApiComment (namespaceName, apiName, endpoint) {
  if (!endpoint.method) {
    throw new Error(
      `No HTTP method specified for ${namespaceName}.${apiName} in @octokit/routes`
    )
  }

  const method = endpoint.method.toUpperCase()
  const params = endpoint.params

  const descriptionWithLinkToV3Docs = [
    endpoint.description,
    `<a href="${endpoint.documentationUrl}">REST API doc</a>`
  ].filter(Boolean).join(' ')

  const commentLines = [
    '/**',
    ` * @api {${method}} ${endpoint.path} ${apiName}`,
    ` * @apiName ${apiName}`,
    ` * @apiDescription ${descriptionWithLinkToV3Docs}`,
    ` * @apiGroup ${_.upperFirst(namespaceName)}`,
    ' *'
  ].concat(
    params.map(toApiParamComment)
  )

  const paramsString = params.map(param => param.name).join(', ')

  return commentLines.concat([
    ' * @apiExample {js} async/await',
    ` * const result = await octokit.${namespaceName}.${apiName}({${paramsString}})`,
    ' * @apiExample {js} Promise',
    ` * octokit.${namespaceName}.${apiName}({${paramsString}}).then(result => {})`
  ]).join('\n') + '\n */'
}

function toApiParamComment (paramInfo) {
  const paramRequired = paramInfo['required']
  const paramDescription = paramInfo['description'] || ''
  const paramDefaultVal = paramInfo['default']
  const paramType = paramInfo['type']
    .toLowerCase()
    // https://github.com/octokit/rest.js/issues/721
    .replace('string | object', 'object')

  let paramLabel = paramInfo.name

  // add default value if there is one
  if (typeof paramDefaultVal !== 'undefined') {
    paramLabel += `="${String(paramDefaultVal).replace(/[<>]/g, '')}"`
  }

  // show param as either required or optional
  if (!paramRequired) {
    paramLabel = `[${paramLabel}]`
  }

  let allowedValues = ''
  if (paramInfo['enum']) {
    allowedValues = `=${paramInfo['enum'].join(',')}`
  }

  return ` * @apiParam {${paramType}${allowedValues}} ${paramLabel.replace(/\./g, ':').replace(/\[\]/g, '')}  ${paramDescription}`
}

// function sortByRequired (api, paramA, paramB) {
//   const paramInfoA = api[paramA]
//   const paramInfoB = api[paramB]
//
//   const aIsRequired = paramInfoA['required']
//   const bIsRequired = paramInfoB['required']
//
//   if (aIsRequired && !bIsRequired) return -1
//   if (!aIsRequired && bIsRequired) return 1
//   return 0
// }

writeFileSync(
  pathJoin(__dirname, '..', 'doc', 'apidoc.js'),
  apiDocs.trim() + '\n'
)
