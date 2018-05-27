module.exports = deprecate

const logDeprecationMessage = require('../../deprecate')

function deprecate (func, message) {
  return function () {
    logDeprecationMessage(message)
    return func.apply(null, arguments)
  }
}
