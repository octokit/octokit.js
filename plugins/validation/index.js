module.exports = validationPlugin

const beforeRequest = require('./before-request')

function validationPlugin (github) {
  github.hook.before('request', beforeRequest)
}
