const Octokit = require('./lib/core')

const CORE_PLUGINS = [
  require('./plugins/authentication'),
  require('./plugins/pagination'),
  require('./plugins/register-endpoints'),
  require('./plugins/rest-api-endpoints'),
  require('./plugins/validate'),

  // deprecated: remove in v17
  require('octokit-pagination-methods')
]

module.exports = Octokit.plugin(CORE_PLUGINS)
