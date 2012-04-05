# JavaScript GitHub API for Node.JS

A Node.JS module, which provides an object oriented wrapper for the GitHub v3 API. 

## Installation

  Install with the Node.JS package manager [npm](http://npmjs.org/):

      $ npm install github

or

  Install via git clone:

      $ git clone git://github.com/ajaxorg/node-github.git
      $ cd node-github
      $ npm install

## Documentation

You can find the docs for the API of this client at [http://ajaxorg.github.com/node-github/](http://ajaxorg.github.com/node-github/)

Additionally, the [official Github documentation](http://developer.github.com/) 
is a very useful resource.

## Example

Print all followers of the user "mikedeboer" to the console.

    var GitHubApi = require("github");

    var github = new GitHubApi({
        version: "3.0.0"
    });
    github.user.getFollowingFromUser({
        user: "mikedeboer"
    }, function(err, res) {
        console.log(JSON.stringify(res));
    });

First the _GitHubApi_ class is imported from the _node-github_ module. This class provides 
access to all of GitHub's APIs (e.g. user, issues or repo APIs). The _getFollowingFromUser_ 
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

This example shows how to authenticate and then change _location_ field of the 
account settings to _Argentina_:

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

Note that the _authenticate_ method is synchronous because it only stores the 
credentials for the next request.

Other examples for the various authentication methods:

    // OAuth2
    github.authenticate({
        type: "oauth",
        token: token
    });
    
    // Deprecated Gihub API token (seems not to be working with the v3 API)
    github.authenticate({
        type: "token",
        token: token
    });

## Implemented GitHub APIs

* Gists: 100%
* Git Data: 100%
* Issues: 100%
* Orgs: 100%
* Pull Requests: 100%
* Repos: 100%
* Users: 100%
* Events: 100%

## Running the Tests

The unit tests are based on the [ayncjs](https://github.com/ajaxorg/async.js) 
module, which is provided as an npm dependency. To run the tests make sure that the 
npm dependencies are installed by running `npm install` from the project directory.

Running all unit tests:

    npm test

or

    node test/all.js

The test classes can also be run separately. This will e.g. run the UserApi test:

    node api/v3.0.0/userTest.js

Note that a connection to the internet is required to run the tests.

## TODO

* generate Client documentation

## LICENSE

MIT license. See the LICENSE file for details.
