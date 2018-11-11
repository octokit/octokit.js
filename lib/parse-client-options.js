module.exports = parseOptions

const getUserAgent = require('universal-user-agent')
const pick = require('lodash/pick')

const pkg = require('../package.json')

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

  if (userOptions.headers) {
    userOptions.headers = Object.keys(userOptions.headers).reduce((newObj, key) => {
      newObj[key.toLowerCase()] = userOptions.headers[key]
      return newObj
    }, {})
  }

  const options = pick(userOptions, OPTION_NAMES)

  const clientDefaults = {
    baseUrl: options.baseUrl,
    headers: options.headers || {},
    request: {
      timeout: options.timeout,
      agent: options.agent
    }
  }

  const userAgentOption = clientDefaults.headers['user-agent']
  const defaultUserAgent = `octokit.js/${pkg.version} ${getUserAgent()}`

  clientDefaults.headers['user-agent'] = [userAgentOption, defaultUserAgent].filter(Boolean).join(' ')

  return clientDefaults
}
