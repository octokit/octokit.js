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

const OctokitRest = Octokit.plugin(CORE_PLUGINS);

function DeprecatedOctokit(options) {
  const warn =
    options.log && options.log.warn ? options.log.warn : console.warn;
  warn(
    '[@octokit/rest] `const Octokit = require("@octokit/rest")` is deprecated. Use `const { Octokit } = require("@octokit/rest")` instead'
  );
  return new OctokitRest(options);
}

module.exports = Object.assign(DeprecatedOctokit, {
  Octokit: OctokitRest
});
