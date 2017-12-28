module.exports = getQueryAndUrl

const urlParse = require('url').parse

const urlTemplate = require('url-template')

function getQueryAndUrl (state, options, apiDefinitions, format) {
  if (options.url) {
    const url = urlParse(urlTemplate.parse(options.url).expand(options), true)

    return {
      url: url.path,
      host: url.host
    }
  }

  var url = apiDefinitions.path

  if (state.pathPrefix && url.indexOf(state.pathPrefix) !== 0) {
    url = state.pathPrefix + apiDefinitions.path
  }

  var ret = {}

  Object.keys(apiDefinitions.params).forEach(function (paramName) {
    paramName = paramName.replace(/^[$]+/, '')

    if (!(paramName in options)) {
      return
    }

    var isUrlParam = url.indexOf(':' + paramName) !== -1
    var valFormat = isUrlParam || format !== 'json' ? 'query' : format
    var val
    if (valFormat === 'json') {
      val = options[paramName]
    } else {
      if (apiDefinitions.params[paramName] && apiDefinitions.params[paramName].combined) {
        // Check if this is a combined (search) string.
        val = options[paramName].split(/[\s\t\r\n]*\+[\s\t\r\n]*/)
          .map(function (part) {
            return encodeURIComponent(part)
          })
          .join('+')
      } else {
        // the ref param is a path so we don't want to [fully] encode it but we do want to encode the # if there is one
        // (see https://github.com/mikedeboer/rest.js/issues/499#issuecomment-280093040)
        if (paramName === 'ref') {
          val = options[paramName].replace(/#/g, '%23')
        } else {
          val = encodeURIComponent(options[paramName])
        }
      }
    }

    if (isUrlParam) {
      url = url.replace(':' + paramName, val)
    } else {
      if (format === 'json' && apiDefinitions.params[paramName].sendValueAsBody) {
        ret.query = val
      } else if (format === 'json') {
        if (!ret.query) {
          ret.query = {}
        }
        ret.query[paramName] = val
      } else if (format !== 'raw') {
        if (!ret.query) {
          ret.query = []
        }
        ret.query.push(paramName + '=' + val)
      }
    }
  })
  ret.url = url

  return ret
}
