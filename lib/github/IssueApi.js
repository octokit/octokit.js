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

var IssueApi = exports.IssueApi = function(api) {
    this.$api = api;
};

util.inherits(IssueApi, AbstractApi);

(function() {
    /**
     * List issues by username, repo and state
     * http://develop.github.com/p/issues.html#list_a_projects_issues
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {String}  $state           the issue state, can be open or closed
     */
    this.getList = function(username, repo, state, callback)
    {
        var state = state || "open";
        this.$api.get(
            'issues/list/' + encodeURI(username) + "/" + encodeURI(repo) + "/" + encodeURI(state),
            null, null,
            this.$createListener(callback, "issues")
        );
    };

    /**
     * Retrieves an issue detail
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {Number}  number           issue number
     */
    this.getIssue = function(username, repo, number, callback)
    {
        this.$api.get(
            'issues/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/" + encodeURI(number),
            null, null,
            this.$createListener(callback, "issue")
        );
    };

    /**
     * Retrieves comments on an issue
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {Number}  number           issue number
     */
    this.getIssueComments = function(username, repo, number, callback)
    {
        this.$api.get(
            'issues/comments/' + encodeURI(username) + "/" + encodeURI(repo) + "/" + encodeURI(number),
            null, null,
            this.$createListener(callback, "comments")
        );
    };

    /**
     * Retrieves labels for a project's issues
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     */
    this.getIssueLabels = function(username, repo, callback)
    {
        this.$api.get(
            'issues/labels/' + encodeURI(username) + "/" + encodeURI(repo),
            null, null,
            this.$createListener(callback, "labels")
        );
    };

    /**
     * Search issues
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {String}  state            the issue state, can be open or closed
     * @param {String}  term             the search term
     */
    this.searchIssues = function(username, repo, state, term, callback)
    {
        this.$api.get(
            'issues/search/' + encodeURI(username) + "/" + encodeURI(repo) + "/"
                + encodeURI(state) + "/" + encodeURI(term),
            null, null,
            this.$createListener(callback, "issues")
        );
    };

    /**
     * Opens a new issue
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {String}  title            the new issue title text
     * @param {String}  body             the new issue body text
     */
    this.openIssue = function(username, repo, title, body, callback)
    {
        this.$api.post(
            'issues/open/' + encodeURI(username) + "/" + encodeURI(repo),
            { "title" : title, "body" : body }, null,
            this.$createListener(callback, "issue")
        );
    };

    /**
     * Closes an issue
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {Number}  number           the issue number
     */
    this.closeIssue = function(username, repo, number, callback)
    {
        this.$api.post(
            'issues/close/' + encodeURI(username) + "/" + encodeURI(repo) + "/" + encodeURI(number),
            null, null,
            this.$createListener(callback, "issue")
        );
    };

    /**
     * Reopens an issue
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {Number}  number           the issue number
     */
    this.reopenIssue = function(username, repo, number, callback)
    {
        this.$api.post(
            'issues/reopen/' + encodeURI(username) + "/" + encodeURI(repo) + "/" + encodeURI(number),
            null, null,
            this.$createListener(callback, "issue")
        );
    };

    /**
     * Edits an issue
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {Number}  number           the issue number
     * @param {String}  title            the new title
     * @param {String}  body             the new body
     */
    this.editIssue = function(username, repo, number, title, body, callback)
    {
        var postParameters = {};
        if (title)
            postParameters.title = title;
        if (body)
            postParameters.body = body;

        this.$api.post(
            'issues/edit/' + encodeURI(username) + "/" + encodeURI(repo) + "/" + encodeURI(number),
            postParameters, null,
            this.$createListener(callback, "issue")
        );
    };

    /**
     * Adds a label to an issue
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {Number}  number           the issue number
     * @param {String}  label            the label to apply
     */
    this.addIssueLabel = function(username, repo, number, label, callback)
    {
        this.$api.get(
            'issues/label/add/' + encodeURI(username) + "/" + encodeURI(repo) + "/"
                + encodeURI(label) + "/" + encodeURI(number),
            null, null,
            this.$createListener(callback, "labels")
        );
    };

    /**
     * Removes a label from an issue
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {Number}  number           the issue number
     * @param {String}  label            the label to remove
     */
    this.removeIssueLabel = function(username, repo, number, label, callback)
    {
        this.$api.get(
            'issues/label/remove/' + encodeURI(username) + "/" + encodeURI(repo) + "/"
                + encodeURI(label) + "/" + encodeURI(number),
            null, null,
            this.$createListener(callback, "labels")
        );
    };

    /**
     * Adds a comment to an issue
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {Number}  number           the issue number
     * @param {String}  comment          the comment to add
     */
    this.addIssueComment = function(username, repo, number, comment, callback)
    {
        this.$api.post(
            'issues/comment/' + encodeURI(username) + "/" + encodeURI(repo) + "/" + encodeURI(number),
            { "comment" : comment }, null,
            this.$createListener(callback, "comment")
        );
    };

}).call(IssueApi.prototype);
