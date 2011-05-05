/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

var sys = require("sys");
var AbstractApi = require("./AbstractApi").AbstractApi;

var OrganizationApi = exports.OrganizationApi = function(api) {
    this.$api = api;
};

sys.inherits(OrganizationApi, AbstractApi);

(function() {

    /**
     * Retrieve the info for an organization
     * http://develop.github.com/p/orgs.html#getting_organization_membership
     *
     * @param {String}  organization         the organization name to retrieve
     */
    this.show = function(organization, callback)
    {
      this.$api.get(
          'organizations/' + encodeURI(organization),
          null, null,
          this.$createListener(callback, "organization")
      );
    };
  
    /**
     * Retrieve the public organizations a user is part of
     * http://develop.github.com/p/orgs.html#checking_organization_membeship
     *
     *  @param {String}  username
     */
    this.user = function(username, callback)
    {
      this.$api.get(
          'user/show/' + encodeURI(username) + '/organizations',
          null, null,
          this.$createListener(callback, "organizations")
      );
    };

    /**
     * Update an organization
     *
     * @param {String} organization
     * @param {Object} data
     */
    this.update = function(organization, data, callback)
    {
        var parameters = {};
        for (var key in data) {
            parameters["organization[" + key + "]"] = data[key];
        }

        this.$api.put(
            'organizations/' + encodeURI(organization),
            parameters, null,
            this.$createListener(callback, "organization")
        );
    };

    /**
     * List organization repos
     *
     * @param {String} organization
     */
    this.repositories = function(organization, callback) 
    {
        this.$api.get(
            'organizations/repositories',
            null, null, 
            this.$createListener(callback, "repositories")
        );
    };

    /** 
     *
     * List members of the owners team
     *
     * @param {String} organization
     */
    this.owners = function(organization, callback)
    {
        this.$api.get(
            'organizations/' + encodeURI(organization) + '/owners',
            null, null,
            this.$createListener(callback, "users")
        );
    };

    /** 
     *
     * List teams of an organization
     *
     * @param {String} organization
     */
    this.teams = function(organization, callback)
    {
        this.$api.get(
            'organizations/' + encodeURI(organization) + '/teams',
            null, null,
            this.$createListener(callback, "teams")
        );
    };

    /**
     *
     * Create a new team
     * 
     * @param {String} organization
     * @param {String} teamName
     */
    this.addTeam = function(organization, teamName, callback) 
    {
        var parameters = {};
        parameters["team[name]"] = teamName;

        this.$api.post(
            'organizations/' + encodeURI(organization) + '/teams',
            parameters, null, 
            this.$createListener(callback, "team")
        );
    };

    /**
     *
     * Remove a team
     *
     * @param {string} teamId
     */
    this.removeTeam = function(teamId, callback)
    {
        this.$api.delete(
            'teams/' + encodeURI(teamId),
            null, null,
            this.$createListener(callback, "teams")
        );

    };

    /**
     *
     * List the members of a team
     * @param {String} teamId
     */
    this.teamMembers = function(teamId, callback)
    {
        this.$api.get(
            'teams/' + encodeURI(teamId) + '/members',
            null, null,
            this.$createListener(callback, "users")
        );
    };

    /**
     *
     * Add a user to a team
     * @param {String} teamId
     * @param {String} username
     */
    this.addTeamMember = function(teamId, username, callback) 
    {
        this.$api.post(
            'teams/' + encodeURI(teamId) + '/members?name=' + encodeURI(username),
            null, null,
            this.$createListener(callback, "users")
        );
    };

    /** 
     *
     * Remove a user from a team
     * @param {String} teamId
     * @param {String} username
     */
    this.removeTeamMember = function(teamId, username, callback)
    {
        this.$api.delete(
            'teams/' + encodeURI(teamId) + '/members?name=' + encodeURI(username),
            null, null,
            this.$createListener(callback, "users")
        );
    };

}).call(OrganizationApi.prototype);
