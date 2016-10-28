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

describe("[integrations]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /installations/:installation_id/repositories/:repository_id (addRepoToInstallation)",  function(next) {
        client.integrations.addRepoToInstallation(
            {
                installation_id: "String",
                repository_id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /installations/:installation_id/access_tokens (createInstallationToken)",  function(next) {
        client.integrations.createInstallationToken(
            {
                installation_id: "String",
                user_id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /installation/repositories (getInstallationRepositories)",  function(next) {
        client.integrations.getInstallationRepositories(
            {
                user_id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /integration/installations (getInstallations)",  function(next) {
        client.integrations.getInstallations(
            {
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

    it("should successfully execute POST /integration/identity/user (getUserIdentity)",  function(next) {
        client.integrations.getUserIdentity(
            {
                nonce: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /installations/:installation_id/repositories/:repository_id (removeRepoFromInstallation)",  function(next) {
        client.integrations.removeRepoFromInstallation(
            {
                installation_id: "String",
                repository_id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
