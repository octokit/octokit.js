import { Octokit as Core } from "@octokit/core";
import { requestLog } from "@octokit/plugin-request-log";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";

import { VERSION } from "./version";

export const Octokit = Core.plugin([
  // Workaround to prevent TypeScript from widening the inferred return type of
  // plugins passed to Octokit, which would result in type information (e.g.
  // methods provided by plugins) not being added to Octokit instances.
  //
  // See https://github.com/octokit/core.js/issues/51#issuecomment-596846088
  (requestLog as unknown) as () => void,
  restEndpointMethods,
  paginateRest
]).defaults({
  userAgent: `octokit-rest.js/${VERSION}`
});
