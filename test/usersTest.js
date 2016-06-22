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

    it("should successfully execute PATCH /user/repository_invitations/:id (acceptRepoInvite)",  function(next) {
        client.users.acceptRepoInvite(
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

    it("should successfully execute POST /user/emails (addEmails)",  function(next) {
        client.users.addEmails(
            {
                body: "Array"
            },
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

    it("should successfully execute POST /user/gpg_keys (createGpgKey)",  function(next) {
        client.users.createGpgKey(
            {
                armored_public_key: "String"
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

    it("should successfully execute DELETE /user/repository_invitations/:id (declineRepoInvite)",  function(next) {
        client.users.declineRepoInvite(
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

    it("should successfully execute DELETE /user/emails (deleteEmails)",  function(next) {
        client.users.deleteEmails(
            {
                body: "Array"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /user/gpg_keys/:id (deleteGpgKey)",  function(next) {
        client.users.deleteGpgKey(
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

    it("should successfully execute DELETE /users/:user/site_admin (demote)",  function(next) {
        client.users.demote(
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

    it("should successfully execute GET /user/:id (getById)",  function(next) {
        client.users.getById(
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

    it("should successfully execute GET /user/gpg_keys/:id (getGpgKey)",  function(next) {
        client.users.getGpgKey(
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

    it("should successfully execute GET /user/gpg_keys (getGpgKeys)",  function(next) {
        client.users.getGpgKeys(
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

    it("should successfully execute GET /user/repository_invitations (getRepoInvites)",  function(next) {
        client.users.getRepoInvites(
            {},
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

    it("should successfully execute PUT /users/:user/site_admin (promote)",  function(next) {
        client.users.promote(
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

    it("should successfully execute PUT /users/:user/suspended (suspend)",  function(next) {
        client.users.suspend(
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

    it("should successfully execute DELETE /users/:user/suspended (unsuspend)",  function(next) {
        client.users.unsuspend(
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
