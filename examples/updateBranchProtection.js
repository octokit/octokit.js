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

github.repos.updateBranchProtection({
    owner: "kaizensoze",
    repo: "test2",
    branch: "a",
    required_status_checks: null,
    restrictions: null
}, function(err, res) {
    console.log(err, res);
});
