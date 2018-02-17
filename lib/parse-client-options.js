module.exports = parseOptions

const defaults = require('lodash/defaults')
const pick = require('lodash/pick')

const getRequestAgent = require('./get-request-agent')
const DEFAULTS = require('./defaults')
const OPTION_NAMES = [
  'timeout',
  'host',
  'pathPrefix',
  'protocol',
  'port',
  'agent',
  'headers',
  'requestMedia'
]

function parseOptions (userOptions) {
  if (!userOptions) {
    userOptions = {}
  }

  if ('followRedirects' in userOptions) {
    console.warn('DEPRECATED: followRedirects option is no longer supported. All redirects are followed correctly')
  }

  if ('Promise' in userOptions) {
    console.warn('DEPRECATED: Promise option is no longer supported. The native Promise API is used')
  }

  const options = defaults(pick(userOptions, OPTION_NAMES), DEFAULTS)

  const clientDefaults = {
    headers: options.headers,
    request: {
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

  /* istanbul ignore else */
  if (!process.browser) {
    clientDefaults.request.agent = getRequestAgent(userOptions)
  }

  return clientDefaults
}
