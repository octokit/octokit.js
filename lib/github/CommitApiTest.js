/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

require("../../support/paths");

var assert = require("assert");
var sys = require("sys");
var GitHubApi = require("github").GitHubApi;

var username = "ornicar";
var branch = "master";
var repo = "php-github-api";

var test = module.exports = {

    setUp: function() {
        this.github = new GitHubApi(true);
        this.commitApi = this.github.getCommitApi();
    },

    "test: list branch commits" : function(finished) {
        test.commitApi.getBranchCommits(username, repo, branch, function(err, commits) {
            assert.ok(commits.length > 0);
            assert.ok(commits[0].message !== undefined);
            finished();
        });
    },

    "test: get file commits" : function(finished) {
        test.commitApi.getFileCommits(username, repo, branch, "README", function(err, commits) {
            assert.ok(commits.length > 0);
            assert.equal(commits.pop().message, "first commit");
            finished();
        });
    }
};

!module.parent && require("asyncjs/test").testcase(module.exports).exec();