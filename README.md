# rest.js

> GitHub REST API client for JavaScript

[![@latest](https://img.shields.io/npm/v/@octokit/rest.svg)](https://www.npmjs.com/package/@octokit/rest)
[![Build Status](https://travis-ci.org/octokit/rest.js.svg?branch=master)](https://travis-ci.org/octokit/rest.js)
[![Coverage Status](https://coveralls.io/repos/github/octokit/rest.js/badge.svg)](https://coveralls.io/github/octokit/rest.js)
[![Greenkeeper](https://badges.greenkeeper.io/octokit/rest.js.svg)](https://greenkeeper.io/)

## Usage

### Node

Install with `npm install @octokit/rest`.

```js
const octokit = require('@octokit/rest')()

// Compare: https://developer.github.com/v3/repos/#list-organization-repositories
octokit.repos.getForOrg({
  org: 'octokit',
  type: 'public'
}).then(({ data, headers, status }) => {
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
   octokit.repos.getForOrg({
     org: 'octokit',
     type: 'public'
   }).then(({data, headers, status}) => {
     // handle data
   })
   ```

### Client options

All available client options with default values

<!-- HEADS UP: when changing the options for the constructor, make sure to also
     update the type definition templates in scripts/templates/* -->
```js
const octokit = require('@octokit/rest')({
  timeout: 0, // 0 means no request timeout
  headers: {
    accept: 'application/vnd.github.v3+json',
    'user-agent': 'octokit/rest.js v1.2.3' // v1.2.3 will be current version
  },

  // custom GitHub Enterprise URL
  baseUrl: 'https://api.github.com',

  // Node only: advanced request options can be passed as http(s) agent
  agent: undefined
})
```

## API docs

Find all APIs documented at https://octokit.github.io/rest.js/.

## API Previews

To take advantage of [GitHub’s API Previews](https://developer.github.com/v3/previews/),
pass a custom `accept` header, which you can do with any endpoint method documented
in the [API docs](https://octokit.github.io/rest.js/), e.g.

```js
const { data: { topics } } = octokit.repos.get({
  owner: 'octokit',
  repo: 'rest.js',
  headers: {
    accept: 'application/vnd.github.mercy-preview+json'
  }
})
```

Multiple preview headers can be combined by separating them with commas

```js
const { data: { topics, codeOfConduct } } = octokit.repos.get({
  owner: 'octokit',
  repo: 'rest.js',
  headers: {
    accept: 'application/vnd.github.mercy-preview+json,application/vnd.github.scarlet-witch-preview+json'
  }
})
```

## Authentication

Most GitHub API calls don't require authentication. Rules of thumb:

1. If you can see the information by visiting the site without being logged in, you don't have to be authenticated to retrieve the same information through the API.
2. If you want to change data, you have to be authenticated.

```javascript
// basic
octokit.authenticate({
  type: 'basic',
  username: 'yourusername',
  password: 'password'
})

// oauth
octokit.authenticate({
  type: 'oauth',
  token: 'secrettoken123'
})

// oauth key/secret (to get a token)
octokit.authenticate({
  type: 'oauth',
  key: 'client_id',
  secret: 'client_secret'
})

// token (https://github.com/settings/tokens)
octokit.authenticate({
  type: 'token',
  token: 'secrettoken123'
})

// GitHub app
octokit.authenticate({
  type: 'app',
  token: 'secrettoken123'
})
```

Note: `authenticate` is synchronous because it only sets the credentials
for the following requests.

## Custom requests

To send custom requests you can use the lower-level `octokit.request()` method

```js
octokit.request('GET /')
```

The `baseUrl`, headers and other defaults are already set. For more information
on the `octokit.request()` API see [`@octokit/request`](https://github.com/octokit/request.js/)

All the endpoint methods such as `octokit.repos.get()` are aliases of `octokit.request()`
with pre-bound default options. So you can use the `@octokit/request` API to
get the default options or get generic request option to use with your prefered
request library.

```js
const defaultOptions = octokit.repos.get.endpoint.DEFAULTS
const requestOptions = octokit.repos.get.endpoint()
```

## Pagination

All endpoint methods starting with `.list*` do not return all responses at once but instead return the first 30 items by default, see also [GitHub’s REST API pagination documentation](https://developer.github.com/v3/#pagination).

To automatically receive all results across all pages, you can use the `github.paginate()` method:

```js
octokit.paginate('GET /repos/:owner/:repo/issues', { owner: 'octokit', repo: 'rest.js' })
  .then(issues => {
    // issues is an array of all issue objects
  })
```

`octokit.paginate()` accepts the same options as [`octokit.request()`](#customrequests). You can optionally pass an additional function to map the results from each response. The map mast return a new value, usually an array with mapped data.

```js
octokit.paginate('GET /repos/:owner/:repo/issues', { owner: 'octokit', repo: 'rest.js' }, response => response.data.map(issue => issue.title))
  .then(issueTitles => {
    // issueTitles is now an array with the titles only
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

If your runtime environment supports async iterators (such as Node 10+), you can iterate trough each response

```js
for await (const response of github.paginate.iterator(options) {
  // do whatever you want with each response, break out of loop, etc.
}
```

`github.paginate.iterator()` accepts the same options as `github.paginate()`.

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

## Debug

Set `DEBUG=octokit:rest*` for additional debug logs.

## Contributing

We would love you to contribute to `@octokit/rest`, pull requests are very welcomed! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## Credits

`@octokit/rest` was originally created as [`node-github`](https://www.npmjs.com/package/github)
in 2012 by Mike de Boer from Cloud9 IDE, Inc.
It was adopted and renamed by GitHub in 2017

## LICENSE

[MIT](LICENSE)
