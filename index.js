module.exports = GitHubApi

var DEFINITIONS = require('./definitions.json')

function GitHubApi (options) {
  if (!(this instanceof Client)) {
    return new Client(options)
  }

  options = options || {}
  options.headers = options.headers || {}
  this.options = options

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
    this.options.pathPrefix = pathPrefix
  }

    // store mapping of accept header to preview api endpoints
  var mediaHash = DEFINITIONS.acceptTree
  var mediaTypes = {}

  for (var accept in mediaHash) {
    for (var route in mediaHash[accept]) {
      mediaTypes[mediaHash[accept][route]] = accept
    }
  }

  this.acceptUrls = mediaTypes

  this.setupRoutes()
};
