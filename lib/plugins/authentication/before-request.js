module.exports = authenticationBeforeRequest

const btoa = require('btoa-lite')
const uniq = require('lodash/uniq')

const deprecate = require('../../deprecate')

function authenticationBeforeRequest (state, octokit, options) {
  if (!state.auth.type) {
    return
  }

  if (state.auth.type === 'basic') {
    const hash = btoa(`${state.auth.username}:${state.auth.password}`)
    options.headers['authorization'] = `Basic ${hash}`
    return
  }

  if (state.auth.type === 'token') {
    options.headers['authorization'] = `token ${state.auth.token}`
    return
  }

  // deprecate state.auth.type === 'integration', rename to 'app'
  if (state.auth.type === 'integration') {
    deprecate('authentication type "integration" is deprecated. Use "app" instead.')
    state.auth.type = 'app'
  }

  if (state.auth.type === 'app') {
    // If you set your own authorization header then you're on your own.
    // This avoids infinite loops when we want to request per-installation
    // access tokens when authorized as the app down below
    if (options.headers.authorization) {
      return
    }

    // If we have a token then use it
    if (state.auth.token) {
      setBearerToken(options, state.auth.token)
      return
    }

    // If we have no installationId then authenticate as the app
    if (!state.auth.installationId) {
      setBearerToken(options, state.auth.appTokenGenerator())
      return
    }

    // If we're dealing with a particular installation then we have use the
    // token for that installation

    // If we have a token stored in the cache then use it
    if (state.tokenCache && state.tokenCache.expiresAt > Date.now()) {
      setBearerToken(options, state.tokenCache.token)
      return
    }

    // Otherwise we have to get an installation token while authed as the
    // application, use it for the current request and store it to avoid
    // rerequesting it on future requests
    return (octokit.apps.createInstallationToken({
      installation_id: state.auth.installationId,
      headers: {
        'accept': 'application/vnd.github.machine-man-preview+json',
        'authorization': `Bearer ${state.auth.appTokenGenerator()}`
      }
    }).then(response => {
      // Store the token in the cache for next time
      // Claim the token expires one minute (60000ms) earlier than when the
      // response says the token expires. This reduces the risk of using an
      // expired token in case our local time is a bit out
      state.tokenCache = {
        token: response.data.token,
        expiresAt: new Date(response.data.expires_at).getTime() - 60000
      }

      setBearerToken(options, response.data.token)
    }))
  }

  options.url += options.url.indexOf('?') === -1 ? '?' : '&'

  if (state.auth.token) {
    options.url += `access_token=${encodeURIComponent(state.auth.token)}`
    return
  }

  const key = encodeURIComponent(state.auth.key)
  const secret = encodeURIComponent(state.auth.secret)
  options.url += `client_id=${key}&client_secret=${secret}`
}

function setBearerToken (options, token) {
  options.headers['authorization'] = `Bearer ${token}`
  const acceptHeaders = options.headers['accept'].split(',')
    .concat('application/vnd.github.machine-man-preview+json')
  options.headers['accept'] = uniq(acceptHeaders).filter(Boolean).join(',')
}
