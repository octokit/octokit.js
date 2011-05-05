/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

require("../../support/paths");
var sys = require('sys');

var assert = require("assert");
var GitHubApi = require("github").GitHubApi;

var username = 'node-github-test2';
var token = '9ce274ce037d2c6bcb464d33bbed6fe6';
var organizationName = 'node-github-test';
var teamName = 'team1';
var addUser = 'fjakobstest2';
var teamId = '55405';

var test = module.exports = {

    setUp: function() {
        this.github = new GitHubApi(true);
        this.organizationApi = this.github.getOrganizationApi();
    },

   "test: getting organization information" : function(finished) {
        this.github.authenticateToken(username, token);
        this.organizationApi.show(organizationName, function(err, organization) {
            assert.equal(err, null);
            assert.notEqual(organization, null);            
            assert.equal(organization.login, organizationName);
            finished();
        });
    },
    
    "test: authenticate and update organization location to Argentinia" : function(finished) {
        this.github.authenticateToken(username, token);
        this.organizationApi.update(organizationName, {location: "Argentinia"}, function(err) {
            assert.equal(err, null);
            test.organizationApi.show(organizationName, function(err, organization) {
                assert.equal(organization.location, "Argentinia");
                finished();
            });
        });
    },

    "test: checking organization membership" : function(finished) {
        this.github.authenticateToken(username, token);
        this.organizationApi.user(username, function(err, orgs) {
            assert.equal(err, null);
            assert.notEqual(orgs, null);
            assert.equal(orgs.length, 1);
            assert.equal(orgs[0].login, organizationName);
            finished();
        });
    },

    "test: authenticate and list organization repositories" : function(finished) {
        this.github.authenticateToken(username, token);
        this.organizationApi.repositories(organizationName, function(err, repos) {
            assert.equal(err, null);
            assert.ok(repos.length == 0);
            //assert.ok(repos[0].homepage !== undefined);
            finished();
        });
    },

    "test: authenticate and list members of the owners team" : function(finished) {
        this.github.authenticateToken(username, token);
        this.organizationApi.owners(organizationName, function(err, owners) {
            assert.equal(err, null);
            assert.ok(owners.length > 0);
            assert.ok(owners[0].login !== undefined);
            finished();
        });
    },

    "test: authenticate and list organization teams" : function(finished) {
        this.github.authenticateToken(username, token);
        this.organizationApi.teams(organizationName, function(err, teams) {
            assert.equal(err, null);
            assert.ok(teams.length > 0);
            assert.ok(teams[0].name !== undefined);
            finished();
        });
    },

    "test: create and delete a team" : function(finished) {
        this.github.authenticateToken(username, token);
        this.organizationApi.addTeam(organizationName, "team2", function(err, team) {
            assert.equal(err, null);
            assert.equal(team.name, "team2");
            test.organizationApi.removeTeam(team.id, function(err) {
                assert.equal(err, null);
                finished();
            });
        });
    },

    "test: list members of a team" : function(finished) {
        this.github.authenticateToken(username, token);
        this.organizationApi.teamMembers(teamId, function(err, users) {
            assert.equal(err, null);
            assert.ok(users.length > 0);
            finished();
        });
    },

    "test: add and remove a user from the team" : function(finished) {
        this.github.authenticateToken(username, token);
        this.organizationApi.addTeamMember(teamId, addUser, function(err, members) {
            assert.equal(err, null);
            var member = members.filter(function(member) { return member.login == addUser; })[0];
            assert.notEqual(member, null);
            test.organizationApi.removeTeamMember(teamId, addUser, function(err, members) {
                assert.equal(err, null);
                var member = members.filter(function(member) { return member.login == addUser; })[0];
                assert.equal(member, null);
                finished();
            });
        });
    },
};

!module.parent && require("asyncjs/test").testcase(module.exports).exec();
