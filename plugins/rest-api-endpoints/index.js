module.exports = octokitRestApiEndpoints

const ROUTES = require('./routes.json')

function octokitRestApiEndpoints (octokit) {
  octokit.registerEndpoints(ROUTES)
}
