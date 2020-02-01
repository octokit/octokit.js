const { Octokit } = require("@octokit/core");

const { requestLog } = require("@octokit/plugin-request-log");
const { paginateRest } = require("@octokit/plugin-paginate-rest");
const {
  restEndpointMethods
} = require("@octokit/plugin-rest-endpoint-methods");

const { version } = require("./package.json");

module.exports = Octokit.plugin([
  requestLog,
  paginateRest,
  restEndpointMethods
]).defaults({
  userAgent: `octokit-rest.js/${version}`
});
