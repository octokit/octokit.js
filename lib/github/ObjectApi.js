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

var ObjectApi = exports.ObjectApi = function(api) {
    this.$api = api;
};

sys.inherits(ObjectApi, AbstractApi);

(function() {

    /**
     * Get a listing of the root tree of a project by the username, repo, and tree SHA
     * http://develop.github.com/p/object.html#trees
     *
     * @param {String} username          the username
     * @param {String} repo              the repo
     * @param {String} treeSha           the tree sha
     */
    this.showTree = function(username, repo, treeSha, callback)
    {
        this.$api.get(
            'tree/show/' + encodeURI(username) + "/" + encodeURI(repo) + "/" + encodeURI(treeSha),
            null, null,
            this.$createListener(callback, "tree")
        );
    };

}).call(ObjectApi.prototype);


//
///**
// * Lists the data blobs of a tree by tree SHA
// * http://develop.github.com/p/object.html#blobs
// *
// * @param {String} username          the username
// * @param {String} repo              the repo
// * @param {String} treeSHA           the tree sha
// * @param {String} path              the path
// * @return  array                     data blobs of tree
// */
//this.listBlobs = function(username, repo, treeSHA)
//{
//  $response = $this->api->get('blob/all/'.urlencode(username).'/'.urlencode(repo).'/'.urlencode(treeSHA));
//
//  return $response['blobs'];
//}
//
///**
// * Get the data about a blob by tree SHA and file path.
// * http://develop.github.com/p/object.html#blobs
// *
// * @param {String} username          the username
// * @param {String} repo              the repo
// * @param {String} treeSHA           the tree sha
// * @param {String} path              the path
// * @return  array                     data blob of tree and path
// */
//this.showBlob = function(username, repo, treeSHA, path)
//{
//  $response = $this->api->get('blob/show/'.urlencode(username).'/'.urlencode(repo).'/'.urlencode(treeSHA).'/'.urlencode(path));
//
//  return $response['blob'];
//}
//
///**
// * Returns the raw text content of the object.
// * http://develop.github.com/p/object.html#raw_git_data
// *
// * @param {String} username          the username
// * @param {String} repo              the repo
// * @param {String} objectSha         the object sha can be either a blob SHA1, a tree SHA1 or a commit SHA1
// * @return  string                    raw text content of the blob, tree or commit object
// */
//this.getRawData = function(username, repo, objectSha)
//{
//  $response = $this->api->get('blob/show/'.urlencode(username).'/'.urlencode(repo).'/'.urlencode(objectSha), array(), array(
//    'format' => 'text'
//  ));
//
//  return $response;
//}