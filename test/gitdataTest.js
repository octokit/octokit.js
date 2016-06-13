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

describe("[gitdata]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /repos/:user/:repo/git/blobs (createBlob)",  function(next) {
        client.gitdata.createBlob(
            {
                user: "String",
                repo: "String",
                content: "String",
                encoding: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/git/commits (createCommit)",  function(next) {
        client.gitdata.createCommit(
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
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/git/refs (createReference)",  function(next) {
        client.gitdata.createReference(
            {
                user: "String",
                repo: "String",
                ref: "String",
                sha: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/git/tags (createTag)",  function(next) {
        client.gitdata.createTag(
            {
                user: "String",
                repo: "String",
                tag: "String",
                message: "String",
                object: "String",
                type: "String",
                tagger: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/git/trees (createTree)",  function(next) {
        client.gitdata.createTree(
            {
                user: "String",
                repo: "String",
                tree: "Json",
                base_tree: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:user/:repo/git/refs/:ref (deleteReference)",  function(next) {
        client.gitdata.deleteReference(
            {
                user: "String",
                repo: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/git/blobs/:sha (getBlob)",  function(next) {
        client.gitdata.getBlob(
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
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/git/commits/:sha (getCommit)",  function(next) {
        client.gitdata.getCommit(
            {
                user: "String",
                repo: "String",
                sha: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/git/refs/:ref (getReference)",  function(next) {
        client.gitdata.getReference(
            {
                user: "String",
                repo: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/git/refs (getReferences)",  function(next) {
        client.gitdata.getReferences(
            {
                user: "String",
                repo: "String",
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

    it("should successfully execute GET /repos/:user/:repo/git/tags/:sha (getTag)",  function(next) {
        client.gitdata.getTag(
            {
                user: "String",
                repo: "String",
                sha: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/git/refs/tags (getTags)",  function(next) {
        client.gitdata.getTags(
            {
                user: "String",
                repo: "String",
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

    it("should successfully execute GET /repos/:user/:repo/git/trees/:sha (getTree)",  function(next) {
        client.gitdata.getTree(
            {
                user: "String",
                repo: "String",
                sha: "String",
                recursive: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:user/:repo/git/refs/:ref (updateReference)",  function(next) {
        client.gitdata.updateReference(
            {
                user: "String",
                repo: "String",
                ref: "String",
                sha: "String",
                force: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
