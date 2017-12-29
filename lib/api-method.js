module.exports = apiMethod

const debug = require('debug')('octokit:rest')

const apiRequest = require('./api-request')
const parseMethodOptions = require('./parse-method-options')
const errors = require('./utils/errors')

/**
 * This method is called for all client APIs that send a request.
 * It parses the options before sending the request and normalizes
 * the optional callback argument.
 */
function apiMethod (state, definition, options, callback) {
  try {
    options = parseMethodOptions(options, definition.params)
  } catch (exception) {
    debug(`fatal: ${exception.message}`)
    const error = new errors.BadRequest(exception.message)

    if (typeof callback === 'function') {
      return callback(error)
    }

    return Promise.reject(error)
  }

  if (callback) {
    return apiRequest(state, options, JSON.parse(JSON.stringify(definition)), callback)
  }

  return new Promise(function (resolve, reject) {
    apiRequest(state, options, JSON.parse(JSON.stringify(definition)), (error, result) => {
      if (error) {
        return reject(error)
      }

      resolve(result)
    })
  })
}
