/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

var sys = require("sys");
var GitHubApi = require("../lib/github").GitHubApi;
var async_testing = require('../vendor/node-async-testing/async_testing');

var suite = exports.suite = new async_testing.TestSuite();

suite.setup(function() {
    this.github = new GitHubApi(true);
    this.repoApi = this.github.getRepoApi();
});

suite.addTests({

    "test: search repos" : function(assert, finished, test) {
        test.repoApi.search("php github api", function(err, repos) {
            assert.ok(repos.length > 0);
            assert.ok(repos[0].name !== undefined);
            finished();
        });
    },

    "test: show repository" : function(assert, finished, test) {
        test.repoApi.show("fjakobs", "qxoo", function(err, repo) {
           assert.equal(repo.name, "qxoo");
           finished();
        });
    },

    "test: get user repos" : function(assert, finished, test) {
        test.repoApi.getUserRepos("fjakobs", function(err, repos) {
            assert.ok(repos.length > 0);
            assert.ok(repos[0].name !== undefined);
            finished();
        });
    },

    "test: get repo tags" : function(assert, finished, test) {
        test.repoApi.getRepoTags("fjakobs", "node", function(err, tags) {
            assert.ok(tags["v0.1.0"] == "813b53938b40484f63e7324c030e33711f26a149");
            finished();
        });
    },

    "test: get repo languages" : function(assert, finished, test) {
        test.repoApi.getRepoLanguages("fjakobs", "node", function(err, languages) {
            assert.ok(languages['C++'] != undefined);
            finished();
        });
    },

    "test: get repo branches" : function(assert, finished, test) {
        test.repoApi.getRepoBranches("fjakobs", "node", function(err, branches) {
            assert.ok(branches["master"] !== undefined);
            finished();
        });
    },

    "test: get repo collaborators" : function(assert, finished, test) {
        test.repoApi.getRepoCollaborators("fjakobs", "node", function(err, collaborators) {
            assert.ok(collaborators.length > 0);
            assert.ok(!!~collaborators.toString().split(",").indexOf("fjakobs"));
            finished();
        });
    },

    "test: get repo contributors" : function(assert, finished, test) {
        test.repoApi.getRepoContributors("fjakobs", "node", function(err, contributors) {
            assert.ok(contributors.length > 0);
            assert.ok(contributors[0].login == "ry");
            finished();
        });
    },

    "test: get repo non-github contributors" : function(assert, finished, test) {
        test.repoApi.getRepoContributors("fjakobs", "node", true, function(err, contributors) {
            assert.ok(contributors.length > 0);
            assert.ok(contributors[0].login == "ry");
            finished();
        });
    },

    "test: get repo watchers" : function(assert, finished, test) {
        test.repoApi.getRepoWatchers("fjakobs", "node", function(err, watchers) {
            assert.ok(watchers.length > 0);
            assert.ok(!!~watchers.toString().split(",").indexOf("fjakobs"));
            finished();
        });
    }

});

if (module === require.main) {
    async_testing.runSuites({RepoApi: suite});
}
