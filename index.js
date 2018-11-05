const Octokit = require('./lib/core')

const CORE_PLUGINS = [
  require('./plugins/authentication'),
  require('./plugins/pagination'),
  require('./plugins/register-endpoints'),
  require('./plugins/rest-api-endpoints'),
  require('./plugins/validate')
]

module.exports = Octokit.plugin(CORE_PLUGINS)
