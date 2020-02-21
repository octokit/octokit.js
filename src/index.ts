import { Octokit as Core } from "@octokit/core";
import { requestLog } from "@octokit/plugin-request-log";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import { OctokitPlugin } from "@octokit/core/dist-types/types"

import { VERSION } from "./version";

export const Octokit = Core
  .plugin<typeof Octokit, OctokitPlugin[]>([requestLog, paginateRest, restEndpointMethods])
  .defaults({
    userAgent: `octokit-rest.js/${VERSION}`
  });
