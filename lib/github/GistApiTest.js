/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: James Burkhart <james@jamesburkhart.com>
 */

"use strict";

var assert = require('assert');
var GitHubApi = require('../github').GitHubApi;

var test = module.exports = {

    setUp: function() {
        this.github = new GitHubApi(true);
        this.gistApi = this.github.getGistApi();
    },
    
    "test: get user gists" : function(finished) {
        this.gistApi.getUserGists('fourktest', function(err, gists) {
            assert.equal(err, null);
            assert.ok(gists.length);
            assert.equal(gists[0].owner, 'fourktest');
            assert.equal(gists[0].comments[0].user, 'fourktest');
            finished();
        });
    },
    "test: get metadata" : function(finished) {
        this.gistApi.getMetadata('1091209', function(err, gists) {
            assert.equal(err, null);
            assert.ok(gists.length);
            assert.equal(gists[0].owner, 'fourktest');
            assert.equal(gists[0].comments[0].user, 'fourktest');
            assert.equal(gists[0].repo, '1091209');
            finished();
        });
    },
    "test: get content" : function(finished) {
        this.gistApi.getContent('374130', 'ports.sh', function(err, gist) {
            assert.equal(err, null);
            assert.ok(gist.length);
            assert.equal(gist.length, 68);
            finished();
        });
    }
};

!module.parent && require("asyncjs").test.testcase(module.exports).exec();
