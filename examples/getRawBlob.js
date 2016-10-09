"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({
    debug: false,
    headers: {
        "Accept": "application/vnd.github.v3.raw"
    }
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

// github.repos.getContent({
//     owner: "mikedeboer",
//     repo: "node-github",
//     path: "README.md"
// }, function(err, res) {
//     var sha = res["sha"];
//     console.log(sha);
// });

github.gitdata.getBlob({
    owner: "mikedeboer",
    repo: "node-github",
    sha: "b361f529df9b49f2a6b5748b5d71b792c8383e5e"
}, function(err, res) {
    console.log(err, res['data']);
});
