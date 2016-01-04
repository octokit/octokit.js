##### NOTE: [mikedeboer/node-github](https://github.com/mikedeboer/node-github) seems to no longer be maintained so I forked it here and am working on applying PRs and issues from that repo. See progress [here](https://github.com/kaizensoze/github4/wiki/Transition-from-upstream).

# Node-github

A Node.js wrapper for GitHub API.

## Installation

Install via [npm](http://npmjs.org/) ![NPM version](https://badge.fury.io/js/github4.svg)

```bash
$ npm install github4
```

or

Install via git clone

```bash
$ git clone git@github.com:kaizensoze/node-github.git
$ cd node-github
$ npm install
```

## Documentation

Client API: [https://kaizensoze.github.io/node-github/](https://kaizensoze.github.io/node-github/)  
GitHub API: [https://developer.github.com/v3/](https://developer.github.com/v3/)

## Test auth file

Create test auth file for running tests/examples.

```bash
$ > test_auth.json
{
    "token": "<TOKEN>"
}
```

## Example

Get all followers for user "defunkt":
```javascript
var GitHubApi = require("github4");

var github = new GitHubApi({
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

// OAuth2 Key/Secret
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

## Update docs/tests

```bash
$ node generate.js
```

Dev note for updating apidoc for github pages:

```bash
$ npm install apidoc -g
$ apidoc -i doc/ -o apidoc/
```

## Tests

Install mocha
```bash
$ npm install mocha -g
```

Run all tests
```bash
$ mocha
```

Or run a specific test
```bash
$ mocha test/issuesTest.js
```

## LICENSE

MIT license. See the LICENSE file for details.
