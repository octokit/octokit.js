'use strict'

module.exports = httpRequest

const url = require('url')
const http = require('http')
const https = require('https')

const debug = require('debug')('octokit:rest')
const defaults = require('lodash/defaults')
const isArrayBuffer = require('is-array-buffer')
const isStream = require('is-stream')
const pick = require('lodash/pick')

const HttpError = require('./http-error')

function httpRequest (origRequestOptions) {
  const requestOptions = Object.assign(
    url.parse(origRequestOptions.url),
    pick(origRequestOptions, 'method', 'body', 'headers', 'ca', 'family', 'proxy', 'rejectUnauthorized', 'timeout')
  )
  debug('REQUEST:', requestOptions)

  // calculate content length unless body is a stream, in which case the
  // content length is already set per option
  if (requestOptions.body && !isStream(requestOptions.body)) {
    // stringify body unless it’s an ArrayBuffer
    if (!isArrayBuffer(requestOptions.body) && !Buffer.isBuffer(requestOptions.body) && typeof requestOptions.body !== 'string') {
      requestOptions.body = JSON.stringify(requestOptions.body)
    }

    defaults(requestOptions.headers, {
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

      const data = []
      response.on('data', (chunk) => {
        data.push(chunk)
      })

      /* istanbul ignore next */
      response.on('error', (error) => {
        reject(new HttpError(error.message, 500))
      })
      response.on('end', () => {
        if (response.statusCode !== 304 && response.statusCode >= 301 && response.statusCode <= 307) {
          origRequestOptions.url = response.headers.location

          httpRequest(origRequestOptions).then(resolve, reject)
          return
        }

        if (response.statusCode === 304 || response.statusCode >= 400 || response.statusCode < 10) {
          reject(new HttpError(data, response.statusCode, response.headers))
          return
        }

        const contentType = response.headers['content-type']

        if (data.length === 0) {
          return resolve({
            meta: response.headers
          })
        }

        if (contentType && contentType.indexOf('application/json') !== -1) {
          return resolve({
            meta: response.headers,
            data: JSON.parse(Buffer.concat(data).toString())
          })
        }

        if (contentType && /^text\//i.test(contentType)) {
          return resolve({
            meta: response.headers,
            data: Buffer.concat(data).toString()
          })
        }

        resolve({
          meta: response.headers,
          data: Buffer.concat(data)
        })
      })
    })

    let aborted
    request.on('error', (error) => {
      if (aborted) return
      debug('REQUEST ERROR: ' + error.message)
      reject(new HttpError(error.message, 500))
    })

    if (requestOptions.timeout) {
      request.setTimeout(requestOptions.timeout)
    }
    request.on('timeout', () => {
      debug('REQUEST ERROR: timed out')
      request.abort()
      aborted = true
      reject(new HttpError('Request timeout', 504))
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
