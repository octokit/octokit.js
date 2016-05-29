"use strict";

var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

var github = new Client({
    // debug: true
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.search.repos({
    q: "stars:>=20000",
    sort: "stars",
    order: "desc"
}, function(err, res) {
    for (var itemKey in res['items']) {
        var item = res['items'][itemKey];
        var url = item['html_url'];
        var star_count = item['stargazers_count'];
        console.log(url + " (" + star_count + ")");
    }
});
