"use strict";

var Client = require("./../lib/index");
var Q = require("q");  // npm install q

var github = new Client({
    debug: false,
    Promise: Q.Promise
});

github.users.getById({ id: '5057219' }).then(function(res) {
    console.log(res);
});
