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

    it("should successfully execute POST /admin/pre_receive_environments (createPreReceiveEnvironment)",  function(next) {
        client.enterprise.createPreReceiveEnvironment(
            {
                name: "String",
                image_url: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /admin/pre-receive-hooks (createPreReceiveHook)",  function(next) {
        client.enterprise.createPreReceiveHook(
            {
                name: "String",
                script: "String",
                script_repository: "Json",
                environment: "Json",
                enforcement: "String",
                allow_downstream_configuration: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /admin/pre_receive_environments/:id (deletePreReceiveEnvironment)",  function(next) {
        client.enterprise.deletePreReceiveEnvironment(
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

    it("should successfully execute DELETE /admin/pre_receive_hooks/:id (deletePreReceiveHook)",  function(next) {
        client.enterprise.deletePreReceiveHook(
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

    it("should successfully execute PATCH /admin/pre_receive_environments/:id (editPreReceiveEnvironment)",  function(next) {
        client.enterprise.editPreReceiveEnvironment(
            {
                id: "String",
                name: "String",
                image_url: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /admin/pre_receive_hooks/:id (editPreReceiveHook)",  function(next) {
        client.enterprise.editPreReceiveHook(
            {
                id: "String",
                hook: "Json"
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

    it("should successfully execute GET /admin/pre-receive-environments/:id (getPreReceiveEnvironment)",  function(next) {
        client.enterprise.getPreReceiveEnvironment(
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

    it("should successfully execute GET /admin/pre-receive-environments/:id/downloads/latest (getPreReceiveEnvironmentDownloadStatus)",  function(next) {
        client.enterprise.getPreReceiveEnvironmentDownloadStatus(
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

    it("should successfully execute GET /admin/pre_receive_environments (getPreReceiveEnvironments)",  function(next) {
        client.enterprise.getPreReceiveEnvironments(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /admin/pre-receive-hooks/:id (getPreReceiveHook)",  function(next) {
        client.enterprise.getPreReceiveHook(
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

    it("should successfully execute GET /admin/pre-receive-hooks (getPreReceiveHooks)",  function(next) {
        client.enterprise.getPreReceiveHooks(
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

    it("should successfully execute POST /admin/ldap/users/:username/sync (syncLdapForUser)",  function(next) {
        client.enterprise.syncLdapForUser(
            {
                username: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /admin/pre_receive_environments/:id/downloads (triggerPreReceiveEnvironmentDownload)",  function(next) {
        client.enterprise.triggerPreReceiveEnvironmentDownload(
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

    it("should successfully execute PATCH /admin/ldap/teams/:team_id/mapping (updateLdapForTeam)",  function(next) {
        client.enterprise.updateLdapForTeam(
            {
                team_id: "Number",
                ldap_dn: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /admin/ldap/users/:username/mapping (updateLdapForUser)",  function(next) {
        client.enterprise.updateLdapForUser(
            {
                username: "String",
                ldap_dn: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
