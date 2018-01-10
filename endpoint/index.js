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
  }
}

function restEndpoint (defaults, options) {
  let {
    method,
    baseUrl,
    url,
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

  remainingOptions = _.omit(remainingOptions, result.variables.used)

  if (method === 'get' || method === 'head') {
    return {
      method,
      url: addQueryParameters(url, remainingOptions),
      headers
    }
  }

  if (!/\bjson\b/.test(headers.accept)) {
    return {
      method,
      url,
      headers,
      body: remainingOptions.input
    }
  }

  return {
    method,
    url,
    headers,
    body: 'input' in remainingOptions ? remainingOptions.input : remainingOptions
  }
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
