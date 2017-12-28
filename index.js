module.exports = GitHubApi

const authenticate = require('./lib/authenticate')
const parseOptions = require('./lib/parse-options')
const setupApiMethods = require('./lib/setup-api-methods')
const paginationApi = require('./lib/pagination')

const PARAMS = require('./lib/definitions/params.json')
const PREVIEW_HEADER_BY_PATH = require('./lib/definitions/preview-header-by-path.json')

function GitHubApi (options) {
  const state = parseOptions(options)
  state.params = PARAMS
  state.previewHeaderByPath = PREVIEW_HEADER_BY_PATH
  const routesApi = setupApiMethods(state)

  return Object.assign(routesApi, paginationApi, {
    authenticate: authenticate.bind(null, state)
  })
}
