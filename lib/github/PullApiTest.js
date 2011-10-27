/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Ryan Funduk <ryan.funduk@gmail.com>
 */

"use strict";

var assert = require("assert");
var sys = require("sys");
var GitHubApi = require("../github").GitHubApi;

var username = "ajaxorg";
var repo     = "ace";

var test = module.exports = {

    setUp: function() {
        this.github = new GitHubApi(true);
        this.pullApi = this.github.getPullApi();
    },

    "test: list pull requests" : function(finished) {
        test.pullApi.getList(username, repo, function(err, pulls) {
            assert.ok(pulls.length);
            finished();
        });
    },

    "test: show pull request" : function(finished) {
        test.pullApi.show(username, repo, 157, function(err, pull) {
            assert.equal(pull.number, 157);
            finished();
        });
    }
};

!module.parent && require("asyncjs").test.testcase(module.exports).exec();