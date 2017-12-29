module.exports = apiMethod

const addAuthentication = require('./request/add-authentication')
const addProxy = require('./request/add-proxy')
const getRequestOptions = require('./request/get-request-options')
const parseMethodOptions = require('./parse-api-method-options')
const errors = require('./errors')
const httpRequest = require('./request/request')

function apiMethod (state, definition, options, callback) {
  // 1. parse api options
  try {
    options = parseMethodOptions(options, definition.params)
  } catch (exception) {
    const error = new errors.BadRequest(exception.message)

    if (typeof callback === 'function') {
      return callback(error)
    }

    return Promise.reject(error)
  }

  // 2. get request options
  const requestOptions = getRequestOptions(state, options, definition)
  addAuthentication(state, requestOptions)
  addProxy(state, requestOptions)
  if (state.pathPrefix) {
    requestOptions.path = state.pathPrefix + requestOptions.path
  }
  requestOptions.ca = state.ca

  // 3. send request
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
