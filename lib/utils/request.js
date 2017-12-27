module.exports = httpRequest

const http = require('http')
const https = require('https')

const debug = require('debug')('octokit:rest')
const isStream = require('is-stream')
const parseUrl = require('url').parse

const errors = require('./errors')

function httpRequest (requestOptions, callback) {
  var reqModule = requestOptions.protocol === 'http' ? http : https

  var req = reqModule.request(requestOptions, function (res) {
    debug('STATUS: ' + res.statusCode)
    debug('HEADERS: ' + JSON.stringify(res.headers))

    res.setEncoding('utf8')
    var data = ''
    res.on('data', function (chunk) {
      data += chunk
    })

      /* istanbul ignore next */
    res.on('error', function (err) {
      callCallback(err)
    })
    res.on('end', function () {
      if (res.statusCode >= 301 && res.statusCode <= 307) {
        requestOptions.path = parseUrl(res.headers.location, true).path
        httpRequest(requestOptions, callback)
        return
      }

      if (res.statusCode >= 400 || res.statusCode < 10) {
        callCallback(new errors.HttpError(data, res.statusCode, res.headers))
      } else {
        res.data = data
        callCallback(null, res)
      }
    })
  })

  if (requestOptions.timeout) {
    req.setTimeout(requestOptions.timeout)
  }

  req.on('error', function (error) {
    debug('problem with request: ' + error.message)
    callCallback(error.message)
  })

  req.on('timeout', function () {
    debug('problem with request: timed out')
    req.abort()
    callCallback(new errors.GatewayTimeout('Request timeout'))
  })

  // write data to request body
  if (requestOptions.hasBody && requestOptions.query && requestOptions.query.length) {
    debug('REQUEST BODY: ' + requestOptions.query + '\n')
    req.write(requestOptions.query + '\n')
  }

  if (requestOptions.hasFileBody) {
    if (isStream(requestOptions.file)) {
      return requestOptions.file.pipe(req)
    }

    req.write(Buffer.from(requestOptions.file))
  }

  req.end()

  function callCallback (err, result) {
    if (callback) {
      var cb = callback
      callback = undefined
      cb(err, result)
    }
  }
}
