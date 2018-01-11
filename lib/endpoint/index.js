module.exports = restEndpoint

const _ = require('lodash')
const parseUrlTemplate = require('@octokit/rest-url-template')

const addQueryParameters = require('./add-query-parameters')
const DEFAULTS = module.exports.DEFAULTS = require('./defaults')

const NON_PARAMETERS = [
  'request',
  'baseUrl'
]

function restEndpoint (options) {
  let {
    method,
    baseUrl,
    url,
    body,
    headers,
    ...remainingOptions
  } = _.defaultsDeep({}, options, DEFAULTS)

  method = method.toLowerCase()
  headers = _.mapKeys(headers, (value, key) => key.toLowerCase())

  const result = parseUrlTemplate(url, remainingOptions)
  url = result.url

  if (!/^http/.test(result.url)) {
    url = (options.baseUrl || DEFAULTS.baseUrl) + url
  }

  if (result.variables.missing.length) {
    throw new Error(`Missing parameters: ${result.variables.missing.join(', ')}`)
  }

  const requestOptions = remainingOptions.request
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
