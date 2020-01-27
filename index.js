const { requestLog } = require("@octokit/plugin-request-log");
const {
  restEndpointMethods
} = require("@octokit/plugin-rest-endpoint-methods");

const Octokit = require("./lib/core");

const CORE_PLUGINS = [
  require("./plugins/authentication"),
  require("./plugins/authentication-deprecated"), // deprecated: remove in v17
  requestLog,
  require("./plugins/pagination"),
  restEndpointMethods,
  require("./plugins/validate"),

  require("octokit-pagination-methods") // deprecated: remove in v17
];

module.exports = Octokit.plugin(CORE_PLUGINS);
