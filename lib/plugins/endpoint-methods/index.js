module.exports = apiPlugin

const _ = require('lodash')

const method = require('./method')
const deprecate = require('./deprecate')

const ENDPOINT_DEFAULTS = require('../../routes.json')

function apiPlugin (github) {
  Object.keys(ENDPOINT_DEFAULTS).forEach(namespaceName => {
    github[namespaceName] = {}

    Object.keys(ENDPOINT_DEFAULTS[namespaceName]).forEach(apiName => {
      const apiOptions = ENDPOINT_DEFAULTS[namespaceName][apiName]
      const endpointDefaults = _.pick(apiOptions, ['method', 'url', 'headers', 'request'])

      github[namespaceName][apiName] = method.bind(null, github, endpointDefaults, apiOptions.params)

      // log deprecation warning for APIs flagged as deprecated
      if (apiOptions.deprecated) {
        github[namespaceName][apiName] = deprecate(
          github[namespaceName][apiName],
          apiOptions.deprecated
        )
      }
    })
  })
}
