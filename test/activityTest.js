/*
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <info@mikedeboer.nl>
 */

"use strict";

var Assert = require("assert");
var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

describe("[activity]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /notifications/threads/:id/subscription (checkNotificationThreadSubscription)",  function(next) {
        client.activity.checkNotificationThreadSubscription(
            {
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /user/starred/:owner/:repo (checkStarringRepo)",  function(next) {
        client.activity.checkStarringRepo(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /notifications/threads/:id/subscription (deleteNotificationThreadSubscription)",  function(next) {
        client.activity.deleteNotificationThreadSubscription(
            {
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /events (getEvents)",  function(next) {
        client.activity.getEvents(
            {
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /orgs/:org/events (getEventsForOrg)",  function(next) {
        client.activity.getEventsForOrg(
            {
                org: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/events (getEventsForRepo)",  function(next) {
        client.activity.getEventsForRepo(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/issues/events (getEventsForRepoIssues)",  function(next) {
        client.activity.getEventsForRepoIssues(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /networks/:owner/:repo/events (getEventsForRepoNetwork)",  function(next) {
        client.activity.getEventsForRepoNetwork(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /users/:username/events (getEventsForUser)",  function(next) {
        client.activity.getEventsForUser(
            {
                username: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /users/:username/events/orgs/:org (getEventsForUserOrg)",  function(next) {
        client.activity.getEventsForUserOrg(
            {
                username: "String",
                org: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /users/:username/events/public (getEventsForUserPublic)",  function(next) {
        client.activity.getEventsForUserPublic(
            {
                username: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /users/:username/received_events (getEventsReceived)",  function(next) {
        client.activity.getEventsReceived(
            {
                username: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /users/:username/received_events/public (getEventsReceivedPublic)",  function(next) {
        client.activity.getEventsReceivedPublic(
            {
                username: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /feeds (getFeeds)",  function(next) {
        client.activity.getFeeds(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /notifications/threads/:id (getNotificationThread)",  function(next) {
        client.activity.getNotificationThread(
            {
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /notifications (getNotifications)",  function(next) {
        client.activity.getNotifications(
            {
                all: "Boolean",
                participating: "Boolean",
                since: "Date",
                before: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/notifications (getNotificationsForUser)",  function(next) {
        client.activity.getNotificationsForUser(
            {
                owner: "String",
                repo: "String",
                all: "Boolean",
                participating: "Boolean",
                since: "Date",
                before: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/subscription (getRepoSubscription)",  function(next) {
        client.activity.getRepoSubscription(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/stargazers (getStargazersForRepo)",  function(next) {
        client.activity.getStargazersForRepo(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /user/starred (getStarredRepos)",  function(next) {
        client.activity.getStarredRepos(
            {
                sort: "String",
                direction: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /users/:username/starred (getStarredReposForUser)",  function(next) {
        client.activity.getStarredReposForUser(
            {
                username: "String",
                sort: "String",
                direction: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /user/subscriptions (getWatchedRepos)",  function(next) {
        client.activity.getWatchedRepos(
            {
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /users/:username/subscriptions (getWatchedReposForUser)",  function(next) {
        client.activity.getWatchedReposForUser(
            {
                username: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/subscribers (getWatchersForRepo)",  function(next) {
        client.activity.getWatchersForRepo(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /notifications/threads/:id (markNotificationThreadAsRead)",  function(next) {
        client.activity.markNotificationThreadAsRead(
            {
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /notifications (markNotificationsAsRead)",  function(next) {
        client.activity.markNotificationsAsRead(
            {
                last_read_at: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:owner/:repo/notifications (markNotificationsAsReadForRepo)",  function(next) {
        client.activity.markNotificationsAsReadForRepo(
            {
                owner: "String",
                repo: "String",
                last_read_at: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /notifications/threads/:id/subscription (setNotificationThreadSubscription)",  function(next) {
        client.activity.setNotificationThreadSubscription(
            {
                id: "String",
                subscribed: "Boolean",
                ignored: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:owner/:repo/subscription (setRepoSubscription)",  function(next) {
        client.activity.setRepoSubscription(
            {
                owner: "String",
                repo: "String",
                subscribed: "Boolean",
                ignored: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /user/starred/:owner/:repo (starRepo)",  function(next) {
        client.activity.starRepo(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /user/starred/:owner/:repo (unstarRepo)",  function(next) {
        client.activity.unstarRepo(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/subscription (unwatchRepo)",  function(next) {
        client.activity.unwatchRepo(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
