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

describe("[gitdata]", function() {
    var client;
    var token = "e5a4a27487c26e571892846366de023349321a73";

    beforeEach(function() {
        client = new Client({
            version: "3.0.0"
        });
        client.authenticate({
            type: "oauth",
            token: token
        });
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

    it("should successfully execute GET /repos/:user/:repo/git/refs (getAllReferences)",  function(next) {
        client.gitdata.getAllReferences(
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

    it("should successfully execute POST /repos/:user/:repo/git/refs (createReference)",  function(next) {
        client.gitdata.createReference(
            {
                user: "String",
                repo: "String",
                refs: "String",
                sha: "String"
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

    it("should successfully execute POST /repos/:user/:repo/git/tags (createTag)",  function(next) {
        client.gitdata.createTag(
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
});
