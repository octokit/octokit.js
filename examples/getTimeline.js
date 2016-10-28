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

github.issues.getEventsTimeline({
    owner: "mikedeboer",
    repo: "node-github",
    issue_number: "447"
}, function(err, res) {
    console.log(err, res);
});
