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

github.issues.addLabels({
    owner: "kaizensoze",
    repo: "node-github",
    number: "101",
    body: ["invalid", "bug", "duplicate"]
}, function(err, res) {
    console.log(err, res);
});
