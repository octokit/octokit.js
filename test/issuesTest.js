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

    it("should successfully execute POST /repos/:owner/:repo/issues/:number/assignees (addAssigneesToIssue)",  function(next) {
        client.issues.addAssigneesToIssue(
            {
                owner: "String",
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

    it("should successfully execute POST /repos/:owner/:repo/issues/:number/labels (addLabels)",  function(next) {
        client.issues.addLabels(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/assignees/:assignee (checkAssignee)",  function(next) {
        client.issues.checkAssignee(
            {
                owner: "String",
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

    it("should successfully execute POST /repos/:owner/:repo/issues (create)",  function(next) {
        client.issues.create(
            {
                owner: "String",
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

    it("should successfully execute POST /repos/:owner/:repo/issues/:number/comments (createComment)",  function(next) {
        client.issues.createComment(
            {
                owner: "String",
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

    it("should successfully execute POST /repos/:owner/:repo/labels (createLabel)",  function(next) {
        client.issues.createLabel(
            {
                owner: "String",
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

    it("should successfully execute POST /repos/:owner/:repo/milestones (createMilestone)",  function(next) {
        client.issues.createMilestone(
            {
                owner: "String",
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

    it("should successfully execute DELETE /repos/:owner/:repo/issues/comments/:id (deleteComment)",  function(next) {
        client.issues.deleteComment(
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

    it("should successfully execute DELETE /repos/:owner/:repo/labels/:name (deleteLabel)",  function(next) {
        client.issues.deleteLabel(
            {
                owner: "String",
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

    it("should successfully execute DELETE /repos/:owner/:repo/milestones/:number (deleteMilestone)",  function(next) {
        client.issues.deleteMilestone(
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

    it("should successfully execute PATCH /repos/:owner/:repo/issues/:number (edit)",  function(next) {
        client.issues.edit(
            {
                owner: "String",
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

    it("should successfully execute PATCH /repos/:owner/:repo/issues/comments/:id (editComment)",  function(next) {
        client.issues.editComment(
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

    it("should successfully execute GET /repos/:owner/:repo/issues/:number (get)",  function(next) {
        client.issues.get(
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

    it("should successfully execute GET /repos/:owner/:repo/assignees (getAssignees)",  function(next) {
        client.issues.getAssignees(
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

    it("should successfully execute GET /repos/:owner/:repo/issues/comments/:id (getComment)",  function(next) {
        client.issues.getComment(
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

    it("should successfully execute GET /repos/:owner/:repo/issues/:number/comments (getComments)",  function(next) {
        client.issues.getComments(
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

    it("should successfully execute GET /repos/:owner/:repo/issues/comments (getCommentsForRepo)",  function(next) {
        client.issues.getCommentsForRepo(
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

    it("should successfully execute GET /repos/:owner/:repo/issues/events/:id (getEvent)",  function(next) {
        client.issues.getEvent(
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

    it("should successfully execute GET /repos/:owner/:repo/issues/:issue_number/events (getEvents)",  function(next) {
        client.issues.getEvents(
            {
                owner: "String",
                repo: "String",
                issue_number: "Number",
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

    it("should successfully execute GET /repos/:owner/:repo/issues/events (getEventsForRepo)",  function(next) {
        client.issues.getEventsForRepo(
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

    it("should successfully execute GET /repos/:owner/:repo/issues/:issue_number/timeline (getEventsTimeline)",  function(next) {
        client.issues.getEventsTimeline(
            {
                owner: "String",
                repo: "String",
                issue_number: "Number",
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

    it("should successfully execute GET /repos/:owner/:repo/issues (getForRepo)",  function(next) {
        client.issues.getForRepo(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/issues/:number/labels (getIssueLabels)",  function(next) {
        client.issues.getIssueLabels(
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

    it("should successfully execute GET /repos/:owner/:repo/labels/:name (getLabel)",  function(next) {
        client.issues.getLabel(
            {
                owner: "String",
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

    it("should successfully execute GET /repos/:owner/:repo/labels (getLabels)",  function(next) {
        client.issues.getLabels(
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

    it("should successfully execute GET /repos/:owner/:repo/milestones/:number (getMilestone)",  function(next) {
        client.issues.getMilestone(
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

    it("should successfully execute GET /repos/:owner/:repo/milestones/:number/labels (getMilestoneLabels)",  function(next) {
        client.issues.getMilestoneLabels(
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

    it("should successfully execute GET /repos/:owner/:repo/milestones (getMilestones)",  function(next) {
        client.issues.getMilestones(
            {
                owner: "String",
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

    it("should successfully execute PUT /repos/:owner/:repo/issues/:number/lock (lock)",  function(next) {
        client.issues.lock(
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

    it("should successfully execute DELETE /repos/:owner/:repo/issues/:number/labels (removeAllLabels)",  function(next) {
        client.issues.removeAllLabels(
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

    it("should successfully execute DELETE /repos/:owner/:repo/issues/:number/assignees (removeAssigneesFromIssue)",  function(next) {
        client.issues.removeAssigneesFromIssue(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                body: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/issues/:number/labels/:name (removeLabel)",  function(next) {
        client.issues.removeLabel(
            {
                owner: "String",
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

    it("should successfully execute PUT /repos/:owner/:repo/issues/:number/labels (replaceAllLabels)",  function(next) {
        client.issues.replaceAllLabels(
            {
                owner: "String",
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

    it("should successfully execute DELETE /repos/:owner/:repo/issues/:number/lock (unlock)",  function(next) {
        client.issues.unlock(
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

    it("should successfully execute PATCH /repos/:owner/:repo/labels/:oldname (updateLabel)",  function(next) {
        client.issues.updateLabel(
            {
                owner: "String",
                repo: "String",
                oldname: "String",
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

    it("should successfully execute PATCH /repos/:owner/:repo/milestones/:number (updateMilestone)",  function(next) {
        client.issues.updateMilestone(
            {
                owner: "String",
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
