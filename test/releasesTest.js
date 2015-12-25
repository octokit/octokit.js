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

describe("[releases]", function() {
    var client;
    var token = "c286e38330e15246a640c2cf32a45ea45d93b2ba";

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /repos/:owner/:repo/releases (listReleases)",  function(next) {
        client.releases.listReleases(
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

    it("should successfully execute GET /repos/:owner/:repo/releases/:id (getRelease)",  function(next) {
        client.releases.getRelease(
            {
                owner: "String",
                id: "Number",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/releases/latest (getLatestRelease)",  function(next) {
        client.releases.getLatestRelease(
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

    it("should successfully execute POST /repos/:owner/:repo/releases (createRelease)",  function(next) {
        client.releases.createRelease(
            {
                owner: "String",
                repo: "String",
                tag_name: "String",
                target_commitish: "String",
                name: "String",
                body: "String",
                draft: "Boolean",
                prerelease: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo/releases/:id (editRelease)",  function(next) {
        client.releases.editRelease(
            {
                owner: "String",
                id: "Number",
                repo: "String",
                tag_name: "String",
                target_commitish: "String",
                name: "String",
                body: "String",
                draft: "Boolean",
                prerelease: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/releases/:id (deleteRelease)",  function(next) {
        client.releases.deleteRelease(
            {
                owner: "String",
                id: "Number",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/releases/:id/assets (listAssets)",  function(next) {
        client.releases.listAssets(
            {
                owner: "String",
                id: "Number",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/releases/assets/:id (getAsset)",  function(next) {
        client.releases.getAsset(
            {
                owner: "String",
                id: "Number",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/releases/:id/assets (uploadAsset)",  function(next) {
        client.releases.uploadAsset(
            {
                owner: "String",
                id: "Number",
                repo: "String",
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo/releases/assets/:id (editAsset)",  function(next) {
        client.releases.editAsset(
            {
                owner: "String",
                id: "Number",
                repo: "String",
                name: "String",
                label: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/releases/assets/:id (deleteAsset)",  function(next) {
        client.releases.deleteAsset(
            {
                owner: "String",
                id: "Number",
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
