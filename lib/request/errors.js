'use strict'

const STATUS_CODES = {
  304: 'Not Modified', // See PR #673 (https://github.com/octokit/rest.js/pull/673)
  400: 'Bad Request',
  404: 'Not Found',
  500: 'Internal Server Error',
  504: 'Gateway Timeout'
}

module.exports.HttpError = class extends Error {
  constructor (message, code, headers) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = STATUS_CODES[code] ? STATUS_CODES[code].replace(/\s/g, '') : 'HttpError'
    this.code = code
    this.status = STATUS_CODES[code]
    this.headers = headers
  }

  toString () {
    return this.message
  }

  toJSON () {
    return {
      code: this.code,
      status: this.status,
      message: this.message
    }
  }
}

Object.keys(STATUS_CODES).forEach(status => {
  const className = STATUS_CODES[status].replace(/\s/g, '')
  module.exports[className] = class extends module.exports.HttpError {
    constructor (message) {
      super(message, parseInt(status, 10))
      this.name = className
    }
  }
})
