module.exports = apiPlugin

const _ = require('lodash')

const method = require('./method')
const deprecate = require('./deprecate')

const ENDPOINT_DEFAULTS = require('../../routes.json')

function apiPlugin (octokit) {
  Object.keys(ENDPOINT_DEFAULTS).forEach(namespaceName => {
    octokit[namespaceName] = {}

    Object.keys(ENDPOINT_DEFAULTS[namespaceName]).forEach(apiName => {
      const apiOptions = ENDPOINT_DEFAULTS[namespaceName][apiName]
      const endpointDefaults = _.pick(apiOptions, ['method', 'url', 'headers', 'request'])

      octokit[namespaceName][apiName] = method.bind(null, octokit, endpointDefaults, apiOptions.params)

      // log deprecation warning for APIs flagged as deprecated
      if (apiOptions.deprecated) {
        octokit[namespaceName][apiName] = deprecate(
          octokit[namespaceName][apiName],
          apiOptions.deprecated
        )
      }
    })
  })
}
