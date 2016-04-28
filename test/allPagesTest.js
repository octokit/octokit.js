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

describe("[all_pages]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should receive all the data of a given list",  function(next) {
        this.timeout(8000)
        client.getAllPages(client.orgs.getTeamMembers, {
            id: '1660004'
        }, function (err, res) {
            Assert.equal(err, null);
            Assert.ok(Array.isArray(res))
            console.log(res.length)
            Assert.ok(res.length > 200)
            next();
        })
    });
});
