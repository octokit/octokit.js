/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Ryan Funduk <ryan.funduk@gmail.com>
 */

var sys = require("sys");
var GitHubApi = require("../lib/github").GitHubApi;
var async_testing = require('../vendor/node-async-testing/async_testing');

var suite = exports.suite = new async_testing.TestSuite();

var username = 'ornicar';
var repo     = 'php-github-api';

suite.setup(function() {
    this.github = new GitHubApi(true);
    this.pullApi = this.github.getPullApi();
});

suite.addTests({
    "test: list pull requests" : function(assert, finished, test) {
        test.pullApi.getList(username, repo, function(err, pulls) {
            assert.equal(pulls.length, 0);
            finished();
        });
    }
});

if (module === require.main) {
    async_testing.runSuites({PullApi: suite});
}