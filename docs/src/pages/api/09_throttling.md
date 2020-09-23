---
title: "Throttling"
---

When you send too many requests in too little time you will likely hit errors due to rate and/or abuse limits.

In order to automatically throttle requests as recommended in [GitHub’s best practices for integrators](https://docs.github.com/en/rest/guides/best-practices-for-integrators), we recommend you install the [`@octokit/plugin-throttling` plugin](https://github.com/octokit/plugin-throttling.js).

The `throttle.onAbuseLimit` and `throttle.onRateLimit` options are required.

Return `true` from these functions to automatically retry the request after `retryAfter` seconds. Return `false` or `undefined` to skip retry and throw the error. For rate limit errors, `retryAfter` defaults to seconds until `X-RateLimit-Reset`. For abuse errors, `retryAfter` defaults to the `retry-after` header but is a minimum of five seconds.

```js
const { Octokit } = require("@octokit/rest");
const { throttling } = require("@octokit/plugin-throttling");
const MyOctokit = Octokit.plugin(throttling);

const octokit = new MyOctokit({
  auth: "token " + process.env.TOKEN,
  throttle: {
    onRateLimit: (retryAfter, options) => {
      octokit.log.warn(
        `Request quota exhausted for request ${options.method} ${options.url}`
      );

      // Retry twice after hitting a rate limit error, then give up
      if (options.request.retryCount <= 2) {
        console.log(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onAbuseLimit: (retryAfter, options) => {
      // does not retry, only logs a warning
      octokit.log.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      );
    },
  },
});
```
