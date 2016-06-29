"use strict";

var Client = require("./../lib/index");
var Promise = require("bluebird");  // NOTE: install manually to test: npm i -S bluebird

var github = new Client({
    debug: false,
    Promise: Promise
});

github.orgs.getAll({
    page: 5,
    per_page: 100
}).then(function(res) {
    console.log(res);
    
    github.users.getById({ id: "429706" }).then(function(res) {
        console.log(res);
    });
});
