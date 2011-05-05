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

var username = 'fjakobstest';
var token = 'b98166e45acf66df70a992e2de56b92a';

var test = module.exports = {

    setUp: function() {
        this.github = new GitHubApi(true);
        this.userApi = this.github.getUserApi();
    },

   "test: search users" : function(finished) {
        this.userApi.search(username, function(err, users) {
            assert.equal(err, null);
            assert.equal(users.length, 1);            
            assert.equal(users[0].login, username);
            finished();
        });
    },

    "test: show a user" : function(finished) {
        this.userApi.show(username, function(err, user) {
            assert.equal(err, null);
            assert.equal(user.login, username);
            finished();
        });
    },

    "test: show a non existing user" : function(finished) {
        this.userApi.show('this-user-probably-doesnt-exist', function(err, user) {
            assert.notEqual(err, undefined);
            finished();
        });

    },

    "test: get following users" : function(finished) {
        this.userApi.getFollowing('fjakobs', function(err, following) {
            assert.equal(err, null);
            assert.ok(following.length > 0);
            finished();
        });
    },

    "test: get follower users" : function(finished) {
        this.userApi.getFollowers('fjakobs', function(err, followers) {
            assert.equal(err, null);
            assert.ok(followers.length > 0);
            finished();
        });
    },

    "test: authenticate user and update location to Argentinia" : function(finished) {
        test.github.authenticateToken(username, token);
        test.userApi.update(username, {location: "Argentinia"}, function(err) {
            assert.equal(err, null);
            test.userApi.show(username, function(err, user) {
                assert.equal(user.location, "Argentinia");
                finished();
            });
        });
    },

    "test: authenticate user and update location to France" : function(finished) {
        test.github.authenticateToken(username, token);
        test.userApi.update(username, {location: "France"}, function(err) {
            test.userApi.show(username, function(err, user) {
                assert.equal(user.location, "France");
                finished();
            });
        });
    },

    "test: follow and unfollow fjakobs" : function(finished) {
        test.github.authenticateToken(username, token);
        test.userApi.follow("fjakobs", function(err) {
            test.userApi.getFollowing(username, function(err, following) {
                assert.ok(following.indexOf("fjakobs") !== -1);

                test.userApi.unFollow("fjakobs", function(err) {
                    test.userApi.getFollowing(username, function(err, following) {
                        assert.ok(following.indexOf("fjakobs") === -1);
                        finished();
                    });
                });
            });
        });
    },

    "test: get watched repos" : function(finished) {
        test.userApi.getWatchedRepos("fjakobs", function(err, repos) {
            assert.equal(err, null);
            assert.ok(repos.length > 0);
            assert.ok(repos[0].homepage !== undefined);
            finished();
        });
    },

    "test: get emails" : function(finished) {
        test.github.authenticateToken(username, token);
        test.userApi.getEmails(function(err, mails) {
            assert.equal(err, null);
            assert.ok(mails.indexOf("fabian@ajax.org") !== -1);
            finished();
        });
    },

    "test: add and remove email" : function(finished) {
        test.github.authenticateToken(username, token);
        test.userApi.addEmail("juhu@ajax.org", function(err, mails) {
            assert.equal(err, null);
            assert.ok(mails.indexOf("juhu@ajax.org") !== -1);

            test.userApi.removeEmail("juhu@ajax.org", function(err, mails) {
                assert.ok(mails.indexOf("juhu@ajax.org") === -1);
                finished();
            });
        });
    },

    "test: get ssh keys" : function(finished) {
        test.github.authenticateToken(username, token);
        test.userApi.getKeys(function(err, keys) {
            assert.equal(err, null);
            assert.ok(keys[0].title !== undefined);
            finished();
        });
    },

    "test: add and remove ssh keys" : function(finished) {
        var sshKey = "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq3iNw6EbjbV7M+Y74bMaRJ2V4fhGbpCPf4r5LziRlbkwZ2odG3Zkxzvhgg6EGxh6M4PWwiTF/gK/2nk81aAGN8iKvqS8b8TML/0RHrYyvR2Okug+CR5LbLVO+yM23nAixadhrZqTreqqgjJvqF4ffD0rsfVyqaYAsNxDoqvLFaEyMqh0+gNsO20M1jRLjQqeA4gzvQhjMWSnzOzBpCorCECjhl9o7iqitDaTzUWPLB4V0jnuyG15nbDOrCmzA8l9wIrqSjI6Kglx2aZWRKcsEaCUPHD5n4F63og+8aHRPMaEvNCvKj/21a0/zhEtdh1Vd3etmfe38Rh4WmOyuv5L+Q== test@ajax.org";

        test.github.authenticateToken(username, token);
        test.userApi.addKey("test2", sshKey, function(err, keys) {
            assert.equal(err, null);
            var key = keys.filter(function(key) { return key.title == "test2"; })[0];
            assert.equal(key.key, sshKey.replace(" test@ajax.org", ""));
            test.userApi.removeKey(key.id, function(err, keys) {
                var key = keys.filter(function(key) { return key.title == "test2"; })[0];
                assert.equal(key, undefined);
                finished();
            });
        });
    }
};

!module.parent && require("asyncjs/test").testcase(module.exports).exec();
