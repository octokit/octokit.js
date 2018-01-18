const inherits = require('util').inherits

const STATUS_CODES = {
  304: 'Not Modified', // See PR #673 (https://github.com/octokit/rest.js/pull/673)
  400: 'Bad Request',
  404: 'Not Found',
  500: 'Internal Server Error',
  504: 'Gateway Timeout'
}

exports.HttpError = function (message, code, headers) {
  Error.call(this, message)
  this.message = message
  this.code = code
  this.status = STATUS_CODES[code]
  this.headers = headers
}
inherits(exports.HttpError, Error)

exports.HttpError.prototype.toString = function () {
  return this.message
}
exports.HttpError.prototype.toJSON = function () {
  return {
    code: this.code,
    status: this.status,
    message: this.message
  }
}

Object.keys(STATUS_CODES).forEach(status => {
  const className = STATUS_CODES[status].replace(/\s/g, '')
  exports[className] = function (msg) {
    exports.HttpError.call(this, msg, status)
    if (status >= 500) { Error.captureStackTrace(this, arguments.callee) } // eslint-disable-line
  }

  inherits(exports[className], exports.HttpError)
})
