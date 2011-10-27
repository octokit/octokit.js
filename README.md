# JavaScript GitHub API for node.js

A node.js module, which provides an object oriented wrapper for the GitHub v2 API. This library is a direct port of [php-github-api](http://github.com/ornicar/php-github-api) by Thibault Duplessis to JavaScript. The only major difference is that the JavaScript code is fully asynchronous.

## Installation

  Install with the node package manager [npm](http://npmjs.org/):
  
      $ npm install github

or

  Install via git clone:
  
      $ git clone git://github.com/ajaxorg/node-github.git
      $ cd node-github
      $ npm install

## Example

Print all followers of the user "fjakobs" to the console.

    var sys = require("sys");
    var GitHubApi = require("github").GitHubApi;

    var github = new GitHubApi(true);
    github.getUserApi().getFollowers('fjakobs', function(err, followers) {
        console.log(followers.join('\n'));
    });

First the _GitHubApi_ class is imported from the _github_ module. This class provides access to all of GitHub's APIs (e.g. user, commit or repository APIs). The _getFollowers_ method lists all followers of a given GitHub user. Is is part of the user API. It takes the user name as first argument and a callback as last argument. Once the follower list is returned from the server, the callback is called.

Like in node.js callbacks are always the last argument. If the functions fails an error object is passed as first argument to the callback.

## Authentication

Most GitHub API calls don't require authentication. As a rule of thumb: If you can see the information by visiting the site without being logged in, you don't have to be authenticated to retrieve the same information through the API. Of course calls, which change data or read sensitive information have to be authenticated.

You need the GitHub user name and the API key for authentication. The API key can be found in the user's _Account Settings_ page.

This example shows how to authenticate and then change _location_ field of the account settings to _Argentina_:

    github.authenticate(username, token);
    github.getUserApi().update(username, {location: "Argentina"}, function(err) {
        console.log("done!");
    });

Note that the _authenticate_ method is synchronous because it only stores the credentials for the next request.

## Implemented GitHub APIs

* User API: 100%
* Commit API: 100%
* Object API: 100%
* Repository API: almost complete. Only _create_ and _delete_ repository is missing
* Issues API: only _getList_ is implemented
* Pulls API: only _getList_ is implemented
* Gist API: 100% v1 Gist API implemented. 0% v3 API
* Network API: still missing

## Running the Tests

The unit tests are based on the [node-async-test](http://github.com/bentomas/node-async-testing) module, which is provided as a git submodule. To run the tests make sure that the npm dependencies are installed by running `npm install` from the project directory.
    
Running all unit tests:

    npm test
    
or

    node lib/github_all_tests.js 
    
The test classes can also be run separately. This will e.g. run the UserApi test:

    node lib/github_test.js
    
Note that a connection to the internet is required to run the tests.

## TODO

* API docs
  * fix and polish (there might still be some PHP-isms)
  * generate API documentation
* Documentation

## LICENSE

MIT license. See the LICENSE file for details.

## Credits

Thanks to Thibault Duplessis for the excellent php-github-api library, which is the blueprint of this library. Especially the unit tests proved to be very helpful.
