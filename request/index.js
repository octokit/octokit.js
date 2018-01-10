const restEndpoint = require('../endpoint')
const request = require('./request')

function restRequest (defaults, endpointOptions) {
  const requestOptions = restEndpoint.defaults(defaults)(endpointOptions)
  return request(requestOptions)
}

module.exports = restRequest.bind(null, {})
module.exports.defaults = function (defaults) {
  return restRequest.bind(null, defaults)
}
