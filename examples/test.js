"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({
    debug: true
});

github.authenticate({
    type: "netrc"
});

github.users.getFollowers({
}, function(err, res) {
    console.log(err, res);
});
