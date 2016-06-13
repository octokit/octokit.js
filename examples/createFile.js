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

github.repos.createFile({
    user: "kaizensoze",
    repo: "misc-scripts",
    path: "blah.txt",
    message: "blah blah",
    content: "YmxlZXAgYmxvb3A="
}, function(err, res) {
    console.log(err, res);
});
