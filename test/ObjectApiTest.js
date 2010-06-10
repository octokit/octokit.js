/**
 * Copyright 2010 Ajax.org B.V.
 *
 * This product includes software developed by
 * Ajax.org B.V. (http://www.ajax.org/).
 *
 * Author: Fabian Jaokbs <fabian@ajax.org>
 */

var sys = require("sys");
var GitHubApi = require("../lib/github").GitHubApi;
var async_testing = require('../vendor/node-async-testing/async_testing');

var suite = exports.suite = new async_testing.TestSuite();

username = 'ornicar';
repo     = 'php-github-api';
treeSha  = '691c2ec7fd0b948042047b515886fec40fe76e2b';

suite.setup(function() {
    this.github = new GitHubApi(true);
    this.objectApi = this.github.getObjectApi();
});

suite.addTests({
    "test: show tree" : function(assert, finished, test) {
        this.objectApi.showTree(username, repo, treeSha, function(err, tree) {
            assert.ok(tree[0].name !== undefined);
            finished();
        });
    }
});

if (module === require.main) {
    async_testing.runSuites({ObjectApi: suite});
}

//
//$github = new phpGitHubApi(true);
//
//$t->comment('Show tree');
//
//$tree = $github->getObjectApi()->showTree($username, $repo, $treeSha);
//
//$t->is_deeply($github->listObjectTree($username, $repo, $treeSha), $tree, 'Both new and BC syntax work');
//
//$firstFile = array_pop($tree);
//$t->is($firstFile['sha'], '5ac35496a1cbb2a914ff4325e7d6e8cae61f90b9', 'Tree returned with SHA listings');
//
//$t->comment('Show blob');
//
//$blob = $github->getObjectApi()->showBlob($username, $repo, $treeSha, 'CHANGELOG');
//$t->is($blob['name'], 'CHANGELOG', 'Returned CHANGELOG blob');
//
//$t->is_deeply($github->showObjectBlob($username, $repo, $treeSha, 'CHANGELOG'), $blob, 'Both new and BC syntax work');
//
//$t->comment('List blobs');
//
//$blobs = $github->getObjectApi()->listBlobs($username, $repo, $treeSha);
//$t->ok(count($blobs) > 0, 'Returned array of blobs');
//
//$t->is_deeply($github->listObjectBlobs($username, $repo, $treeSha), $blobs, 'Both new and BC syntax work');
//
//$t->comment('Get raw text');
//
//$text = $github->getObjectApi()->getRawData($username, $repo, 'bd25d1e4ea7eab84b856131e470edbc21b6cd66b');
//
//$expected = "tree d978e4755a9ed4e7ca3ebf9ed674dfb95b4af481
//parent e291e9377fd64e08dba556f2dce5b0fc0011430e
//author Thibault Duplessis <thibault.duplessis@gmail.com> 1266076405 +0100
//committer Thibault Duplessis <thibault.duplessis@gmail.com> 1266076405 +0100
//
//created README.markdown
//";
//
//$t->is($text, $expected, 'Got a blob raw content');