module.exports = applyOptionsToApiDefinition

function applyOptionsToApiDefinition (requestOptions, options, apiDefinition) {
  let pathHasQuery
  Object.keys(options).forEach((paramName) => {
    if (!apiDefinition.params[paramName]) return
    const location = apiDefinition.params[paramName].location

    let value = options[paramName]
    if (location === 'path') {
      value = paramName === 'ref'
            ? options[paramName].replace(/#/g, '%23')
            : encodeURIComponent(options[paramName])

      requestOptions.path = requestOptions.path.replace(`:${paramName}`, value)
      return
    }

    if (location === 'query' && !options.url) {
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
      Object.keys(requestOptions.headers).forEach(headerName => {
        requestOptions.headers[headerName] = requestOptions.headers[headerName].replace(`:${paramName}`, value)
      })
      return
    }

    if (location === 'body') {
      requestOptions.body = value
      return
    }

    // location === 'bodykey'
    if (!requestOptions.body) {
      requestOptions.body = {}
    }
    requestOptions.body[paramName] = value
  })
}
