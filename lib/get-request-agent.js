module.exports = getRequestAgent

const pick = require('lodash/pick')
const DEFAULTS = require('./defaults')

function getRequestAgent (options) {
  if (options.agent) {
    return options.agent
  }

  const agentOptions = ['ca', 'proxy', 'rejectUnauthorized', 'family'].filter(key => key in options)

  if (agentOptions.length === 0) {
    return
  }

  agentOptions.forEach(option => {
    console.warn(`options.${option} is deprecated. Use "options.agent" instead`)
  })
  const Agent = require(options.protocol || DEFAULTS.protocol).Agent

  return new Agent(pick(options, agentOptions))
}
