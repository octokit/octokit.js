import { Octokit as Core } from "@octokit/core";
import { requestLog } from "@octokit/plugin-request-log";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";

import { VERSION } from "./version";

export const Octokit = Core.plugin([
  (requestLog as unknown) as () => void,
  restEndpointMethods,
  paginateRest
]).defaults({
  userAgent: `octokit-rest.js/${VERSION}`
});
