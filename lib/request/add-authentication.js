module.exports = addAuthentication

function addAuthentication (state, requestOptions) {
  if (!state.auth) {
    return
  }

  if (state.auth.type === 'basic') {
    const hash = Buffer.from(
      `${state.auth.username}:${state.auth.password}`, 'ascii'
    ).toString('base64')
    requestOptions.headers['Authorization'] = `Basic ${hash}`
    return
  }

  if (state.auth.type === 'token') {
    requestOptions.headers['Authorization'] = `token ${state.auth.token}`
    return
  }

  if (state.auth.type === 'integration') {
    requestOptions.headers['Authorization'] = `Bearer ${state.auth.token}`
    requestOptions.headers['accept'] = 'application/vnd.github.machine-man-preview+json'
    return
  }

  requestOptions.path += requestOptions.path.indexOf('?') === -1 ? '?' : '&'

  if (state.auth.token) {
    requestOptions.path += `access_token=${encodeURIComponent(state.auth.token)}`
    return
  }

  const key = encodeURIComponent(state.auth.key)
  const secret = encodeURIComponent(state.auth.secret)
  requestOptions.path += `client_id=${key}&client_secret=${secret}`
}
