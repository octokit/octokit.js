/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Ryan Funduk <ryan.funduk@gmail.com>
 */

require("../../support/paths");

var assert = require("assert");
var sys = require("sys");
var GitHubApi = require("github").GitHubApi;

var username = 'ornicar';
var repo     = 'php-github-api';

var test = module.exports = {

    setUp: function() {
        this.github = new GitHubApi(true);
        this.pullApi = this.github.getPullApi();
    },

    "test: list pull requests" : function(finished) {
        test.pullApi.getList(username, repo, function(err, pulls) {
            assert.equal(pulls.length, 0);
            finished();
        });
    }
};

!module.parent && require("asyncjs/test").testcase(module.exports).exec();