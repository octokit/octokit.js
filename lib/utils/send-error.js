module.exports = sendError

const debug = require('debug')('octokit:rest')

const errors = require('./errors')

function sendError (error, methodDefinitions, options, callback) {
  debug('error:', error, methodDefinitions, options)

  if (typeof error === 'string') {
    error = new errors.InternalServerError(error)
  }

  callback(error)
}
