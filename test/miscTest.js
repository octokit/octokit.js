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

describe("[misc]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /codes_of_conduct/:key (getCodeOfConduct)",  function(next) {
        client.misc.getCodeOfConduct(
            {
                key: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /codes_of_conduct (getCodesOfConduct)",  function(next) {
        client.misc.getCodesOfConduct(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /emojis (getEmojis)",  function(next) {
        client.misc.getEmojis(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /gitignore/templates/:name (getGitignoreTemplate)",  function(next) {
        client.misc.getGitignoreTemplate(
            {
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /gitignore/templates (getGitignoreTemplates)",  function(next) {
        client.misc.getGitignoreTemplates(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /licenses/:license (getLicense)",  function(next) {
        client.misc.getLicense(
            {
                license: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /licenses (getLicenses)",  function(next) {
        client.misc.getLicenses(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /meta (getMeta)",  function(next) {
        client.misc.getMeta(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /rate_limit (getRateLimit)",  function(next) {
        client.misc.getRateLimit(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/community/code_of_conduct (getRepoCodeOfConduct)",  function(next) {
        client.misc.getRepoCodeOfConduct(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/license (getRepoLicense)",  function(next) {
        client.misc.getRepoLicense(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /markdown (renderMarkdown)",  function(next) {
        client.misc.renderMarkdown(
            {
                text: "String",
                mode: "String",
                context: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /markdown/raw (renderMarkdownRaw)",  function(next) {
        client.misc.renderMarkdownRaw(
            {
                data: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
