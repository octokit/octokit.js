module.exports = getRoutes

const ROUTES = require('@octokit/routes')
const camelCase = require('lodash.camelcase')

/**
 * We use @octokit/routes directly to
 *
 * 1. Generate the routes.json file
 * 2. Generate the API docs
 *
 * Here is what the script does
 * 1. Ignore entreprise cloud methods as these exist in a plugin:
 *    https://github.com/octokit/plugin-enterprise-cloud.js
 * 2. Ignore all legacy endpoints
 * 3. Normalize idName
 *
 */
function getRoutes () {
  Object.keys(ROUTES).forEach(scope => {
    const endpoints = ROUTES[scope]
    const count = endpoints.length

    // remove legacy & enterprise-cloud endpoints
    endpoints.slice(0).reverse().forEach((endpoint, i) => {
      if (/-legacy$/.test(endpoint.idName)) {
        endpoints.splice(count - i - 1, 1)
        return
      }

      if (endpoint.githubCloudOnly) {
        endpoints.splice(count - i - 1, 1)
      }
    })

    // normalize idName
    endpoints.forEach(normalize)
  })

  return ROUTES
}

function normalize (endpoint) {
  endpoint.idName = camelCase(endpoint.idName)
}
