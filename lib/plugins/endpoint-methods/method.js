module.exports = apiMethod

const defaultsDeep = require('lodash/defaultsDeep')
const mapKeys = require('lodash/mapKeys')

const validate = require('./validate')

function apiMethod (octokit, endpointDefaults, endpointParams, options, callback) {
  // lowercase header names (#760)
  options.headers = mapKeys(options.headers, (value, key) => key.toLowerCase())

  const endpointOptions = defaultsDeep(options, endpointDefaults)

  const promise = Promise.resolve(endpointOptions)
    .then(validate.bind(null, endpointParams))
    .then(octokit.request)

  if (callback) {
    promise.then(callback.bind(null, null), callback)
    return
  }

  return promise
}
