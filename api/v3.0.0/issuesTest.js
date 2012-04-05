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
    
    "test: GET /issues (getAll)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.getAll(
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
            }
        );
    },

    "test: GET /repos/:user/:repo/issues (repoIssues)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.repoIssues(
            {
                user: "String",
                repo: "String",
                milestone: "String",
                state: "String",
                assignee: "String",
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
            }
        );
    },

    "test: GET /repos/:user/:repo/issues/:number (getRepoIssue)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.getRepoIssue(
            {
                user: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/issues (create)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.create(
            {
                user: "String",
                repo: "String",
                title: "String",
                body: "String",
                assignee: "String",
                milestone: "Number",
                labels: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PATCH /repos/:user/:repo/issues/:number (edit)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.edit(
            {
                user: "String",
                repo: "String",
                number: "Number",
                title: "String",
                body: "String",
                assignee: "String",
                milestone: "Number",
                labels: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/issues/:number/comments (getComments)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.getComments(
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
            }
        );
    },

    "test: GET /repos/:user/:repo/issues/comments/:id (getComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.getComment(
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

    "test: POST /repos/:user/:repo/issues/:number/comments (createComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.createComment(
            {
                user: "String",
                repo: "String",
                number: "Number",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: PATCH /repos/:user/:repo/issues/comments/:id (editComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.editComment(
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

    "test: DELETE /repos/:user/:repo/issues/comments/:id (deleteComment)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.deleteComment(
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

    "test: GET /repos/:user/:repo/issues/:number/events (getEvents)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.getEvents(
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
            }
        );
    },

    "test: GET /repos/:user/:repo/issues/events (getRepoEvents)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.getRepoEvents(
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

    "test: GET /repos/:user/:repo/issues/events/:id (getEvent)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.getEvent(
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

    "test: GET /repos/:user/:repo/labels (getLabels)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.getLabels(
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

    "test: GET /repos/:user/:repo/labels/:name (getLabel)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.getLabel(
            {
                user: "String",
                repo: "String",
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/labels (createLabel)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.createLabel(
            {
                user: "String",
                repo: "String",
                name: "String",
                color: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/labels/:name (updateLabel)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.updateLabel(
            {
                user: "String",
                repo: "String",
                name: "String",
                color: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: GET /repos/:user/:repo/milestones (getAllMilestones)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.getAllMilestones(
            {
                user: "String",
                repo: "String",
                state: "String",
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

    "test: GET /repos/:user/:repo/milestones/:number (getMilestone)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.getMilestone(
            {
                user: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    },

    "test: POST /repos/:user/:repo/milestones (createMilestone)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.createMilestone(
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
            }
        );
    },

    "test: PATCH /repos/:user/:repo/milestones/:number (updateMilestone)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.updateMilestone(
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
            }
        );
    },

    "test: DELETE /repos/:user/:repo/milestones/:number (deleteMilestone)":  function(next) {
        var self = this;
        this.client.authenticate({
            type: "token",
            username: username,
            token: token
        });
        this.client.issues.deleteMilestone(
            {
                user: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
            }
        );
    }
};

!module.parent && require("asyncjs").test.testcase(module.exports).exec();
