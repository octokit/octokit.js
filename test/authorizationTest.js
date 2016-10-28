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

describe("[authorization]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /applications/:client_id/tokens/:access_token (check)",  function(next) {
        client.authorization.check(
            {
                client_id: "String",
                access_token: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /authorizations (create)",  function(next) {
        client.authorization.create(
            {
                scopes: "Array",
                note: "String",
                note_url: "String",
                client_id: "String",
                client_secret: "String",
                fingerprint: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /authorizations/:id (delete)",  function(next) {
        client.authorization.delete(
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

    it("should successfully execute DELETE /applications/grants/:id (deleteGrant)",  function(next) {
        client.authorization.deleteGrant(
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

    it("should successfully execute GET /authorizations/:id (get)",  function(next) {
        client.authorization.get(
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

    it("should successfully execute GET /authorizations (getAll)",  function(next) {
        client.authorization.getAll(
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

    it("should successfully execute GET /applications/grants/:id (getGrant)",  function(next) {
        client.authorization.getGrant(
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

    it("should successfully execute GET /applications/grants (getGrants)",  function(next) {
        client.authorization.getGrants(
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

    it("should successfully execute PUT /authorizations/clients/:client_id (getOrCreateAuthorizationForApp)",  function(next) {
        client.authorization.getOrCreateAuthorizationForApp(
            {
                client_id: "String",
                client_secret: "String",
                scopes: "Array",
                note: "String",
                note_url: "String",
                fingerprint: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /authorizations/clients/:client_id/:fingerprint (getOrCreateAuthorizationForAppAndFingerprint)",  function(next) {
        client.authorization.getOrCreateAuthorizationForAppAndFingerprint(
            {
                client_id: "String",
                fingerprint: "String",
                client_secret: "String",
                scopes: "Array",
                note: "String",
                note_url: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /applications/:client_id/tokens/:access_token (reset)",  function(next) {
        client.authorization.reset(
            {
                client_id: "String",
                access_token: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /applications/:client_id/tokens/:access_token (revoke)",  function(next) {
        client.authorization.revoke(
            {
                client_id: "String",
                access_token: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /authorizations/:id (update)",  function(next) {
        client.authorization.update(
            {
                id: "String",
                scopes: "Array",
                add_scopes: "Array",
                remove_scopes: "Array",
                note: "String",
                note_url: "String",
                fingerprint: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
