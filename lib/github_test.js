/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

require("../support/paths");

var assert = require("assert");
var GitHubApi = require("github").GitHubApi;

var test = module.exports = {

   "test: create API instance" : function() {
        var api = new GitHubApi();
        assert.ok(api instanceof GitHubApi);
    },

    "test loading a repository" : function(finished) {
        var github = new GitHubApi();
        github.get('repos/show/ornicar/php-github-api', null, null, function(err, repo) {
            assert.equal(repo['repository']['name'], 'php-github-api', 'Found information about php-github-api repo');
            finished();
        });
    },

    "test loading a non existing repository should return an error" : function(finished) {
        var github = new GitHubApi();
        github.get('non-existing-url/for-sure', null, null, function(err, repo) {
            assert.ok(err !== undefined);
            finished();
        });
    }
};

!module.parent && require("asyncjs/test").testcase(module.exports).exec();