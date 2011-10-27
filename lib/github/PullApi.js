/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Ryan Funduk <ryan.funduk@gmail.com>
 */

"use strict";

var sys = require("sys");
var AbstractApi = require("./AbstractApi").AbstractApi;

var PullApi = exports.PullApi = function(api) {
    this.$api = api;
};

sys.inherits(PullApi, AbstractApi);

(function() {
    /**
     * List pulls by username, repo and (optionally) state
     * http://develop.github.com/p/pulls.html
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {String}  $state           the issue state, optional
     */
    this.getList = function(username, repo, state, callback)
    {
        if (typeof(state) == 'function') {
            callback = state;
            state = '';
        }
        else {
            state = '/' + encodeURI(state);
        }
        this.$api.get(
            'pulls/' + encodeURI(username) + "/" + encodeURI(repo) + state,
            null, null,
            this.$createListener(callback, "pulls")
        );
    };

    /**
     * Show a pull by username, repo, and number.
     * http://develop.github.com/p/pulls.html
     *
     * @param {String}  username        the username
     * @param {String}  repo            the repo
     * @param {Int}     num             the pull number
     */
    this.show = function(username, repo, num, callback)
    {
        this.$api.get(
            'pulls/' + encodeURI(username) + '/' + encodeURI(repo) + '/' + num,
            null, null,
            this.$createListener(callback, 'pull')
        );
    };

}).call(PullApi.prototype);
