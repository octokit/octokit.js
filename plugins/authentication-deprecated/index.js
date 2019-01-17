module.exports = authenticationPlugin

const authenticate = require('./authenticate')
const beforeRequest = require('./before-request')
const requestError = require('./request-error')

function authenticationPlugin (octokit, options) {
  if (options.auth) {
    octokit.authenticate = () => {
      octokit.log.warn(new Error('octokit.authenticate() is deprecated and has no effect when "auth" option is set on Octokit constructor'))
    }
    return
  }
  const state = {
    octokit,
    auth: false
  }
  octokit.authenticate = authenticate.bind(null, state)
  octokit.hook.before('request', beforeRequest.bind(null, state))
  octokit.hook.error('request', requestError.bind(null, state))
}
