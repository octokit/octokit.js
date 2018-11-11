module.exports = withDefaults

const request = require('@octokit/request/lib/request')

function withDefaults (hook, oldEndpoint, newDefaults) {
  const endpoint = oldEndpoint.defaults(newDefaults)

  const newApi = requestWithHook.bind(null, hook, endpoint)
  newApi.endpoint = endpoint
  newApi.defaults = withDefaults.bind(null, hook, endpoint)
  return newApi
}

function requestWithHook (hook, endpoint, route, options) {
  const endpointOptions = endpoint.merge(route, options)
  return hook('request', endpointOptions, function (options) {
    return request(endpoint.parse(options))
  })
}
