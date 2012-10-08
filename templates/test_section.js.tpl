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

describe("[<%sectionName%>]", function() {
    var client;
    var token = "e5a4a27487c26e571892846366de023349321a73";

    beforeEach(function() {
        client = new Client({
            version: "<%version%>"
        });
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

<%testBody%>
});
