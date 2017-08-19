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

describe("[pullRequests]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /repos/:owner/:repo/pulls/:number/merge (checkMerged)",  function(next) {
        client.pullRequests.checkMerged(
            {
                owner: "String",
                repo: "String",
                number: "Number",
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

    it("should successfully execute POST /repos/:owner/:repo/pulls (create)",  function(next) {
        client.pullRequests.create(
            {
                owner: "String",
                repo: "String",
                title: "String",
                head: "String",
                base: "String",
                body: "String",
                maintainer_can_modify: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/pulls/:number/comments (createComment)",  function(next) {
        client.pullRequests.createComment(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                body: "String",
                commit_id: "String",
                path: "String",
                position: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/pulls/:number/comments (createCommentReply)",  function(next) {
        client.pullRequests.createCommentReply(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                body: "String",
                in_reply_to: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/pulls (createFromIssue)",  function(next) {
        client.pullRequests.createFromIssue(
            {
                owner: "String",
                repo: "String",
                issue: "Number",
                head: "String",
                base: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/pulls/:number/reviews (createReview)",  function(next) {
        client.pullRequests.createReview(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                commit_id: "String",
                body: "String",
                event: "String",
                comments: "Array"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/pulls/:number/requested_reviewers (createReviewRequest)",  function(next) {
        client.pullRequests.createReviewRequest(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                reviewers: "Array",
                team_reviewers: "Array"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/pulls/comments/:id (deleteComment)",  function(next) {
        client.pullRequests.deleteComment(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/pulls/:number/reviews/:id (deletePendingReview)",  function(next) {
        client.pullRequests.deletePendingReview(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/pulls/:number/requested_reviewers (deleteReviewRequest)",  function(next) {
        client.pullRequests.deleteReviewRequest(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                reviewers: "Array",
                team_reviewers: "Array"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:owner/:repo/pulls/:number/reviews/:id/dismissals (dismissReview)",  function(next) {
        client.pullRequests.dismissReview(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                id: "String",
                message: "String",
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

    it("should successfully execute PATCH /repos/:owner/:repo/pulls/comments/:id (editComment)",  function(next) {
        client.pullRequests.editComment(
            {
                owner: "String",
                repo: "String",
                id: "String",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/pulls/:number (get)",  function(next) {
        client.pullRequests.get(
            {
                owner: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/pulls (getAll)",  function(next) {
        client.pullRequests.getAll(
            {
                owner: "String",
                repo: "String",
                state: "String",
                head: "String",
                base: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/pulls/comments/:id (getComment)",  function(next) {
        client.pullRequests.getComment(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/pulls/:number/comments (getComments)",  function(next) {
        client.pullRequests.getComments(
            {
                owner: "String",
                repo: "String",
                number: "Number",
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

    it("should successfully execute GET /repos/:owner/:repo/pulls/comments (getCommentsForRepo)",  function(next) {
        client.pullRequests.getCommentsForRepo(
            {
                owner: "String",
                repo: "String",
                sort: "String",
                direction: "String",
                since: "Date",
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

    it("should successfully execute GET /repos/:owner/:repo/pulls/:number/commits (getCommits)",  function(next) {
        client.pullRequests.getCommits(
            {
                owner: "String",
                repo: "String",
                number: "Number",
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

    it("should successfully execute GET /repos/:owner/:repo/pulls/:number/files (getFiles)",  function(next) {
        client.pullRequests.getFiles(
            {
                owner: "String",
                repo: "String",
                number: "Number",
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

    it("should successfully execute GET /repos/:owner/:repo/pulls/:number/reviews/:id (getReview)",  function(next) {
        client.pullRequests.getReview(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/pulls/:number/reviews/:id/comments (getReviewComments)",  function(next) {
        client.pullRequests.getReviewComments(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                id: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/pulls/:number/requested_reviewers (getReviewRequests)",  function(next) {
        client.pullRequests.getReviewRequests(
            {
                owner: "String",
                repo: "String",
                number: "Number",
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

    it("should successfully execute GET /repos/:owner/:repo/pulls/:number/reviews (getReviews)",  function(next) {
        client.pullRequests.getReviews(
            {
                owner: "String",
                repo: "String",
                number: "Number",
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

    it("should successfully execute PUT /repos/:owner/:repo/pulls/:number/merge (merge)",  function(next) {
        client.pullRequests.merge(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                commit_title: "String",
                commit_message: "String",
                sha: "String",
                merge_method: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/pulls/:number/reviews/:id/events (submitReview)",  function(next) {
        client.pullRequests.submitReview(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                id: "String",
                body: "String",
                event: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo/pulls/:number (update)",  function(next) {
        client.pullRequests.update(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                title: "String",
                body: "String",
                state: "String",
                base: "String",
                maintainer_can_modify: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
