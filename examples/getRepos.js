"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({
    debug: true
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.repos.getAll({
    "affiliation": "owner,organization_member"
}, function(err, res) {
    console.log(err, res);
});
