module.exports = parseOptions

const _ = require('lodash')

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

  options = _.defaults(_.pick(options, OPTION_NAMES), DEFAULTS)

  const defaults = {
    headers: options.headers,
    request: {
      ca: options.ca,
      family: options.family,
      proxy: options.proxy,
      rejectUnauthorized: options.rejectUnauthorized,
      timeout: options.timeout
    }
  }

  defaults.baseUrl = `${options.protocol}://${options.host}`

  if (options.port) {
    defaults.baseUrl += `:${options.port}`
  }

  // Check if a prefix is passed in the options and strip any leading or trailing slashes from it.
  if (options.pathPrefix) {
    defaults.baseUrl += '/' + options.pathPrefix.replace(/(^[/]+|[/]+$)/g, '')
  }

  return defaults
}
