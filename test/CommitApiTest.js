/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

var sys = require("sys");
var GitHubApi = require("../lib/github").GitHubApi;
var async_testing = require('../vendor/node-async-testing/async_testing');

var suite = exports.suite = new async_testing.TestSuite();

var username = "fjakobs";
var branch = "master";
var repo = "qxoo";

suite.setup(function() {
    this.github = new GitHubApi(true);
    this.commitApi = this.github.getCommitApi();
});

suite.addTests({
    "test: list branch commits" : function(assert, finished, test) {
        test.commitApi.getBranchCommits(username, repo, branch, function(err, commits) {
            assert.ok(commits.length > 0);
            assert.ok(commits[0].message !== undefined);
            finished();
        });
    }
});

if (module === require.main) {
    async_testing.runSuites({CommitApi: suite});
}


//$commits = $api->getCommitApi()->getFileCommits($username, $repo, $branch, 'README');
//
//$t->is_deeply($api->listFileCommits($username, $repo, $branch, 'README'), $commits, 'Both new and BC syntax work');
//
//$firstCommit = array_pop($commits);
//
//$t->is($firstCommit['message'], 'first commit', 'Found master README commits');