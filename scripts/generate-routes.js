const _ = require('lodash')
const sortKeys = require('sort-keys')
const routes = require('@octokit/routes')
const origRoutes = require('../lib/routes')

const mapScopes = {
  git: 'gitdata',
  integrations: 'apps',
  oauthAuthorizations: 'authorization',
  pulls: 'pullRequests'
}
const newRoutes = {}

function normalize (methodName) {
  return _.camelCase(methodName.replace(/^edit/, 'update'))
}

const endpoints = Object.keys(routes).reduce((result, scope) => {
  const scopeEndpoints = routes[scope]
  scopeEndpoints.forEach(endpoint => {
    endpoint.scope = scope
  })
  return result.concat(scopeEndpoints)
}, [])

endpoints.forEach(endpoint => {
  const scope = mapScopes[endpoint.scope] || endpoint.scope

  // ignore legacy endpoints such as https://developer.github.com/v3/activity/watching/#check-if-you-are-watching-a-repository-legacy
  if (/legacy$/.test(endpoint.idName)) {
    return
  }

  if (!newRoutes[scope]) {
    newRoutes[scope] = {}
  }

  const idName = normalize(endpoint.idName)

  // new route
  newRoutes[scope][idName] = {
    method: endpoint.method,
    params: endpoint.params.reduce((result, param) => {
      result[param.name] = {
        type: param.type
      }
      if (param.allowNull) {
        result[param.name].allowNull = true
      }
      if (param.required) {
        result[param.name].required = true
      }
      if (param.mapTo) {
        result[param.name].mapTo = param.mapTo
      }
      if (param.enum) {
        result[param.name].enum = param.enum
      }
      if (param.regex) {
        result[param.name].validation = param.regex
      }
      if (param.alias) {
        result[param.name].alias = param.alias
      }
      if (param.deprecated) {
        result[param.name].deprecated = param.deprecated
      }
      return result
    }, {}),
    url: endpoint.path
  }

  const previewHeaders = endpoint.previews
    .filter(preview => preview.required)
    .map(preview => `application/vnd.github.${preview.name}-preview+json`)
    .join(',')

  if (previewHeaders) {
    newRoutes[scope][idName].headers = {
      accept: previewHeaders
    }
  }

  // exception for uploadReleaseAssets which passes parameters as header values
  // see https://github.com/octokit/rest.js/pull/1043
  if (idName === 'uploadReleaseAsset') {
    newRoutes[scope][idName].params['headers.content-length'] = newRoutes[scope][idName].params['Content-Length']
    newRoutes[scope][idName].params['headers.content-type'] = newRoutes[scope][idName].params['Content-Type']
    delete newRoutes[scope][idName].params['Content-Length']
    delete newRoutes[scope][idName].params['Content-Type']
  }

  // exception for markdown.renderRaw which requires a content-type header
  // see https://github.com/octokit/rest.js/pull/1043
  if (idName === 'renderRaw') {
    newRoutes[scope][idName].headers = {
      'content-type': 'text/plain; charset=utf-8'
    }
  }
})

require('fs').writeFileSync(require('path').join(__dirname, '..', 'lib', 'routes.json'), JSON.stringify(sortKeys(newRoutes, { deep: true }), null, 2) + '\n')
