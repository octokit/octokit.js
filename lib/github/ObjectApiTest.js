/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

require("../../support/paths");

var assert = require("assert");
var sys = require("sys");
var GitHubApi = require("github").GitHubApi;

var username = 'ornicar';
var repo     = 'php-github-api';
var treeSha  = '691c2ec7fd0b948042047b515886fec40fe76e2b';

var test = module.exports = {

    setUp: function() {
        this.github = new GitHubApi(true);
        this.objectApi = this.github.getObjectApi();
    },

    "test: show tree" : function(finished) {
        this.objectApi.showTree(username, repo, treeSha, function(err, tree) {
            assert.equal(tree.pop().sha, "5ac35496a1cbb2a914ff4325e7d6e8cae61f90b9");
            finished();
        });
    },

    "test: show blob" : function(finished) {
        this.objectApi.showBlob(username, repo, treeSha, 'CHANGELOG', function(err, blob) {
            assert.equal(blob.name, "CHANGELOG");
            finished();
        });
    },

    "test: list blobs" : function(finished) {
        this.objectApi.listBlobs(username, repo, treeSha, function(err, blobs) {
            assert.equal(blobs["README.markdown"], "d15692fb3adcbb752064c6be20361cf86914d736");
            finished();
        });
    },

    "test: get raw text" : function(finished) {
        var expected = [
            "tree d978e4755a9ed4e7ca3ebf9ed674dfb95b4af481",
            "parent e291e9377fd64e08dba556f2dce5b0fc0011430e",
            "author Thibault Duplessis <thibault.duplessis@gmail.com> 1266076405 +0100",
            "committer Thibault Duplessis <thibault.duplessis@gmail.com> 1266076405 +0100",
            "",
            "created README.markdown",
            ""
        ].join("\n");
        this.objectApi.getRawData(username, repo, "bd25d1e4ea7eab84b856131e470edbc21b6cd66b", function(err, data) {
            assert.equal(data, expected);
            finished();
        });
    }
};

!module.parent && require("asyncjs/test").testcase(module.exports).exec();