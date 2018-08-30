module.exports = authenticationBeforeRequest

const btoa = require('btoa-lite')
const jsonwebtoken = require('jsonwebtoken')
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
      options = optionsForAppToken(options, state.auth.token)
      return
    }

    // If we have an appId but no installationId then authenticate as the app,
    // using a token generated from the private key
    if (!state.auth.installationId) {
      options = optionsForAppToken(options, jwt(state.auth.appId, state.auth.privateKey))
      return
    }

    // If we're dealing with a particular installation then we have use the
    // token for that installation

    // If we have a token stored in the cache then use it
    const cacheKey = state.auth.appId + ':' + state.auth.installationId
    const token = state.credentialCache.get(cacheKey)
    if (token) {
      options = optionsForAppToken(options, token)
      return
    }

    // Otherwise we have to get an installation token while authed as the
    // application, use it for the current request and store it to avoid
    // rerequesting it on future requests
    return (octokit.apps.createInstallationToken({
      installation_id: state.auth.installationId,
      headers: {
        'accept': 'application/vnd.github.machine-man-preview+json',
        'authorization': `Bearer ${jwt(state.auth.appId, state.auth.privateKey)}`
      }
    }).then(response => {
      const token = response.data.token
      // Cache for one minute (60000ms) less than how long the response says the
      // token is valid for. This reduces the risk of using an expired token
      const tokenDurationInMs = new Date(response.data.expires_at) - new Date()
      const cacheDurationInMs = tokenDurationInMs - 60000

      state.credentialCache.set(cacheKey, token, cacheDurationInMs)
      options = optionsForAppToken(options, token)
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

function jwt (id, pem) {
  const payload = {
    iat: Math.floor(new Date() / 1000), // Issued at time
    exp: Math.floor(new Date() / 1000) + 60, // JWT expiration time
    iss: id // Integration's GitHub id
  }

  // Sign with RSA SHA256
  return jsonwebtoken.sign(payload, pem, {algorithm: 'RS256'})
}

function optionsForAppToken (options, token) {
  options.headers['authorization'] = `Bearer ${token}`
  const acceptHeaders = options.headers['accept'].split(',')
    .concat('application/vnd.github.machine-man-preview+json')
  options.headers['accept'] = uniq(acceptHeaders).filter(Boolean).join(',')

  return options
}
