module.exports = parseOptions

const defaults = require('lodash/defaults')
const deprecate = require('depd')('@octokit/rest')
const pick = require('lodash/pick')

const getRequestAgent = require('./get-request-agent')
const DEFAULTS = require('./defaults')
const OPTION_NAMES = [
  'timeout',
  'baseUrl',
  'agent',
  'headers'
]

function parseOptions (userOptions) {
  if (!userOptions) {
    userOptions = {}
  }

  if ('followRedirects' in userOptions) {
    deprecate('options.followRedirects. All redirects are followed. Use HEAD request and location response header to get redirect URL only')
  }

  if ('protocol' in userOptions) {
    deprecate('options.protocol (use options.baseUrl instead)')
  }

  if ('host' in userOptions) {
    deprecate('options.host (use options.baseUrl instead)')
  }

  if ('port' in userOptions) {
    deprecate('options.port (use options.baseUrl instead)')
  }

  if ('pathPrefix' in userOptions) {
    deprecate('options.pathPrefix (use options.baseUrl instead)')
  }

  if ('Promise' in userOptions) {
    deprecate('options.Promise (the native Promise API is used)')
  }

  const options = defaults(pick(userOptions, OPTION_NAMES), DEFAULTS)

  const clientDefaults = {
    baseUrl: options.baseUrl,
    headers: options.headers,
    request: {
      timeout: options.timeout
    }
  }

  /* istanbul ignore if */
  if (userOptions.protocol) {
    clientDefaults.baseUrl = `${userOptions.protocol}://${userOptions.host}`

    /* istanbul ignore else */
    if (userOptions.port) {
      clientDefaults.baseUrl += `:${userOptions.port}`
    }

    // Check if a prefix is passed in the options and strip any leading or trailing slashes from it.
    /* istanbul ignore else */
    if (userOptions.pathPrefix) {
      clientDefaults.baseUrl += '/' + userOptions.pathPrefix.replace(/(^[/]+|[/]+$)/g, '')
    }
  }

  /* istanbul ignore else */
  if (!process.browser) {
    clientDefaults.request.agent = getRequestAgent(clientDefaults.baseUrl, userOptions)
  }

  return clientDefaults
}
