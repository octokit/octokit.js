module.exports = GitHubApi

const authenticate = require('./lib/authenticate')
const parseOptions = require('./lib/parse-options')
const setupRoutes = require('./lib/setup-routes')
const paginationApi = require('./lib/pagination')

const DEFINITIONS = require('./lib/definitions/misc.json')
const ROUTES = require('./lib/definitions/routes.json')
const PREVIEW_HEADER_BY_PATH = require('./lib/definitions/preview-header-by-path.json')

function GitHubApi (options) {
  const state = parseOptions(options)
  state.definitions = DEFINITIONS
  state.routes = ROUTES
  state.previewHeaderByPath = PREVIEW_HEADER_BY_PATH
  const routesApi = setupRoutes(state)
  return Object.assign(routesApi, paginationApi, {
    authenticate: authenticate.bind(null, state)
  })
}
