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

describe("[issues]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /repos/:user/:repo/issues/:number/assignees (addAssigneesToIssue)",  function(next) {
        client.issues.addAssigneesToIssue(
            {
                user: "String",
                repo: "String",
                number: "Number",
                assignees: "Array"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/issues/:number/labels (addLabels)",  function(next) {
        client.issues.addLabels(
            {
                user: "String",
                repo: "String",
                number: "Number",
                body: "Array"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/assignees/:assignee (checkAssignee)",  function(next) {
        client.issues.checkAssignee(
            {
                user: "String",
                repo: "String",
                assignee: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/issues (create)",  function(next) {
        client.issues.create(
            {
                user: "String",
                repo: "String",
                title: "String",
                body: "String",
                assignee: "String",
                milestone: "Number",
                labels: "Json",
                assignees: "Array"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/issues/:number/comments (createComment)",  function(next) {
        client.issues.createComment(
            {
                user: "String",
                repo: "String",
                number: "Number",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/labels (createLabel)",  function(next) {
        client.issues.createLabel(
            {
                user: "String",
                repo: "String",
                name: "String",
                color: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/milestones (createMilestone)",  function(next) {
        client.issues.createMilestone(
            {
                user: "String",
                repo: "String",
                title: "String",
                state: "String",
                description: "String",
                due_on: "Date"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:user/:repo/issues/comments/:id (deleteComment)",  function(next) {
        client.issues.deleteComment(
            {
                user: "String",
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

    it("should successfully execute DELETE /repos/:user/:repo/labels/:name (deleteLabel)",  function(next) {
        client.issues.deleteLabel(
            {
                user: "String",
                repo: "String",
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:user/:repo/milestones/:number (deleteMilestone)",  function(next) {
        client.issues.deleteMilestone(
            {
                user: "String",
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

    it("should successfully execute PATCH /repos/:user/:repo/issues/:number (edit)",  function(next) {
        client.issues.edit(
            {
                user: "String",
                repo: "String",
                number: "Number",
                title: "String",
                body: "String",
                assignee: "String",
                state: "String",
                milestone: "Number",
                labels: "Json",
                assignees: "Array"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:user/:repo/issues/comments/:id (editComment)",  function(next) {
        client.issues.editComment(
            {
                user: "String",
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

    it("should successfully execute GET /repos/:user/:repo/issues/:number (get)",  function(next) {
        client.issues.get(
            {
                user: "String",
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

    it("should successfully execute GET /issues (getAll)",  function(next) {
        client.issues.getAll(
            {
                filter: "String",
                state: "String",
                labels: "String",
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

    it("should successfully execute GET /repos/:user/:repo/assignees (getAssignees)",  function(next) {
        client.issues.getAssignees(
            {
                user: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/issues/comments/:id (getComment)",  function(next) {
        client.issues.getComment(
            {
                user: "String",
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

    it("should successfully execute GET /repos/:user/:repo/issues/:number/comments (getComments)",  function(next) {
        client.issues.getComments(
            {
                user: "String",
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

    it("should successfully execute GET /repos/:user/:repo/issues/comments (getCommentsForRepo)",  function(next) {
        client.issues.getCommentsForRepo(
            {
                user: "String",
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

    it("should successfully execute GET /repos/:user/:repo/issues/events/:id (getEvent)",  function(next) {
        client.issues.getEvent(
            {
                user: "String",
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

    it("should successfully execute GET /repos/:user/:repo/issues/:number/events (getEvents)",  function(next) {
        client.issues.getEvents(
            {
                user: "String",
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

    it("should successfully execute GET /repos/:user/:repo/issues/events (getEventsForRepo)",  function(next) {
        client.issues.getEventsForRepo(
            {
                user: "String",
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

    it("should successfully execute GET /repos/:user/:repo/issues/:number/timeline (getEventsTimeline)",  function(next) {
        client.issues.getEventsTimeline(
            {
                user: "String",
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

    it("should successfully execute GET /orgs/:org/issues (getForOrg)",  function(next) {
        client.issues.getForOrg(
            {
                org: "String",
                filter: "String",
                state: "String",
                labels: "String",
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

    it("should successfully execute GET /repos/:user/:repo/issues (getForRepo)",  function(next) {
        client.issues.getForRepo(
            {
                user: "String",
                repo: "String",
                milestone: "String",
                state: "String",
                assignee: "String",
                creator: "String",
                mentioned: "String",
                labels: "String",
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

    it("should successfully execute GET /user/issues (getForUser)",  function(next) {
        client.issues.getForUser(
            {
                filter: "String",
                state: "String",
                labels: "String",
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

    it("should successfully execute GET /repos/:user/:repo/issues/:number/labels (getIssueLabels)",  function(next) {
        client.issues.getIssueLabels(
            {
                user: "String",
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

    it("should successfully execute GET /repos/:user/:repo/labels/:name (getLabel)",  function(next) {
        client.issues.getLabel(
            {
                user: "String",
                repo: "String",
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/labels (getLabels)",  function(next) {
        client.issues.getLabels(
            {
                user: "String",
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

    it("should successfully execute GET /repos/:user/:repo/milestones/:number (getMilestone)",  function(next) {
        client.issues.getMilestone(
            {
                user: "String",
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

    it("should successfully execute GET /repos/:user/:repo/milestones/:number/labels (getMilestoneLabels)",  function(next) {
        client.issues.getMilestoneLabels(
            {
                user: "String",
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

    it("should successfully execute GET /repos/:user/:repo/milestones (getMilestones)",  function(next) {
        client.issues.getMilestones(
            {
                user: "String",
                repo: "String",
                state: "String",
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

    it("should successfully execute PUT /repos/:user/:repo/issues/:number/lock (lock)",  function(next) {
        client.issues.lock(
            {
                user: "String",
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

    it("should successfully execute DELETE /repos/:user/:repo/issues/:number/labels (removeAllLabels)",  function(next) {
        client.issues.removeAllLabels(
            {
                user: "String",
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

    it("should successfully execute DELETE /repos/:user/:repo/issues/:number/assignees (removeAssigneesFromIssue)",  function(next) {
        client.issues.removeAssigneesFromIssue(
            {
                user: "String",
                repo: "String",
                number: "Number",
                assignees: "Array"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:user/:repo/issues/:number/labels/:name (removeLabel)",  function(next) {
        client.issues.removeLabel(
            {
                user: "String",
                repo: "String",
                number: "Number",
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:user/:repo/issues/:number/labels (replaceAllLabels)",  function(next) {
        client.issues.replaceAllLabels(
            {
                user: "String",
                repo: "String",
                number: "Number",
                body: "Array"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:user/:repo/issues/:number/lock (unlock)",  function(next) {
        client.issues.unlock(
            {
                user: "String",
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

    it("should successfully execute PATCH /repos/:user/:repo/labels/:name (updateLabel)",  function(next) {
        client.issues.updateLabel(
            {
                user: "String",
                repo: "String",
                name: "String",
                color: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:user/:repo/milestones/:number (updateMilestone)",  function(next) {
        client.issues.updateMilestone(
            {
                user: "String",
                repo: "String",
                number: "Number",
                title: "String",
                state: "String",
                description: "String",
                due_on: "Date"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
