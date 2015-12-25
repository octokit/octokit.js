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

    it("should successfully execute GET /users/:user/orgs (getFromUser)",  function(next) {
        client.orgs.getFromUser(
            {
                user: "String",
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

    it("should successfully execute PATCH /orgs/:org (update)",  function(next) {
        client.orgs.update(
            {
                org: "String",
                billing_email: "String",
                company: "String",
                email: "String",
                location: "String",
                name: "String"
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
                page: "Number",
                per_page: "Number",
                filter: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /orgs/:org/members/:user (getMember)",  function(next) {
        client.orgs.getMember(
            {
                org: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /orgs/:org/members/:user (removeMember)",  function(next) {
        client.orgs.removeMember(
            {
                org: "String",
                user: "String"
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

    it("should successfully execute GET /orgs/:org/public_members/:user (getPublicMember)",  function(next) {
        client.orgs.getPublicMember(
            {
                org: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /orgs/:org/memberships/:user (addOrganizationMembership)",  function(next) {
        client.orgs.addOrganizationMembership(
            {
                org: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /orgs/:org/memberships/:user (removeOrganizationMembership)",  function(next) {
        client.orgs.removeOrganizationMembership(
            {
                org: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /orgs/:org/public_members/:user (publicizeMembership)",  function(next) {
        client.orgs.publicizeMembership(
            {
                org: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /orgs/:org/public_members/:user (concealMembership)",  function(next) {
        client.orgs.concealMembership(
            {
                org: "String",
                user: "String"
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

    it("should successfully execute POST /orgs/:org/teams (createTeam)",  function(next) {
        client.orgs.createTeam(
            {
                org: "String",
                name: "String",
                repo_names: "Array",
                permission: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /teams/:id (updateTeam)",  function(next) {
        client.orgs.updateTeam(
            {
                id: "String",
                name: "String",
                permission: "String"
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

    it("should successfully execute GET /teams/:id/members (getTeamMembers)",  function(next) {
        client.orgs.getTeamMembers(
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

    it("should successfully execute GET /teams/:id/members/:user (getTeamMember)",  function(next) {
        client.orgs.getTeamMember(
            {
                id: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /teams/:id/members/:user (addTeamMember)",  function(next) {
        client.orgs.addTeamMember(
            {
                id: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /teams/:id/members/:user (deleteTeamMember)",  function(next) {
        client.orgs.deleteTeamMember(
            {
                id: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /teams/:id/memberships/:user (addTeamMembership)",  function(next) {
        client.orgs.addTeamMembership(
            {
                id: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /teams/:id/memberships/:user (getTeamMembership)",  function(next) {
        client.orgs.getTeamMembership(
            {
                id: "String",
                user: "String"
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

    it("should successfully execute GET /teams/:id/repos/:user/:repo (getTeamRepo)",  function(next) {
        client.orgs.getTeamRepo(
            {
                id: "String",
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

    it("should successfully execute PUT /teams/:id/repos/:user/:repo (addTeamRepo)",  function(next) {
        client.orgs.addTeamRepo(
            {
                id: "String",
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

    it("should successfully execute DELETE /teams/:id/repos/:user/:repo (deleteTeamRepo)",  function(next) {
        client.orgs.deleteTeamRepo(
            {
                id: "String",
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
