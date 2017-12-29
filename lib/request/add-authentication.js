module.exports = addAuthentication

function addAuthentication (state, requestOptions) {
  if (!state.auth) {
    return
  }

  switch (state.auth.type) {
    case 'oauth':
      if (state.auth.token) {
        requestOptions.path += (requestOptions.path.indexOf('?') === -1 ? '?' : '&') +
                        'access_token=' + encodeURIComponent(state.auth.token)
      } else {
        requestOptions.path += (requestOptions.path.indexOf('?') === -1 ? '?' : '&') +
                        'client_id=' + encodeURIComponent(state.auth.key) +
                        '&client_secret=' + encodeURIComponent(state.auth.secret)
      }
      break
    case 'token':
      requestOptions.headers['Authorization'] = 'token ' + state.auth.token
      break
    case 'integration':
      requestOptions.headers['Authorization'] = 'Bearer ' + state.auth.token
      requestOptions.headers['accept'] = 'application/vnd.github.machine-man-preview+json'
      break
    case 'basic':
      requestOptions.headers['Authorization'] = 'Basic ' + Buffer.from(state.auth.username + ':' + state.auth.password, 'ascii').toString('base64')
      break
  }
}
