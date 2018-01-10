module.exports = apiPlugin

const method = require('./method')
const deprecate = require('./deprecate')

const ROUTES = require('../../lib/routes.json')

function apiPlugin (github) {
  Object.keys(ROUTES).forEach(namespaceName => {
    github[namespaceName] = {}

    Object.keys(ROUTES[namespaceName]).forEach(apiName => {
      const apiOptions = ROUTES[namespaceName][apiName]
      const endpointDefaults = {
        method: apiOptions.method,
        url: apiOptions.url,
        headers: apiOptions.headers
      }

      github[namespaceName][apiName] = method.bind(null, github, endpointDefaults)

      // log deprecation warning for APIs flagged as deprecated
      if (apiOptions.deprecated) {
        github[namespaceName][apiName] = deprecate(
          github[namespaceName][apiName],
          apiOptions.deprecated
        )
      }
    })
  })
}
