const Lru = require('lru-cache')

module.exports = authenticate

function authenticate (state, options) {
  if (!options) {
    state.auth = false
    return
  }

  switch (options.type) {
    case 'basic':
      if (!options.username || !options.password) {
        throw new Error('Basic authentication requires both a username and password to be set')
      }
      break

    case 'oauth':
      if (!options.token && !(options.key && options.secret)) {
        throw new Error('OAuth2 authentication requires a token or key & secret to be set')
      }
      break

    case 'token':
    case 'integration':
    case 'app':
      if (!options.token && !(options.appId && options.privateKey)) {
        throw new Error('App authentication requires a token or appId & privateKey to be set')
      }
      if (options.appId) {
        // Max age of 55 mins, default token expiry is 1 hour
        state.credentialCache = new Lru({max: 1000, maxAge: 3300})
      }
      break

    default:
      throw new Error("Invalid authentication type, must be 'basic', 'integration', or 'oauth'")
  }

  state.auth = options
}
