module.exports = deprecate

const depd = require('depd')('@octokit/rest')

function deprecate (fn, message) {
  return depd.function(fn, message)
}
