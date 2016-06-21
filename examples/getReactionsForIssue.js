"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({
    debug: true,
    includePreview: true
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.reactions.getForIssue({
    user: "mikedeboer",
    repo: "node-github",
    number: "365"
}, function(err, res) {
    console.log(err, res);
});
