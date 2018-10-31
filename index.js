module.exports = GitHubApi

const endpoint = require('@octokit/request').endpoint
const Hook = require('before-after-hook')

const parseClientOptions = require('./lib/parse-client-options')
const requestWithDefaults = require('./lib/request-with-defaults')

const PLUGINS = [
  require('./lib/plugins/authentication'),
  require('./lib/plugins/endpoint-methods'),
  require('./lib/plugins/pagination')
]

function GitHubApi (options) {
  const hook = new Hook()
  const api = {
    // NOTE: github.hook and github.plugin are experimental APIs
    //       at this point and can change at any time
    hook,
    plugin: (pluginFunction) => pluginFunction(api),
    request: requestWithDefaults(hook, endpoint, parseClientOptions(options))
  }

  PLUGINS.forEach(api.plugin)

  return api
}
