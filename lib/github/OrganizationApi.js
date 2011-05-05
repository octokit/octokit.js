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
          this.$createListener(callback, "organization")
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
            this.$createListener(callback, "organization")
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
            this.$createListener(callback, "organization")
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
            this.$createListener(callback, "organization")
        );
    };

    /**
     *
     * Create a new team
     * 
     * @param {String} organization
     * @param {String} teamName
     */
    this.addTeam(organization, teamName, callback) 
    {
        var parameters = {};
        for (var key in data) {
            parameters["team[" + key + "]"] = data[key];
        }

        this.$api.post(
            'organizations/' + encodeURI(organization) + '/teams',
            parameters, null, 
            this.$createListener(callback, "organization")
        );
    };

    /**
     *
     * Remove a team
     *
     * @param {String} organization
     * @param {string} teamName
     */
    this.removeTeam(organization, teamName, callback)
    {
        
    };

    /**
     *
     * List the members of a team
     * @param {String} organization
     * @param {String} teamName
     */
    this.teamMembers(organization, teamName, callback)
    {

    };

    /**
     *
     * Add a user to a team
     * @param {String} organization
     * @param {String} teamName
     * @param {String} username
     */
    this.addTeamMember(organization, teamName, username, callback) 
    {

    };

    /** 
     *
     * Remove a user from a team
     * @param {String} organization
     * @param {String} teamName
     * @param {String} username
     */
    this.removeTeamMember(organization, teamName, username, callback)
    {

    };

}).call(OrganizationApi.prototype);
