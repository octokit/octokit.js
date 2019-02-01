module.exports = parseOptions

const getUserAgent = require('universal-user-agent')

const pkg = require('../package.json')

function parseOptions (options, log) {
  if (options.headers) {
    options.headers = Object.keys(options.headers).reduce((newObj, key) => {
      newObj[key.toLowerCase()] = options.headers[key]
      return newObj
    }, {})
  }

  const clientDefaults = {
    headers: options.headers || {},
    request: options.request || {}
  }

  if (options.baseUrl) {
    clientDefaults.baseUrl = options.baseUrl
  }

  if (options.userAgent) {
    clientDefaults.headers['user-agent'] = options.userAgent
  }

  if (options.previews) {
    clientDefaults.headers.accept = options.previews.map(preview => `application/vnd.github.${preview}+json`)
  }

  if (options.timeout) {
    log.warn(new Error('new Octokit({timout}) is deprecated. Use {request: {agent}} instead. See https://github.com/octokit/rest.js#client-options'))
    clientDefaults.request.timeout = options.timeout
  }

  if (options.agent) {
    log.warn(new Error('new Octokit({agent}) is deprecated. Use {request: {agent}} instead. See https://github.com/octokit/rest.js#client-options'))
    clientDefaults.request.agent = options.agent
  }

  if (options.headers) {
    log.warn(new Error('new Octokit({headers}) is deprecated. Use {userAgent, previews} instead. See https://github.com/octokit/rest.js#client-options'))
  }

  const userAgentOption = clientDefaults.headers['user-agent']
  const defaultUserAgent = `octokit.js/${pkg.version} ${getUserAgent()}`

  clientDefaults.headers['user-agent'] = [userAgentOption, defaultUserAgent].filter(Boolean).join(' ')

  return clientDefaults
}
