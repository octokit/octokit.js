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

    it("should successfully execute DELETE /repos/:user/:repo/import (cancelImport)",  function(next) {
        client.migrations.cancelImport(
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

    it("should successfully execute GET /repos/:user/:repo/import/authors (getImportCommitAuthors)",  function(next) {
        client.migrations.getImportCommitAuthors(
            {
                user: "String",
                repo: "String",
                since: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/import (getImportProgress)",  function(next) {
        client.migrations.getImportProgress(
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

    it("should successfully execute GET /:user/:name/import/large_files (getLargeImportFiles)",  function(next) {
        client.migrations.getLargeImportFiles(
            {
                user: "String",
                name: "String"
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

    it("should successfully execute PATCH /repos/:user/:repo/import/authors/:author_id (mapImportCommitAuthor)",  function(next) {
        client.migrations.mapImportCommitAuthor(
            {
                user: "String",
                repo: "String",
                author_id: "String",
                email: "String",
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /:user/:name/import/lfs (setImportLfsPreference)",  function(next) {
        client.migrations.setImportLfsPreference(
            {
                user: "String",
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:user/:repo/import (startImport)",  function(next) {
        client.migrations.startImport(
            {
                user: "String",
                repo: "String",
                vcs_url: "String",
                vcs: "String",
                vcs_username: "String",
                vcs_password: "String",
                tfvc_project: "String"
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

    it("should successfully execute PATCH /repos/:user/:repo/import (updateImport)",  function(next) {
        client.migrations.updateImport(
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
});
