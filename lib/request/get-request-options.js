module.exports = getRequestOptions

const urlParse = require('url').parse

const urlTemplate = require('url-template')

const applyOptionsToApiDefinition = require('./apply-options-to-api-definition')

function getRequestOptions (state, options, apiDefinition, callback) {
  const requestOptions = {
    method: apiDefinition.method.toLowerCase(),
    protocol: state.protocol,
    hostname: state.host,
    port: state.port || (state.protocol === 'https' ? 443 : 80),
    path: apiDefinition.path,
    headers: Object.assign({}, apiDefinition.headers, state.headers, options.headers),
    timeout: 'timeout' in apiDefinition ? apiDefinition.timeout : state.timeout,
    family: state.family,
    rejectUnauthorized: state.rejectUnauthorized
  }

  if (options.url) {
    const url = urlParse(urlTemplate.parse(options.url).expand(options), true)

    requestOptions.path = url.path
    requestOptions.hostname = url.host
  }

  applyOptionsToApiDefinition(requestOptions, options, apiDefinition)

  if (!('accept' in requestOptions.headers)) {
    requestOptions.headers['accept'] = apiDefinition.preview || state.requestMedia
  }

  requestOptions.headers.host = requestOptions.hostname

  return requestOptions
}
