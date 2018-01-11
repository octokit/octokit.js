const _ = require('lodash')
const parseUrlTemplate = require('@octokit/rest-url-template')

const addQueryParameters = require('./add-query-parameters')
const pkg = require('../package.json')

const DEFAULTS = {
  method: 'get',
  baseUrl: 'https://api.github.com',
  headers: {
    accept: 'application/vnd.github.v3+json',
    'user-agent': `octokit/rest.js v${pkg.version}`
  },
  request: {}
}

const NON_PARAMETERS = [
  'request',
  'baseUrl'
]

function restEndpoint (defaults, options) {
  let {
    method,
    baseUrl,
    url,
    body,
    headers,
    ...remainingOptions
  } = _.defaultsDeep({}, options, defaults)

  method = method.toLowerCase()
  headers = _.mapKeys(headers, (value, key) => key.toLowerCase())

  const result = parseUrlTemplate(url, remainingOptions)
  url = result.url

  if (!/^http/.test(result.url)) {
    url = (options.baseUrl || defaults.baseUrl) + url
  }

  if (result.variables.missing.length) {
    throw new Error(`Missing parameters: ${result.variables.missing.join(', ')}`)
  }

  const requestOptions = remainingOptions.request || {}
  remainingOptions = _.omit(remainingOptions, result.variables.used.concat(NON_PARAMETERS))

  if (method === 'get' || method === 'head') {
    url = addQueryParameters(url, remainingOptions)
  } else {
    if ('input' in remainingOptions) {
      body = remainingOptions.input
    } else {
      body = Object.keys(remainingOptions).length ? remainingOptions : undefined
    }
  }

  return Object.assign(requestOptions, {
    method,
    url,
    headers,
    body
  })
}

module.exports = restEndpoint.bind(null, DEFAULTS)
module.exports.defaults = function defaults (options) {
  return restEndpoint.bind(null, _.defaultsDeep(
    _.pick(options, ['method', 'baseUrl', 'headers', 'request']),
    DEFAULTS
  ))
}
module.exports.DEFAULTS = DEFAULTS
