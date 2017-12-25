# node-github

> GitHub REST API client for Node.js

[![Build Status](https://travis-ci.org/octokit/node-github.svg?branch=master)](https://travis-ci.org/octokit/node-github)
[![Coverage Status](https://coveralls.io/repos/github/octokit/node-github/badge.svg)](https://coveralls.io/github/octokit/node-github)
[![Greenkeeper](https://badges.greenkeeper.io/octokit/node-github.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/npm/v/github.svg)](https://www.npmjs.com/package/github)

## Installation

Install via npm.

```bash
npm install github
```

or install via git clone:

```bash
git clone https://github.com/octokit/node-github
cd node-github
npm install
```

## Documentation

Client API: [octokit.github.io/node-github](https://octokit.github.io/node-github/)
GitHub API: [developer.github.com/v3](https://developer.github.com/v3/)

## Example

Get all followers for user "defunkt":

<!-- HEADS UP: when changing the options for the constructor, make sure to also
     update the type definition templates in scripts/templates/* -->
```js
var GitHubApi = require('github')

var github = new GitHubApi({
    // optional
  timeout: 5000,
  host: 'github.my-GHE-enabled-company.com', // should be api.github.com for GitHub
  pathPrefix: '/api/v3', // for some GHEs; none for GitHub
  protocol: 'https',
  port: 9898,
  proxy: '<proxyUrl>',
  ca: 'whatever',
  headers: {
    'accept': 'application/vnd.github.something-custom',
    'cookie': 'something custom',
    'user-agent': 'something custom'
  },
  requestMedia: 'application/vnd.github.something-custom',
  rejectUnauthorized: false, // default: true
  family: 6
})

// TODO: optional authentication here depending on desired endpoints. See below in README.

github.users.getFollowingForUser({
    // optional
    // headers: {
    //     "cookie": "blahblah"
    // },
  username: 'defunkt'
}, function (err, res) {
  if (err) throw err
  console.log(JSON.stringify(res))
})
```

## Pagination

There are a few pagination-related methods:

```
hasNextPage(link)
hasPreviousPage(link)
hasFirstPage(link)
hasLastPage(link)

getNextPage(link, headers, callback)
getPreviousPage(link, headers, callback)
getFirstPage(link, headers, callback)
getLastPage(link, headers, callback)

NOTE: link is the response object or the contents of the Link header
```

See [here](https://github.com/octokit/node-github/blob/master/examples/paginationCustomHeaders.js) and [here](https://github.com/octokit/node-github/blob/master/examples/getStarred.js) for examples.

## Authentication

Most GitHub API calls don't require authentication. As a rule of thumb: If you can see the information by visiting the site without being logged in, you don't have to be authenticated to retrieve the same information through the API. Of course calls, which change data or read sensitive information have to be authenticated.

You need the GitHub user name and the API key for authentication. The API key can be found in the user's _Account Settings_.

```javascript
// basic
github.authenticate({
  type: 'basic',
  username: process.env.USERNAME,
  password: process.env.PASSWORD
})

// oauth
github.authenticate({
  type: 'oauth',
  token: process.env.AUTH_TOKEN
})

// oauth key/secret (to get a token)
github.authenticate({
  type: 'oauth',
  key: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET
})

// user token
github.authenticate({
  type: 'token',
  token: 'userToken'
})

// integration (jwt)
github.authenticate({
  type: 'integration',
  token: 'jwt'
})
```

Note: `authenticate` is synchronous because it only stores the
credentials for the next request.

### Creating a token for your application
[Create a new authorization](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization).

1. Use github.authenticate() to authenticate with GitHub using your username / password.
2. Create an application token programmatically with the scopes you need and, if you use two-factor authentication send the `X-GitHub-OTP` header with the one-time-password you get on your token device.

```javascript
github.authorization.create({
  scopes: ['user', 'public_repo', 'repo', 'repo:status', 'gist'],
  note: 'what this auth is for',
  note_url: 'http://url-to-this-auth-app',
  headers: {
    'X-GitHub-OTP': 'two-factor-code'
  }
}, function (err, res) {
  if (err) throw err
  if (res.token) {
    // save and use res.token as in the Oauth process above from now on
  }
})
```

## DEBUG

Set `DEBUG=node-github*` for additional debug logs.

## Tests

Run all tests

```bash
$ npm test
```

Or run a specific test

```bash
$ ./node_modules/.bin/mocha test/test/integration/get-repository-test.js
```

The examples are run as part of the tests. You can set an `EXAMPLES_GITHUB_TOKEN` environment
variable (or set it in a `.env` file) to avoid running against GitHub's rate limit.

## Preview APIs

Accept headers for the preview APIs should be taken care of behind the scenes, but in the event a preview endpoint isn't working, see [here](https://github.com/octokit/node-github/blob/master/examples/getRawBlob.js) for an example on how to add the required custom accept header.

For updates on endpoints under preview, see https://developer.github.com/changes/.

| Preview API             | Accept header val                                     |
| -------------------     | -----------------------------------------------       |
| Blocking Users          | application/vnd.github.giant-sentry-fist-preview+json |
| Codes of Conduct        | application/vnd.github.scarlet-witch-preview+json     |
| Commit Search           | application/vnd.github.cloak-preview+json             |
| Community               | application/vnd.github.black-panther-preview+json     |
| Deployment              | application/vnd.github.ant-man-preview+json           |
| Git signing             | application/vnd.github.cryptographer-preview          |
| Imports                 | application/vnd.github.barred-rock-preview            |
| Integrations            | application/vnd.github.machine-man-preview            |
| License                 | application/vnd.github.drax-preview+json              |
| Marketplace             | application/vnd.github.valkyrie-preview+json          |
| Migrations              | application/vnd.github.wyandotte-preview+json         |
| Nested Teams            | application/vnd.github.hellcat-preview+json           |
| Pages                   | application/vnd.github.mister-fantastic-preview       |
| Pre-receive             | application/vnd.github.eye-scream-preview             |
| Projects                | application/vnd.github.inertia-preview+json           |
| Pull Request Squash     | application/vnd.github.polaris-preview                |
| Reactions               | application/vnd.github.squirrel-girl-preview          |
| Review Requests         | application/vnd.github.thor-preview+json              |
| Star Creation Timestamp | application/vnd.github.v3.star+json                   |
| Timeline                | application/vnd.github.mockingbird-preview            |
| Topics                  | application/vnd.github.mercy-preview+json             |

## LICENSE

[MIT](LICENSE)
