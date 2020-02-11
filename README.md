# 🚧 THIS IS WORK IN PROGRESS

There is no code. This repository is documentation only, laying out what the final `octokit` package should look like.

# octokit.js

> The all-batteries-included Octokit SDK for Browser, Node.js, and Deno.

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
    - [Endpoint methods](#endpoint-methods)
    - [Pagination](#pagination)
    - [Media Types](#media-types)
  - [GraphQL API queries](#graphql-api-queries)
- [App client](#app-client)
  - [App client](#app-client-1)
  - [Webhooks](#webhooks)
  - [OAuth](#oauth)
- [Action client](#action-client)
- [LICENSE](#license)

<!-- tocstop -->

## Features

- **Compatible**. Works in all modern browsers, [Node.js](https://nodejs.org/), [Electron](https://www.electronjs.org/), [React Native](https://facebook.github.io/react-native/), and [Deno](https://deno.land/).
- **Tested**. All libraries have a 100% test coverage.
- **Complete**. All features of GitHub's platform APIs are covered. All recommended best practises are implemented.
- **Decomposable**. Use only the code you need. You can build your own Octokit in only a few lines of code. Make your own tradeoff between functionality and bundle size.
- **Extendable**. A feature missing? Add functionalities, hook into the request lifecycle or implement your own authentication strategy.

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>
Load <code>octokit</code> directly from <a href="https://cdn.pika.dev">cdn.pika.dev</a>
        
```html
<script type="module">
import { Octokit, App } from "https://cdn.pika.dev/octokit";
</script>
```

</td></tr>
<tr><th>
Deno
</th><td width=100%>
Load <code>octokit</code> directly from <a href="https://cdn.pika.dev">cdn.pika.dev</a>
        
```ts
import { Octokit, App, Action } from "https://cdn.pika.dev/octokit";
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

// Compare: https://developer.github.com/v3/repos/#list-organization-repositories
octokit.repos
  .listForOrg({
    org: "octokit",
    type: "private"
  })
  .then(({ data }) => {
    // handle data
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

TBD

- Load and iterate trough installations, repositories
- handle webhooks
- provide authenticated API client for installations
- handle OAuth on client and server

### App client

```js
import { App } from "octokit"
import { createServer } from "http"
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

app.webhooks.onAny(handleAnyWebhookEvent)

app.webhooks.on("issues.opened", {{id, name, payload, repo}} => {
  // authenticated using installation token
  return repo.issues.createComment({ body: "Hello, World!" })
})

app.oauth.on("token", {{token, client}} => {
  // token is the OAuth access token itself
  // client is a pre-authorized `octokit` instance
})

createServer(app.middleware).listen(3000)

// `POST /api/github/events` to receive webhook event requests
// + `* /api/github/oauth/*` routes
```

### Webhooks

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

### OAuth

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

## Action client

TBD, see https://github.com/octokit/action.js

## LICENSE

[MIT](LICENSE)
