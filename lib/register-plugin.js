module.exports = registerPlugin

const factory = require('./factory')

function registerPlugin (plugins, pluginFunction) {
  return factory(plugins.concat(pluginFunction))
}
