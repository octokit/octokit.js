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

describe("[pullRequests]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /repos/:user/:repo/pulls/:number/merge (checkMerged)",  function(next) {
        client.pullRequests.checkMerged(
            {
                user: "String",
                repo: "String",
                number: "Number",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/pulls (create)",  function(next) {
        client.pullRequests.create(
            {
                user: "String",
                repo: "String",
                title: "String",
                head: "String",
                base: "String",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/pulls/:number/comments (createComment)",  function(next) {
        client.pullRequests.createComment(
            {
                user: "String",
                repo: "String",
                number: "Number",
                body: "String",
                commit_id: "String",
                path: "String",
                position: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/pulls/:number/comments (createCommentReply)",  function(next) {
        client.pullRequests.createCommentReply(
            {
                user: "String",
                repo: "String",
                number: "Number",
                body: "String",
                in_reply_to: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/pulls (createFromIssue)",  function(next) {
        client.pullRequests.createFromIssue(
            {
                user: "String",
                repo: "String",
                issue: "Number",
                head: "String",
                base: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:user/:repo/pulls/comments/:number (deleteComment)",  function(next) {
        client.pullRequests.deleteComment(
            {
                user: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:user/:repo/pulls/comments/:number (editComment)",  function(next) {
        client.pullRequests.editComment(
            {
                user: "String",
                repo: "String",
                number: "Number",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/pulls/:number (get)",  function(next) {
        client.pullRequests.get(
            {
                user: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/pulls (getAll)",  function(next) {
        client.pullRequests.getAll(
            {
                user: "String",
                repo: "String",
                state: "String",
                head: "String",
                base: "String",
                sort: "String",
                direction: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/pulls/comments/:number (getComment)",  function(next) {
        client.pullRequests.getComment(
            {
                user: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/pulls/:number/comments (getComments)",  function(next) {
        client.pullRequests.getComments(
            {
                user: "String",
                repo: "String",
                number: "Number",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/pulls/comments (getCommentsForRepo)",  function(next) {
        client.pullRequests.getCommentsForRepo(
            {
                user: "String",
                repo: "String",
                sort: "String",
                direction: "String",
                since: "Date",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/pulls/:number/commits (getCommits)",  function(next) {
        client.pullRequests.getCommits(
            {
                user: "String",
                repo: "String",
                number: "Number",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/pulls/:number/files (getFiles)",  function(next) {
        client.pullRequests.getFiles(
            {
                user: "String",
                repo: "String",
                number: "Number",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:user/:repo/pulls/:number/merge (merge)",  function(next) {
        client.pullRequests.merge(
            {
                user: "String",
                repo: "String",
                number: "Number",
                commit_message: "String",
                sha: "String",
                commit_title: "String",
                squash: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:user/:repo/pulls/:number (update)",  function(next) {
        client.pullRequests.update(
            {
                user: "String",
                repo: "String",
                number: "Number",
                title: "String",
                body: "String",
                state: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
