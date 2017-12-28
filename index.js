module.exports = GitHubApi

const authenticate = require('./lib/authenticate')
const parseOptions = require('./lib/parse-options')
const setupApiMethods = require('./lib/setup')
const paginationApi = require('./lib/pagination')

const PREVIEW_HEADER_BY_PATH = require('./lib/definitions/preview-header-by-path.json')

function GitHubApi (options) {
  const state = parseOptions(options)
  state.previewHeaderByPath = PREVIEW_HEADER_BY_PATH
  const routesApi = setupApiMethods(state)

  return Object.assign(routesApi, paginationApi, {
    authenticate: authenticate.bind(null, state)
  })
}
