# rest.js

> GitHub REST API client for JavaScript

[![@latest](https://img.shields.io/npm/v/@octokit/rest.svg)](https://www.npmjs.com/package/@octokit/rest)
[![Build Status](https://travis-ci.org/octokit/rest.js.svg?branch=master)](https://travis-ci.org/octokit/rest.js)
[![Coverage Status](https://coveralls.io/repos/github/octokit/rest.js/badge.svg)](https://coveralls.io/github/octokit/rest.js)
[![Greenkeeper](https://badges.greenkeeper.io/octokit/rest.js.svg)](https://greenkeeper.io/)

<!-- toc -->

- [Usage](#usage)
  * [Node](#node)
  * [Browser](#browser)
  * [Client options](#client-options)
- [Authentication](#authentication)
- [API docs](#api-docs)
- [API Previews](#api-previews)
- [Request formats](#request-formats)
- [Custom requests](#custom-requests)
- [Pagination](#pagination)
- [Hooks](#hooks)
- [Plugins](#plugins)
- [Register custom endpoint methods](#register-custom-endpoint-methods)
- [Throttling](#throttling)
- [Automatic retries](#automatic-retries)
- [Logging](#logging)
- [Debug](#debug)
- [Contributing](#contributing)
- [Credits](#credits)
- [LICENSE](#license)

<!-- tocstop -->

## Usage

### Node

Install with `npm install @octokit/rest`.

```js
const Octokit = require('@octokit/rest')
const octokit = new Octokit()

// Compare: https://developer.github.com/v3/repos/#list-organization-repositories
octokit.repos.listForOrg({
  org: 'octokit',
  type: 'public'
}).then(({ data, status, headers }) => {
  // handle data
})
```

### Browser

1. Download `octokit-rest.min.js` from the latest release: https://github.com/octokit/rest.js/releases

2. Load it as script into your web application:

   ```html
   <script src="octokit-rest.min.js"></script>
   ```

3. Initialize `octokit`

   ```js
   const octokit = new Octokit()

   // Compare: https://developer.github.com/v3/repos/#list-organization-repositories
   octokit.repos.listForOrg({
     org: 'octokit',
     type: 'public'
   }).then(({data, headers, status}) => {
     // handle data
   })
   ```

### Client options

All available client options with default values

```js
const Octokit = require('@octokit/rest')
const octokit = new Octokit({
  // see "Authentication" section below
  auth: undefined,

  // setting a user agent is required: https://developer.github.com/v3/#user-agent-required
  // v1.2.3 will be current @octokit/rest version
  userAgent: 'octokit/rest.js v1.2.3',

  // add list of previews you’d like to enable globally,
  // see https://developer.github.com/v3/previews/.
  // Example: ['jean-grey', 'symmetra']
  previews: [],

  // set custom URL for on-premise GitHub Enterprise installations
  baseUrl: 'https://api.github.com',
  
  // pass custom methods for debug, info, warn and error
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error
  },

  request: {
    // Node.js only: advanced request options can be passed as http(s) agent,
    // such as custom SSL certificate or proxy settings.
    // See https://nodejs.org/api/http.html#http_class_http_agent
    agent: undefined,

    // request timeout in ms. 0 means no timeout
    timeout: 0
  }
})
```

## Authentication

Most GitHub API calls don't require authentication. Generally:

1. If you can see the information by visiting the site without being logged in, you don't have to be authenticated to retrieve the same information through the API.
2. If you want to change data, you have to be authenticated.

To enable authenticated requests, [get a token in your GitHub profile's Developer Settings](https://github.com/settings/developers). Then, pass an `auth` option to the Octokit constructor:

```js
const clientWithAuth = new Octokit({
  auth: 'token secret123'
})
```

The `auth` option can be:

1. A string

   The value will be passed as value for the `Authorization` header,
   see [authentication](https://developer.github.com/v3/#authentication).

   ```js
   new Octokit({
     auth: 'secret123'
   })
   ```

   Use this for

   - personal access tokens
   - OAuth access tokens
   - GitHub App bearer tokens
   - GitHub App installation tokens

2. As object with the properties `username`, `password`, `on2fa`.

   `on2fa` is an asynchronous function that must resolve with two-factor
   authentication code sent to the user.

   ```js
   new Octokit({
     auth: {
       username: 'octocat',
       password: 'secret',
       async on2fa () {
         // example: ask the user
         return prompt('Two-factor authentication Code:')
       }
     }
   })
   ```

3. An object with the properties `clientId` and `clientSecret`

   OAuth applications can authenticate using their `clientId` and `clientSecret`
   in order to [increase the unauthenticated rate limit](https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications).

4. A function

   Must resolve with a string which then will be passed as value for the
   `Authorization` header. The function will be called before each request and
   can be asynchronous.

   ```js
   new Octokit({
     auth () {
       return 'secret123'
     }
   })
   ```

   This is useful for GitHub apps, as installations need to renew their tokens each hour.
   Here is an example on how to implement authentication for GitHub Apps

   ```js
   const App = require('@octokit/app')
   const Octokit = require('@octokit/rest')

   const app = new App({ id: process.env.APP_ID, privateKey: process.env.PRIVATE_KEY })
   const octokit = new Octokit({
     auth: () => app.getInstallationAccessToken({ installationId: process.env.INSTALLATION_ID })
   })
   ```

   See also: https://github.com/octokit/app.js#authenticating-as-an-installation.

## API docs

Find all APIs documented at https://octokit.github.io/rest.js/.

## API Previews

To enable any of [GitHub’s API Previews](https://developer.github.com/v3/previews/),
pass the `previews` option to the GitHub constructor

```js
const octokit = new Octokit({
  previews: [
    'mercy-preview'
  ]
})
```

If you want to enable one or multiple previews for a single request, set the `mediaType.preview` option

```js
const { data: { topics } } = await octokit.repos.get({
  owner: 'octokit',
  repo: 'rest.js',
  mediaType: {
    previews: ['symmetra']
  }
})
```

## Request formats

Some API endpoints support alternative response formats, see [Media types](https://developer.github.com/v3/media/).

For example, to request a [pull request as diff format](https://developer.github.com/v3/media/#diff), set the `mediaType.format` option

```js
const { data: prDiff } = await octokit.pulls.get({
  owner: 'octokit',
  repo: 'rest.js',
  number: 1278,
  mediaType: {
    format: 'diff'
  }
})
```

## Custom requests

To send custom requests you can use the lower-level `octokit.request()` method

```js
octokit.request('GET /')
```

The `baseUrl`, headers and other defaults are already set. For more information
on the `octokit.request()` API see [`@octokit/request`](https://github.com/octokit/request.js/)

All the endpoint methods such as `octokit.repos.get()` are aliases of `octokit.request()`
with pre-bound default options. So you can use the `@octokit/request` API to
get the default options or get generic request option to use with your preferred
request library.

```js
const defaultOptions = octokit.repos.get.endpoint.DEFAULTS
const requestOptions = octokit.repos.get.endpoint()
```

## Pagination

All endpoint methods starting with `.list*` do not return all responses at once but instead return the first 30 items by default, see also [GitHub’s REST API pagination documentation](https://developer.github.com/v3/#pagination).

To automatically receive all results across all pages, you can use the `octokit.paginate()` method:

```js
octokit.paginate('GET /repos/:owner/:repo/issues', { owner: 'octokit', repo: 'rest.js' })
  .then(issues => {
    // issues is an array of all issue objects
  })
```

`octokit.paginate()` accepts the same options as [`octokit.request()`](#customrequests). You can optionally pass an additional function to map the results from each response. The map must return a new value, usually an array with mapped data.

```js
octokit.paginate('GET /repos/:owner/:repo/issues', { owner: 'octokit', repo: 'rest.js' }, response => response.data.map(issue => issue.title))
  .then(issueTitles => {
    // issueTitles is now an array with the titles only
  })
```

To stop paginating early, you can call the `done()` function passed as 2nd argument to the response map function. Note that you still have to return the value you want to map the response to, otherwise the last response will be mapped to undefined.

```js
octokit.paginate('GET /organizations', (response, done) => {
  if (response.data.find(issues => issue.body.includes('something'))) {
    done()
  }
  return response.data
})
```

To paginate responses for one of the registered endpoint methods such as `octokit.issues.listForRepo()` you can use the [`.endpoint.merge()`](https://github.com/octokit/endpoint.js#endpointmerge) method registered for all endpoint methods:

```js
const options = octokit.issues.listForRepo.endpoint.merge({ owner: 'octokit', repo: 'rest.js' })
octokit.paginate(options)
  .then(issues => {
    // issues is an array of all issue objects
  })
```

If your runtime environment supports async iterators (such as Node 10+), you can iterate through each response

```js
for await (const response of octokit.paginate.iterator(options)) {
  // do whatever you want with each response, break out of the loop, etc.
}
```

`octokit.paginate.iterator()` accepts the same options as `octokit.paginate()`.

## Hooks

You can customize Octokit’s request lifecycle with hooks. Available methods are

```js
octokit.hook.before('request', async (options) => {
  validate(options)
})
octokit.hook.after('request', async (response, options) => {
  console.log(`${options.method} ${options.url}: ${response.status}`)
})
octokit.hook.error('request', async (error, options) => {
  if (error.status === 304) {
    return findInCache(error.headers.etag)
  }

  throw error
})
octokit.hook.wrap('request', async (request, options) => {
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
    octokit.log.info(`${options.method} ${options.url} – ${response.status} in ${Date.now() - time}ms`)
    return response
  })
}
```

`.plugin` accepts a function or an array of functions.

We recommend using [Octokit’s log methods](#logging) to help users of your plugin with debugging.

You can add new methods to the `octokit` instance passed as the first argument to
the plugin function. The 2nd argument is the options object passed to the
constructor when instantiating the `octokit` client.

```js
const octokit = new MyOctokit({ greeting: 'Hola' })
octokit.helloWorld()
// Hola, world!
```

## Register custom endpoint methods

You can register custom endpoint methods such as `octokit.repos.get()` using
the `octokit.registerEndpoints(routes)` method

```js
octokit.registerEndpoints({
  foo: {
    bar: {
      method: 'PATCH',
      url: '/repos/:owner/:repo/foo',
      headers: {
        accept: 'application/vnd.github.foo-bar-preview+json'
      },
      params: {
        owner: {
          required: true,
          type: 'string'
        },
        repo: {
          required: true,
          type: 'string'
        },
        baz: {
          required: true,
          type: 'string',
          enum: [
            'qux',
            'quux',
            'quuz'
          ]
        }
      }
    }
  }
})

octokit.foo.bar({
  owner: 'octokit',
  repo: 'rest.js',
  baz: 'quz'
})
```

This is useful when you participate in private beta features and prefer the
convenience of methods for the new endpoints instead of using [`octokit.request()`]('#customrequests').

## Throttling

When you send too many requests in too little time you will likely hit errors due to quotas.

In order to automatically throttle requests as recommended in the [best practices for integrators](https://developer.github.com/v3/guides/best-practices-for-integrators/), we recommend you install the [`@octokit/plugin-throttling` plugin](https://github.com/octokit/plugin-throttling.js).

The `throttle.onAbuseLimit` and `throttle.onRateLimit` options are required. Return `true` to automatically retry the request after `retryAfter` seconds.

```js
const Octokit = require('@octokit/rest')
  .plugin(require('@octokit/plugin-throttling'))

const octokit = new Octokit({
  auth: 'token ' + process.env.TOKEN,
  throttle: {
    onRateLimit: (retryAfter, options) => {
      octokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`)

      if (options.request.retryCount === 0) { // only retries once
        console.log(`Retrying after ${retryAfter} seconds!`)
        return true
      }
    },
    onAbuseLimit: (retryAfter, options) => {
      // does not retry, only logs a warning
      octokit.log.warn(`Abuse detected for request ${options.method} ${options.url}`)
    }
  }
})
```

## Automatic retries

Many common request errors can be easily remediated by retrying the request. We recommend installing the [`@octokit/plugin-retry` plugin](https://github.com/octokit/plugin-retry.js) for Automatic retries in these cases

```js
const Octokit = require('@octokit/rest')
  .plugin(require('@octokit/plugin-retry'))

const octokit = new Octokit()

// all requests sent with the `octokit` instance are now retried up to 3 times for recoverable errors.
```

## Logging

`Octokit` has 4 built in log methods

1. `octokit.log.debug(message[, additionalInfo])`
1. `octokit.log.info(message[, additionalInfo])`
1. `octokit.log.warn(message[, additionalInfo])`
1. `octokit.log.error(message[, additionalInfo])`

They can be configured using the [`log` client option](client-options). By default, `octokit.log.debug()` and `octokit.log.info()` are no-ops, while the other two call `console.warn()` and `console.error()` respectively.

This is useful if you build reusable [plugins](#plugins).

## Debug

The simplest way to receive debug information is to set the [`log` client option](client-options) to `console`.

```js
const octokit = require('@octokit/rest')({
  log: console
})

console.request('/')
```

This will log

```
request { method: 'GET',
  baseUrl: 'https://api.github.com',
  headers:
   { accept: 'application/vnd.github.v3+json',
     'user-agent':
      'octokit.js/0.0.0-semantically-released Node.js/10.15.0 (macOS Mojave; x64)' },
  request: {},
  url: '/' }
GET / - 200 in 514ms
```

If you like to support a configurable log level, we recommend using the [console-log-level](https://github.com/watson/console-log-level) module

```js
const octokit = require('@octokit/rest')({
  log: require('console-log-level')({ level: 'info' })
})

console.request('/')
```

This will only log

```
GET / - 200 in 514ms
```

## Contributing

We would love you to contribute to `@octokit/rest`, pull requests are very welcomed! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## Credits

`@octokit/rest` was originally created as [`node-github`](https://www.npmjs.com/package/github)
in 2012 by Mike de Boer from Cloud9 IDE, Inc.
It was adopted and renamed by GitHub in 2017

## LICENSE

[MIT](LICENSE)
