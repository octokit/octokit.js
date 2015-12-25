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
var Client = require("./../../index");
var testAuth = require("./../test_auth.json");

describe("[statuses]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /repos/:user/:repo/commits/:sha/statuses (get)",  function(next) {
        client.statuses.get(
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

    it("should successfully execute GET /repos/:user/:repo/commits/:sha/status (getCombined)",  function(next) {
        client.statuses.getCombined(
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

    it("should successfully execute POST /repos/:user/:repo/statuses/:sha (create)",  function(next) {
        client.statuses.create(
            {
                user: "String",
                repo: "String",
                sha: "String",
                state: "String",
                target_url: "String",
                description: "String",
                context: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
