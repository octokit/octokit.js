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

var GitHubApi = require("github").GitHubApi;

var username = "fjakobstest";
var token = "b98166e45acf66df70a992e2de56b92a";

var repo = "o3";

var test = module.exports = {

    setUp: function() {
        this.github = new GitHubApi(true);
        this.userApi = this.github.getUserApi();
    },

    "test: show user without authentification should have no 'plan'" : function(finished) {
        test.userApi.show(username, function(err, user) {
            assert.equal(user.plan, undefined);
                finished();
        });
    },

    "test: show user with authentification should have a 'plan'" : function(finished) {
        test.github.authenticateToken(username, token);
        test.userApi.show(username, function(err, user) {
            assert.ok(user.plan !== undefined);
            finished();
        });
    },
/*
    // test disabled because I don't want to see my password on github :-)
    "test: authenticate using username and password" : function(finished) {
        test.github.authenticatePassword("fjakobs", "xxxx");
        test.userApi.show("fjakobs", function(err, user) {
            assert.ok(user.plan !== undefined);
            console.log(user)
            test.github.getRepoApi().getUserRepos("fjakobs", null, function(err, repos) {
                console.log(repos)
                finished();
            })
            
        });
    },
*/
    "test: authenticate using username and wrong password" : function(finished) {
        test.github.authenticatePassword(username, "1234");
        test.userApi.show(username, function(err, user) {
            assert.ok(err !== undefined);
            finished();
        });
    },
    
    "test: authenticate with bad token" : function(finished) {
        test.github.authenticateToken(username, "bad-token");
        test.userApi.show(username, function(err, user) {
            assert.ok(err !== undefined);
            finished();
        });
    }
};

!module.parent && require("asyncjs/test").testcase(module.exports).exec();