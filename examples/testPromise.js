"use strict";

var Client = require("./../lib/index");
var Promise = require("bluebird");  // npm install bluebird

var github = new Client({
    debug: false,
    Promise: Promise
});

github.orgs.getAll({
    page: 5,
    per_page: 100
}).then(function(res) {
    console.log(res);
    return github.users.getById({ id: "429706" });
}).then(function(res) {
   console.log(res);
});
