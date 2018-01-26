module.exports = parseOptions

const defaults = require('lodash/defaults')
const pick = require('lodash/pick')

const DEFAULTS = require('./defaults')
const OPTION_NAMES = [
  'timeout',
  'host',
  'pathPrefix',
  'protocol',
  'port',
  'proxy',
  'ca',
  'headers',
  'requestMedia',
  'rejectUnauthorized',
  'family'
]

function parseOptions (options) {
  if (!options) {
    options = {}
  }

  if ('followRedirects' in options) {
    console.warn('DEPRECATED: followRedirects option is no longer supported. All redirects are followed correctly')
  }

  if ('Promise' in options) {
    console.warn('DEPRECATED: Promise option is no longer supported. The native Promise API is used')
  }

  options = defaults(pick(options, OPTION_NAMES), DEFAULTS)

  const clientDefaults = {
    headers: options.headers,
    request: {
      ca: options.ca,
      family: options.family,
      proxy: options.proxy,
      rejectUnauthorized: options.rejectUnauthorized,
      timeout: options.timeout
    }
  }

  clientDefaults.baseUrl = `${options.protocol}://${options.host}`

  if (options.port) {
    clientDefaults.baseUrl += `:${options.port}`
  }

  // Check if a prefix is passed in the options and strip any leading or trailing slashes from it.
  if (options.pathPrefix) {
    clientDefaults.baseUrl += '/' + options.pathPrefix.replace(/(^[/]+|[/]+$)/g, '')
  }

  return clientDefaults
}
