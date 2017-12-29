module.exports = parseOptions

const _ = require('lodash')

const DEFAULTS = require('./defaults')
const OPTION_NAMES = [
  'timeout',
  'host',
  'pathPrefix',
  'protocol',
  'port',
  'proxy',
  'ca',
  'headers',
  'requestMedia',
  'rejectUnauthorized',
  'family'
]

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

  const state = _.defaults(_.pick(options, OPTION_NAMES), DEFAULTS)

  // Check if a prefix is passed in the options and strip any leading or trailing slashes from it.
  if (state.pathPrefix) {
    state.pathPrefix = '/' + state.pathPrefix.replace(/(^[/]+|[/]+$)/g, '')
  }

  return state
}
