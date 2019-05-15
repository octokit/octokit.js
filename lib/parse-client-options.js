module.exports = parseOptions

const { Deprecation } = require('deprecation')
const getUserAgent = require('universal-user-agent')
const once = require('once')

const pkg = require('../package.json')

const deprecateOptionsTimeout = once((log, deprecation) => log.warn(deprecation))
const deprecateOptionsAgent = once((log, deprecation) => log.warn(deprecation))
const deprecateOptionsHeaders = once((log, deprecation) => log.warn(deprecation))

function parseOptions (options, log) {
  if (options.headers) {
    options.headers = Object.keys(options.headers).reduce((newObj, key) => {
      newObj[key.toLowerCase()] = options.headers[key]
      return newObj
    }, {})
  }

  const clientDefaults = {
    headers: options.headers || {},
    request: options.request || {},
    mediaType: {
      previews: [],
      format: ''
    }
  }

  if (options.baseUrl) {
    clientDefaults.baseUrl = options.baseUrl
  }

  if (options.userAgent) {
    clientDefaults.headers['user-agent'] = options.userAgent
  }

  if (options.previews) {
    clientDefaults.mediaType.previews = options.previews
  }

  if (options.timeout) {
    deprecateOptionsTimeout(log, new Deprecation('[@octokit/rest] new Octokit({timout}) is deprecated. Use {request: {agent}} instead. See https://github.com/octokit/rest.js#client-options'))
    clientDefaults.request.timeout = options.timeout
  }

  if (options.agent) {
    deprecateOptionsAgent(log, new Deprecation('[@octokit/rest] new Octokit({agent}) is deprecated. Use {request: {agent}} instead. See https://github.com/octokit/rest.js#client-options'))
    clientDefaults.request.agent = options.agent
  }

  if (options.headers) {
    deprecateOptionsHeaders(log, new Deprecation('[@octokit/rest] new Octokit({headers}) is deprecated. Use {userAgent, previews} instead. See https://github.com/octokit/rest.js#client-options'))
  }

  const userAgentOption = clientDefaults.headers['user-agent']
  const defaultUserAgent = `octokit.js/${pkg.version} ${getUserAgent()}`

  clientDefaults.headers['user-agent'] = [userAgentOption, defaultUserAgent].filter(Boolean).join(' ')

  return clientDefaults
}
