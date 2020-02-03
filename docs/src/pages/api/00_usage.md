---
title: "Usage"
---

Import the Octokit constructor.

For direct usage in browsers, download `octokit-rest.min.js` from the [latest release](https://github.com/octokit/rest.js/releases/latest) and import it using a `<script src="octokit-rest.min.js"></script>` tag.

```js
const { Octokit } = require("@octokit/rest");
```

Now instantiate your octokit API. All options are optional, but authentication is strongly encouraged.

```js
const octokit = Octokit({
```

You can set `auth` to a personal access token string.

Learn more about [authentication](#authentication).

```js
  auth: "secret123",
```

Setting a user agent [is required](https://developer.github.com/v3/#user-agent-required). It defaults to `octokit/rest.js v1.2.3` where `v1.2.3` is the current version of `@octokit/rest`, but you should set it to something that identifies your app or script.

```js
  userAgent: 'myApp v1.2.3',
```

API Previews can be enabled globally by setting the `previews` option. They can be set per-request as well.

Learn more about [API Previews](#previews).

```js
  previews: ['jean-grey', 'symmetra'],
```

A default time zone can be enabled by setting the `timeZone` option.

```js
  timeZone: 'Europe/Amsterdam',
```

Learn more about [using time zones with the GitHub API](https://developer.github.com/v3/#using-the-time-zone-header).

In order to use Octokit with GitHub Enterprise, set the `baseUrl` option.

```js
  baseUrl: 'https://api.github.com',
```

For custom logging, pass an object with `debug`, `info`, `warn` and `error` methods as the `log` option.

Learn more about [logging](#logging) and [debugging](#debug).

```js
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error
  },
```

Custom request options can be passed as `request.*` options. See [`@octokit/request`](https://www.npmjs.com/package/@octokit/request#octokitrequest) options. The same options can be passed to each endpoint request method.

```js
  request: {
    agent: undefined,
    fetch: undefined,
    timeout: 0
  }
})
```

Most of GitHub’s REST API endpoints have matching methods. All endpoint methods are asynchronous, in order to use `await` in the code examples, we wrap them into an anonymous async function.

```js
(async () => {
```

For example to retrieve a pull request, use [`octokit.pulls.get()`](#octokit-routes-pulls-get). We recommend to use the search above to find the endpoint method you are looking for

```js
const { data: pullRequest } = await octokit.pulls.get({
  owner: "octokit",
  repo: "rest.js",
  pull_number: 123
});
```

Some API endpoints support alternative response formats, see [Media types](https://developer.github.com/v3/media/). For example, to [`request the above pull request in a diff format`](https://developer.github.com/v3/media/#diff), pass the `mediaType.format` option.

Learn more about [request formats](#request-formats)

```js
const { data: diff } = await octokit.pulls.get({
  owner: "octokit",
  repo: "rest.js",
  pull_number: 123,
  mediaType: {
    format: "diff"
  }
});
```

For the API endpoints that do not have a matching method, such as the [root endpoint](https://developer.github.com/v3/#root-endpoint) or legacy endpoints, you can send custom requests.

Learn more about [custom requests](#custom-requests).

```js
const { data: root } = await octokit.request("GET /");
```

You can also register custom endpoint methods, which is particularly useful if you participate in a private beta.

Learn more about [custom endpoint methods](#custom-endpoint-methods).

```js
await octokit.registerEndpoints({
  misc: {
    getRoot: {
      method: "GET",
      url: "/"
    }
  }
});
```

Some endpoints return a list which has to be paginated in order to retrieve the complete data set.

Learn more about [pagination](#pagination).

```js
  const options = octokit.issues.listForRepo.endpoint.merge({
    owner: 'octokit',
    repo: 'rest.js'
  })
  octokit.paginate(options)
    .then(issues => {
      // issues is an array of all issue objects
    })
})
```

You can add more functionality with plugins. We recommend the retry and throttling plugins.

Learn more about [throttling](#throttling), [automatic retries](#automatic-retries) and building your own [Plugins](#plugins).

```js
import plugin as retry from '@octokit/plugin-retry'
import plugin as throttling from '@octokit/plugin-throttling'

const MyOctokit = Octokit.plugin([
  retry,
  throttling
])
```

`Octokit.plugin()` returns a new constructor. The same options can be passed to the constructor. The options are passed on to all plugin functions as the 2nd argument

```js
const myOctokit = new MyOctokit({
  auth: "secret123",
  throttle: {
    onRateLimit: (retryAfter, options) => {
      myOctokit.log.warn(
        `Request quota exhausted for request ${options.method} ${options.url}`
      );

      if (options.request.retryCount === 0) {
        // only retries once
        myOctokit.log.info(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onAbuseLimit: (retryAfter, options) => {
      // does not retry, only logs a warning
      myOctokit.log.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      );
    }
  },
  retry: {
    doNotRetry: ["429"]
  }
});
```

```js
const octokit = require("@octokit/rest");

// Compare: https://developer.github.com/v3/repos/#list-organization-repositories
octokit.repos
  .listForOrg({
    org: "octokit",
    type: "public"
  })
  .then(({ data, headers, status }) => {
    // handle data
  });
```
