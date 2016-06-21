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

var customHeaders = {
    "User-Agent": "blah"
};

github.issues.getForRepo({
    user: "mikedeboer",
    repo: "node-github",
    headers: customHeaders
}, function(err, res) {
    showIssueIds(res);
    console.log('END of PAGE 1');
    
    github.getNextPage(res, customHeaders, function(err, res) {
        showIssueIds(res);
    });
});

function showIssueIds(res) {
    for (var i = 0; i <= res.length; i++) {
        if (typeof res[i] !== 'undefined') {
            var url = res[i].url;
            var issueId = url.substr(url.lastIndexOf('/') + 1);
            console.log(issueId);
        }
    }
}
