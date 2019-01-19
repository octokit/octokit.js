# 🚧 THIS IS WORK IN PROGRESS

This package will integrate several standalone packages for the all-batteries-included JavaScript Octokit package :)

- [x] REST API: `@octokit/rest`
- [x] GraphQL API: `@octokit/graphql`
- [ ] ~~OAuth~~ postponed.
- [x] Webhooks: `@octokit/webhooks`
- [x] Apps: `@octokit/apps`
- [ ] Actions

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
* Modular & extendable

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
<script src="https://tbd-cdn.com/octokit/1.0.0/octokit.min.js"></script>
<script>
const client = new Octokit()
</script>
```

With Node or module bundlers such as [Webpack](https://webpack.js.org/).

```js
// npm install octokit
const Octokit = require('octokit')
const client = new Octokit()
```

## Options

```js
const client = new Octokit({
  // set custom URL for on-premise GitHub Enterprise installations
  baseUrl: 'https://api.github.com',

  // set custom headers, e.g. make set `headers['user-agent']` to a custom
  // identifier for your library or app.
  headers: {
    accept: 'application/vnd.github.v3+json',
    'user-agent': 'octokit/rest.js v1.2.3' // v1.2.3 will be current version
  },

  // Node.js only: advanced request options can be passed as http(s) agent,
  // such as custom SSL certificate or proxy settings.
  request: {
    agent: undefined,
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

Pass an `auth` option to the `Octokit` constructor or call `.config({auth})`.

```js
const clientWithAuth = new Octokit({
  auth: 'token secret123'
})
const scopedClientWithAuth = client.config({
  auth: 'token secret123'
})
```

The `auth` option can be

1. A string

   The value will be passed as value for the `Authorization` header,
   see [authentication](https://developer.github.com/v3/#authentication).

   ```js
   client.config({
     auth: 'token secret123'
   })
   ```

2. As object with the properties `username`, `password`, `on2Fa`.

   `on2Fa` is an asynchronous function that must resolve with two-factor
   authentication code sent to the user.

   ```js
   client.config({
     auth: {
       username: 'octocat',
       password: 'secret',
       async on2Fa () {
         // ask the user
         return prompt('Two-factor authentication Code:')
       }
     }
   })
   ```

   In some cases, OAuth applications need to set `username` to `client_id`
   and `password` to  `client_secret` in order to use certain endpoitns, such as
   "[Check an authorization](https://developer.github.com/v3/oauth_authorizations/#check-an-authorization)".

   **TODO**: The only path where `client_id` and `client_secret` is expected to
   be sent as Basic Authentication is `/applications/:client_id/tokens/:access_token`

   1. [Check an authorization](https://developer.github.com/v3/oauth_authorizations/#check-an-authorization)
   1. [Reset an authorization](https://developer.github.com/v3/oauth_authorizations/#reset-an-authorization)
   1. [Revoke an authorization for an application](https://developer.github.com/v3/oauth_authorizations/#revoke-an-authorization-for-an-application)

   It might be simple enough to check for the path and if it matches, use the
   `client_id` and `client_secret` properties from the `auth` option, see next.

3. An object with the properties `client_id` and `client_secret`

   OAuth applications can authenticate using their `client_id` and `client_secret`
   in order to [increase the unauthenticated rate limit](https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications).

4. A function

   Must resolve with a string which then will be passed as value for the
   `Authorization` header. The function will be called before each request and
   can be asynchronous.

   ```js
   client.config({
     auth () {
       return 'token secret123'
     }
   })
   ```

## v3 REST API

See https://octokit.github.io/rest.js/

```js
client.rest.repos.getForOrg({org: 'octokit'})
```

## GraphQL API

See https://github.com/octokit/graphql.js/

```js
client.graphql(`{
  viewer {
    login
  }
}`)
```

## OAuth

_tbd_, see https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps

## Webhooks

Node.js only. See https://github.com/octokit/webhooks.js/.

The difference to using `@octokit/webhooks` standalone is that the current
`client` instance will be passed as additional context property passed to
the event handlers. The `client` instance will have default configuration set
for the respective event

```js
const webhooks = client.webhooks({secret})
webhooks.on('issue.opened', ({id, name, payload, client}) => {
  return client.rest.issues.createComment({body: 'Hello, World!'})
})
require('http').createServer(webhooks.middleware).listen(3000)
```

## GitHub Apps

Node.js only. See https://github.com/octokit/app.js/.

The difference to using `@octokit/app` standalone is that the current
`client` instance will be passed as additional context property passed to
the event handlers. The `client` instance will have default configuration set
for the respective event

```js
const app = client.app({id, privateKey, webhooks: {secret}})

// authenticated using Json Web Token
const installations = await app.paginate(app.rest.listInstallations.endpoint())

app.webhooks.on('issues.opened', {{id, name, payload, client}} => {
  // authenticated using installation token
  return client.rest.issues.createComment({body: 'Hello, World!'})
})

require('http').createServer(app.webhooks.middleware).listen(3000)
```

## GitHub Actions

_tbd_, see https://developer.github.com/actions/

## Sending custom requests

Use `client.request` to send custom requests. It accepts a string, an object
or a combination of the two. Here are several ways to [list organization repositories](https://developer.github.com/v3/repos/#list-organization-repositories)
for the octokit.

1. Pass in the route as first and parameters as second argument

  ```js
  client.request('GET /orgs/:org/repos', {
    org: 'octokit',
    type: 'private'
  })
  ```

2. Pass in a single object with `method` and `type` keys.

  ```js
  client.request({
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
   client.request('https://api.github.com/users/octocat/repos')
   ```

For the most minimal GitHub API client, you can use `client.request` standalone.
See [octokit/request.js](https://github.com/octokit/request.js).

If you want to use your own http request method, you can use `client.request.endpoint`
to retrieve request options that you can pass into your preferred request
method. The passed options are merged with the client defaults, such as `baseUrl`,
authentication or user agent.

```js
const options = client.request.endpoint({
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

You can use `client.request.endpoint` as standalone library, see [octokit/endpoint.js](https://github.com/octokit/endpoint.js).

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
