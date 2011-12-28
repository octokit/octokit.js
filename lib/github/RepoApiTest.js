/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

"use strict";

var assert = require("assert");
var GitHubApi = require("../github").GitHubApi;

// The login details to test calls requiring authorization
var authuser = "mattpardee";
var authpass = "xxxx";

var test = module.exports = {

    timeout: 5000,

    setUp: function() {
        this.github = new GitHubApi(true);
        this.repoApi = this.github.getRepoApi();
    },

    "test: search repos" : function(finished) {
        test.repoApi.search("php github api", function(err, repos) {
            assert.ok(repos.length > 0);
            assert.ok(repos[0].name !== undefined);
            finished();
        });
    },

    "!test: create repo" : function(finished) {
        test.github.authenticatePassword(authuser, authpass);
        test.repoApi.create("testrepo", "Hey there", "www.google.com", "1", function(err, repo) {
            assert.equal(repo.owner, authuser);
            assert.equal(repo.name, "testrepo");
            finished();
        });
    },

    "!test: delete repo" : function(finished) {
        test.github.authenticatePassword(authuser, authpass);
        test.repoApi.delete(authuser, "testrepo", function(err, status) {
            assert.equal(status.status, "deleted");
            finished();
        });
    },

    "test: show repository" : function(finished) {
        test.repoApi.show("fjakobs", "qxoo", function(err, repo) {
           assert.equal(repo.name, "qxoo");
           finished();
        });
    },

    // Unfortunately this doesn't work, see implementation for the reason
    "!test: set info" : function(finished) {
        test.github.authenticatePassword(authuser, authpass);
        var repoInfo = [];
        repoInfo["description"] = "jqGrid grid plugin homie";
        test.repoApi.setInfo(authuser, "jqGrid", repoInfo, function(err, repo) {
            assert.equal(repo.description, repoInfo["description"]);
            finished();
        });
    },

    "!test: fork repo" : function(finished) {
        test.github.authenticatePassword(authuser, authpass);
        test.repoApi.forkRepo("fjakobs", "dabblet", function(err, repo) {
            assert.equal(repo.name, "dabblet");
            finished();
        });
    },

    "!test: watch and unwatch a repo" : function(finished) {
        test.github.authenticatePassword(authuser, authpass);
        test.repoApi.watchRepo("fjakobs", "dabblet", true, function(err, repo) {
            assert.equal(repo.name, "dabblet");
            var numWatchers = repo.watchers;
            test.repoApi.watchRepo("fjakobs", "dabblet", false, function(err, samerepo) {
                // There is the very slight possibility that this would fail if the
                // API call to unwatch happened after another user un/watched
                assert.ok((samerepo.watchers + 1) === numWatchers);
                finished();
            });
        });
    },

    "test: get user repos" : function(finished) {
        test.repoApi.getUserRepos("fjakobs", function(err, repos) {
            assert.ok(repos.length > 0);
            assert.ok(repos[0].name !== undefined);
            finished();
        });
    },

    "test: get repo tags" : function(finished) {
        test.repoApi.getRepoTags("fjakobs", "node", function(err, tags) {
            assert.ok(tags["v0.1.0"] == "813b53938b40484f63e7324c030e33711f26a149");
            finished();
        });
    },

    "test: get repo languages" : function(finished) {
        test.repoApi.getRepoLanguages("fjakobs", "node", function(err, languages) {
            assert.ok(languages['C++'] != undefined);
            finished();
        });
    },

    "test: get repo branches" : function(finished) {
        test.repoApi.getRepoBranches("fjakobs", "node", function(err, branches) {
            assert.ok(branches["master"] !== undefined);
            finished();
        });
    },

    "test: get repo collaborators" : function(finished) {
        test.repoApi.getRepoCollaborators("fjakobs", "node", function(err, collaborators) {
            assert.ok(collaborators.length > 0);
            assert.ok(!!~collaborators.toString().split(",").indexOf("fjakobs"));
            finished();
        });
    },

    "test: get repo contributors" : function(finished) {
        test.repoApi.getRepoContributors("fjakobs", "node", function(err, contributors) {
            assert.ok(contributors.length > 0);
            assert.ok(contributors[0].login == "ry");
            finished();
        });
    },

    "test: get repo non-github contributors" : function(finished) {
        test.repoApi.getRepoContributors("fjakobs", "node", true, function(err, contributors) {
            assert.ok(contributors.length > 0);
            assert.ok(contributors[0].login == "ry");
            finished();
        });
    },

    "test: get repo watchers" : function(finished) {
        test.repoApi.getRepoWatchers("fjakobs", "node", function(err, watchers) {
            assert.ok(watchers.length > 0);
            assert.ok(!!~watchers.toString().split(",").indexOf("fjakobs"));
            finished();
        });
    },

    "test: get repo network" : function(finished) {
        test.repoApi.getRepoNetwork("mattpardee", "dabblet", function(err, network) {
            assert.ok(network.length > 0);
            finished();
        });
    }

};

!module.parent && require("asyncjs").test.testcase(module.exports).exec();