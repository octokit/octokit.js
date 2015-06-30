/**
 *  class <%name%>
 *
 *  <%description%>
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

<%scripts%>

GithubHandler.prototype = proto;
