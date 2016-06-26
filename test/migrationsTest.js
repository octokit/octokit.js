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

describe("[migrations]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute DELETE /orgs/:org/migrations/:id/archive (deleteMigrationArchive)",  function(next) {
        client.migrations.deleteMigrationArchive(
            {
                org: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /orgs/:org/migrations/:id/archive (getMigrationArchiveLink)",  function(next) {
        client.migrations.getMigrationArchiveLink(
            {
                org: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /orgs/:org/migrations/:id (getMigrationStatus)",  function(next) {
        client.migrations.getMigrationStatus(
            {
                org: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /orgs/:org/migrations (getMigrations)",  function(next) {
        client.migrations.getMigrations(
            {
                org: "String",
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

    it("should successfully execute POST /orgs/:org/migrations (startMigration)",  function(next) {
        client.migrations.startMigration(
            {
                org: "String",
                repositories: "Array",
                lock_repositories: "Boolean",
                exclude_attachments: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /orgs/:org/migrations/:id/repos/:repo/lock (unlockRepoLockedForMigration)",  function(next) {
        client.migrations.unlockRepoLockedForMigration(
            {
                org: "String",
                id: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
