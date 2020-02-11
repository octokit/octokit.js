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

* Complete support for GitHub’s [v3 REST API](https://developer.github.com/v3/), [v4 GraphQL API](https://developer.github.com/v4/), [Webhooks](https://developer.github.com/webhooks/), [OAuth](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/), [Apps](https://developer.github.com/apps/) and [Actions](https://developer.github.com/actions/)
* Support for all current browsers and Node.js versions
* Implements GitHub’s [best practices for integrators](https://developer.github.com/v3/guides/best-practices-for-integrators/)
* [Typescript](https://www.typescriptlang.org/) definitions
* Decomposable & extendable

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
- [Sending custom requests](#sending-custom-requests)
- [Hooks](#hooks)
- [Plugins](#plugins)
- [LICENSE](#license)

<!-- tocstop -->

## Usage

With Browsers

```html
<script type="module">
import { Octokit } from "https://cdn.pika.dev/@octokit/core";
const octokit = new Octokit({ auth: GITHUB_TOKEN })
</script>
```

With Node

```js
// npm install octokit
const { Octokit } = require('octokit')
const client = new Octokit({ auth: process.env.GITHUB_TOKEN })
```

## Options

```js
const client = new Octokit({
  // setting a user agent is required: https://developer.github.com/v3/#user-agent-required
  userAgent: 'myapp/1.2.3',
  
  // set custom URL for on-premise GitHub Enterprise installations
  baseUrl: 'https://github.acme-inc.com/api/v3',
  
  // see "Authentication" section below
  auth: "secret123",
  
  // add list of previews you’d like to enable globally, e.g. ['jean-grey-preview', 'symmetra-preview']
  previews: []

  request: {
    // Node.js only: advanced request options can be passed as http(s) agent,
    // such as custom SSL certificate or proxy settings.
    agent: undefined,
    
    // request timeout in ms. 0 means no timeout
    timeout: 0
  }
})
```

Default options can be set using `Octokit.defaults(options)`.

```js
const MyOctokit = Octokit.defaults({
  baseUrl: 'https://github.acme-inc.com',
  headers: {
    'user-agent': 'my-octokit-thing/1.2.3'
  }
})
const client = new MyOctokit()
```

## Authentication

Pass an `auth` option to the `Octokit` constructor. It accepts a string which can be a token

```js
const clientWithAuth = new Octokit({
  auth: 'secret123'
})
```

For more complex scenarios, set `options.authStrategy` to one of the [octokit/auth.js](https://github.com/octokit/auth.js) strategies, or create your own

```js
const { createAppAuth } = require("@octokit/auth-app");

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    id: 123,
    privateKey: process.env.PRIVATE_KEY
  )
})
```

## v3 REST API

See https://octokit.github.io/rest.js/

```js
octokit.rest.repos.getForOrg({org: 'octokit'})
```

## GraphQL API

See https://github.com/octokit/graphql.js/

```js
octokit.graphql(`{
  viewer {
    login
  }
}`)
```

## OAuth

Both OAuth Apps and GitHub Apps support authenticating GitHub users using OAUTH, see [Authorizing OAuth Apps](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps) and [Identifying and authorizing users for GitHub Apps](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

To authenticate, a user needs to confirm their identity on a URL hosted by GitHub. This URL can be retrieved using `app.oauthLoginUrl()`

```js
const app = octokit.app({clientId, clientSecret})
const { url, state } = app.oauthLoginUrl()
// url looks like this: https://github.com/login/oauth/authorize?client_id=...
// state is a random string that you need to store for code verification later
```

**Tip:** The `oauthLoginUrl()` exists as standalone package, too: [`@octokit/oauth-login-url`](https://github.com/octokit/oauth-login-url.js).

`app.middleware` is also exposing a special `GET /api/github/oauth/login` path which redirects to the same URL

```js
const app = octokit.app({clientId: "abc4567", clientSecret})
require('http').createServer(app.middleware).listen(3000)
// e.g. `GET http://localhost:3000/api/github/oauth/login` redirects to https://github.com/login/oauth/authorize?client_id=abc4567
```

After the user authenticated, they get redirected to the `(User) Authorization callback URL` which is configured in the app's settings. If you set it to `<your apps domain>/api/github/oauth/callback`, then an `"oauth-access-token"` event gets emitted which you can handle with

```js
app.on('oauth-access-token', ({token, client}) => {
  // token is the OAuth access token itself
  // client is a pre-authorized `octokit` instance
})
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
  const { token } = await octokit.request('GET <your apps domain>/oauth-login', { code })
  // `token` is the OAuth Access Token that can be use
}
```

When the `POST /api/github/oauth/token` was successful, the `oauth-access-token` event is emitted, too.

<a name="todo-oauth-client"></a>

**TODO:** create a `@octokit/oauth-client` module which does the above automagically. Here is how it could work:

```js
import { createOAuthClientAuth} from 'https://cdn.pika.dev/@octokit/oauth-client'
const auth = createOAuthClientAuth({
  clientId: 'abc4567',
  // optional
  getOAuthAccessToken: async code => {
    const response = await fetch('https://my-oauth-app.test/api/github/token', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(code)
    })
    const { token } = await response.json()
    return token
  },
  // optional: persist authentication in local store
  store: {
    async get() {
      return localStorage.getItem('authentication')
    },
    async set(authentication) {
      localStorage.setItem('authentication', JSON.stringify(authentication))
    },
    async del() {
      localStorage.removeItem('authentication')
    }
  }
})

// retrieve token using `getOAuthAccessToken()`
// if ?code=... parameter is not set and authentication cannot be retrievd from the local store,
// then `token` is undefined and `isSignedIn` is set to false`
await { token, isSignedIn, createdAt, scopes } = await auth()

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

Node.js only. See https://github.com/octokit/webhooks.js/.

The difference to using `@octokit/webhooks` standalone is that the current
`client` instance will be passed as additional context property passed to
the event handlers. The `client` instance will have default configuration set
for the respective event

```js
const webhooks = octokit.webhooks({secret})
webhooks.on('issue.opened', ({id, name, payload, client}) => {
  return octokit.rest.issues.createComment({body: 'Hello, World!'})
})
require('http').createServer(webhooks.middleware).listen(3000)
```

## GitHub Apps

**TODO** deprecate the current [`@octokit/app`](https://github.com/octokit/app.js#readme) package in favor of [`@octokit/auth-oauth-app`](https://github.com/octokit/app.js#readme), then create an entirely new `@octokit/app` package which includes webhooks and oauth handling.

```js
const app = octokit.app({id, privateKey, clientId, clientSecret, webhooks: {secret}})

// authenticated using Json Web Token
const installations = await app.paginate(app.rest.listInstallations.endpoint())

app.webhooks.on('issues.opened', {{id, name, payload, client}} => {
  // authenticated using installation token
  return octokit.rest.issues.createComment({body: 'Hello, World!'})
})

app.oauth.on('token', {{token, client}} => {
  // token is the OAuth access token itself
  // client is a pre-authorized `octokit` instance
})

require('http').createServer(app.middleware).listen(3000)

// `POST /api/github/webhooks` to receive webhook event requests
// + `* /api/github/oauth/*` routes
```

## GitHub Actions

```js
// to be done
```

## Sending custom requests

Use `octokit.request` to send custom requests. It accepts a string, an object
or a combination of the two. Here are several ways to [list organization repositories](https://developer.github.com/v3/repos/#list-organization-repositories)
for the octokit.

1. Pass in the route as first and parameters as second argument

  ```js
  octokit.request('GET /orgs/:org/repos', {
    org: 'octokit',
    type: 'private'
  })
  ```

2. Pass in a single object with `method` and `type` keys.

  ```js
  octokit.request({
    // request options
    method: 'GET',
    url: '/orgs/:org/repos',
    // parameters
    org: 'octokit',
    type: 'private'
  })
  ```

3. Pass in only the URL or path, e.g. from a previous response’s `repos_url` property.
   A `GET` request is sent to the given URL.

   ```js
   octokit.request('https://api.github.com/users/octocat/repos')
   ```

For the most minimal GitHub API client, you can use `octokit.request` standalone.
See [octokit/request.js](https://github.com/octokit/request.js).

If you want to use your own http request method, you can use `octokit.request.endpoint`
to retrieve request options that you can pass into your preferred request
method. The passed options are merged with the client defaults, such as `baseUrl`,
authentication or user agent.

```js
const options = octokit.request.endpoint({
  // request options
  method: 'GET',
  url: '/orgs/:org/repos',
  // parameters
  org: 'octokit',
  type: 'private'
})
// {
//   method: 'GET',
//   url: 'https://api.github.com/orgs/octokit/repos?type=private'
//   headers: {
//     accept: 'application/vnd.github.v3+json',
//     'user-agent': 'octokit-endpoint.js/0.0.0-development Node.js/10.13.0 (macOS; x64)'
//   }
// }
```

You can use `octokit.request.endpoint` as standalone library, see [octokit/endpoint.js](https://github.com/octokit/endpoint.js).

## Hooks

You can customize Octokit’s request lifecycle with hooks. Available methods are

```js
github.hook.before('request', async (options) => {
  validate(options)
})
github.hook.after('request', async (response, options) => {
  console.log(`${options.method} ${options.url}: ${response.status}`)
})
github.hook.error('request', async (error, options) => {
  if (error.status === 304) {
    return findInCache(error.headers.etag)
  }

  throw error
})
github.hook.wrap('request', async (request, options) => {
  // add logic before, after, catch errors or replace the request altogether
  return request(options)
})
```

See [before-after-hook](https://github.com/gr2m/before-after-hook#readme) for more
documentation on hooks.

## Plugins

You can customize and extend Octokit’s functionality using plugins

```js
// index.js
const MyOctokit = require('@octokit/request')
  .plugin([
    require('./lib/my-plugin'),
    require('octokit-plugin-example')
  ])

// lib/my-plugin.js
module.exports = (octokit, options = { greeting: 'Hello' }) => {
  // add a custom method
  octokit.helloWorld = () => console.log(`${options.greeting}, world!`)

  // hook into the request lifecycle
  octokit.hook.wrap('request', async (request, options) => {
    const time = Date.now()
    const response = await request(options)
    console.log(`${options.method} ${options.url} – ${response.status} in ${Date.now() - time}ms`)
    return response
  })
}
```

`.plugin` accepts a function or an array of functions.

You can add new methods to the `octokit` instance passed as first argument to
the plugin function. The 2nd argument is the options object passed to the
constructor when instantiating the `octokit` client.

```js
const octokit = new MyOctokit({ greeting: 'Hola' })
octokit.helloWorld()
// Hola, world!
```

## LICENSE

[MIT](LICENSE)
