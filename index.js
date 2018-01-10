module.exports = GitHubApi

const defaultsDeep = require('lodash/defaultsDeep')
const Hook = require('before-after-hook')

const parseClientOptions = require('./lib/parse-client-options')
const request = require('./request')
const ENDPOINT_DEFAULTS = require('./endpoint').DEFAULTS

const PLUGINS = [
  require('./plugins/authentication'),
  require('./plugins/endpoint-methods'),
  require('./plugins/pagination')
]

function GitHubApi (options) {
  const state = parseClientOptions(options)
  const requestWithDefaults = request.defaults(state)

  const hook = new Hook()
  const api = {
    hook,
    plugin: (pluginFunction) => pluginFunction(api),
    request: (options) => api.hook(
      'request',
      defaultsDeep(state, ENDPOINT_DEFAULTS),
      requestWithDefaults
    )
  }

  PLUGINS.forEach(api.plugin)

  return api
}
