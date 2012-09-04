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

    "test: GET /repos/:user/:repo/statuses/:sha (get)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.statuses.get(
            {
                user: "String",
                repo: "String",
                sha: "String",
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/statuses/:sha (post)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.statuses.get(
            {
                user: "String",
                repo: "String",
                sha: "String",
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    }
};


!module.parent && require("asyncjs").test.testcase(module.exports).exec();