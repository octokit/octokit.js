module.exports = apiMethod

const debug = require('debug')('octokit:rest')

const getRequestOptions = require('./get-request-options')
const parseMethodOptions = require('./parse-method-options')
const errors = require('./utils/errors')
const httpRequest = require('./utils/request')

/**
 * This method is called for all client APIs that send a request.
 * It parses the passed options before sending the request and normalizes
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

  const requestOptions = getRequestOptions(state, options, JSON.parse(JSON.stringify(definition)))
  debug('REQUEST:', requestOptions)

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
