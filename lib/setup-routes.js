module.exports = setupRoutes

const apiMethod = require('./api-method')

const ROUTES = require('./definitions/routes.json')

function setupRoutes (state) {
  const api = {}
  Object.keys(ROUTES).forEach(namespaceName => {
    api[namespaceName] = {}

    Object.keys(ROUTES[namespaceName]).forEach(apiName => {
      api[namespaceName][apiName] = apiMethod.bind(null, state, ROUTES[namespaceName][apiName])
    })
  })
  return api
}
