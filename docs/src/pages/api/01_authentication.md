---
title: "Authentication"
---

Authentication is optional for some REST API endpoints accessing public data, but is required for GraphQL queries. Using authentication also increases your [API rate limit](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting).

By default, Octokit authenticates using the [token authentication strategy](https://github.com/octokit/auth-token.js). Pass in a token using `options.auth`. It can be a personal access token, an OAuth token, an installation access token or a JSON Web Token for GitHub App authentication. The `Authorization` header will be set according to the type of token.

```js
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "mypersonalaccesstoken123",
});

const { data } = await octokit.request("/user");
```

_**Note:** Calling methods outside of the scope of the specific token will result in an `HttpError` with `Bad Credentials` as a message._

To use a different authentication strategy, set `options.authStrategy`. The officially supported authentication strategies are listed on the [`@octokit/auth` README](https://github.com/octokit/auth.js#readme).

Here is an example for GitHub App authentication

```js
const { Octokit } = require("@octokit/rest");
const { createAppAuth } = require("@octokit/auth-app");

const appOctokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    id: 123,
    privateKey: process.env.PRIVATE_KEY,
  },
});

const { data } = await appOctokit.request("/app");
```

_**Note:** In order to automatically switch between `App` and `Installation` authentication scopes based on the method called on the resulting instance, it is possible to also add `installationId` to the `auth` object._

The `.auth()` method returned by the current authentication strategy can be accessed at `octokit.auth()`. Example

```js
const { token } = await appOctokit.auth({
  type: "installation",
  installationId: 123,
});
```
