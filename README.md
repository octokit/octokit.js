**NOTE: The `node-github` npm package is deprecated. You want the `github` npm package (see Installation).**

# Node-github

[![npm](https://img.shields.io/npm/v/github.svg)](https://www.npmjs.com/package/github)
<span class="badge-gratipay"><a href="https://gratipay.com/node-github/"><img src="https://img.shields.io/badge/gratipay-donate-yellow.svg" alt="Gratipay donate button" /></a></span>

A Node.js wrapper for GitHub API.

## Installation

Install via npm.

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

// TODO: optional authentication here depending on desired endpoints. See below in README.

github.users.getFollowingForUser({
    // optional
    // headers: {
    //     "cookie": "blahblah"
    // },
    username: "defunkt"
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

// oauth
github.authenticate({
    type: "oauth",
    token: AUTH_TOKEN
});

// oauth key/secret (to get a token)
github.authenticate({
    type: "oauth",
    key: CLIENT_ID,
    secret: CLIENT_SECRET
})

// user token
github.authenticate({
    type: "token",
    token: "userToken",
});

// integration (jwt)
github.authenticate({
    type: "integration",
    token: "jwt",
});

// ~/.netrc
github.authenticate({
    type: "netrc"
});
```

Note: `authenticate` is synchronous because it only stores the
credentials for the next request.

### Creating a token for your application
[Create a new authorization](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization).

1. Use github.authenticate() to authenticate with GitHub using your username / password.
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

## Create test auth file

Create test auth file for running tests/examples.

```bash
$ > testAuth.json
{
    "token": "<TOKEN>"
}
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

## Preview APIs

Accept headers for the preview APIs should be taken care of behind the scenes, but in the event a preview endpoint isn't working, see [here](https://github.com/mikedeboer/node-github/blob/master/examples/getRawBlob.js) for an example on how to add the required custom accept header.

For updates on endpoints under preview, see https://developer.github.com/changes/.

| Preview API             | Accept header val                               |
| -------------------     | ----------------------------------------------- |
| Commit Search           | application/vnd.github.cloak-preview+json       |
| Deployment              | application/vnd.github.ant-man-preview+json     |
| Git signing             | application/vnd.github.cryptographer-preview    |
| Imports                 | application/vnd.github.barred-rock-preview      |
| Integrations            | application/vnd.github.machine-man-preview      |
| License                 | application/vnd.github.drax-preview+json        |
| Migrations              | application/vnd.github.wyandotte-preview+json   |
| Organization Membership | application/vnd.github.korra-preview+json       |
| Pages                   | application/vnd.github.mister-fantastic-preview |
| Pre-receive             | application/vnd.github.eye-scream-preview       |
| Projects                | application/vnd.github.inertia-preview+json     |
| Protected Branches      | application/vnd.github.loki-preview+json        |
| Pull Request Squash     | application/vnd.github.polaris-preview          |
| Reactions               | application/vnd.github.squirrel-girl-preview    |
| Timeline                | application/vnd.github.mockingbird-preview      |

## Dev notes

When updating routes.json, you'll want to update the generated docs/tests:

```bash
$ node lib/generate.js
```

To update the apidoc for github pages:

```bash
$ npm install apidoc -g
$ apidoc -i doc/ -o apidoc/
```

Just a reminder, since an ad-hoc filter was added to the apidoc, don't overwrite index.html, main.js.

## LICENSE

MIT license. See the LICENSE file for details.
