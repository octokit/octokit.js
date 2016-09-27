"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.repos.getAll({
    "affiliation": "owner,organization_member"
}, function(err, res) {
    if (github.hasNextPage(res)) {
        console.log(res.length)
        github.getNextPage(res, nextFunc)
    }
});

function nextFunc(err, res) {
    console.log(res.length);
}
