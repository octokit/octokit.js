const { writeFileSync } = require('fs')
const { join } = require('path')

const sortKeys = require('sort-keys')

const ROUTES = require('./lib/get-routes')()
const ROUTES_PATH = join(__dirname, '..', 'plugins', 'rest-api-endpoints', 'routes.json')

const mapScopes = {
  git: 'gitdata',
  oauthAuthorizations: 'authorization',
  pulls: 'pullRequests'
}
const newRoutes = {}

const endpoints = Object.keys(ROUTES).reduce((result, scope) => {
  const scopeEndpoints = ROUTES[scope]
  scopeEndpoints.forEach(endpoint => {
    endpoint.scope = scope
  })
  return result.concat(scopeEndpoints)
}, [])

endpoints.forEach(endpoint => {
  const scope = mapScopes[endpoint.scope] || endpoint.scope

  if (!newRoutes[scope]) {
    newRoutes[scope] = {}
  }

  const idName = endpoint.idName

  // new route
  newRoutes[scope][idName] = {
    method: endpoint.method,
    headers: endpoint.headers,
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
        result[param.name].mapTo = param.mapTo === 'input' ? 'data' : param.mapTo

        if (result[param.name].mapTo === 'data' === param.name) {
          delete result[param.name].mapTo
        }
      }
      if (param.enum) {
        result[param.name].enum = param.enum
      }
      if (param.regex) {
        result[param.name].validation = param.regex
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
})

writeFileSync(ROUTES_PATH, JSON.stringify(sortKeys(newRoutes, { deep: true }), null, 2) + '\n')
console.log(`${ROUTES_PATH} written.`)
