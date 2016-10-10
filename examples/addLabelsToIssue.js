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
    repo: "test2",
    number: "4",
    body: ["bug", "help wanted", "question"]
}, function(err, res) {
    console.log(err, res);
});
