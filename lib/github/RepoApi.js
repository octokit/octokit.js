/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

"use strict";

var util = require("util");
var AbstractApi = require("./AbstractApi").AbstractApi;

var RepoApi = exports.RepoApi = function(api) {
    this.$api = api;
};

util.inherits(RepoApi, AbstractApi);

(function() {

    /**
     * Search repos by keyword
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  $query            the search query
     */
    this.search = function(query, callback)
    {
        this.$api.get(
            'repos/search/' + encodeURI(query),
            null, null,
            this.$createListener(callback, "repositories")
        );
    };

    /**
     * Create a repo
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  name                repo name
     * @param {String}  description         repo description
     * @param {String}  homepage            homepage
     * @param {String}  privacy             "1" for public, "0" for private
     */
    this.create = function(name, description, homepage, privacy, callback)
    {
        var postParameters = { "name" : name, "public" : privacy };
        if (description)
            postParameters["description"] = description;
        if (homepage)
            postParameters["homepage"] = homepage;

        this.$api.post(
            'repos/create',
            postParameters, null,
            this.$createListener(callback, "repository")
        );
    };

    /**
     * Delete a repo
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  user                repo user
     * @param {String}  name                repo name
     */
    this.delete = function(user, name, callback)
    {
        var self = this;
        var deleteURL = 'repos/delete/' + encodeURI(user) + "/" + encodeURI(name);
        this.$api.post(
            deleteURL,
            null, null,
            function(err, response) {
                // Intercept the return to get the delete_token, which
                // we then post back to the same URL
                if (err)
                    return callback(err);
                if (!response.delete_token)
                    return callback(err);

                self.$api.post(
                    deleteURL,
                    { "delete_token" : response.delete_token }, null,
                    self.$createListener(callback, null)
                );

            }
        );
    };

    /**
     * Get extended information about a repository by its username and repo name
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  username         the user who owns the repo
     * @param {String}  repo             the name of the repo
     */
    this.show = function(username, repo, callback)
    {
        this.$api.get(
            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo),
            null, null,
            this.$createListener(callback, "repository")
        );
    };

    /**
     * WARNING: This method is broken
     * Set repo info -- broken because the querystring.stringify method
     * does not properly stringify nested arrays, so we have a problem posting
     * the details we want to update. Need to update the dependencies to
     * use the 'qs' module instead
     *
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  username         the user who owns the repo
     * @param {String}  repo             the name of the repo
     * @param {Array}   details          the details to be updated (description, homepage, etc)
     */
    this.setInfo = function(username, repo, details, callback)
    {
        var postParameters = { "values" : details };
        this.$api.post(
            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo),
            postParameters, null,
            this.$createListener(callback, "repository")
        );
    };

    /**
     * Forks a repository
     *
     * @param {String}  username        the user who owns the repo
     * @param {String}  repo            the name of the repo
     */
     this.forkRepo = function(username, repo, callback)
     {
         this.$api.post(
            'repos/fork/' + encodeURI(username) + "/" + encodeURI(repo),
            null, null,
            this.$createListener(callback, "repository")
         );
     };

    /**
     * Watch or unwatch a repository
     *
     * @param {String}  username        the user who owns the repo
     * @param {String}  repo            the name of the repo
     * @param {Boolean} watch           false unwatches, true watches
     */
     this.watchRepo = function(username, repo, watch, callback)
     {
         var watchURL = "repos/" + (watch ? "" : "un") + "watch/"
            + encodeURI(username) + "/" + encodeURI(repo);
         this.$api.get(
            watchURL,
            null, null,
            this.$createListener(callback, "repository")
         );
     };

    /**
     * Get the repositories of a user
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  username         the username
     */
    this.getUserRepos = function(username, callback)
    {
        this.$api.get(
            'repos/show/' + encodeURI(username),
            null, null,
            this.$createListener(callback, "repositories")
        );
    };

    /**
     * Get the tags of a repository
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  username         the username
     * @param {String}  repo             the name of the repo
     */
    this.getRepoTags = function(username, repo, callback)
    {
        this.$api.get(
            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/tags",
            null, null,
            this.$createListener(callback, "tags")
        );
    };

    /**
     * Get the branches of a repository
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  username         the username
     * @param {String}  repo             the name of the repo
     */
    this.getRepoBranches = function(username, repo, callback)
    {
        this.$api.get(
            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/branches",
            null, null,
            this.$createListener(callback, "branches")
        );
    };

    /**
     * Get the languages of a repository
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  username         the username
     * @param {String}  repo             the name of the repo
     */
    this.getRepoLanguages = function(username, repo, callback)
    {
        this.$api.get(
            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/languages",
            null, null,
            this.$createListener(callback, "languages")
        );
    };

    /**
     * Get the collaborators of a repository
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  username         the username
     * @param {String}  repo             the name of the repo
     */
    this.getRepoCollaborators = function(username, repo, callback)
    {
        this.$api.get(
            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/collaborators",
            null, null,
            this.$createListener(callback, "collaborators")
        );
    };

    /**
     * Get the contributors of a repository
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  username         the username
     * @param {String}  repo             the name of the repo
     * @param {Boolean} anon             retreive non-github contributors
     */
    this.getRepoContributors = function(username, repo, anon, callback)
    {
        if (typeof(anon) == 'function') {
            callback = anon;
            anon = '';
        }
        else {
            anon = '/anon';
        }
        this.$api.get(
            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/contributors" + anon,
            null, null,
            this.$createListener(callback, "contributors")
        );
    };

    /**
     * Get the watchers of a repository
     * http://develop.github.com/p/repo.html
     *
     * @param {String}  username         the username
     * @param {String}  repo             the name of the repo
     */
    this.getRepoWatchers = function(username, repo, callback)
    {
        this.$api.get(
            'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/watchers",
            null, null,
            this.$createListener(callback, "watchers")
        );
    };

    /**
     * Show the repo network (i.e. get all the repo forks)
     *
     * @param {String}  username         the username
     * @param {String}  repo             the name of the repo
     */
     this.getRepoNetwork = function(username, repo, callback)
     {
         this.$api.get(
             'repos/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/network",
             null, null,
             this.$createListener(callback, "network")
         );
     };

}).call(RepoApi.prototype);

//
///**
// * Show all forks of a repository
// * @param {String}  username      the username
// * @param {String}  repo          name of the repo
// */
//this.getRepoForks = function(username, repo, callback)
//{
//  $response = $this->api->get('repos/show/'.urlencode(username).'/'.urlencode(repo).'/network');
//
//  return $response['network'];
//}
