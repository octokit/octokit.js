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

describe("[projects]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute POST /orgs/:org/projects (createOrgProject)",  function(next) {
        client.projects.createOrgProject(
            {
                org: "String",
                name: "String",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /projects/columns/:column_id/cards (createProjectCard)",  function(next) {
        client.projects.createProjectCard(
            {
                column_id: "String",
                note: "String",
                content_id: "String",
                content_type: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /projects/:project_id/columns (createProjectColumn)",  function(next) {
        client.projects.createProjectColumn(
            {
                project_id: "String",
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/projects (createRepoProject)",  function(next) {
        client.projects.createRepoProject(
            {
                owner: "String",
                repo: "String",
                name: "String",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /projects/:id (deleteProject)",  function(next) {
        client.projects.deleteProject(
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

    it("should successfully execute DELETE /projects/columns/cards/:id (deleteProjectCard)",  function(next) {
        client.projects.deleteProjectCard(
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

    it("should successfully execute DELETE /projects/columns/:id (deleteProjectColumn)",  function(next) {
        client.projects.deleteProjectColumn(
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

    it("should successfully execute GET /orgs/:org/projects (getOrgProjects)",  function(next) {
        client.projects.getOrgProjects(
            {
                org: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /projects/:id (getProject)",  function(next) {
        client.projects.getProject(
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

    it("should successfully execute GET /projects/columns/cards/:id (getProjectCard)",  function(next) {
        client.projects.getProjectCard(
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

    it("should successfully execute GET /projects/columns/:column_id/cards (getProjectCards)",  function(next) {
        client.projects.getProjectCards(
            {
                column_id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /projects/columns/:id (getProjectColumn)",  function(next) {
        client.projects.getProjectColumn(
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

    it("should successfully execute GET /projects/:project_id/columns (getProjectColumns)",  function(next) {
        client.projects.getProjectColumns(
            {
                project_id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/projects (getRepoProjects)",  function(next) {
        client.projects.getRepoProjects(
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

    it("should successfully execute POST /projects/columns/cards/:id/moves (moveProjectCard)",  function(next) {
        client.projects.moveProjectCard(
            {
                id: "String",
                position: "String",
                column_id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /projects/columns/:id/moves (moveProjectColumn)",  function(next) {
        client.projects.moveProjectColumn(
            {
                id: "String",
                position: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /projects/:id (updateProject)",  function(next) {
        client.projects.updateProject(
            {
                id: "String",
                name: "String",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /projects/columns/cards/:id (updateProjectCard)",  function(next) {
        client.projects.updateProjectCard(
            {
                id: "String",
                note: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /projects/columns/:id (updateProjectColumn)",  function(next) {
        client.projects.updateProjectColumn(
            {
                id: "String",
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
