module.exports = getQueryAndUrl

const urlParse = require('url').parse

const urlTemplate = require('url-template')

function getQueryAndUrl (options, apiDefinitions, format) {
  if (options.url) {
    const url = urlParse(urlTemplate.parse(options.url).expand(options), true)

    return {
      path: url.path,
      host: url.host
    }
  }

  const result = {
    path: apiDefinitions.path
  }

  Object.keys(apiDefinitions.params).forEach((paramName) => {
    if (!(paramName in options)) {
      return
    }

    let value = options[paramName]
    const isUrlParam = result.path.indexOf(':' + paramName) !== -1

    if (isUrlParam) {
      // the ref param is a path so we don't want to [fully] encode it but we do want to encode the # if there is one
      // (see https://github.com/octokit/rest.js/issues/499#issuecomment-280093040)
      value = paramName === 'ref'
            ? value.replace(/#/g, '%23')
            : encodeURIComponent(value)

      result.path = result.path.replace(':' + paramName, value)
      return
    }

    if (paramName === 'q') {
      value = value.split(/\s*\+\s*/)
        .map(encodeURIComponent)
        .join('+')
    }

    if (format === 'json') {
      if (apiDefinitions.params[paramName].sendValueAsBody) {
        result.query = value
        return
      }

      if (!result.query) {
        result.query = {}
      }
      result.query[paramName] = value
      return
    }

    if (format !== 'raw') {
      if (!result.query) {
        result.query = []
      }
      result.query.push(paramName + '=' + value)
    }
  })

  return result
}
