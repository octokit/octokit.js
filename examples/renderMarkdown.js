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

github.misc.renderMarkdown({
    "text": "Hello world github/linguist#1 **cool**, and #1!"
}, function(err, res) {
    console.log(err, res["data"]);
});
