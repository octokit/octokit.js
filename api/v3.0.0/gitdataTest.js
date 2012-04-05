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
    
    "test: GET /repos/:user/:repo/git/blobs/:sha (getBlob)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.getBlob(
            {
                user: "String",
                repo: "String",
                sha: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST repos/:user/:repo/git/blobs (createBlob)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.createBlob(
            {
                user: "String",
                repo: "String",
                content: "String",
                encoding: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/git/commits/:sha (getCommit)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.getCommit(
            {
                user: "String",
                repo: "String",
                sha: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/git/commits (createCommit)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.createCommit(
            {
                user: "String",
                repo: "String",
                message: "String",
                tree: "String",
                parents: "Array",
                author: "Json",
                committer: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/git/refs/:ref (getReference)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.getReference(
            {
                user: "String",
                repo: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/git/refs (getAllReferences)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.getAllReferences(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/git/refs (createReference)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.createReference(
            {
                user: "String",
                repo: "String",
                refs: "String",
                sha: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PATCH /repos/:user/:repo/git/refs/:ref (updateReference)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.updateReference(
            {
                user: "String",
                repo: "String",
                sha: "String",
                force: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/git/tags/:sha (getTag)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.getTag(
            {
                user: "String",
                repo: "String",
                sha: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/git/tags (createTag)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.createTag(
            {
                user: "String",
                repo: "String",
                tag: "String",
                message: "String",
                object: "String",
                type: "String",
                tagger.name: "String",
                tagger.email: "String",
                tagger.date: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/git/trees/:sha (getTree)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.getTree(
            {
                user: "String",
                repo: "String",
                sha: "String",
                recursive: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/git/trees (createTree)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.gitdata.createTree(
            {
                user: "String",
                repo: "String",
                tree: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    }
};

!module.parent && require("asyncjs").test.testcase(module.exports).exec();
