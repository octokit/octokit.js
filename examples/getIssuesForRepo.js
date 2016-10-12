"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({
    debug: false
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.issues.getForRepo({
    owner: "mikedeboer",
    repo: "node-github"
}, function(err, res) {
    if (err) {
        console.log(err.toJSON());
    } else {
        console.log(res);
    }
});
