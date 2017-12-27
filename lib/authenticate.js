module.exports = authenticate

function authenticate (state, options) {
  if (!options) {
    state.auth = false
    return
  }
  if (!options.type || 'basic|oauth|client|token|integration'.indexOf(options.type) === -1) {
    throw new Error("Invalid authentication type, must be 'basic', 'integration', 'oauth', or 'client'")
  }
  if (options.type === 'basic' && (!options.username || !options.password)) {
    throw new Error('Basic authentication requires both a username and password to be set')
  }
  if (options.type === 'oauth') {
    if (!options.token && !(options.key && options.secret)) {
      throw new Error('OAuth2 authentication requires a token or key & secret to be set')
    }
  }
  if ((options.type === 'token' || options.type === 'integration') && !options.token) {
    throw new Error('Token authentication requires a token to be set')
  }

  state.auth = options
}
