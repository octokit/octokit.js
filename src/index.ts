import { Octokit as Core } from "@octokit/core";
import { requestLog } from "@octokit/plugin-request-log";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { legacyRestEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
export { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";

import { VERSION } from "./version";

export const Octokit = Core.plugin(
  requestLog,
  legacyRestEndpointMethods,
  paginateRest
).defaults({
  userAgent: `octokit-rest.js/${VERSION}`,
});

export type Octokit = InstanceType<typeof Octokit>;
