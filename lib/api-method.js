module.exports = apiMethod

const debug = require('debug')('octokit:rest')

const parseMethodOptions = require('./parse-method-options')
const apiRequest = require('./api-request')
const sendError = require('./utils/send-error')

function apiMethod (state, definition, options, callback) {
  if (definition.deprecated) {
    const caller = (new Error()).stack.split('\n')[2]
    console.warn('DEPRECATED: ' + definition.deprecated)
    console.warn(caller)
  }

  try {
    options = parseMethodOptions(state, options, definition.params)
  } catch (exception) {
    // when the message was sent to the client, we can
    // reply with the error directly.
    sendError(exception, definition, options, callback)
    debug('fatal:', exception.message)

    if (typeof callback !== 'function') {
      return Promise.reject(exception)
    }

    // on error, there's no need to continue.
    return
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
