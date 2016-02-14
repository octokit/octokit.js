"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../test_auth.json");

var github = new Client({
    debug: true
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.activity.getStarredRepos({
}, function(err, res) {
    console.log(err, res);
});
