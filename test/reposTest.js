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

describe("[repos]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute PUT /repos/:user/:repo/collaborators/:collabuser (addCollaborator)",  function(next) {
        client.repos.addCollaborator(
            {
                user: "String",
                repo: "String",
                collabuser: "String",
                permission: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts (addProtectedBranchRequiredStatusChecksContexts)",  function(next) {
        client.repos.addProtectedBranchRequiredStatusChecksContexts(
            {
                user: "String",
                repo: "String",
                branch: "String",
                body: "Array",
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

    it("should successfully execute POST /repos/:user/:repo/branches/:branch/protection/restrictions/teams (addProtectedBranchTeamRestrictions)",  function(next) {
        client.repos.addProtectedBranchTeamRestrictions(
            {
                user: "String",
                repo: "String",
                branch: "String",
                body: "Array",
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

    it("should successfully execute POST /repos/:user/:repo/branches/:branch/protection/restrictions/users (addProtectedBranchUserRestrictions)",  function(next) {
        client.repos.addProtectedBranchUserRestrictions(
            {
                user: "String",
                repo: "String",
                branch: "String",
                body: "Array",
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

    it("should successfully execute GET /repos/:user/:repo/collaborators/:collabuser (checkCollaborator)",  function(next) {
        client.repos.checkCollaborator(
            {
                user: "String",
                repo: "String",
                collabuser: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/compare/:base...:head (compareCommits)",  function(next) {
        client.repos.compareCommits(
            {
                user: "String",
                repo: "String",
                base: "String",
                head: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /user/repos (create)",  function(next) {
        client.repos.create(
            {
                name: "String",
                description: "String",
                homepage: "String",
                private: "Boolean",
                has_issues: "Boolean",
                has_wiki: "Boolean",
                has_downloads: "Boolean",
                auto_init: "Boolean",
                gitignore_template: "String",
                license_template: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/commits/:sha/comments (createCommitComment)",  function(next) {
        client.repos.createCommitComment(
            {
                user: "String",
                repo: "String",
                sha: "String",
                body: "String",
                path: "String",
                position: "Number",
                line: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/deployments (createDeployment)",  function(next) {
        client.repos.createDeployment(
            {
                user: "String",
                repo: "String",
                ref: "String",
                task: "String",
                auto_merge: "Boolean",
                required_contexts: "Array",
                payload: "String",
                environment: "String",
                description: "String",
                transient_environment: "Boolean",
                production_environment: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/deployments/:id/statuses (createDeploymentStatus)",  function(next) {
        client.repos.createDeploymentStatus(
            {
                user: "String",
                repo: "String",
                id: "String",
                state: "String",
                target_url: "String",
                log_url: "String",
                description: "String",
                environment_url: "String",
                auto_inactive: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:user/:repo/contents/:path (createFile)",  function(next) {
        client.repos.createFile(
            {
                user: "String",
                repo: "String",
                path: "String",
                message: "String",
                content: "String",
                branch: "String",
                committer: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /orgs/:org/repos (createForOrg)",  function(next) {
        client.repos.createForOrg(
            {
                org: "String",
                name: "String",
                description: "String",
                homepage: "String",
                private: "Boolean",
                has_issues: "Boolean",
                has_wiki: "Boolean",
                has_downloads: "Boolean",
                team_id: "Number",
                auto_init: "Boolean",
                gitignore_template: "String",
                license_template: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/hooks (createHook)",  function(next) {
        client.repos.createHook(
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
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/keys (createKey)",  function(next) {
        client.repos.createKey(
            {
                user: "String",
                repo: "String",
                title: "String",
                key: "String",
                read_only: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/projects (createProject)",  function(next) {
        client.repos.createProject(
            {
                user: "String",
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

    it("should successfully execute POST /repos/:user/:repo/projects/columns/:id/cards (createProjectCard)",  function(next) {
        client.repos.createProjectCard(
            {
                user: "String",
                repo: "String",
                id: "String",
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

    it("should successfully execute POST /repos/:user/:repo/projects/:number/columns (createProjectColumn)",  function(next) {
        client.repos.createProjectColumn(
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

    it("should successfully execute POST /repos/:user/:repo/releases (createRelease)",  function(next) {
        client.repos.createRelease(
            {
                user: "String",
                repo: "String",
                tag_name: "String",
                target_commitish: "String",
                name: "String",
                body: "String",
                draft: "Boolean",
                prerelease: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/statuses/:sha (createStatus)",  function(next) {
        client.repos.createStatus(
            {
                user: "String",
                repo: "String",
                sha: "String",
                state: "String",
                target_url: "String",
                description: "String",
                context: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:user/:repo (delete)",  function(next) {
        client.repos.delete(
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

    it("should successfully execute DELETE /repos/:user/:repo/releases/assets/:id (deleteAsset)",  function(next) {
        client.repos.deleteAsset(
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

    it("should successfully execute DELETE /repos/:user/:repo/comments/:id (deleteCommitComment)",  function(next) {
        client.repos.deleteCommitComment(
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

    it("should successfully execute DELETE /repos/:user/:repo/downloads/:id (deleteDownload)",  function(next) {
        client.repos.deleteDownload(
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

    it("should successfully execute DELETE /repos/:user/:repo/contents/:path (deleteFile)",  function(next) {
        client.repos.deleteFile(
            {
                user: "String",
                repo: "String",
                path: "String",
                message: "String",
                sha: "String",
                branch: "String",
                committer: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:user/:repo/hooks/:id (deleteHook)",  function(next) {
        client.repos.deleteHook(
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

    it("should successfully execute DELETE /repositories/:repo/invitations/:id (deleteInvite)",  function(next) {
        client.repos.deleteInvite(
            {
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

    it("should successfully execute DELETE /repos/:user/:repo/keys/:id (deleteKey)",  function(next) {
        client.repos.deleteKey(
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

    it("should successfully execute DELETE /repos/:user/:repo/projects/:number (deleteProject)",  function(next) {
        client.repos.deleteProject(
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

    it("should successfully execute DELETE /repos/:user/:repo/projects/columns/cards/:id (deleteProjectCard)",  function(next) {
        client.repos.deleteProjectCard(
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

    it("should successfully execute DELETE /repos/:user/:repo/projects/columns/:id (deleteProjectColumn)",  function(next) {
        client.repos.deleteProjectColumn(
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

    it("should successfully execute DELETE /repos/:user/:repo/releases/:id (deleteRelease)",  function(next) {
        client.repos.deleteRelease(
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

    it("should successfully execute PATCH /repos/:user/:repo (edit)",  function(next) {
        client.repos.edit(
            {
                user: "String",
                repo: "String",
                name: "String",
                description: "String",
                homepage: "String",
                private: "Boolean",
                has_issues: "Boolean",
                has_wiki: "Boolean",
                has_downloads: "Boolean",
                default_branch: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:user/:repo/releases/assets/:id (editAsset)",  function(next) {
        client.repos.editAsset(
            {
                user: "String",
                repo: "String",
                id: "String",
                name: "String",
                label: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:user/:repo/hooks/:id (editHook)",  function(next) {
        client.repos.editHook(
            {
                user: "String",
                repo: "String",
                id: "String",
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
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:user/:repo/releases/:id (editRelease)",  function(next) {
        client.repos.editRelease(
            {
                user: "String",
                repo: "String",
                id: "String",
                tag_name: "String",
                target_commitish: "String",
                name: "String",
                body: "String",
                draft: "Boolean",
                prerelease: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/forks (fork)",  function(next) {
        client.repos.fork(
            {
                user: "String",
                repo: "String",
                organization: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo (get)",  function(next) {
        client.repos.get(
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

    it("should successfully execute GET /user/repos (getAll)",  function(next) {
        client.repos.getAll(
            {
                visibility: "String",
                affiliation: "String",
                type: "String",
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

    it("should successfully execute GET /repos/:user/:repo/comments (getAllCommitComments)",  function(next) {
        client.repos.getAllCommitComments(
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

    it("should successfully execute GET /repos/:user/:repo/:archive_format/:ref (getArchiveLink)",  function(next) {
        client.repos.getArchiveLink(
            {
                user: "String",
                repo: "String",
                archive_format: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/releases/assets/:id (getAsset)",  function(next) {
        client.repos.getAsset(
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

    it("should successfully execute GET /repos/:user/:repo/branches/:branch (getBranch)",  function(next) {
        client.repos.getBranch(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute GET /repos/:user/:repo/branches/:branch/protection (getBranchProtection)",  function(next) {
        client.repos.getBranchProtection(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute GET /repos/:user/:repo/branches (getBranches)",  function(next) {
        client.repos.getBranches(
            {
                user: "String",
                repo: "String",
                protected: "Boolean",
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

    it("should successfully execute GET /repositories/:id (getById)",  function(next) {
        client.repos.getById(
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

    it("should successfully execute GET /repos/:user/:repo/traffic/clones (getClones)",  function(next) {
        client.repos.getClones(
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

    it("should successfully execute GET /repos/:user/:repo/collaborators (getCollaborators)",  function(next) {
        client.repos.getCollaborators(
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

    it("should successfully execute GET /repos/:user/:repo/commits/:sha/status (getCombinedStatus)",  function(next) {
        client.repos.getCombinedStatus(
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
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/commits/:sha (getCommit)",  function(next) {
        client.repos.getCommit(
            {
                user: "String",
                repo: "String",
                sha: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/comments/:id (getCommitComment)",  function(next) {
        client.repos.getCommitComment(
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

    it("should successfully execute GET /repos/:user/:repo/commits/:sha/comments (getCommitComments)",  function(next) {
        client.repos.getCommitComments(
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
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/commits (getCommits)",  function(next) {
        client.repos.getCommits(
            {
                user: "String",
                repo: "String",
                sha: "String",
                path: "String",
                author: "String",
                since: "Date",
                until: "Date",
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

    it("should successfully execute GET /repos/:user/:repo/contents/:path (getContent)",  function(next) {
        client.repos.getContent(
            {
                user: "String",
                repo: "String",
                path: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/contributors (getContributors)",  function(next) {
        client.repos.getContributors(
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
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/deployments/:id/statuses (getDeploymentStatuses)",  function(next) {
        client.repos.getDeploymentStatuses(
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

    it("should successfully execute GET /repos/:user/:repo/deployments (getDeployments)",  function(next) {
        client.repos.getDeployments(
            {
                user: "String",
                repo: "String",
                sha: "String",
                ref: "String",
                task: "String",
                environment: "String",
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

    it("should successfully execute GET /repos/:user/:repo/downloads/:id (getDownload)",  function(next) {
        client.repos.getDownload(
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

    it("should successfully execute GET /repos/:user/:repo/downloads (getDownloads)",  function(next) {
        client.repos.getDownloads(
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

    it("should successfully execute GET /orgs/:org/repos (getForOrg)",  function(next) {
        client.repos.getForOrg(
            {
                org: "String",
                type: "String",
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

    it("should successfully execute GET /users/:user/repos (getForUser)",  function(next) {
        client.repos.getForUser(
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
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/forks (getForks)",  function(next) {
        client.repos.getForks(
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
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/hooks/:id (getHook)",  function(next) {
        client.repos.getHook(
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

    it("should successfully execute GET /repos/:user/:repo/hooks (getHooks)",  function(next) {
        client.repos.getHooks(
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

    it("should successfully execute GET /repositories/:repo/invitations (getInvites)",  function(next) {
        client.repos.getInvites(
            {
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/keys/:id (getKey)",  function(next) {
        client.repos.getKey(
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

    it("should successfully execute GET /repos/:user/:repo/keys (getKeys)",  function(next) {
        client.repos.getKeys(
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

    it("should successfully execute GET /repos/:user/:repo/languages (getLanguages)",  function(next) {
        client.repos.getLanguages(
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

    it("should successfully execute GET /repos/:user/:repo/pages/builds/latest (getLatestPagesBuild)",  function(next) {
        client.repos.getLatestPagesBuild(
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

    it("should successfully execute GET /repos/:user/:repo/releases/latest (getLatestRelease)",  function(next) {
        client.repos.getLatestRelease(
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

    it("should successfully execute GET /repos/:user/:repo/pages (getPages)",  function(next) {
        client.repos.getPages(
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

    it("should successfully execute GET /repos/:user/:repo/pages/builds/:id (getPagesBuild)",  function(next) {
        client.repos.getPagesBuild(
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

    it("should successfully execute GET /repos/:user/:repo/pages/builds (getPagesBuilds)",  function(next) {
        client.repos.getPagesBuilds(
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

    it("should successfully execute GET /repos/:user/:repo/traffic/popular/paths (getPaths)",  function(next) {
        client.repos.getPaths(
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

    it("should successfully execute GET /repos/:user/:repo/projects/:number (getProject)",  function(next) {
        client.repos.getProject(
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

    it("should successfully execute GET /repos/:user/:repo/projects/columns/cards/:id (getProjectCard)",  function(next) {
        client.repos.getProjectCard(
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

    it("should successfully execute GET /repos/:user/:repo/projects/columns/:id/cards (getProjectCards)",  function(next) {
        client.repos.getProjectCards(
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

    it("should successfully execute GET /repos/:user/:repo/projects/columns/:id (getProjectColumn)",  function(next) {
        client.repos.getProjectColumn(
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

    it("should successfully execute GET /repos/:user/:repo/projects/:number/columns (getProjectColumns)",  function(next) {
        client.repos.getProjectColumns(
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

    it("should successfully execute GET /repos/:user/:repo/projects (getProjects)",  function(next) {
        client.repos.getProjects(
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

    it("should successfully execute GET /repos/:user/:repo/branches/:branch/protection/required_status_checks (getProtectedBranchRequiredStatusChecks)",  function(next) {
        client.repos.getProtectedBranchRequiredStatusChecks(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute GET /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts (getProtectedBranchRequiredStatusChecksContexts)",  function(next) {
        client.repos.getProtectedBranchRequiredStatusChecksContexts(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute GET /repos/:user/:repo/branches/:branch/protection/restrictions (getProtectedBranchRestrictions)",  function(next) {
        client.repos.getProtectedBranchRestrictions(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute GET /repos/:user/:repo/branches/:branch/protection/restrictions/teams (getProtectedBranchTeamRestrictions)",  function(next) {
        client.repos.getProtectedBranchTeamRestrictions(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute GET /repos/:user/:repo/branches/:branch/protection/restrictions/users (getProtectedBranchUserRestrictions)",  function(next) {
        client.repos.getProtectedBranchUserRestrictions(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute GET /repositories (getPublic)",  function(next) {
        client.repos.getPublic(
            {
                since: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/readme (getReadme)",  function(next) {
        client.repos.getReadme(
            {
                user: "String",
                repo: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/traffic/popular/referrers (getReferrers)",  function(next) {
        client.repos.getReferrers(
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

    it("should successfully execute GET /repos/:user/:repo/releases/:id (getRelease)",  function(next) {
        client.repos.getRelease(
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

    it("should successfully execute GET /repos/:user/:repo/releases/tags/:tag (getReleaseByTag)",  function(next) {
        client.repos.getReleaseByTag(
            {
                user: "String",
                repo: "String",
                tag: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/releases (getReleases)",  function(next) {
        client.repos.getReleases(
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

    it("should successfully execute GET /repos/:user/:repo/commits/:ref (getShaOfCommitRef)",  function(next) {
        client.repos.getShaOfCommitRef(
            {
                user: "String",
                repo: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/stats/code_frequency (getStatsCodeFrequency)",  function(next) {
        client.repos.getStatsCodeFrequency(
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

    it("should successfully execute GET /repos/:user/:repo/stats/commit_activity (getStatsCommitActivity)",  function(next) {
        client.repos.getStatsCommitActivity(
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

    it("should successfully execute GET /repos/:user/:repo/stats/contributors (getStatsContributors)",  function(next) {
        client.repos.getStatsContributors(
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

    it("should successfully execute GET /repos/:user/:repo/stats/participation (getStatsParticipation)",  function(next) {
        client.repos.getStatsParticipation(
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

    it("should successfully execute GET /repos/:user/:repo/stats/punch_card (getStatsPunchCard)",  function(next) {
        client.repos.getStatsPunchCard(
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

    it("should successfully execute GET /repos/:user/:repo/commits/:sha/statuses (getStatuses)",  function(next) {
        client.repos.getStatuses(
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
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:user/:repo/tags (getTags)",  function(next) {
        client.repos.getTags(
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

    it("should successfully execute GET /repos/:user/:repo/teams (getTeams)",  function(next) {
        client.repos.getTeams(
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

    it("should successfully execute GET /repos/:user/:repo/traffic/views (getViews)",  function(next) {
        client.repos.getViews(
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

    it("should successfully execute GET /repos/:user/:repo/releases/:id/assets (listAssets)",  function(next) {
        client.repos.listAssets(
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

    it("should successfully execute POST /repos/:user/:repo/merges (merge)",  function(next) {
        client.repos.merge(
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
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:user/:repo/projects/columns/cards/:id/moves (moveProjectCard)",  function(next) {
        client.repos.moveProjectCard(
            {
                user: "String",
                repo: "String",
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

    it("should successfully execute POST /repos/:user/:repo/projects/columns/:id/moves (moveProjectColumn)",  function(next) {
        client.repos.moveProjectColumn(
            {
                user: "String",
                repo: "String",
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

    it("should successfully execute GET /repositories/:id (one)",  function(next) {
        client.repos.one(
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

    it("should successfully execute POST /repos/:user/:repo/hooks/:id/pings (pingHook)",  function(next) {
        client.repos.pingHook(
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

    it("should successfully execute DELETE /repos/:user/:repo/branches/:branch/protection (removeBranchProtection)",  function(next) {
        client.repos.removeBranchProtection(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute DELETE /repos/:user/:repo/collaborators/:collabuser (removeCollaborator)",  function(next) {
        client.repos.removeCollaborator(
            {
                user: "String",
                repo: "String",
                collabuser: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:user/:repo/branches/:branch/protection/required_status_checks (removeProtectedBranchRequiredStatusChecks)",  function(next) {
        client.repos.removeProtectedBranchRequiredStatusChecks(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute DELETE /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts (removeProtectedBranchRequiredStatusChecksContexts)",  function(next) {
        client.repos.removeProtectedBranchRequiredStatusChecksContexts(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute DELETE /repos/:user/:repo/branches/:branch/protection/restrictions (removeProtectedBranchRestrictions)",  function(next) {
        client.repos.removeProtectedBranchRestrictions(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute DELETE /repos/:user/:repo/branches/:branch/protection/restrictions/teams (removeProtectedBranchTeamRestrictions)",  function(next) {
        client.repos.removeProtectedBranchTeamRestrictions(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute DELETE /repos/:user/:repo/branches/:branch/protection/restrictions/users (removeProtectedBranchUserRestrictions)",  function(next) {
        client.repos.removeProtectedBranchUserRestrictions(
            {
                user: "String",
                repo: "String",
                branch: "String",
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

    it("should successfully execute PUT /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts (replaceProtectedBranchRequiredStatusChecksContexts)",  function(next) {
        client.repos.replaceProtectedBranchRequiredStatusChecksContexts(
            {
                user: "String",
                repo: "String",
                branch: "String",
                body: "Array",
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

    it("should successfully execute PUT /repos/:user/:repo/branches/:branch/protection/restrictions/teams (replaceProtectedBranchTeamRestrictions)",  function(next) {
        client.repos.replaceProtectedBranchTeamRestrictions(
            {
                user: "String",
                repo: "String",
                branch: "String",
                body: "Array",
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

    it("should successfully execute PUT /repos/:user/:repo/branches/:branch/protection/restrictions/users (replaceProtectedBranchUserRestrictions)",  function(next) {
        client.repos.replaceProtectedBranchUserRestrictions(
            {
                user: "String",
                repo: "String",
                branch: "String",
                body: "Array",
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

    it("should successfully execute POST /repos/:user/:repo/pages/builds (requestPageBuild)",  function(next) {
        client.repos.requestPageBuild(
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

    it("should successfully execute POST /repos/:user/:repo/hooks/:id/test (testHook)",  function(next) {
        client.repos.testHook(
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

    it("should successfully execute PUT /repos/:user/:repo/branches/:branch/protection (updateBranchProtection)",  function(next) {
        client.repos.updateBranchProtection(
            {
                user: "String",
                repo: "String",
                branch: "String",
                required_status_checks: "Json",
                restrictions: "Json",
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

    it("should successfully execute PATCH /repos/:user/:repo/comments/:id (updateCommitComment)",  function(next) {
        client.repos.updateCommitComment(
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

    it("should successfully execute PUT /repos/:user/:repo/contents/:path (updateFile)",  function(next) {
        client.repos.updateFile(
            {
                user: "String",
                repo: "String",
                path: "String",
                message: "String",
                content: "String",
                sha: "String",
                branch: "String",
                committer: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repositories/:repo/invitations/:id (updateInvite)",  function(next) {
        client.repos.updateInvite(
            {
                repo: "String",
                id: "String",
                permission: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:user/:repo/projects/:number (updateProject)",  function(next) {
        client.repos.updateProject(
            {
                user: "String",
                repo: "String",
                number: "Number",
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

    it("should successfully execute PATCH /repos/:user/:repo/projects/columns/cards/:id (updateProjectCard)",  function(next) {
        client.repos.updateProjectCard(
            {
                user: "String",
                repo: "String",
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

    it("should successfully execute PATCH /repos/:user/:repo/projects/columns/:id (updateProjectColumn)",  function(next) {
        client.repos.updateProjectColumn(
            {
                user: "String",
                repo: "String",
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

    it("should successfully execute PATCH /repos/:user/:repo/branches/:branch/protection/required_status_checks (updateProtectedBranchRequiredStatusChecks)",  function(next) {
        client.repos.updateProtectedBranchRequiredStatusChecks(
            {
                user: "String",
                repo: "String",
                branch: "String",
                body: "Json",
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

    it("should successfully execute POST /repos/:user/:repo/releases/:id/assets (uploadAsset)",  function(next) {
        client.repos.uploadAsset(
            {
                user: "String",
                repo: "String",
                id: "String",
                filePath: "String",
                name: "String",
                label: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
