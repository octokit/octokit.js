module.exports = authenticationPlugin

const authenticate = require('./authenticate')
const beforeRequest = require('./before-request')

function authenticationPlugin (github) {
  const state = {
    auth: false
  }
  github.authenticate = authenticate.bind(null, state)
  github.hook.before('request', beforeRequest.bind(null, state))
}
