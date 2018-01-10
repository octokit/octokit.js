module.exports = apiMethod

const defaultsDeep = require('lodash/defaultsDeep')

function apiMethod (github, endpointDefaults, options, callback) {
  const endpointOptions = defaultsDeep(options, endpointDefaults)
  const promise = github.request(endpointOptions)

  if (callback) {
    promise.then(callback.bind(null, null)).catch(callback)
    return
  }

  return promise
}
