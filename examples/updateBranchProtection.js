"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({
    debug: true,
    headers: {
        "Accept": "application/vnd.github.loki-preview+json"
    }
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.repos.updateBranchProtection({
    user: "kaizensoze",
    repo: "test2",
    branch: "a",
    required_status_checks: null,
    restrictions: null
}, function(err, res) {
    console.log(err, res);
});
