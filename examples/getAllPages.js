"use strict";

var Assert = require("assert");
var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.getAllPages(github.activity.getStarredRepos, { per_page: 100 }, function(err, res) {
    console.log(res.map(function(repo) { return repo['full_name']; }));
    console.log(res.length);
});
