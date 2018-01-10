module.exports = authenticationPlugin

const authenticate = require('./authenticate')
const beforeRequest = require('./before-request')

function authenticationPlugin (github) {
  const authState = {}
  github.authenticate = authenticate.bind(null, authState)
  github.hook.before('request', beforeRequest.bind(null, authState))
}
