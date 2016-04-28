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

    it("should successfully execute GET /repos/:user/:repo/license (getRepoLicense)",  function(next) {
        client.misc.getRepoLicense(
            {
                user: "String",
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
