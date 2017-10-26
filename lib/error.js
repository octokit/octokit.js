/** section: github
 * class HttpError
 *
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <mike@c9.io>
 **/

var Util = require('util')

exports.HttpError = function (message, code, headers) {
  Error.call(this, message)
    // Error.captureStackTrace(this, arguments.callee);
  this.message = message
  this.code = code
  this.status = statusCodes[code]
  this.headers = headers
}
Util.inherits(exports.HttpError, Error);

(function () {
    /**
     *  HttpError#toString() -> String
     *
     *  Returns the stringified version of the error (i.e. the message).
     **/
  this.toString = function () {
    return this.message
  }

    /**
     *  HttpError#toJSON() -> Object
     *
     *  Returns a JSON object representation of the error.
     **/
  this.toJSON = function () {
    return {
      code: this.code,
      status: this.status,
      message: this.message
    }
  }
}).call(exports.HttpError.prototype)

var statusCodes = {
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Request Entity Too Large',
  414: 'Request-URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Requested Range Not Satisfiable',
  417: 'Expectation Failed',
  420: 'Enhance Your Calm',
  422: 'Unprocessable Entity',
  423: 'Locked',
  424: 'Failed Dependency',
  425: 'Unordered Collection',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  444: 'No Response',
  449: 'Retry With',
  499: 'Client Closed Request',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  507: 'Insufficient Storage',
  508: 'Loop Detected',
  509: 'Bandwidth Limit Exceeded',
  510: 'Not Extended',
  511: 'Network Authentication Required'
}

// XXX: Remove?
for (var status in statusCodes) {
  var defaultMsg = statusCodes[status]

  var error = (function (defaultMsg, status) {
    return function (msg) {
      this.defaultMessage = defaultMsg
      exports.HttpError.call(this, msg || status + ': ' + defaultMsg, status)

      if (status >= 500) { Error.captureStackTrace(this, arguments.callee) } // eslint-disable-line
    }
  })(defaultMsg, status)

  Util.inherits(error, exports.HttpError)

  var className = defaultMsg.replace(/\s/g, '')
  exports[className] = error
  exports[status] = error
}
