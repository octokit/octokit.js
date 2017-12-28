module.exports = GitHubApi

const authenticate = require('./lib/authenticate')
const parseClientOptions = require('./lib/parse-client-options')
const setupApiMethods = require('./lib/setup')
const paginationApi = require('./lib/pagination')

const PREVIEW_HEADER_BY_PATH = require('./lib/definitions/preview-header-by-path.json')

function GitHubApi (options) {
  const state = parseClientOptions(options)
  state.previewHeaderByPath = PREVIEW_HEADER_BY_PATH
  const routesApi = setupApiMethods(state)

  return Object.assign(routesApi, paginationApi, {
    authenticate: authenticate.bind(null, state)
  })
}
