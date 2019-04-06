module.exports = authenticationRequestError

const HttpError = require('@octokit/request/lib/http-error')

function authenticationRequestError (state, error, options) {
  if (!error.headers) throw error

  const otpRequired = /required/.test(error.headers['x-github-otp'] || '')
  // handle "2FA required" error only
  if (error.status !== 401 || !otpRequired) {
    throw error
  }

  if (error.status === 401 && otpRequired && error.request && error.request.headers['x-github-otp']) {
    if (state.otp) {
      delete state.otp // no longer valid, request again
    } else {
      throw new HttpError('Invalid one-time password for two-factor authentication', 401, error.headers, options)
    }
  }

  if (typeof state.auth.on2fa !== 'function') {
    throw new HttpError('2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication', 401, error.headers, options)
  }

  return Promise.resolve()
    .then(() => {
      return state.auth.on2fa()
    })
    .then((oneTimePassword) => {
      const newOptions = Object.assign(options, {
        headers: Object.assign(options.headers, { 'x-github-otp': oneTimePassword })
      })
      return state.octokit.request(newOptions)
        .then(response => {
          // If OTP still valid, then persist it for following requests
          state.otp = oneTimePassword
          return response
        })
    })
}
