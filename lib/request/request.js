'use strict'

module.exports = httpRequest

const url = require('url')
const http = require('http')
const https = require('https')

const _ = require('lodash')
const debug = require('debug')('octokit:rest')
const isStream = require('is-stream')

const errors = require('./errors')

function httpRequest (requestOptions) {
  requestOptions = Object.assign(
    url.parse(requestOptions.url),
    _.pick(requestOptions, 'method', 'body', 'headers', 'ca', 'family', 'proxy', 'rejectUnauthorized', 'timeout')
  )
  debug('REQUEST:', requestOptions)

  // calculate content length unless body is a stream, in which case the
  // content length is already set per option
  if (requestOptions.body && !isStream(requestOptions.body)) {
    if (typeof requestOptions.body !== 'string') {
      requestOptions.body = JSON.stringify(requestOptions.body)
    }

    _.defaults(requestOptions.headers, {
      'content-type': 'application/json; charset=utf-8',
      'content-length': Buffer.byteLength(requestOptions.body, 'utf8')
    })
  }

  // GitHub expects "content-length: 0" header for PUT/PATCH requests without body
  if (['patch', 'put'].indexOf(requestOptions.method) >= 0 &&
      !requestOptions.headers['content-length']) {
    requestOptions.headers['content-length'] = 0
  }

  if ('content-length' in requestOptions.headers) {
    requestOptions.headers['content-length'] = parseInt(requestOptions.headers['content-length'], 10)
  }

  const reqModule = requestOptions.protocol === 'http:' ? http : https
  delete requestOptions.protocol

  return new Promise((resolve, reject) => {
    const request = reqModule.request(requestOptions, (response) => {
      debug('STATUS: ' + response.statusCode)
      debug('HEADERS: ' + JSON.stringify(response.headers))

      response.setEncoding('utf8')
      let data = ''
      response.on('data', (chunk) => {
        data += chunk
      })

      /* istanbul ignore next */
      response.on('error', (error) => {
        reject(new errors.InternalServerError(error.message))
      })
      response.on('end', () => {
        if (response.statusCode !== 304 && response.statusCode >= 301 && response.statusCode <= 307) {
          requestOptions.url = response.headers.location
          httpRequest(requestOptions).then(resolve, reject)
          return
        }

        if (response.statusCode === 304 || response.statusCode >= 400 || response.statusCode < 10) {
          reject(new errors.HttpError(data, response.statusCode, response.headers))
          return
        }

        const contentType = response.headers['content-type']
        if (contentType && contentType.indexOf('application/json') !== -1) {
          data = data && JSON.parse(data)
        }

        resolve({
          headers: response.headers,
          data
        })
      })
    })

    let aborted
    request.on('error', (error) => {
      if (aborted) return
      debug('REQUEST ERROR: ' + error.message)
      reject(new errors.InternalServerError(error.message))
    })

    if (requestOptions.timeout) {
      request.setTimeout(requestOptions.timeout)
    }
    request.on('timeout', () => {
      debug('REQUEST ERROR: timed out')
      request.abort()
      aborted = true
      reject(new errors.GatewayTimeout('Request timeout'))
    })

    if (requestOptions.body) {
      if (isStream(requestOptions.body)) {
        return requestOptions.body.pipe(request)
      }

      request.write(Buffer.from(requestOptions.body))
    }

    request.end()
  })
}
