module.exports = getRequestAgent

const pick = require('lodash/pick')
const HttpAgent = require('http').Agent
const HttpsAgent = require('https').Agent

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

  var Agent
  /* istanbul ignore if */
  if (options.protocol && options.protocol === 'http') {
    Agent = HttpAgent
  } else {
    Agent = HttpsAgent
  }

  return new Agent(pick(options, agentOptions))
}
