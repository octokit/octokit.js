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

describe("[users]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /user/emails (addEmails)",  function(next) {
        client.users.addEmails(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /user/following/:user (checkFollowing)",  function(next) {
        client.users.checkFollowing(
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

    it("should successfully execute GET /users/:user/following/:other_user (checkIfOneFollowersOther)",  function(next) {
        client.users.checkIfOneFollowersOther(
            {
                user: "String",
                other_user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /user/keys (createKey)",  function(next) {
        client.users.createKey(
            {
                title: "String",
                key: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /user/emails (deleteEmails)",  function(next) {
        client.users.deleteEmails(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /user/keys/:id (deleteKey)",  function(next) {
        client.users.deleteKey(
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

    it("should successfully execute PATCH /user/memberships/orgs/:org (editOrganizationMembership)",  function(next) {
        client.users.editOrganizationMembership(
            {
                org: "String",
                state: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /user/following/:user (followUser)",  function(next) {
        client.users.followUser(
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

    it("should successfully execute GET /user (get)",  function(next) {
        client.users.get(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /users (getAll)",  function(next) {
        client.users.getAll(
            {
                since: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /user/emails (getEmails)",  function(next) {
        client.users.getEmails(
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

    it("should successfully execute GET /users/followers (getFollowers)",  function(next) {
        client.users.getFollowers(
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

    it("should successfully execute GET /users/:user/followers (getFollowersForUser)",  function(next) {
        client.users.getFollowersForUser(
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

    it("should successfully execute GET /user/following (getFollowing)",  function(next) {
        client.users.getFollowing(
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

    it("should successfully execute GET /users/:user/following (getFollowingForUser)",  function(next) {
        client.users.getFollowingForUser(
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

    it("should successfully execute GET /users/:user (getForUser)",  function(next) {
        client.users.getForUser(
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

    it("should successfully execute GET /user/keys/:id (getKey)",  function(next) {
        client.users.getKey(
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

    it("should successfully execute GET /user/keys (getKeys)",  function(next) {
        client.users.getKeys(
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

    it("should successfully execute GET /users/:user/keys (getKeysForUser)",  function(next) {
        client.users.getKeysForUser(
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

    it("should successfully execute GET /user/memberships/orgs/:org (getOrganizationMembership)",  function(next) {
        client.users.getOrganizationMembership(
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

    it("should successfully execute GET /user/orgs (getOrgs)",  function(next) {
        client.users.getOrgs(
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

    it("should successfully execute GET /user/teams (getTeams)",  function(next) {
        client.users.getTeams(
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

    it("should successfully execute DELETE /user/following/:user (unfollowUser)",  function(next) {
        client.users.unfollowUser(
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

    it("should successfully execute PATCH /user (update)",  function(next) {
        client.users.update(
            {
                name: "String",
                email: "String",
                blog: "String",
                company: "String",
                location: "String",
                hireable: "Boolean",
                bio: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
