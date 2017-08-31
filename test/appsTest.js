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

describe("[apps]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute PUT /installations/:installation_id/repositories/:repository_id (addRepoToInstallation)",  function(next) {
        client.apps.addRepoToInstallation(
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

    it("should successfully execute GET /marketplace_listing/accounts/:id (checkMarketplaceListingAccount)",  function(next) {
        client.apps.checkMarketplaceListingAccount(
            {
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /marketplace_listing/stubbed/accounts/:id (checkMarketplaceListingStubbedAccount)",  function(next) {
        client.apps.checkMarketplaceListingStubbedAccount(
            {
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /installations/:installation_id/access_tokens (createInstallationToken)",  function(next) {
        client.apps.createInstallationToken(
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

    it("should successfully execute GET /app (get)",  function(next) {
        client.apps.get(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /apps/:app_slug (getForSlug)",  function(next) {
        client.apps.getForSlug(
            {
                app_slug: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /app/installations/:installation_id (getInstallation)",  function(next) {
        client.apps.getInstallation(
            {
                installation_id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /installation/repositories (getInstallationRepositories)",  function(next) {
        client.apps.getInstallationRepositories(
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

    it("should successfully execute GET /app/installations (getInstallations)",  function(next) {
        client.apps.getInstallations(
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

    it("should successfully execute GET /marketplace_listing/plans/:id/accounts (getMarketplaceListingPlanAccounts)",  function(next) {
        client.apps.getMarketplaceListingPlanAccounts(
            {
                id: "String",
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

    it("should successfully execute GET /marketplace_listing/plans (getMarketplaceListingPlans)",  function(next) {
        client.apps.getMarketplaceListingPlans(
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

    it("should successfully execute GET /marketplace_listing/stubbed/plans/:id/accounts (getMarketplaceListingStubbedPlanAccounts)",  function(next) {
        client.apps.getMarketplaceListingStubbedPlanAccounts(
            {
                id: "String",
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

    it("should successfully execute GET /marketplace_listing/stubbed/plans (getMarketplaceListingStubbedPlans)",  function(next) {
        client.apps.getMarketplaceListingStubbedPlans(
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

    it("should successfully execute DELETE /installations/:installation_id/repositories/:repository_id (removeRepoFromInstallation)",  function(next) {
        client.apps.removeRepoFromInstallation(
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
