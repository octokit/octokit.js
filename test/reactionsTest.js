/*
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <info@mikedeboer.nl>
 */

"use strict";

var Assert = require("assert");
var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

describe("[reactions]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /repos/:user/:repo/comments/:id/reactions (createForCommitComment)",  function(next) {
        client.reactions.createForCommitComment(
            {
                user: "String",
                repo: "String",
                id: "String",
                content: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/issues/:number/reactions (createForIssue)",  function(next) {
        client.reactions.createForIssue(
            {
                user: "String",
                repo: "String",
                number: "Number",
                content: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/issues/comments/:id/reactions (createForIssueComment)",  function(next) {
        client.reactions.createForIssueComment(
            {
                user: "String",
                repo: "String",
                id: "String",
                content: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/pulls/comments/:id/reactions (createForPullRequestReviewComment)",  function(next) {
        client.reactions.createForPullRequestReviewComment(
            {
                user: "String",
                repo: "String",
                id: "String",
                content: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /reactions/:id (delete)",  function(next) {
        client.reactions.delete(
            {
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/comments/:id/reactions (getForCommitComment)",  function(next) {
        client.reactions.getForCommitComment(
            {
                user: "String",
                repo: "String",
                id: "String",
                content: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/issues/:number/reactions (getForIssue)",  function(next) {
        client.reactions.getForIssue(
            {
                user: "String",
                repo: "String",
                number: "Number",
                content: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/issues/comments/:id/reactions (getForIssueComment)",  function(next) {
        client.reactions.getForIssueComment(
            {
                user: "String",
                repo: "String",
                id: "String",
                content: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/pulls/comments/:id/reactions (getForPullRequestReviewComment)",  function(next) {
        client.reactions.getForPullRequestReviewComment(
            {
                user: "String",
                repo: "String",
                id: "String",
                content: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
