module.exports = GitHubApi

const authenticate = require('./lib/authenticate')
const parseClientOptions = require('./lib/parse-client-options')
const setupApiMethods = require('./lib/setup')
const paginationApi = require('./lib/pagination')

function GitHubApi (options) {
  const state = parseClientOptions(options)
  const routesApi = setupApiMethods(state)

  return Object.assign(routesApi, paginationApi, {
    authenticate: authenticate.bind(null, state)
  })
}
