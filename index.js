module.exports = GitHubApi

const defaultsDeep = require('lodash/defaultsDeep')
const Hook = require('before-after-hook')

const parseClientOptions = require('./lib/parse-client-options')
const request = require('./lib/request')
const ENDPOINT_DEFAULTS = require('./lib/endpoint').DEFAULTS

function GitHubApi (options) {
  const defaults = defaultsDeep(parseClientOptions(options), ENDPOINT_DEFAULTS)

  const hook = new Hook()
  const api = {
    // NOTE: github.hook, github.plugin and github.request are experimental APIs
    //       at this point and can change at any time
    hook,
    plugin: (pluginFunction) => pluginFunction(api),
    request: (options) => api.hook('request', defaultsDeep(options, defaults), request)
  }

  return api
}
