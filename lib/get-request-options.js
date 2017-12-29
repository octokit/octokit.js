module.exports = getRequestOptions

const urlParse = require('url').parse

const urlTemplate = require('url-template')

function getRequestOptions (state, options, apiDefinitions, callback) {
  const requestOptions = {
    method: apiDefinitions.method.toLowerCase(),
    protocol: state.protocol,
    hostname: state.host,
    port: state.port || (state.protocol === 'https' ? 443 : 80),
    path: apiDefinitions.path,
    headers: Object.assign({}, apiDefinitions.headers, state.headers, options.headers),
    timeout: 'timeout' in apiDefinitions ? apiDefinitions.timeout : state.timeout,
    family: state.family,
    rejectUnauthorized: state.rejectUnauthorized
  }

  if (options.url) {
    const url = urlParse(urlTemplate.parse(options.url).expand(options), true)

    requestOptions.path = url.path
    requestOptions.hostname = url.host
  }

  let pathHasQuery = /\?/.test(requestOptions.path)
  Object.keys(options || {}).forEach((paramName) => {
    if (!apiDefinitions.params[paramName]) return
    const location = apiDefinitions.params[paramName].location

    let value = options[paramName]
    if (location === 'path') {
      value = paramName === 'ref'
            ? options[paramName].replace(/#/g, '%23')
            : encodeURIComponent(options[paramName])

      requestOptions.path = requestOptions.path.replace(`:${paramName}`, value)
      return
    }

    if (location === 'query') {
      if (paramName === 'q') {
        value = value.split(/\s*\+\s*/)
          .map(encodeURIComponent)
          .join('+')
      }

      requestOptions.path += pathHasQuery ? '&' : '?'
      requestOptions.path += `${paramName}=${value}`
      pathHasQuery = true
      return
    }

    if (location === 'header') {
      Object.keys(apiDefinitions.headers).forEach(headerName => {
        apiDefinitions.headers[headerName] = apiDefinitions.headers[headerName].replace(`:${paramName}`, value)
      })
      return
    }

    if (location === 'body') {
      requestOptions.body = value
      return
    }

    if (!requestOptions.body) {
      requestOptions.body = {}
    }
    requestOptions.body[paramName] = value
  })

  if (!('accept' in requestOptions.headers)) {
    requestOptions.headers['accept'] = apiDefinitions.preview || state.requestMedia
  }

  requestOptions.headers.host = requestOptions.hostname

  return requestOptions
}
