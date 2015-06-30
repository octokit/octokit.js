/**
 *  class Github
 *
 *  A Node.JS module, which provides an object oriented wrapper for the GitHub v3 API.
 *
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <info@mikedeboer.nl>
 **/

"use strict";

var Fs = require("fs");
var Util = require("./../../util");
var error = require("./../../error");

var GithubHandler = module.exports = function(client) {
    this.client = client;
    this.routes = require("./routes.json");
};

var proto = {
    sendError: function(err, block, msg, callback) {
        if (this.client.debug)
            Util.log(err, block, msg.user, "error");
        if (typeof err == "string")
            err = new error.InternalServerError(err);
        if (callback)
            callback(err);
    }
};

Util.extend(proto, require("./gists"));
Util.extend(proto, require("./gitdata"));
Util.extend(proto, require("./issues"));
Util.extend(proto, require("./authorization"));
Util.extend(proto, require("./orgs"));
Util.extend(proto, require("./statuses"));
Util.extend(proto, require("./pullRequests"));
Util.extend(proto, require("./repos"));
Util.extend(proto, require("./user"));
Util.extend(proto, require("./events"));
Util.extend(proto, require("./releases"));
Util.extend(proto, require("./search"));
Util.extend(proto, require("./markdown"));
Util.extend(proto, require("./gitignore"));
Util.extend(proto, require("./misc"));

GithubHandler.prototype = proto;
