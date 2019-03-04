module.exports = Octokit

const endpoint = require('@octokit/request').endpoint
const Hook = require('before-after-hook')

const parseClientOptions = require('./parse-client-options')
const requestWithDefaults = require('./request-with-defaults')

function Octokit (plugins, options) {
  options = options || {}
  const hook = new Hook.Collection()
  const log = Object.assign({
    'debug': () => {},
    'info': () => {},
    'warn': console.warn,
    'error': console.error
  }, options && options.log)
  const api = {
    hook,
    log,
    request: requestWithDefaults(hook, endpoint, parseClientOptions(options, log))
  }

  plugins.forEach(pluginFunction => pluginFunction(api, options))

  return api
}
