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
  url = DEFAULTS.baseUrl + result.url

  if (result.variables.missing.length) {
    throw new Error(`Missing parameters: ${result.variables.missing.join(', ')}`)
  }

  const requestOptions = remainingOptions.request || {}
  remainingOptions = _.omit(remainingOptions, result.variables.used.concat('request'))

  if (method === 'get' || method === 'head') {
    url = addQueryParameters(url, remainingOptions)
  } else {
    if (!/\bjson\b/.test(headers.accept)) {
      body = remainingOptions.input
    } else {
      body = 'input' in remainingOptions ? remainingOptions.input : remainingOptions
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
    {},
    _.pick(options, ['method, baseUrl, headers']),
    DEFAULTS
  ))
}
module.exports.DEFAULTS = DEFAULTS
