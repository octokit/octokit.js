# 🚧 THIS IS WORK IN PROGRESS

There is no code. This repository is documentation only, laying out what the final `octokit` package should look like.

# octokit.js

> The all-batteries-included GitHub SDK for Browsers, Node.js, and Deno.

The `octokit` package integrates the three main Octokit libraries

1. **API client** (REST API requests, GraphQL API queries, Authentication)
2. **App client** (GitHub App & installations, Webhooks, OAuth)
3. **Action client** (Pre-authenticated API client for single repository)

## Table of contents

<!-- toc -->

- [Features](#features)
- [Usage](#usage)
- [API Client](#api-client)
  - [Options](#options)
  - [Authentication](#authentication)
  - [REST API](#rest-api)
    - [Arbitrary requests](#arbitrary-requests)
    - [Endpoint methods](#endpoint-methods)
    - [Pagination](#pagination)
    - [Media Types](#media-types)
  - [GraphQL API queries](#graphql-api-queries)
- [App client](#app-client)
  - [GitHub App](#github-app)
  - [Webhooks](#webhooks)
    - [Node server example](#node-server-example)
  - [OAuth App](#oauth-app)
    - [Node server example](#node-server-example-1)
    - [OAuth browser example](#oauth-browser-example)
- [Action client](#action-client)
- [LICENSE](#license)

<!-- tocstop -->

## Features

- **Compatible**. Works in all modern browsers, [Node.js](https://nodejs.org/), and [Deno](https://deno.land/).
- **Tested**. All libraries have a 100% test coverage.
- **Typed**. All libraries have extensive TypeScript declarations.
- **Complete**. All features of GitHub's platform APIs are covered. All recommended best practises are implemented.
- **Decomposable**. Use only the code you need. You can build your own Octokit in only a few lines of code or use the underlying static methods. Make your own tradeoff between functionality and bundle size.
- **Extendable**. A feature missing? Add functionalities with plugins, hook into the request or webhook lifecycle or implement your own authentication strategy.

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>
Load <code>octokit</code> directly from <a href="https://cdn.skypack.dev">cdn.skypack.dev</a>
        
```html
<script type="module">
import { Octokit, App } from "https://cdn.skypack.dev/octokit";
</script>
```

</td></tr>
<tr><th>
Deno
</th><td width=100%>
Load <code>octokit</code> directly from <a href="https://cdn.skypack.dev">cdn.skypack.dev</a>
        
```ts
import { Octokit, App, Action } from "https://cdn.skypack.dev/octokit";
```

</td></tr>
<tr><th>
Node 12+
</th><td>

Install with <code>npm install octokit</code>, or <code>yarn add octokit</code>

```js
import { Octokit, App, Action } from "octokit";
```

</td></tr>
<tr><th>
Node 10 and below
</th><td>

Install with <code>npm install octokit</code>, or <code>yarn add octokit</code>

```js
const { Octokit, App, Action } = require("octokit");
```

</td></tr>
</tbody>
</table>

## API Client

```js
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `personal-access-token123` });

// Compare: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
const { data } = await octokit.repos.listForOrg({
  org: "octokit",
  type: "private",
});
```

### Options

TBD, See

1. https://github.com/octokit/core.js#options
2. Throttling options: https://github.com/octokit/plugin-throttling.js/

### Authentication

TBD, See

1. https://github.com/octokit/core.js#authentication
1. https://github.com/octokit/auth.js#readme

### REST API

#### Arbitrary requests

```js
// See https://docs.github.com/en/rest/reference/repos#list-organization-repositories
const response = await octokit.request("GET /orgs/{org}/repos", {
  org: "octokit",
  type: "private",
});
```

#### Endpoint methods

TBD, see https://octokit.github.io/rest.js/

```js
octokit.rest.repos.listForOrg({ org: "octokit" });
```

#### Pagination

TBD, see https://github.com/octokit/plugin-paginate-rest.js

#### Media Types

TBD

### GraphQL API queries

See https://github.com/octokit/graphql.js/

```js
octokit.graphql(`{
  viewer {
    login
  }
}`);
```

## App client

Combines features for

- GitHub Apps
- Webhooks
- OAuth

### GitHub App

```js
import { App } from "octokit";
import { createServer } from "http";

const app = new App({ appId, privateKey });

// retrieve information as the app
const { data } = await app.request("/app");
console.log("authenticated as %s app (%s)", data.name, data.html_url);

// iterate trough all repositories the app has access to and create a dispatch event
// https://docs.github.com/en/rest/reference/repos#create-a-repository-dispatch-event
for await (const { octokit, repository } of app.eachRepository.iterator()) {
  await octokit.rest.repos.createDispatchEvent({
    owner: repository.owner.login,
    repo: repository.name,
    event_type: "my_event",
    client_payload: {
      foo: "bar",
    },
  });
  console.log("Event distpatched for %s", repository.full_name);
}
```

The app can also iterate through repositories using a callback API instead

```js
await app.eachRepository(({ octokit, repository }) => /* ... */)
```

The app can iterate the same way through all installations

```js
for await (const { octokit, installation } of app.eachInstallation.iterator()) { /* ... */ }
await app.eachInstallation(({ octokit, installation }) => /* ... */)
```

The app can retrieve an octokit instance for a specific installation

```js
const { octokit, installation } = await app.asInstallation(123)
await app.asInstallation(123, ({ octokit, installation }) => /* ... */)
```

When sending any request that requires an installation access token, the app attempts to derive the installation from the request

```js
const { data } = app.rest.repos.get({ owner: "octokit", repo: "octokit.js" });
```

The above request will [retrieve the installation for the `octokit/octokit.js` repository](https://docs.github.com/en/free-pro-team@latest/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app) and cache it for future requests to the same repository or the `octokit` org. It will then create an installation access token and cache that as well. Then it will use the retrieved token to authenticate the `GET /repos/octokit/octokit.js` request.

### Webhooks

See https://github.com/octokit/webhooks.js/.

```js
import { App } from "octokit";

const app = new App({
  appId,
  privateKey,
  webhooks: { secret },
});

app.webhooks.on("issue.opened", ({ octokit, payload }) => {
  return octokit.rest.issues.createComment({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    body: "Hello, World!",
  });
});

app.webhooks.verifyAndReceive({ id, name, payload, signature });
```

#### Node server example

```js
import { App, createNodeMiddleware } from "octokit";

const app = new App({
  appId,
  privateKey,
  webhooks: { secret },
});

app.webhooks.on("issue.opened", ({ octokit, payload }) => {
  return octokit.rest.issues.createComment({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    body: "Hello, World!",
  });
});

require("http").createServer(createNodeMiddleware(app)).listen(3000);
// Can now retrieve GitHub webhooks /api/github/webhooks
```

### OAuth App

See https://github.com/octokit/oauth-app.js/.

Both OAuth Apps and GitHub Apps support authenticating GitHub users using OAuth, see [Authorizing OAuth Apps](https://docs.github.com/en/developers/apps/authorizing-oauth-apps) and [Identifying and authorizing users for GitHub Apps](https://docs.github.com/en/developers/apps/identifying-and-authorizing-users-for-github-apps).

There are some differences:

- Only OAuth Apps support scopes. GitHub apps have permissions, and access is granted via installations of the app on repositories.
- Only GitHub Apps support expiring user tokens
- Only GitHub Apps support creating a scoped token to reduce the permissions and repository access

`App` is for GitHub Apps. If you need OAuth App-specific functionality, use [`OAuthApp` instead](https://github.com/octokit/oauth-app.js/).

```js
import { App } from "octokit";

const app = new App({ clientId, clientSecret });

app.oauth.on("token", ({ token, octokit }) => {
  // token is the OAuth access token itself
  // client is a pre-authorized `octokit` instance
});

// create token using GitHub's OAuth Device flow
app.oauth.createToken({
  onVerification({ user_token, verification_uri }) {
    console.log("Please enter %s at %s", user_token, verifcation_url);
  },
});
```

#### Node server example

```js
import { App, createNodeMiddleware } from "octokit";

const app = new App({ clientId, clientSecret });

app.oauth.on("token.created", ({ token, octokit }) => {
  // token is the OAuth access token itself
  // `octokit` is authenticated using the token.
});

require("http").createServer(createNodeMiddleware(app)).listen(3000);
// e.g. `GET /api/github/oauth/login?state=state123` redirects to https://github.com/login/oauth/authorize?client_id=abc4567&state=state123
```

After the user authenticated, they get redirected to the `(User) Authorization callback URL` which is configured in the app's settings. If you set it to `<your apps domain>/api/github/oauth/callback`, then a `"token"` event gets emitted automatically.

#### OAuth browser example

If you set `(User) Authorization callback URL` to your own app, than you need to read out the `?code=...&state=...` query parameters, compare the `state` parameter to the value returned by `app.oauthLoginUrl()` earlier to protect against forgery attacks, then exchange the `code` for an OAuth Authorization token.

If you use `createNodeMiddleware()`, the default route to do that is `POST /api/github/oauth/token`.

Once you successfully retrieved the token, it is also recommended to remove the `?code=...&state=...` query parameters from the browser's URL

```js
const code = new URL(location.href).searchParams.get("code");
if (code) {
  // remove ?code=... from URL
  const path =
    location.pathname +
    location.search.replace(/\b(code|state)=\w+/g, "").replace(/[?&]+$/, "");
  history.pushState({}, "", path);

  // exchange the code for a token with your backend.
  // If you use https://github.com/octokit/oauth-app.js
  // the exchange would look something like this
  const response = await fetch("/api/github/oauth/token", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ code }),
  });
  const { token } = await response.json();
  // `token` is the OAuth Access Token that can be use
}
```

<a name="todo-oauth-client"></a>

We are working on [`@octokit/auth-oauth-user-client`](https://github.com/octokit/auth-oauth-user-client.js#readme) to make the above possible and provide a simple API for all methods related to OAuth user tokens

**TODO:** Add a new `/api/github/oauth/octokit.js` URL the node middleware which will return a pre-authenticated `octokit` client.

## Action client

TBD, see https://github.com/octokit/action.js

## LICENSE

[MIT](LICENSE)
