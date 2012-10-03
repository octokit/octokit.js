/*
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <mike@c9.io>
 */

"use strict";

var Assert = require("assert");
var Client = require("./../../index");

var username = "fjakobstest";
var token = "b98166e45acf66df70a992e2de56b92a";

var test = module.exports = {
    setUp: function() {
        this.client = new Client({
            version: "3.0.0"
        });
    },
    
    "test: GET /user/repos (getAll)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getAll(
            {
                type: "String",
                page: "Number",
                sort: "String",
                direction: "String",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /users/:user/repos (getFromUser)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getFromUser(
            {
                user: "String",
                type: "String",
                sort: "String",
                direction: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /orgs/:org/repos (getFromOrg)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getFromOrg(
            {
                org: "String",
                type: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /user/repos (create)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.create(
            {
                name: "String",
                description: "String",
                homepage: "String",
                private: "Boolean",
                has_issues: "Boolean",
                has_wiki: "Boolean",
                has_downloads: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /orgs/:org/repos (createFromOrg)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.createFromOrg(
            {
                org: "String",
                name: "String",
                description: "String",
                homepage: "String",
                private: "Boolean",
                has_issues: "Boolean",
                has_wiki: "Boolean",
                has_downloads: "Boolean",
                team_id: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo (get)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.get(
            {
                user: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PATCH /repos/:user/:repo (update)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.update(
            {
                user: "String",
                repo: "String",
                name: "String",
                description: "String",
                homepage: "String",
                private: "Boolean",
                has_issues: "Boolean",
                has_wiki: "Boolean",
                has_downloads: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/merges (merge)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.merge(
            {
                user: "String",
                repo: "String",
                base: "String",
                head: "String",
                commit_message: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/contributors (getContributors)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getContributors(
            {
                user: "String",
                repo: "String",
                anon: "Boolean",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/languages (getLanguages)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getLanguages(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/teams (getTeams)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getTeams(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/tags (getTags)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getTags(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/branches (getBranches)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getBranches(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/collaborators (getCollaborators)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getCollaborators(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/collaborators/:collabuser (getCollaborator)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getCollaborator(
            {
                user: "String",
                repo: "String",
                collabuser: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PUT /repos/:user/:repo/collaborators/:collabuser (addCollaborator)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.addCollaborator(
            {
                user: "String",
                repo: "String",
                collabuser: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /repos/:user/:repo/collaborators/:collabuser (removeCollaborator)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.removeCollaborator(
            {
                user: "String",
                repo: "String",
                collabuser: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/commits (getCommits)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getCommits(
            {
                user: "String",
                repo: "String",
                sha: "String",
                path: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/commits/:sha (getCommit)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getCommit(
            {
                user: "String",
                repo: "String",
                sha: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/comments (getAllCommitComments)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getAllCommitComments(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/commits/:sha/comments (getCommitComments)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getCommitComments(
            {
                user: "String",
                repo: "String",
                sha: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/commits/:sha/comments (createCommitComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.createCommitComment(
            {
                user: "String",
                repo: "String",
                sha: "String",
                body: "String",
                commit_id: "String",
                line: "Number",
                path: "String",
                position: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/comments/:id (getCommitComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getCommitComment(
            {
                user: "String",
                repo: "String",
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PATCH /repos/:user/:repo/comments/:id (updateCommitComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.updateCommitComment(
            {
                user: "String",
                repo: "String",
                id: "Number",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/compare/:base...:head (compareCommits)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.compareCommits(
            {
                user: "String",
                repo: "String",
                base: "String",
                head: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /repos/:user/:repo/comments/:id (deleteCommitComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.deleteCommitComment(
            {
                user: "String",
                repo: "String",
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/readme (getReadme)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getReadme(
            {
                user: "String",
                repo: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/contents/:path (getContent)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getContent(
            {
                user: "String",
                repo: "String",
                path: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/:archive_format/:ref (getArchiveLink)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getArchiveLink(
            {
                user: "String",
                repo: "String",
                archive_format: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/downloads (getDownloads)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getDownloads(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/downloads/:id (getDownload)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getDownload(
            {
                user: "String",
                repo: "String",
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /repos/:user/:repo/downloads/:id (deleteDownload)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.deleteDownload(
            {
                user: "String",
                repo: "String",
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/forks (getForks)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getForks(
            {
                user: "String",
                repo: "String",
                sort: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/forks (fork)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.fork(
            {
                user: "String",
                repo: "String",
                org: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/keys (getKeys)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getKeys(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/keys/:id (getKey)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getKey(
            {
                user: "String",
                repo: "String",
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/keys (createKey)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.createKey(
            {
                user: "String",
                repo: "String",
                title: "String",
                key: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PUT /repos/:user/:repo/keys/:id (updateKey)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.updateKey(
            {
                user: "String",
                repo: "String",
                id: "Number",
                title: "String",
                key: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /repos/:user/:repo/keys/:id (deleteKey)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.deleteKey(
            {
                user: "String",
                repo: "String",
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/watchers (getWatchers)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getWatchers(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /user/watched (getWatched)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getWatched(
            {
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /users/:user/watched (getWatchedFromUser)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getWatchedFromUser(
            {
                user: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /user/watched/:user/:repo (getWatching)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getWatching(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PUT /user/watched/:user/:repo (watch)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.watch(
            {
                user: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /user/watched/:user/:repo (unWatch)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.unWatch(
            {
                user: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/hooks (getHooks)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getHooks(
            {
                user: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/hooks/:id (getHook)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.getHook(
            {
                user: "String",
                repo: "String",
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/hooks (createHook)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.createHook(
            {
                user: "String",
                repo: "String",
                name: "String",
                config: "Json",
                events: "Array",
                active: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PATCH /repos/:user/:repo/hooks/:id (updateHook)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.updateHook(
            {
                user: "String",
                repo: "String",
                id: "Number",
                name: "String",
                config: "Json",
                events: "Array",
                add_events: "Array",
                remove_events: "Array",
                active: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/hooks/:id/test (testHook)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.testHook(
            {
                user: "String",
                repo: "String",
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: DELETE /repos/:user/:repo/hooks/:id (deleteHook)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.repos.deleteHook(
            {
                user: "String",
                repo: "String",
                id: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    }
};

!module.parent && require("asyncjs").test.testcase(module.exports).exec();
