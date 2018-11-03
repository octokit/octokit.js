const factory = require('./lib/factory')

const CORE_PLUGINS = [
  require('./plugins/authentication'),
  require('./plugins/endpoint-methods'),
  require('./plugins/pagination')
]

module.exports = factory(CORE_PLUGINS)
