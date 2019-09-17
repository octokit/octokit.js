---
title: "Custom requests"
---

To send custom requests you can use the lower-level `octokit.request()` method

```js
octokit.request("GET /");
```

The `baseUrl`, headers and other defaults are already set. For more information on the `octokit.request()` API see [`octokit/request.js`](https://github.com/octokit/request.js/)

All the endpoint methods such as `octokit.repos.get()` are aliases of `octokit.request()` with pre-bound default options. So you can use the `@octokit/request` API to get the default options or get generic request option to use with your preferred request library.

```js
const defaultOptions = octokit.repos.get.endpoint.DEFAULTS;
const requestOptions = octokit.repos.get.endpoint({
  owner: "octokit",
  repo: "rest.js"
});
```

Note that authentication is not applied when retrieving request options from the `*.endpoint` APIs.
