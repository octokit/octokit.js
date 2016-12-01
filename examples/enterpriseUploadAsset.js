"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({
    debug: true,
    host: "github.my-GHE-enabled-company.com",
    pathPrefix: "/api/v3"
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.repos.uploadAsset({
    owner: "kaizensoze",
    repo: "test2",
    id: "4801082",
    filePath: "/Users/joegallo/z.sh",
    name: "z.sh"
}, function(err, res) {
    console.log(err, res);
});
