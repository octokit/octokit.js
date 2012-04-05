/*
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <mike@c9.io>
 */

"use strict";

var Assert = require("assert");
var Client = require("./../../index");

var username = "fjakobstest";
var token = "b98166e45acf66df70a992e2de56b92a";

var test = module.exports = {
    setUp: function() {
        this.client = new Client({
            version: "3.0.0"
        });
    },
    
    "test: GET /repos/:user/:repo/pulls (getAll)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.getAll(
            {
                user: "String",
                repo: "String",
                state: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/pulls/:number (get)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.get(
            {
                user: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/pulls (create)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.create(
            {
                user: "String",
                repo: "String",
                title: "String",
                body: "String",
                base: "String",
                head: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/pulls (createFromIssue)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.createFromIssue(
            {
                user: "String",
                repo: "String",
                issue: "Number",
                base: "String",
                head: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PATCH /repos/:user/:repo/pulls/:number (update)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.update(
            {
                user: "String",
                repo: "String",
                number: "Number",
                state: "String",
                title: "String",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/pulls/:number/commits (getCommits)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.getCommits(
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
            }
        );
    },

    "test: GET /repos/:user/:repo/pulls/:number/files (getFiles)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.getFiles(
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
            }
        );
    },

    "test: GET /repos/:user/:repo/pulls/:number/merge (getMerged)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.getMerged(
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
            }
        );
    },

    "test: PUT /repos/:user/:repo/pulls/:number/merge (merge)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.merge(
            {
                user: "String",
                repo: "String",
                number: "Number",
                commit_message: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/pulls/:number/comments (getComments)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.getComments(
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
            }
        );
    },

    "test: GET /repos/:user/:repo/pulls/comments/:number (getComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.getComment(
            {
                user: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/pulls/:number/comments (createComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.createComment(
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
            }
        );
    },

    "test: POST /repos/:user/:repo/pulls/:number/comments (createCommentReply)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.createCommentReply(
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
            }
        );
    },

    "test: PATCH /repos/:user/:repo/pulls/comments/:number (updateComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.updateComment(
            {
                user: "String",
                repo: "String",
                number: "Number",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /repos/:user/:repo/pulls/comments/:number (deleteComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.pullRequests.deleteComment(
            {
                user: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    }
};

!module.parent && require("asyncjs").test.testcase(module.exports).exec();
