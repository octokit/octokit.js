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

describe("[enterprise]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /admin/organizations (createOrg)",  function(next) {
        client.enterprise.createOrg(
            {
                login: "String",
                admin: "String",
                profile_name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /enterprise/settings/license (getLicense)",  function(next) {
        client.enterprise.getLicense(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /staff/indexing_jobs (queueIndexingJob)",  function(next) {
        client.enterprise.queueIndexingJob(
            {
                target: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /enterprise/stats/:type (stats)",  function(next) {
        client.enterprise.stats(
            {
                type: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /admin/ldap/teams/:team_id/sync (syncLdapForTeam)",  function(next) {
        client.enterprise.syncLdapForTeam(
            {
                team_id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /admin/ldap/users/:user/sync (syncLdapForUser)",  function(next) {
        client.enterprise.syncLdapForUser(
            {
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /admin/ldap/teams/:team_id/mapping (updateLdapForTeam)",  function(next) {
        client.enterprise.updateLdapForTeam(
            {
                team_id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /admin/ldap/users/:user/mapping (updateLdapForUser)",  function(next) {
        client.enterprise.updateLdapForUser(
            {
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
