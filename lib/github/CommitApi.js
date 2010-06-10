var sys = require("sys");
var AbstractApi = require("./AbstractApi").AbstractApi;

var CommitApi = exports.CommitApi = function(api) {
    this.$api = api;
};

sys.inherits(CommitApi, AbstractApi);

(function() {
    /**
     * List commits by username, repo and branch
     * http://develop.github.com/p/commits.html#listing_commits_on_a_branch
     *
     * @param {String}  username         the username
     * @param {String}  repo             the repo
     * @param {String}  $branch           the branch
     * @return  array                     list of users found
     */
    this.getBranchCommits = function(username, repo, branch, callback)
    {
        this.$api.get(
            'commits/list/' + encodeURI(username) + "/" + encodeURI(repo) + "/" + encodeURI(branch),
            null, null,
            this.$createListener(callback, "commits")
        );
    };

}).call(CommitApi.prototype);

//
///**
// * List commits by username, repo, branch and path
// * http://develop.github.com/p/commits.html#listing_commits_for_a_file
// *
// * @param {String}  username         the username
// * @param {String}  repo             the repo
// * @param {String}  $branch           the branch
// * @param {String}  $path             the path
// * @return  array                     list of users found
// */
//this.getFileCommits = function(username, repo, $branch, $path, callback)
//{
//  $response = $this->api->get('commits/list/'.urlencode(username).'/'.urlencode(repo).'/'.urlencode($branch).'/'.urlencode($path));
//
//  return $response['commits'];
//}