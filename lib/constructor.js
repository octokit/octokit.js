module.exports = Octokit

const endpoint = require('@octokit/request').endpoint
const Hook = require('before-after-hook')

const parseClientOptions = require('./parse-client-options')
const requestWithDefaults = require('./request-with-defaults')

function Octokit (plugins, options) {
  const hook = new Hook()
  const api = {
    hook,
    request: requestWithDefaults(hook, endpoint, parseClientOptions(options))
  }

  plugins.forEach(pluginFunction => pluginFunction(api, options))

  return api
}
