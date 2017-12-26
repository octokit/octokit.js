#!/usr/bin/env node

const writeFileSync = require('fs').writeFileSync
const pathJoin = require('path').join

const debug = require('debug')('octokit:rest')
const upperFirst = require('lodash/upperFirst')

const ROUTES = require('../lib/routes.json')
const DEFINITIONS = require('../lib/definitions.json')

debug('Converting routes to functions')
const apiDocs = Object.keys(ROUTES)
  .map(sectionName => prepareScope(ROUTES[sectionName], sectionName))
  .join('\n\n\n')

function prepareScope (scope, sectionName) {
  return [createSectionComment(sectionName)]
    .concat(
      Object.keys(scope).map(apiName => prepareApi(scope[apiName], apiName, sectionName))
    ).join('\n\n\n')
}

function prepareApi (api, apiName, sectionName) {
  return createComment(sectionName, apiName, api)
}

function createSectionComment (sectionName) {
  return `
/**,
 * ${upperFirst(sectionName)}
 * @namespace ${upperFirst(sectionName)}
 */`
}

function createComment (sectionName, apiName, api) {
  if (!api.method) {
    throw new Error(
      `No HTTP method specified for ${sectionName}.${apiName} in routes.json`
    )
  }

  const method = api['method'].toUpperCase()
  const url = api['url']

  const commentLines = [
    '/**',
    ` * @api {${method}} ${url} ${apiName}`,
    ` * @apiName ${apiName}`,
    ` * @apiDescription ${api['description']}`,
    ` * @apiGroup ${upperFirst(sectionName)}`,
    ' *'
  ]

  const paramsObj = api['params']
  const params = []

  Object.keys(paramsObj)
    .sort(sortByRequired.bind(null, paramsObj))
    .forEach((param) => {
      const cleanParam = param.replace(/^\$/, '')
      params.push(cleanParam)
      const paramInfo = paramsObj[param] || DEFINITIONS['params'][cleanParam]

      const paramRequired = paramInfo['required']
      const paramType = paramInfo['type'].toLowerCase()
      const paramDescription = paramInfo['description']
      const paramDefaultVal = paramInfo['default']

      let paramLabel = cleanParam

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

      commentLines.push(` * @apiParam {${paramType}${allowedValues}} ${paramLabel}  ${paramDescription}`)
    })

  commentLines.push(` * @apiExample {js} example\n * const result = await github.${sectionName}.${apiName}({${params.join(', ')}})`)

  return commentLines.join('\n') + '\n */'
}

function sortByRequired (api, paramA, paramB) {
  const cleanParamA = paramA.replace(/^\$/, '')
  const cleanParamB = paramB.replace(/^\$/, '')

  const paramInfoA = api[paramA] || DEFINITIONS['params'][cleanParamA]
  const paramInfoB = api[paramB] || DEFINITIONS['params'][cleanParamB]

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
