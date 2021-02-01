---
title: "Authentication"
---

Authentication is optional for some REST API endpoints accessing public data, but is required for GraphQL queries. Using authentication also increases your [API rate limit](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting).

GitHub supports different authentication strategies:

1. **Personal access token** ([create](https://github.com/settings/tokens/new)). This is the default authentication strategy. Set the `options.auth` option to the token in `new Octokit(options)`. Learn more about the built-in [`@octokit/auth-token` authentication strategy](https://github.com/octokit/auth-token.js).
2. **OAuth Apps**: authenticate using user access token created by an OAuth app, to which you granted selected permissions, or as the OAuth App itself (OAuth using `client_id` and `client_secret`). Learn more about the optional [`@octokit/auth-oauth-app` authentication strategy](https://github.com/octokit/auth-oauth-app.js)
3. **GitHub Apps**: authenticate using an installation access token or as GitHub App itself. Learn more about the optional [`@octokit/auth-app` authentication strategy](https://github.com/octokit/auth-app.js/).
4. **GitHub Actions**: authenticate using the `GITHUB_TOKEN` secret which is provided to GitHub Actions Workflows. Learn more about the optional [`@octokit/auth-action` authentication strategy](https://github.com/octokit/auth-action.js).

Learn more about all official and community [authentication strategies](https://github.com/octokit/auth.js#readme).

By default, `@octokit/rest` authenticates using the [token authentication strategy](https://github.com/octokit/auth-token.js). Pass in a token using `options.auth`. It can be a personal access token, an OAuth token, an installation access token or a JSON Web Token for GitHub App authentication. The `Authorization` request header will be set according to the type of token.

```js
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "mypersonalaccesstoken123",
});

// sends request with `Authorization: token mypersonalaccesstoken123` header
const { data } = await octokit.request("/user");
```

To use a different authentication strategy, set `options.authStrategy`.
Here is an example for GitHub App authentication

```js
const { Octokit } = require("@octokit/rest");
const { createAppAuth } = require("@octokit/auth-app");

const appOctokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: 123,
    privateKey: process.env.PRIVATE_KEY,
    // optional: this will make appOctokit authenticate as app (JWT)
    //           or installation (access token), depending on the request URL
    installationId: 123,
  },
});

const { data } = await appOctokit.request("/app");
```

The `.auth()` method returned by the current authentication strategy can be accessed at `octokit.auth()`. Example

```js
const { token } = await appOctokit.auth({
  type: "installation",
  // defaults to `options.auth.installationId` set in the constructor
  installationId: 123,
});
```
