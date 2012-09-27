/** 
 *  mixin oauth
 * 
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <mike@c9.io>
 **/

"use strict";

var error = require("./../../error");
var Util = require("./../../util");

var oauth = module.exports = {
    oauth: {}
};

(function() {
    /** section: github
     *  oauth#createAuthorization(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - scopes (Array): Optional. Optional array - A list of scopes that this authorization is in. 
     *  - note (String): Optional. Optional string - A note to remind you what the OAuth token is for. 
     *  - note_url (String): Optional. Optional string - A URL to remind you what app the OAuth token is for. 
     **/
    this.createAuthorization = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = res.data && JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

}).call(oauth.oauth);
