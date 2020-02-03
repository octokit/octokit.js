---
title: "Throttling"
---

When you send too many requests in too little time you will likely hit errors due to rate and/or abuse limits.

In order to automatically throttle requests as recommended in [GitHub’s best practices for integrators](https://developer.github.com/v3/guides/best-practices-for-integrators/), we recommend you install the [`@octokit/plugin-throttling` plugin](https://github.com/octokit/plugin-throttling.js).

The `throttle.onAbuseLimit` and `throttle.onRateLimit` options are required. Return `true` to automatically retry the request after `retryAfter` seconds.

```js
const { Octokit } = require("@octokit/rest");
const MyOctokit = Octokit.plugin(require("@octokit/plugin-throttling"));

const octokit = new MyOctokit({
  auth: "token " + process.env.TOKEN,
  throttle: {
    onRateLimit: (retryAfter, options) => {
      octokit.log.warn(
        `Request quota exhausted for request ${options.method} ${options.url}`
      );

      if (options.request.retryCount === 0) {
        // only retries once
        console.log(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onAbuseLimit: (retryAfter, options) => {
      // does not retry, only logs a warning
      octokit.log.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      );
    }
  }
});
```
