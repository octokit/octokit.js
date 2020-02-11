# 🚧 THIS IS WORK IN PROGRESS

This package will integrate several standalone packages for the all-batteries-included JavaScript Octokit package :)

- [x] REST API: [`@octokit/rest`](https://github.com/octokit/rest.js/#readme)
- [x] GraphQL API: [`@octokit/graphql`](https://github.com/octokit/graphql.js#readme)
- [ ] OAuth: [`@octokit/auth-oauth-app`](https://github.com/octokit/auth-oauth-app.js#readme) and [`@octokit/oauth-login-url`](https://github.com/octokit/oauth-login-url.js) and TBD: [`@octokit/oauth-app`](#), [`@octokit/auth-oauth-client`](#todo-oauth-client)
- [x] Webhooks: `@octokit/webhooks`
- [ ] Apps
- [x] Actions: [`@octokit/action`](https://github.com/octokit/action.js/#readme)

# octokit.js

> Official GitHub Platform client for Node.js & Browsers

[![@latest](https://img.shields.io/npm/v/octokit.svg)](https://www.npmjs.com/package/octokit)
[![Build Status](https://travis-ci.com/octokit/octokit.js.svg?branch=master)](https://travis-ci.com/octokit/octokit.js)
[![Coverage Status](https://coveralls.io/repos/github/octokit/octokit.js/badge.svg)](https://coveralls.io/github/octokit/octokit.js)
[![Greenkeeper](https://badges.greenkeeper.io/octokit/octokit.js.svg)](https://greenkeeper.io/)

- Complete support for GitHub’s [v3 REST API](https://developer.github.com/v3/), [v4 GraphQL API](https://developer.github.com/v4/), [Webhooks](https://developer.github.com/webhooks/), [OAuth](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/), [Apps](https://developer.github.com/apps/) and [Actions](https://developer.github.com/actions/)
- Support for all current browsers and Node.js versions
- Implements GitHub’s [best practices for integrators](https://developer.github.com/v3/guides/best-practices-for-integrators/)
- [Typescript](https://www.typescriptlang.org/) definitions
- Decomposable & extendable

## Table of contents

<!-- toc -->

- [Usage](#usage)
- [Options](#options)
- [Authentication](#authentication)
- [v3 REST API](#v3-rest-api)
- [GraphQL API](#graphql-api)
- [OAuth](#oauth)
- [Webhooks](#webhooks)
- [GitHub Apps](#github-apps)
- [GitHub Actions](#github-actions)
- [LICENSE](#license)

<!-- tocstop -->

## Usage

With Browsers

```html
<script type="module">
  import { Octokit } from "https://cdn.pika.dev/@octokit/core";
  const octokit = new Octokit({ auth: GITHUB_TOKEN });
</script>
```

With Node

```js
// npm install octokit
const { Octokit } = require("octokit");
const client = new Octokit({ auth: process.env.GITHUB_TOKEN });
```

## Options

See https://github.com/octokit/core.js#options

## Authentication

See https://github.com/octokit/core.js#authentication

## v3 REST API

See https://octokit.github.io/rest.js/

```js
octokit.rest.repos.listForOrg({ org: "octokit" });
```

## GraphQL API

See https://github.com/octokit/graphql.js/

```js
octokit.graphql(`{
  viewer {
    login
  }
}`);
```

## OAuth

Both OAuth Apps and GitHub Apps support authenticating GitHub users using OAuth, see [Authorizing OAuth Apps](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps) and [Identifying and authorizing users for GitHub Apps](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

To authenticate, a user needs to confirm their identity on a URL hosted by GitHub. This URL can be retrieved using `app.oauthLoginUrl()`

```js
import { App } from "octokit";

const app = new OctokitApp({ clientId, clientSecret });
const { url, state } = app.oauthLoginUrl();
// url looks like this: https://github.com/login/oauth/authorize?client_id=...
// state is a random string that you need to store for code verification later
```

**Tip:** The `oauthLoginUrl()` exists as standalone package, too: [`@octokit/oauth-login-url`](https://github.com/octokit/oauth-login-url.js).

`app.middleware` is also exposing a special `GET /api/github/oauth/login` path which redirects to the same URL

```js
const app = new OctokitApp({ clientId: "abc4567", clientSecret });
require("http")
  .createServer(app.middleware)
  .listen(3000);
// e.g. `GET http://localhost:3000/api/github/oauth/login` redirects to https://github.com/login/oauth/authorize?client_id=abc4567
```

After the user authenticated, they get redirected to the `(User) Authorization callback URL` which is configured in the app's settings. If you set it to `<your apps domain>/api/github/oauth/callback`, then an `"oauth-access-token"` event gets emitted which you can handle with

```js
app.oauth.on("token", ({ token, octokit }) => {
  // token is the OAuth access token itself
  // client is a pre-authorized `octokit` instance
});
```

If you set `(User) Authorization callback URL` to your own app, than you need to read out the `?code=...&state=...` query parameters, compare the `state` parameter to the value returned by `app.oauthLoginUrl()` earlier to protect against forgery attacks, then send the `code` parameter to `POST /api/github/oauth/token` which will respond with the OAuth Access Token if successful. It is also recommended to remove the `?code=...&state=...` query parameters from the browser's URL

```js
const code = new URL(location.href).searchParams.get("code");
if (code) {
  // remove ?code=... from URL
  const path =
    location.pathname +
    location.search.replace(/\bcode=\w+/, "").replace(/\?$/, "");
  history.pushState({}, "", path);

  // from your front-end app
  const { token } = await octokit.request(
    "GET <your apps domain>/oauth-login",
    { code }
  );
  // `token` is the OAuth Access Token that can be use
}
```

When the `POST /api/github/oauth/token` was successful, the `oauth-access-token` event is emitted, too.

<a name="todo-oauth-client"></a>

**TODO:** create a `@octokit/oauth-client` module which does the above automagically. Here is how it could work:

```js
import { createOAuthClientAuth } from "https://cdn.pika.dev/@octokit/oauth-client";
const auth = createOAuthClientAuth({
  clientId: "abc4567",
  // optional
  exchangeCodeForToken: async code => {
    const response = await fetch("/api/github/token", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(code)
    });
    const { token } = await response.json();
    return token;
  },
  // optional: persist authentication in local store
  store: {
    async get(clientId) {
      return localStorage.getItem(`${clientId}-auth`);
    },
    async set(clientId, authentication) {
      localStorage.setItem(`${clientId}-auth`, JSON.stringify(authentication));
    },
    async del(clientId) {
      localStorage.removeItem(`${clientId}-auth`);
    }
  }
});

// retrieve token using `exchangeCodeForToken()`
// if ?code=... parameter is not set and authentication cannot be retrievd from the local store,
// then `token` is undefined and `isSignedIn` is set to false`
await { token, isSignedIn, createdAt, scopes } = await auth();

// To sign in, pass {signIn: true}
// To sign out, pass {signOut: true}. If tokens are persisted they are
// removed from store and `DELETE /api/oauth/token` is called. To sign out
// without invalidating the token, pass {signOut: true, offline: true}
// To reset a token, pass {reset: true}
// To revoke access for the OAuth App, pass {revokeAccess: true}
```

**TODO:** Add a new `/client.js` URL to `app.middleware` which will return a pre-authenticated `octokit` client.
You can use `octokit.auth()` to check if a user is signed in, trigger the oauth sign in or sign the user out.

**TODO:** I think server endpoints should be split out, and a few more should be added

- `GET /api/github/oauth/login` will redirect to GitHub's authorization endpoint
- `GET /api/github/oauth/callback` the client redirect endpoint. A redirect to a front-end "success" page could be configured. This is where the `oauth-access-token` event gets triggered
- `POST /api/github/oauth/token` endpoint to exchange an authorization code for an OAuth Access token. If successful, the `oauth-access-token` event gets triggered.
- `GET /api/github/oauth/token` must authenticate using token in `Authorization` header. Check if token is valid. Uses GitHub's [`POST /applications/:client_id/token`](https://developer.github.com/v3/apps/oauth_applications/#check-a-token) endpoint
- `PATCH /api/github/oauth/token` must authenticate using token in `Authorization` header. Resets a token (invalidates current one, returns new token). Uses GitHub's [`PATCH /applications/:client_id/token`](https://developer.github.com/v3/apps/oauth_applications/#reset-a-token) endpoint.
- `DELETE /api/github/oauth/token` must authenticate using token in `Authorization` header. Invalidates current token, basically the equivalent of a logout.
- `DELETE /api/github/oauth/grant` must authenticate using token in `Authorization` header. Revokes the user's grant, basically the equivalent of an uninstall.

## Webhooks

See https://github.com/octokit/webhooks.js/.

```js
import { Webhooks, Octokit } from "octokit";

const webhooks = new Webhooks({
  secret,
  Octokit: Octokit.defaults({ auth: GITHUB_TOKEN })
});
webhooks.on("issue.opened", ({ repo }) => {
  return repo.issues.createComment({ body: "Hello, World!" });
});
require("http")
  .createServer(webhooks.middleware)
  .listen(3000);
```

## GitHub Apps

```js
import { App } from "octokit"
const app = new App({ id, privateKey, clientId, clientSecret, webhooks: { secret } })

// iterate trough all repositories the app has access to and create a dispatch event
// https://developer.github.com/v3/repos/#create-a-repository-dispatch-event
for await (const repo of app.eachRepository.iterator()) {
  await repo.createDispatchEvent({
    event_type: "my_event",
    client_payload: {
      foo: "bar"
    }
  });
  console.log("Event distpatched for %s", repo.full_name);
}

app.webhooks.on("issues.opened", {{id, name, payload, repo}} => {
  // authenticated using installation token
  return repo.issues.createComment({ body: "Hello, World!" })
})

app.oauth.on("token", {{token, client}} => {
  // token is the OAuth access token itself
  // client is a pre-authorized `octokit` instance
})

require("http").createServer(app.middleware).listen(3000)

// `POST /api/github/events` to receive webhook event requests
// + `* /api/github/oauth/*` routes
```

## GitHub Actions

See https://github.com/octokit/action.js

## LICENSE

[MIT](LICENSE)
