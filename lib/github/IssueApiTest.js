/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

"use strict";

var assert = require("assert");
var GitHubApi = require("../github").GitHubApi;

var username = 'ornicar';
var repo     = 'php-github-api';

// The login and repo details to test calls requiring authorization
var authuser = "mattpardee";
var authpass = "xxxx";
var authrepo = "WEPPON";

var test = module.exports = {

    setUp: function() {
        this.github = new GitHubApi(true);
        this.issueApi = this.github.getIssueApi();
    },

    "test: list issues" : function(finished) {
        test.issueApi.getList(username, repo, "closed", function(err, issues) {
            assert.equal(issues[0].state, "closed");
            finished();
        });
    },

    "test: get issue" : function(finished) {
        test.issueApi.getIssue(username, repo, 1, function(err, issue) {
            assert.equal(issue.number, "1");
            finished();
        });
    },

    "test: get issue comments" : function(finished) {
        test.issueApi.getIssueComments(username, repo, 1, function(err, comments) {
            assert.equal(comments[0].user, "ornicar");
            assert.equal(comments[0].body, "Done: http://wiki.github.com/ornicar/php-github-api/");
            finished();
        });
    },

    "test: search issues" : function(finished) {
        test.issueApi.searchIssues(username, repo, "closed", "Provide", function(err, issues) {
            assert.equal(issues[0].number, "1");
            finished();
        });
    },

    "!test: open issue" : function(finished) {
        test.github.authenticatePassword(authuser, authpass);
        test.issueApi.openIssue(authuser, authrepo, "Test Title", "Test body", function(err, issue) {
            assert.equal(issue.body, "Test body");
            finished();
        });
    },

    "!test: close issue" : function(finished) {
        test.github.authenticatePassword(authuser, authpass);
        test.issueApi.closeIssue(authuser, authrepo, 1, function(err, issue) {
            assert.equal(issue.state, "closed");
            finished();
        });
    },

    "!test: reopen issue" : function(finished) {
        test.github.authenticatePassword(authuser, authpass);
        test.issueApi.reopenIssue(authuser, authrepo, 1, function(err, issue) {
            assert.equal(issue.state, "open");
            finished();
        });
    },

    "!test: edit issue" : function(finished) {
        test.github.authenticatePassword(authuser, authpass);
        test.issueApi.editIssue(authuser, authrepo, 1, null, "Testing an edit!", function(err, issue) {
            assert.equal(issue.body, "Testing an edit!");
            finished();
        });
    },

    "test: get labels" : function(finished) {
        test.issueApi.getIssueLabels(username, repo, function(err, labels) {
            console.log(labels);
            finished();
        });
    },

    "!test: add and remove label" : function(finished) {
        test.github.authenticatePassword(authuser, authpass);
        test.issueApi.addIssueLabel(authuser, authrepo, 1, "feature", function(err, labels) {
            assert.equal(labels[0], "feature");
            test.issueApi.removeIssueLabel(authuser, authrepo, 1, "feature", function(err, labels) {
                assert.ok(labels.length === 0);
                finished();
            });
        });
    },

    "!test: add comment to issue" : function(finished) {
        test.github.authenticatePassword(authuser, authpass);
        test.issueApi.addIssueComment(authuser, authrepo, 1, "Testing comment", function(err, comment) {
            assert.equal(comment.body, "Testing comment");
            finished();
        });
    }
};

!module.parent && require("asyncjs").test.testcase(module.exports).exec();
