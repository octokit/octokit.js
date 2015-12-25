/** section: github, internal
 *  Example
 *
 *  Github API usage example.
 *
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <mike@c9.io>
 **/

"use strict";

var Client = require("./../index");

var github = new Client({
    debug: true
});

github.authenticate({
    type: "oauth",
    token: "TOKEN" // Replace with your oauth token
});

github.user.get({}, function(err, res) {
    console.log(err, res);
});
