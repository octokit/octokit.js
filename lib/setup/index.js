module.exports = setup

const apiMethod = require('../api-method')
const deprecate = require('../utils/deprecate')

const ROUTES = require('../definitions/routes.json')

function setup (state) {
  const api = {}
  Object.keys(ROUTES).forEach(namespaceName => {
    api[namespaceName] = {}

    Object.keys(ROUTES[namespaceName]).forEach(apiName => {
      let apiOptions = ROUTES[namespaceName][apiName]

      if (state.pathPrefix) {
        apiOptions = Object.assign(
          {},
          apiOptions,
          { path: state.pathPrefix + apiOptions.path }
        )
      }

      api[namespaceName][apiName] = apiMethod.bind(null, state, apiOptions)

      // log deprecation warning for APIs flagged as deprecated
      if (apiOptions.deprecated) {
        api[namespaceName][apiName] = deprecate(
          api[namespaceName][apiName],
          apiOptions.deprecated
        )
      }
    })
  })
  return api
}
