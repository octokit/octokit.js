var sys = require("sys");
var GitHubApi = require("../lib/github").GitHubApi;
var async_testing = require('../../vendor/node-async-testing/async_testing');

var suite = exports.suite = new async_testing.TestSuite();

var username = 'fjakobstest';
var token = 'b98166e45acf66df70a992e2de56b92a';

suite.setup(function() {
    this.github = new GitHubApi(true);
    this.userApi = this.github.getUserApi();
});

suite.addTests({
   "test: search users" : function(assert, finished) {
        this.userApi.search(username, function(err, users) {
            assert.equal(users.length, 1);
            assert.equal(users[0].name, username);
            finished();
        });
    },

    "test: show a user" : function(assert, finished) {
        this.userApi.show(username, function(err, user) {
            assert.equal(user.login, username);
            finished();
        });
    },

    "test: show a non existing user" : function(assert, finished) {
        this.userApi.show('this-user-probably-doesnt-exist', function(err, user) {
            assert.notEqual(err, undefined);
            finished();
        });

    },

    "test: get following users" : function(assert, finished) {
        this.userApi.getFollowing('ornicar', function(err, following) {
            assert.ok(following.length > 0);
            finished();
        });
    },

    "test: get follower users" : function(assert, finished) {
        this.userApi.getFollowers('ornicar', function(err, followers) {
            assert.ok(followers.length > 0);
            finished();
        });
    },

    "test: authenticate user and update location to Argentinia" : function(assert, finished, test) {
        test.github.authenticate(username, token);
        test.userApi.update(username, {location: "Argentinia"}, function(err) {
            test.userApi.show(username, function(err, user) {
                assert.equal(user.location, "Argentinia");
                finished();
            });
        });
    },

    "test: authenticate user and update location to France" : function(assert, finished, test) {
        test.github.authenticate(username, token);
        test.userApi.update(username, {location: "France"}, function(err) {
            test.userApi.show(username, function(err, user) {
                assert.equal(user.location, "France");
                finished();
            });
        });
    }


});

if (module === require.main) {
    async_testing.runSuites({UserApi: suite});
}