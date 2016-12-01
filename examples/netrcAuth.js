"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({
    debug: true
});

github.authenticate({
    type: "netrc"
});

// github.repos.getReleases({
//     owner: "kaizensoze",
//     repo: "test2"
// }, function(err, res) {
//     console.log(err, res);
// });

github.repos.uploadAsset({
    owner: "kaizensoze",
    repo: "test2",
    id: "4801082",
    filePath: "/Users/joegallo/z.sh",
    name: "z.sh"
    
}, function(err, res) {
    console.log(err, res);
});
