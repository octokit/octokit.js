import { Octokit as OctokitCore } from "@octokit/core";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";

import { VERSION } from "./version";

export { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";

export const Octokit = OctokitCore.plugin(
  restEndpointMethods,
  paginateRest,
  retry,
  throttling
).defaults({
  userAgent: `octokit.js/${VERSION}`,
  throttle: {
    onRateLimit,
    onSecondaryRateLimit,
  },
});

// istanbul ignore next no need to test internals of the throttle plugin
function onRateLimit(retryAfter: number, options: any, octokit: any) {
  octokit.log.warn(
    `Request quota exhausted for request ${options.method} ${options.url}`
  );

  if (options.request.retryCount === 0) {
    // only retries once
    octokit.log.info(`Retrying after ${retryAfter} seconds!`);
    return true;
  }
}

// istanbul ignore next no need to test internals of the throttle plugin
function onSecondaryRateLimit(retryAfter: number, options: any, octokit: any) {
  octokit.log.warn(
    `SecondaryRateLimit detected for request ${options.method} ${options.url}`
  );

  if (options.request.retryCount === 0) {
    // only retries once
    octokit.log.info(`Retrying after ${retryAfter} seconds!`);
    return true;
  }
}

export type Octokit = InstanceType<typeof Octokit>;
