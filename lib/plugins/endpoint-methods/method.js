module.exports = apiMethod

const defaultsDeep = require('lodash/defaultsDeep')

const validate = require('./validate')

function apiMethod (github, endpointDefaults, endpointParams, options, callback) {
  const endpointOptions = defaultsDeep(options, endpointDefaults)

  const promise = Promise.resolve(endpointOptions)
    .then(validate.bind(null, endpointParams))
    .then(github.request)

  if (callback) {
    promise.then(callback.bind(null, null), callback)
    return
  }

  return promise
}
