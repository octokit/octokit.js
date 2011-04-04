/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

require("../../support/paths");

var assert = require("assert");
var Request = require("github/Request").Request;

var test = module.exports = {

   "test: create request instance" : function() {
        var request = new Request();
        assert.ok(request instanceof Request);
    },

    "test: GET request" : function(finished) {
        var request = new Request();
        request.get('user/search/diem-project', null, null, function(err, response) {
            var sys = require("sys");
            assert.equal(response.users.length, 1, "Found one user");
            assert.equal(response.users[0].login, "diem-project", "Found one user");
            finished();
        });
    }
};

!module.parent && require("asyncjs/test").testcase(module.exports).exec();