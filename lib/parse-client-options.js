module.exports = parseOptions

const getUserAgent = require('universal-user-agent')

const pkg = require('../package.json')

function parseOptions (options) {
  if (!options) {
    options = {}
  }

  if (options.headers) {
    options.headers = Object.keys(options.headers).reduce((newObj, key) => {
      newObj[key.toLowerCase()] = options.headers[key]
      return newObj
    }, {})
  }

  const clientDefaults = {
    headers: options.headers || {},
    request: {}
  }

  if (options.baseUrl) {
    clientDefaults.baseUrl = options.baseUrl
  }

  if (options.timeout) {
    clientDefaults.request.timeout = options.timeout
  }

  if (options.agent) {
    clientDefaults.request.agent = options.agent
  }

  const userAgentOption = clientDefaults.headers['user-agent']
  const defaultUserAgent = `octokit.js/${pkg.version} ${getUserAgent()}`

  clientDefaults.headers['user-agent'] = [userAgentOption, defaultUserAgent].filter(Boolean).join(' ')

  return clientDefaults
}
