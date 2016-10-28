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

describe("[orgs]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute PUT /orgs/:org/memberships/:username (addOrgMembership)",  function(next) {
        client.orgs.addOrgMembership(
            {
                org: "String",
                username: "String",
                role: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /teams/:id/memberships/:username (addTeamMembership)",  function(next) {
        client.orgs.addTeamMembership(
            {
                id: "String",
                username: "String",
                role: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /teams/:id/repos/:org/:repo (addTeamRepo)",  function(next) {
        client.orgs.addTeamRepo(
            {
                id: "String",
                org: "String",
                repo: "String",
                permission: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /orgs/:org/members/:username (checkMembership)",  function(next) {
        client.orgs.checkMembership(
            {
                org: "String",
                username: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /orgs/:org/public_members/:username (checkPublicMembership)",  function(next) {
        client.orgs.checkPublicMembership(
            {
                org: "String",
                username: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /teams/:id/repos/:owner/:repo (checkTeamRepo)",  function(next) {
        client.orgs.checkTeamRepo(
            {
                id: "String",
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

    it("should successfully execute DELETE /orgs/:org/public_members/:username (concealMembership)",  function(next) {
        client.orgs.concealMembership(
            {
                org: "String",
                username: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /orgs/:org/hooks (createHook)",  function(next) {
        client.orgs.createHook(
            {
                org: "String",
                name: "String",
                config: "Json",
                events: "Array",
                active: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /orgs/:org/teams (createTeam)",  function(next) {
        client.orgs.createTeam(
            {
                org: "String",
                name: "String",
                description: "String",
                repo_names: "Array",
                privacy: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /orgs/:org/hooks/:id (deleteHook)",  function(next) {
        client.orgs.deleteHook(
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

    it("should successfully execute DELETE /teams/:id (deleteTeam)",  function(next) {
        client.orgs.deleteTeam(
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

    it("should successfully execute DELETE /teams/:id/repos/:owner/:repo (deleteTeamRepo)",  function(next) {
        client.orgs.deleteTeamRepo(
            {
                id: "String",
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

    it("should successfully execute PATCH /orgs/:org/hooks/:id (editHook)",  function(next) {
        client.orgs.editHook(
            {
                org: "String",
                id: "String",
                config: "Json",
                events: "Array",
                active: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /teams/:id (editTeam)",  function(next) {
        client.orgs.editTeam(
            {
                id: "String",
                name: "String",
                description: "String",
                privacy: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /orgs/:org (get)",  function(next) {
        client.orgs.get(
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

    it("should successfully execute GET /organizations (getAll)",  function(next) {
        client.orgs.getAll(
            {
                since: "String",
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

    it("should successfully execute GET /users/:username/orgs (getForUser)",  function(next) {
        client.orgs.getForUser(
            {
                username: "String",
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

    it("should successfully execute GET /orgs/:org/hooks/:id (getHook)",  function(next) {
        client.orgs.getHook(
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

    it("should successfully execute GET /orgs/:org/hooks (getHooks)",  function(next) {
        client.orgs.getHooks(
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

    it("should successfully execute GET /orgs/:org/members (getMembers)",  function(next) {
        client.orgs.getMembers(
            {
                org: "String",
                filter: "String",
                role: "String",
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

    it("should successfully execute GET /orgs/:org/memberships/:username (getOrgMembership)",  function(next) {
        client.orgs.getOrgMembership(
            {
                org: "String",
                username: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /orgs/:org/public_members (getPublicMembers)",  function(next) {
        client.orgs.getPublicMembers(
            {
                org: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /teams/:id (getTeam)",  function(next) {
        client.orgs.getTeam(
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

    it("should successfully execute GET /teams/:id/members (getTeamMembers)",  function(next) {
        client.orgs.getTeamMembers(
            {
                id: "String",
                role: "String",
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

    it("should successfully execute GET /teams/:id/memberships/:username (getTeamMembership)",  function(next) {
        client.orgs.getTeamMembership(
            {
                id: "String",
                username: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /teams/:id/repos (getTeamRepos)",  function(next) {
        client.orgs.getTeamRepos(
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

    it("should successfully execute GET /orgs/:org/teams (getTeams)",  function(next) {
        client.orgs.getTeams(
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

    it("should successfully execute POST /orgs/:org/hooks/:id/pings (pingHook)",  function(next) {
        client.orgs.pingHook(
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

    it("should successfully execute PUT /orgs/:org/public_members/:username (publicizeMembership)",  function(next) {
        client.orgs.publicizeMembership(
            {
                org: "String",
                username: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /orgs/:org/members/:username (removeMember)",  function(next) {
        client.orgs.removeMember(
            {
                org: "String",
                username: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /orgs/:org/memberships/:username (removeOrgMembership)",  function(next) {
        client.orgs.removeOrgMembership(
            {
                org: "String",
                username: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /teams/:id/memberships/:username (removeTeamMembership)",  function(next) {
        client.orgs.removeTeamMembership(
            {
                id: "String",
                username: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /orgs/:org (update)",  function(next) {
        client.orgs.update(
            {
                org: "String",
                billing_email: "String",
                company: "String",
                email: "String",
                location: "String",
                name: "String",
                description: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
