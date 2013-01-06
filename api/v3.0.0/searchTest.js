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

describe("[search]", function() {
    var client;
    var token = "c286e38330e15246a640c2cf32a45ea45d93b2ba";

    beforeEach(function() {
        client = new Client({
            version: "3.0.0"
        });
        /*client.authenticate({
            type: "oauth",
            token: token
        });*/
    });

    it("should successfully execute GET /legacy/issues/search/:user/:repo/:state/:keyword (issues)",  function(next) {
        client.search.issues(
            {
                user: "mikedeboertest",
                repo: "node_chat",
                state: "open",
                keyword: "macaroni"
            },
            function(err, res) {
                Assert.equal(err, null);
                Assert.equal(res.issues.length, 1);
                var issue = res.issues[0];
                Assert.equal(issue.title, "My First Issue");
                Assert.equal(issue.position, 1);
                Assert.equal(issue.state, "open");

                next();
            }
        );
    });

    it("should successfully execute GET /legacy/repos/search/:keyword (repos)",  function(next) {
        client.search.repos(
            {
                keyword: "pasta",
                language: "JavaScript"
            },
            function(err, res) {
                Assert.equal(err, null);
                Assert.ok(res.repositories.length > 0);
                Assert.equal(res.repositories[0].language, "JavaScript");

                next();
            }
        );
    });

    it("should successfully execute GET /legacy/user/search/:keyword (users)",  function(next) {
        client.search.users(
            {
                keyword: "mikedeboer"
            },
            function(err, res) {
                Assert.equal(err, null);
                Assert.equal(res.users.length, 2);
                var user = res.users[0];
                Assert.equal(user.name, "Mike de Boer");
                Assert.ok(user.username.indexOf("mikedeboer") === 0);

                next();
            }
        );
    });

    /*it("should successfully execute GET /legacy/user/email/:email (email)",  function(next) {
        client.search.email(
            {
                email: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });*/
});
