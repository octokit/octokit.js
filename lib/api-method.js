module.exports = apiMethod

const addAuthentication = require('./request/add-authentication')
const addProxy = require('./request/add-proxy')
const parseMethodOptions = require('./parse-api-method-options')
const parseRequestOptions = require('./parse-request-options')
const errors = require('./utils/errors')
const httpRequest = require('./request/request')

/**
 * This method is called for all client APIs that send a request.
 * It parses the passed options before sending the request and normalizes
 * the optional callback argument.
 */
function apiMethod (state, definition, options, callback) {
  // parse method options
  try {
    options = parseMethodOptions(options, definition.params)
  } catch (exception) {
    const error = new errors.BadRequest(exception.message)

    if (typeof callback === 'function') {
      return callback(error)
    }

    return Promise.reject(error)
  }

  // parse request options
  const requestOptions = parseRequestOptions(state, options, definition)
  addAuthentication(state, requestOptions)
  addProxy(state, requestOptions)
  if (state.pathPrefix) {
    requestOptions.path = state.pathPrefix + requestOptions.path
  }
  requestOptions.ca = state.ca

  // send request
  if (callback) {
    return httpRequest(requestOptions, callback)
  }

  return new Promise(function (resolve, reject) {
    httpRequest(requestOptions, (error, result) => {
      if (error) {
        return reject(error)
      }

      resolve(result)
    })
  })
}
