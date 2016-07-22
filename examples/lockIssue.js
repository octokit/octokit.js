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

github.issues.lock({
    user: "kaizensoze",
    repo: "test2",
    number: 3
}, function(err, res) {
    console.log(err, res);
});
