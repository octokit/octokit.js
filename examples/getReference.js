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

github.gitdata.getReference({
    owner: "kaizensoze",
    repo: "test2",
    ref: "heads/a#blah"
}, function(err, res) {
    console.log(err, res);
});
