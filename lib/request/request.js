module.exports = httpRequest

const http = require('http')
const https = require('https')

const _ = require('lodash')
const debug = require('debug')('octokit:rest')
const isStream = require('is-stream')
const parseUrl = require('url').parse

const errors = require('../errors')

function httpRequest (requestOptions, callback) {
  debug('REQUEST:', requestOptions)

  if (requestOptions.body && !isStream(requestOptions.body)) {
    if (typeof requestOptions.body !== 'string') {
      requestOptions.body = JSON.stringify(requestOptions.body)
    }

    _.defaults(requestOptions.headers, {
      'content-type': 'application/json; charset=utf-8',
      'content-length': Buffer.byteLength(requestOptions.body || '', 'utf8')
    })
  }

  // GitHub expects "content-length: 0" header for PUT/PATCH requests without body
  if (['patch', 'put'].includes(requestOptions.method) &&
      !requestOptions.headers['content-length']) {
    requestOptions.headers['content-length'] = 0
  }

  var reqModule = requestOptions.protocol === 'http' ? http : https
  delete requestOptions.protocol
  var req

  req = reqModule.request(requestOptions, function (response) {
    debug('STATUS: ' + response.statusCode)
    debug('HEADERS: ' + JSON.stringify(response.headers))

    response.setEncoding('utf8')
    var data = ''
    response.on('data', function (chunk) {
      data += chunk
    })

      /* istanbul ignore next */
    response.on('error', (error) => {
      callCallback(new errors.InternalServerError(error.message))
    })
    response.on('end', function () {
      if (response.statusCode >= 301 && response.statusCode <= 307) {
        requestOptions.path = parseUrl(response.headers.location, true).path
        httpRequest(requestOptions, callback)
        return
      }

      if (response.statusCode >= 400 || response.statusCode < 10) {
        callCallback(new errors.HttpError(data, response.statusCode, response.headers))
      } else {
        const contentType = response.headers['content-type']
        if (contentType && contentType.indexOf('application/json') !== -1) {
          data = data && JSON.parse(data)
        }

        callCallback(null, {
          headers: response.headers,
          data
        })
      }
    })
  })

  if (requestOptions.timeout) {
    req.setTimeout(requestOptions.timeout)
  }

  req.on('error', function (error) {
    debug('request error: ' + error.message)
    callCallback(new errors.InternalServerError(error.message))
  })

  req.on('timeout', function () {
    debug('request error: timed out')
    req.abort()
    callCallback(new errors.GatewayTimeout('Request timeout'))
  })

  // write data to request body
  if (requestOptions.body) {
    if (isStream(requestOptions.body)) {
      return requestOptions.body.pipe(req)
    }

    req.write(Buffer.from(requestOptions.body))
  }

  req.end()

  function callCallback (error, result) {
    if (callback) {
      var cb = callback
      callback = undefined

      if (error) {
        debug(`error: ${error.message}`)
      }

      cb(error, result)
    }
  }
}
