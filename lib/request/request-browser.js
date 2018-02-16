'use strict'

module.exports = httpRequestBrowser

/* global fetch */
const debug = require('debug')('octokit:rest')
const defaults = require('lodash/defaults')
const pick = require('lodash/pick')

function httpRequestBrowser (requestOptions) {
  debug('REQUEST:', requestOptions)

  // calculate content length unless body is a stream, in which case the
  // content length is already set per option
  if (requestOptions.body) {
    defaults(requestOptions.headers, {
      'content-type': 'application/json; charset=utf-8'
    })
  }

  // https://fetch.spec.whatwg.org/#methods
  requestOptions.method = requestOptions.method.toUpperCase()

  // GitHub expects "content-length: 0" header for PUT/PATCH requests without body
  // fetch does not allow to set `content-length` header, but we can set body to an empty string
  if (['PATCH', 'PUT'].indexOf(requestOptions.method) >= 0 && !requestOptions.body) {
    requestOptions.body = ''
  }

  if (typeof requestOptions.body === 'object' && /application\/json/.test(requestOptions.headers['content-type'])) {
    requestOptions.body = JSON.stringify(requestOptions.body)
  }

  let headers = {}
  return fetch(requestOptions.url, pick(requestOptions, 'method', 'body', 'headers', 'timeout'))

  .then(response => {
    const contentType = response.headers.get('content-type')

    for (const keyAndValue of response.headers.entries()) {
      headers[keyAndValue[0]] = keyAndValue[1]
    }

    if (response.status === 204) {
      return
    }

    if (response.status >= 400) {
      return response.text()

      .then(message => {
        throw new Error(message)
      })
    }

    if (/application\/json/.test(contentType)) {
      return response.json()
    }

    if (!contentType || /^text\//.test(contentType)) {
      return response.text()
    }

    return response.blob()
  })

  .then(data => {
    return {
      data,
      meta: headers
    }
  })
}
