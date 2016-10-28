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

github.repos.addCollaborator({
    owner: "brassafrax", // needs to be an org
    repo: "test",
    username: "first9890"
}, function(err, res) {
    console.log(err, res);
});
