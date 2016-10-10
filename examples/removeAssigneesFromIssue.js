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

github.issues.removeAssigneesFromIssue({
    owner: "kaizensoze",
    repo: "test2",
    number: "4",
    body: { "assignees": ["first9890"] }
}, function(err, res) {
    console.log(err, res);
});
