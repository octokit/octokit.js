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

    it("should successfully execute POST /repos/:owner/:repo/git/blobs (createBlob)",  function(next) {
        client.gitdata.createBlob(
            {
                owner: "String",
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

    it("should successfully execute POST /repos/:owner/:repo/git/commits (createCommit)",  function(next) {
        client.gitdata.createCommit(
            {
                owner: "String",
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

    it("should successfully execute POST /repos/:owner/:repo/git/refs (createReference)",  function(next) {
        client.gitdata.createReference(
            {
                owner: "String",
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

    it("should successfully execute POST /repos/:owner/:repo/git/tags (createTag)",  function(next) {
        client.gitdata.createTag(
            {
                owner: "String",
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

    it("should successfully execute POST /repos/:owner/:repo/git/trees (createTree)",  function(next) {
        client.gitdata.createTree(
            {
                owner: "String",
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

    it("should successfully execute DELETE /repos/:owner/:repo/git/refs/:ref (deleteReference)",  function(next) {
        client.gitdata.deleteReference(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/git/blobs/:sha (getBlob)",  function(next) {
        client.gitdata.getBlob(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/git/commits/:sha (getCommit)",  function(next) {
        client.gitdata.getCommit(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/git/commits/:sha (getCommitSignatureVerification)",  function(next) {
        client.gitdata.getCommitSignatureVerification(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/git/refs/:ref (getReference)",  function(next) {
        client.gitdata.getReference(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/git/refs/ (getReferences)",  function(next) {
        client.gitdata.getReferences(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/git/tags/:sha (getTag)",  function(next) {
        client.gitdata.getTag(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/git/tags/:sha (getTagSignatureVerification)",  function(next) {
        client.gitdata.getTagSignatureVerification(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/git/refs/tags (getTags)",  function(next) {
        client.gitdata.getTags(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/git/trees/:sha (getTree)",  function(next) {
        client.gitdata.getTree(
            {
                owner: "String",
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

    it("should successfully execute PATCH /repos/:owner/:repo/git/refs/:ref (updateReference)",  function(next) {
        client.gitdata.updateReference(
            {
                owner: "String",
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
