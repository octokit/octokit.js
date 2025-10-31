import { Octokit as OctokitCore } from "@octokit/core";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { paginateGraphQL } from "@octokit/plugin-paginate-graphql";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";

import { VERSION } from "./version.js";
import type { EndpointDefaults } from "@octokit/types";

export { RequestError } from "@octokit/request-error";
export type {
  PageInfoForward,
  PageInfoBackward,
} from "@octokit/plugin-paginate-graphql";

export const Octokit = OctokitCore.plugin(
  restEndpointMethods,
  paginateRest,
  paginateGraphQL,
  retry,
  throttling,
).defaults({
  userAgent: `octokit.js/${VERSION}`,
  throttle: {
    onRateLimit,
    onSecondaryRateLimit,
  },
});

export type Octokit = InstanceType<typeof Octokit>;

/* v8 ignore next no need to test internals of the throttle plugin -- @preserve */
function onRateLimit(
  retryAfter: number,
  options: Required<EndpointDefaults>,
  octokit: InstanceType<typeof OctokitCore>,
) {
  octokit.log.warn(
    `Request quota exhausted for request ${options.method} ${options.url}`,
  );

  if (options.request.retryCount === 0) {
    // only retries once
    octokit.log.info(`Retrying after ${retryAfter} seconds!`);
    return true;
  }
}

/* v8 ignore next no need to test internals of the throttle plugin -- @preserve */
function onSecondaryRateLimit(
  retryAfter: number,
  options: Required<EndpointDefaults>,
  octokit: InstanceType<typeof OctokitCore>,
) {
  octokit.log.warn(
    `SecondaryRateLimit detected for request ${options.method} ${options.url}`,
  );

  if (options.request.retryCount === 0) {
    // only retries once
    octokit.log.info(`Retrying after ${retryAfter} seconds!`);
    return true;
  }
}
