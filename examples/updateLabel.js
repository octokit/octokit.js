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

github.issues.updateLabel({
    owner: "kaizensoze",
    repo: "test2",
    oldname: "labelA",
    name: "labelB",
    color: "0052cc"
}, function(err, res) {
    console.log(err, res);
});
