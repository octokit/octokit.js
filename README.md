# Node-github

A Node.js wrapper for GitHub API.

## Installation

Install via [npm](https://www.npmjs.com/package/github) ![NPM version](https://badge.fury.io/js/github.svg)

```bash
$ npm install github
```

or

Install via git clone

```bash
$ git clone https://github.com/mikedeboer/node-github.git
$ cd node-github
$ npm install
```

## Documentation

Client API: [https://mikedeboer.github.io/node-github/](https://mikedeboer.github.io/node-github/)  
GitHub API: [https://developer.github.com/v3/](https://developer.github.com/v3/)

## Test auth file

Create test auth file for running tests/examples.

```bash
$ > testAuth.json
{
    "token": "<TOKEN>"
}
```

## Example

Get all followers for user "defunkt":
```javascript
var GitHubApi = require("github");

var github = new GitHubApi({
    // optional
    debug: true,
    protocol: "https",
    host: "github.my-GHE-enabled-company.com", // should be api.github.com for GitHub
    pathPrefix: "/api/v3", // for some GHEs; none for GitHub
    headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
});
github.users.getFollowingForUser({
    // optional:
    // headers: {
    //     "cookie": "blahblah"
    // },
    user: "defunkt"
}, function(err, res) {
    console.log(JSON.stringify(res));
});
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

See [here](https://github.com/mikedeboer/node-github/blob/master/examples/paginationCustomHeaders.js) and [here](https://github.com/mikedeboer/node-github/blob/master/examples/getStarred.js) for examples.

## Authentication

Most GitHub API calls don't require authentication. As a rule of thumb: If you can see the information by visiting the site without being logged in, you don't have to be authenticated to retrieve the same information through the API. Of course calls, which change data or read sensitive information have to be authenticated.

You need the GitHub user name and the API key for authentication. The API key can be found in the user's _Account Settings_.

```javascript
// basic
github.authenticate({
    type: "basic",
    username: USERNAME,
    password: PASSWORD
});

// OAuth2
github.authenticate({
    type: "oauth",
    token: AUTH_TOKEN
});

// OAuth2 Key/Secret (to get a token)
github.authenticate({
    type: "oauth",
    key: CLIENT_ID,
    secret: CLIENT_SECRET
})
```

Note: `authenticate` is synchronous because it only stores the
credentials for the next request.

Once authenticated you can update a user field like so:
```javascript
github.users.update({
    location: "Argentina"
}, function(err) {
    console.log("done!");
});
```

### Creating tokens for your application
[Create a new authorization](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization) for your application giving it access to the wanted scopes you need instead of relying on username / password and is the way to go if you have [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) on.

For example:

1. Use github.authenticate() to auth with GitHub using your username / password
2. Create an application token programmatically with the scopes you need and, if you use two-factor authentication send the `X-GitHub-OTP` header with the one-time-password you get on your token device.

```javascript
github.authorization.create({
    scopes: ["user", "public_repo", "repo", "repo:status", "gist"],
    note: "what this auth is for",
    note_url: "http://url-to-this-auth-app",
    headers: {
        "X-GitHub-OTP": "two-factor-code"
    }
}, function(err, res) {
    if (res.token) {
        //save and use res.token as in the Oauth process above from now on
    }
});
```

## Preview APIs

Some APIs are in a preview period and require a custom `Accept` header.  
See [examples/getReactionsForIssue.js](https://github.com/mikedeboer/node-github/blob/master/examples/getReactionsForIssue.js) for an example.  
For updates on endpoints under preview, see https://developer.github.com/changes/.

| Preview API         | Accept header val                               |
| ------------------- | ----------------------------------------------- |
| Deployment          | application/vnd.github.ant-man-preview+json     |
| Git signing         | application/vnd.github.cryptographer-preview    |
| Imports             | application/vnd.github.barred-rock-preview      |
| License             | application/vnd.github.drax-preview+json        |
| Migrations          | application/vnd.github.wyandotte-preview+json   |
| OAuth grants        | application/vnd.github.damage-preview           |
| Pages               | application/vnd.github.mister-fantastic-preview |
| Projects            | application/vnd.github.inertia-preview+json     |
| Protected Branches  | application/vnd.github.loki-preview+json        |
| Pull Request Squash | application/vnd.github.polaris-preview          |
| Reactions           | application/vnd.github.squirrel-girl-preview    |
| Repository Traffic  | application/vnd.github.spiderman-preview        |
| Timeline            | application/vnd.github.mockingbird-preview      |

## Update docs/tests

When updating routes.json, you'll want to update/generate docs/tests:

```bash
$ node lib/generate.js
```

Dev note for updating apidoc for github pages:

```bash
$ npm install apidoc -g
$ apidoc -i doc/ -o apidoc/
```

## Tests

Run all tests

```bash
$ npm test
```

Or run a specific test

```bash
$ npm test test/issuesTest.js
```

## LICENSE

MIT license. See the LICENSE file for details.
