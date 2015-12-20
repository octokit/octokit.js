### NOTE:
[mikedeboer/node-github](https://github.com/mikedeboer/node-github) seems to no longer be maintained so I forked it here and am working on applying PRs and issues from that repo. See progress [here](./wiki/Transition-from-upstream).

# Node-github

A Node.js wrapper for GitHub API.

## Installation

  Install with the Node.JS package manager [npm](http://npmjs.org/) ![NPM version](https://badge.fury.io/js/github4.svg):

      $ npm install github4

or

  Install via git clone:

      $ git clone git@github.com:kaizensoze/github4.git
      $ cd node-github
      $ npm install

## Documentation

Client API: [https://kaizensoze.github.io/github4/](https://kaizensoze.github.io/github4/)

GitHub API: [https://developer.github.com/v3/](https://developer.github.com/v3/)

## Example

Print all followers of the user "defunkt" to the console:
```javascript
var GitHubApi = require("github4");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    debug: true,
    protocol: "https",
    host: "github.my-GHE-enabled-company.com", // should be api.github.com for GitHub
    pathPrefix: "/api/v3", // for some GHEs; none for GitHub
    timeout: 5000,
    headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
    }
});
github.user.getFollowingFromUser({
    // optional:
    // headers: {
    //     "cookie": "blahblah"
    // },
    user: "defunkt"
}, function(err, res) {
    console.log(JSON.stringify(res));
});
```

First the `GitHubApi` class is imported from the `node-github` module. This class provides
access to all of GitHub's APIs (e.g. user, issues or repo APIs). The `getFollowingFromUser`
method lists all followers of a given GitHub user. Is is part of the user API. It
takes the user name as first argument and a callback as last argument. Once the
follower list is returned from the server, the callback is called.

Like in Node.JS, callbacks are always the last argument. If the functions fails an
error object is passed as first argument to the callback.

## Authentication

Most GitHub API calls don't require authentication. As a rule of thumb: If you
can see the information by visiting the site without being logged in, you don't
have to be authenticated to retrieve the same information through the API. Of
course calls, which change data or read sensitive information have to be authenticated.

You need the GitHub user name and the API key for authentication. The API key can
be found in the user's _Account Settings_ page.

This example shows how to authenticate and then change `location` field of the
account settings to "Argentina":
```javascript
github.authenticate({
    type: "basic",
    username: username,
    password: password
});
github.user.update({
    location: "Argentina"
}, function(err) {
    console.log("done!");
});
```
Note that the _authenticate_ method is synchronous because it only stores the
credentials for the next request.

Other examples for the various authentication methods:
```javascript
// OAuth2
github.authenticate({
    type: "oauth",
    token: token
});

// OAuth2 Key/Secret
github.authenticate({
    type: "oauth",
    key: "clientID",
    secret: "clientSecret"
})

// Deprecated Gihub API token (seems not to be working with the v3 API)
github.authenticate({
    type: "token",
    token: token
});
```

### Creating tokens for your application
[Create a new authorization](http://developer.github.com/v3/oauth/#create-a-new-authorization) for your application giving it access to the wanted scopes you need instead of relying on username / password and is the way to go if you have [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) on.

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

## Implemented GitHub APIs

* Gists: 100%
* Git Data: 100%
* Issues: 100%
* Orgs: 100%
* Pull Requests: 100%
* Repos: 100%
* Users: 100%
* Events: 100%
* Search: 100%
* Markdown: 100%
* Rate Limit: 100%
* Releases: 100%
* Gitignore: 100%
* Meta: 100%
* Emojis: 100%

## Running the Tests

The unit tests are based on the [mocha](http://visionmedia.github.com/mocha/)
module, which may be installed via npm. To run the tests make sure that the
npm dependencies are installed by running `npm install` from the project directory.

Before running unit tests:
```shell
npm install mocha -g
```
At the moment, test classes can only be run separately. This will e.g. run the Issues Api test:
```shell
mocha api/v3.0.0/issuesTest.js
```
Note that a connection to the internet is required to run the tests.

## LICENSE

MIT license. See the LICENSE file for details.
