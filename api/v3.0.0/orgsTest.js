/*
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <mike@c9.io>
 */

"use strict";

var Assert = require("assert");
var Client = require("./../../index");

var username = "fjakobstest";
var token = "b98166e45acf66df70a992e2de56b92a";

var test = module.exports = {
    setUp: function() {
        this.client = new Client({
            version: "3.0.0"
        });
    },
    
    "test: GET /users/:user/orgs (getFromUser)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.getFromUser(
            {
                user: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /orgs/:org (get)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.get(
            {
                org: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PATCH /orgs/:org (update)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.update(
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
            }
        );
    },

    "test: GET /orgs/:org/members (getMembers)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.getMembers(
            {
                org: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /orgs/:org/members/:user (getMember)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.getMember(
            {
                org: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /orgs/:org/members/:user (removeMember)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.removeMember(
            {
                org: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /orgs/:org/public_members (getPublicMembers)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.getPublicMembers(
            {
                org: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /orgs/:org/public_members/:user (getPublicMember)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.getPublicMember(
            {
                org: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PUT /orgs/:org/public_members/:user (publicizeMembership)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.publicizeMembership(
            {
                org: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /orgs/:org/public_members/:user (concealMembership)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.concealMembership(
            {
                org: "String",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /orgs/:org/teams (getTeams)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.getTeams(
            {
                org: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /teams/:id (getTeam)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.getTeam(
            {
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /orgs/:org/teams (createTeam)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.createTeam(
            {
                org: "String",
                name: "String",
                repo_names: "Array",
                permission: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PATCH /teams/:id (updateTeam)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.updateTeam(
            {
                id: "Number",
                name: "String",
                permission: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /teams/:id (deleteTeam)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.deleteTeam(
            {
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /teams/:id/members (getTeamMembers)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.getTeamMembers(
            {
                id: "Number",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /teams/:id/members/:user (getTeamMember)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.getTeamMember(
            {
                id: "Number",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PUT /teams/:id/members/:user (addTeamMember)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.addTeamMember(
            {
                id: "Number",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /teams/:id/members/:user (deleteTeamMember)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.deleteTeamMember(
            {
                id: "Number",
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /teams/:id/repos (getTeamRepos)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.getTeamRepos(
            {
                id: "Number",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /teams/:id/repos/:user/:repo (getTeamRepo)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.getTeamRepo(
            {
                id: "Number",
                user: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PUT /teams/:id/repos/:user/:repo (addTeamRepo)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.addTeamRepo(
            {
                id: "Number",
                user: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /teams/:id/repos/:user/:repo (deleteTeamRepo)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.orgs.deleteTeamRepo(
            {
                id: "Number",
                user: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    }
};

!module.parent && require("asyncjs").test.testcase(module.exports).exec();
