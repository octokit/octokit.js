module.exports = authenticationPlugin

const authenticate = require('./authenticate')
const beforeRequest = require('./before-request')
const requestError = require('./request-error')

function authenticationPlugin (octokit) {
  const state = {
    octokit,
    auth: false
  }
  octokit.authenticate = authenticate.bind(null, state)
  octokit.hook.before('request', beforeRequest.bind(null, state))
  octokit.hook.error('request', requestError.bind(null, state))
}
