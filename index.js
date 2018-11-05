const factory = require('./lib/factory')

const CORE_PLUGINS = [
  require('./plugins/authentication'),
  require('./plugins/pagination'),
  require('./plugins/register-endpoints'),
  require('./plugins/rest-api-endpoints'),
  require('./plugins/validate')
]

module.exports = factory(CORE_PLUGINS)
