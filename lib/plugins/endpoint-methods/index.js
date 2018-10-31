'use strict'

module.exports = apiPlugin

const set = require('lodash/set')

const validate = require('./validate')
const ENDPOINT_DEFAULTS = require('../../routes.json')

function apiPlugin (octokit) {
  octokit.hook.before('request', validate)

  Object.keys(ENDPOINT_DEFAULTS).forEach(namespaceName => {
    octokit[namespaceName] = {}

    Object.keys(ENDPOINT_DEFAULTS[namespaceName]).forEach(apiName => {
      let apiOptions = ENDPOINT_DEFAULTS[namespaceName][apiName]
      let deprecated

      if (apiOptions.alias) {
        deprecated = apiOptions.deprecated
        const [aliasNamespaceName, aliasApiName] = apiOptions.alias.split('.')
        apiOptions = ENDPOINT_DEFAULTS[aliasNamespaceName][aliasApiName]
      }

      const endpointDefaults = ['method', 'url', 'headers'].reduce((map, key) => {
        if (typeof apiOptions[key] !== 'undefined') {
          map[key] = apiOptions[key]
        }

        return map
      }, {})

      set(endpointDefaults, 'request.endpoint', Object.assign({
        deprecated
      }, apiOptions))

      octokit[namespaceName][apiName] = octokit.request.defaults(endpointDefaults)
    })
  })
}
