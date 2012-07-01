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
    
    "test: GET /users/:user (getFrom)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.getFrom(
            {
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /user (get)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.get(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PATCH /user (update)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.update(
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
            }
        );
    },

    "test: GET /user/orgs (getOrgs)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.getOrgs(
            {
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /user/emails (getEmails)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.getEmails(
            {
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /user/emails (addEmails)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.addEmails(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /user/emails (deleteEmails)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.deleteEmails(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /users/:user/followers (getFollowers)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.getFollowers(
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

    "test: GET /users/:user/following (getFollowingFromUser)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.getFollowingFromUser(
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

    "test: GET /user/following (getFollowing)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.getFollowing(
            {
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /user/following/:user (getFollowUser)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.getFollowUser(
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

    "test: PUT /user/following/:user (followUser)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.followUser(
            {
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /user/following/:user (unFollowUser)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.unFollowUser(
            {
                user: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /user/keys (getKeys)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.getKeys(
            {
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /user/keys/:id (getKey)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.getKey(
            {
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /user/keys (createKey)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.createKey(
            {
                title: "String",
                key: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PATCH /user/keys/:id (updateKey)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.updateKey(
            {
                id: "Number",
                title: "String",
                key: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /user/keys/:id (deleteKey)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.user.deleteKey(
            {
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    }
};

!module.parent && require("asyncjs").test.testcase(module.exports).exec();
