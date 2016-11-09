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

github.gitdata.getReferences({
    owner: "mikedeboer",
    repo: "node-github"
}, function(err, res) {
    console.log(err, res);
});
