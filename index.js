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
  const defaults = defaultsDeep(parseClientOptions(options), ENDPOINT_DEFAULTS)

  const hook = new Hook()
  const api = {
    hook,
    plugin: (pluginFunction) => pluginFunction(api),
    request: (options) => api.hook('request', defaultsDeep(options, defaults), request)
  }

  PLUGINS.forEach(api.plugin)

  return api
}
