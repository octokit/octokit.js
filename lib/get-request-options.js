module.exports = getRequestOptions

const _ = require('lodash')
const getProxyForUrl = require('proxy-from-env').getProxyForUrl
const HttpsProxyAgent = require('https-proxy-agent')

const getQueryAndUrl = require('./get-query-and-url')
const getRequestFormat = require('./get-request-format')

const PREVIEW_HEADER_BY_PATH = require('./definitions/preview-header-by-path.json')

function getRequestOptions (state, options, apiDefinitions, callback) {
  var method = apiDefinitions.method.toLowerCase()
  var hasFileBody = 'file' in apiDefinitions.params

  // TODO: some DELETE methods expect a body, e.g. https://developer.github.com/v3/issues/assignees/#remove-assignees-from-an-issue
  var hasBody = ['patch', 'post', 'put'].includes(method)

  var format = getRequestFormat(hasBody, apiDefinitions)
  var protocol = state.protocol
  var port = state.port || (protocol === 'https' ? 443 : 80)
  var host = state.host

  var queryAndUrl = getQueryAndUrl(options, apiDefinitions, format)
  var query = queryAndUrl.query
  var path = queryAndUrl.path
  if (!hasBody && query && query.length) {
    path += '?' + query.join('&')
  }

  var proxyUrl
  var agent

  // proxy options will be removed: https://github.com/octokit/rest.js/issues/656
  /* istanbul ignore if */
  if (state.proxy !== undefined) {
    proxyUrl = state.proxy
  } else {
    proxyUrl = getProxyForUrl(queryAndUrl.path)
  }

  // proxy options will be removed: https://github.com/octokit/rest.js/issues/656
  /* istanbul ignore if */
  if (proxyUrl) {
    agent = new HttpsProxyAgent(proxyUrl)
  }

  var ca = state.ca

  var headers = {}

  if (hasFileBody) {
    headers['content-length'] = options.contentLength
    headers['content-type'] = options.contentType
    delete options.contentLength
    delete options.contentType
  } else if (hasBody) {
    if (format === 'raw') {
      query = options.data
    } else {
      query = JSON.stringify(query)
    }
    headers['content-length'] = Buffer.byteLength(query || '', 'utf8')
    headers['content-type'] = format === 'raw'
            ? 'text/plain; charset=utf-8'
            : 'application/json; charset=utf-8'
  }

  if (state.auth) {
    var basic
    switch (state.auth.type) {
      case 'oauth':
        if (state.auth.token) {
          path += (path.indexOf('?') === -1 ? '?' : '&') +
                        'access_token=' + encodeURIComponent(state.auth.token)
        } else {
          path += (path.indexOf('?') === -1 ? '?' : '&') +
                        'client_id=' + encodeURIComponent(state.auth.key) +
                        '&client_secret=' + encodeURIComponent(state.auth.secret)
        }
        break
      case 'token':
        headers['Authorization'] = 'token ' + state.auth.token
        break
      case 'integration':
        headers['Authorization'] = 'Bearer ' + state.auth.token
        headers['accept'] = 'application/vnd.github.machine-man-preview+json'
        break
      case 'basic':
        basic = Buffer.from(state.auth.username + ':' + state.auth.password, 'ascii').toString('base64')
        headers['Authorization'] = 'Basic ' + basic
        break
    }
  }

  if (options.headers) {
    options.headers = _.mapKeys(options.headers, (value, key) => key.toLowerCase())
  }

  _.defaults(headers, options.headers, state.headers)

  if (!headers['user-agent']) {
    headers['user-agent'] = 'Octokit.js'
  }

  if (!('accept' in headers)) {
    headers['accept'] = PREVIEW_HEADER_BY_PATH[apiDefinitions.path] || state.requestMedia
  }

  headers.host = queryAndUrl.host || host

  return {
    agent,
    protocol,
    host: headers.host,
    port,
    path,
    method,
    headers,
    ca,
    family: state.family,
    rejectUnauthorized: state.rejectUnauthorized,
    timeout: 'timeout' in apiDefinitions ? apiDefinitions.timeout : state.timeout,
    hasBody,
    hasFileBody,
    query,
    file: options.file
  }
}
