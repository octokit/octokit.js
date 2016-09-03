"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({
    debug: true
});

// github.authenticate({
//     type: "oauth",
//     token: testAuth["token"]
// });
// 
// github.users.getOrgs({
//     per_page: 100
// }, function(err, res) {
//     console.log(err, res);
// });

github.orgs.getForUser({
    user: "tj",
    per_page: 100
}, function(err, res) {
    console.log(err, res);
});
