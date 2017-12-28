module.exports = parseOptions

const _ = require('lodash')

const DEFAULTS = require('./defaults')

function parseOptions (options) {
  if (!options) {
    options = {}
  }

  if ('followRedirects' in options) {
    console.warn('DEPRECATED: followRedirects option is no longer supported. All redirects are followed correctly')
  }

  if ('Promise' in options) {
    console.warn('DEPRECATED: Promise option is no longer supported. The native Promise API is used')
  }

  const state = _.defaults(_.pick(options, Object.keys(DEFAULTS)), DEFAULTS)

  // Check if a prefix is passed in the options and strip any leading or trailing slashes from it.
  if (state.pathPrefix) {
    state.pathPrefix = '/' + state.pathPrefix.replace(/(^[/]+|[/]+$)/g, '')
  }

  return state
}
