module.exports = setupRoutes

const apiMethod = require('./api-method')

function setupRoutes (state) {
  state.requestHeaders = state.definitions['request-headers'].map((header) => header.toLowerCase())

  const api = {}
  Object.keys(state.routes).forEach(namespaceName => {
    api[namespaceName] = {}

    Object.keys(state.routes[namespaceName]).forEach(apiName => {
      api[namespaceName][apiName] = apiMethod.bind(null, state, state.routes[namespaceName][apiName])
    })
  })
  return api
}
