module.exports = getRoutes

const ROUTES = require('@octokit/routes')
const camelCase = require('lodash.camelcase')

/**
 * We use @octokit/routes directly to
 *
 * 1. Generate the routes.json file
 * 2. Generate the API docs
 * 3. Generate the routes.json file
 *
 * Here is what the script does
 * 1. Ignore the "scim" methods as they exist in a plugin:
 *    https://github.com/octokit/plugin-scim.js
 * 2. Ignore all legacy endpoints
 * 3. Normalize idName
 *
 */
function getRoutes () {
  // ignore SCIM endpoints
  delete ROUTES.scim

  Object.keys(ROUTES).forEach(scope => {
    const endpoints = ROUTES[scope]

    // remove legacy endpoints
    const indexes = ROUTES[scope].reduce((result, endpoint, i) => {
      if (/-legacy$/.test(endpoint.idName)) {
        result.unshift(i)
      }

      return result
    }, [])
    indexes.forEach(i => endpoints.splice(i, 1))

    // normalize idName
    endpoints.forEach(normalize)

    // handle some exceptions. TODO: move this into @octokit/routes
    endpoints.forEach(endpoint => {

      const headerParams = endpoint.params.filter(param => param.location === 'headers')
      if (headerParams.length) {
        headerParams.forEach(param => Object.assign(param, { name: `headers.${param.name.toLowerCase()}` }))

        endpoint.params.unshift({
          name: 'headers',
          location: 'headers',
          required: true,
          type: 'object',
          description: ''
        })
      }

      // exception for markdown.renderRaw which requires a content-type header
      // see https://github.com/octokit/rest.js/pull/1043
      if (endpoint.idName === 'renderRaw') {
        endpoint.headers = {
          'content-type': 'text/plain; charset=utf-8'
        }
      }
    })
  })

  return ROUTES
}

function normalize (endpoint) {
  endpoint.idName = camelCase(endpoint.idName.replace(/^edit/, 'update'))
}
