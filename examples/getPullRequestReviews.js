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

github.pullRequests.getReviews({
    owner: "brassafrax",
    repo: "test",
    number: 1
}, function(err, res) {
    console.log(err, res);
});
