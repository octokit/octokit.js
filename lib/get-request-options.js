module.exports = getRequestOptions

const _ = require('lodash')

const getQueryAndUrl = require('./request/get-query-and-url')

function getRequestOptions (state, options, apiDefinitions, callback) {
  const method = apiDefinitions.method.toLowerCase()

  // TODO: some DELETE methods expect a body, e.g. https://developer.github.com/v3/issues/assignees/#remove-assignees-from-an-issue
  // TODO: some PUT requests don’t expect a body
  const hasBody = ['patch', 'post', 'put'].includes(method)

  var format = hasBody ? apiDefinitions.requestFormat || 'json' : 'query'
  var protocol = state.protocol
  var port = state.port || (protocol === 'https' ? 443 : 80)

  var queryAndUrl = getQueryAndUrl(options, apiDefinitions, format)
  var query = queryAndUrl.query
  var path = queryAndUrl.path
  var hostname = queryAndUrl.host || state.host
  var body

  if (!hasBody && query && query.length) {
    path += '?' + query.join('&')
  }

  var headers = {}

  if ('file' in apiDefinitions.params) {
    headers['content-length'] = options.contentLength
    headers['content-type'] = options.contentType
    delete options.contentLength
    delete options.contentType
    body = options.file
  } else if (hasBody) {
    if (apiDefinitions.requestFormat === 'raw') {
      body = options.data
      headers['content-type'] = 'text/plain; charset=utf-8'
    } else {
      body = JSON.stringify(query)
      headers['content-type'] = 'application/json; charset=utf-8'
    }
    headers['content-length'] = Buffer.byteLength(body || '', 'utf8')
  }

  _.defaults(headers, options.headers, state.headers)

  if (!headers['user-agent']) {
    headers['user-agent'] = 'Octokit.js'
  }

  if (!('accept' in headers)) {
    headers['accept'] = apiDefinitions.preview || state.requestMedia
  }

  headers.host = hostname

  return {
    protocol,
    hostname,
    port,
    method,
    path,
    headers,
    timeout: 'timeout' in apiDefinitions ? apiDefinitions.timeout : state.timeout,
    family: state.family,
    rejectUnauthorized: state.rejectUnauthorized,
    body
  }
}
