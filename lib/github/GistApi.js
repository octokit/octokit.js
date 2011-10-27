/**
 * Copyright 2011 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: James Burkhart <james@jamesburkhart.com>
 */

"use strict";

var sys = require('sys');
var AbstractApi = require('./AbstractApi').AbstractApi;
var GistApi = exports.GistApi = function(api) {
    this.$api = api;
};

sys.inherits(GistApi, AbstractApi);

(function() {
    /**
    * Get public gists for a user
    * http://develop.github.com/p/gist.html
    *
    * @param {String} $username           the user's username
    */
    this.getUserGists = function(username, callback)
    {
        this.$api.get(
            'gists/' + username,
            null,
            this.requestOptions,
            this.$createListener(callback, 'gists')
        );
    };
    /**
    * Get metadata for a gist
    * http://develop.github.com/p/gist.html
    *
    * @param {String} $gistId             the id of the gist
    */
    this.getMetadata = function(gistId, callback)
    {
        this.$api.get(
            '' + gistId,
            null,
            this.requestOptions,
            this.$createListener(callback, 'gists')
        );

    };
    /**
    * Get the content of a gist
    * http://develop.github.com/p/gist.html
    *
    * @param {String} $gistId             the id of the gist
    * @param {String} $filename           the filename of the gist
    */
    this.getContent = function(gistId, filename, callback)
    {
        this.$api.get(
            '' + gistId + '/' + filename,
            null,
            {hostname: 'raw.github.com', path: '/gist', format: ''},
            this.$createListener(callback, null)
        );

    };

    this.requestOptions = {hostname: 'gist.github.com', path: '/api/v1'};

}).call(GistApi.prototype);

