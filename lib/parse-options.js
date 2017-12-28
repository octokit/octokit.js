module.exports = parseOptions

const _ = require('lodash')

const DEFAULTS = require('./definitions/misc.json').constants

function parseOptions (options) {
  options = options || {}
  options.headers = options.headers || {}

  if ('followRedirects' in options) {
    console.warn('DEPRECATED: followRedirects option is no longer supported. All redirects are followed correctly')
  }

  if ('Promise' in options) {
    console.warn('DEPRECATED: Promise option is no longer supported. The native Promise API is used')
  }

  var pathPrefix = ''

  // Check if a prefix is passed in the options and strip any leading or trailing slashes from it.
  if (typeof options.pathPrefix === 'string') {
    pathPrefix = '/' + options.pathPrefix.replace(/(^[/]+|[/]+$)/g, '')
    options.pathPrefix = pathPrefix
  }

  return _.defaults(options, DEFAULTS)
}
