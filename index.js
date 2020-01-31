const { requestLog } = require("@octokit/plugin-request-log");
const { paginateRest } = require("@octokit/plugin-paginate-rest");
const {
  restEndpointMethods
} = require("@octokit/plugin-rest-endpoint-methods");

function paginatePlugin(octokit) {
  Object.assign(octokit, paginateRest(octokit));
}

function restEndpointMethodsPlugin(octokit) {
  Object.assign(octokit, restEndpointMethods(octokit));
}

const Octokit = require("./lib/core");

const CORE_PLUGINS = [
  require("./plugins/authentication"),
  require("./plugins/authentication-deprecated"), // deprecated: remove in v17
  requestLog,
  paginatePlugin,
  restEndpointMethodsPlugin,
  require("octokit-pagination-methods") // deprecated: remove in v17
];

module.exports = Octokit.plugin(CORE_PLUGINS);
