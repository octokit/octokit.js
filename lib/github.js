var Request = require("./github/Request").Request;

/**
 * Simple JavaScript GitHub API
 *
 * Based on the PHP GitHub API project http://github.com/ornicar/php-github-api
 */

var GitHubApi = exports.GitHubApi = function(debug) {
    /**
     * Use debug mode (prints debug messages)
     */
    this.$debug = debug;

    /**
     * The list of loaded API instances
     */
    this.$apis = [];
};

(function() {

    /**
     * The request instance used to communicate with GitHub
     */
    this.$request = null;

    /**
     * Authenticate a user for all next requests
     *
     * @param {String} login      GitHub username
     * @param {String} token      GitHub private token
     * @return {GitHubApi}        fluent interface
     */
    this.authenticate = function(login, token)
    {
        this.getRequest()
            .setOption('login', login)
            .setOption('token', token);

        return this;
    };

    /**
     * Deauthenticate a user for all next requests
     *
     * @return {GitHubApi}               fluent interface
     */
    this.deAuthenticate = function() {
        return this.authenticate(null, null);
    };

    /**
     * Call any route, GET method
     * Ex: api.get('repos/show/my-username/my-repo')
     *
     * @param {String}  route            the GitHub route
     * @param {Object}  parameters       GET parameters
     * @param {Object}  requestOptions   reconfigure the request
     * @return {Array}                    data returned
     */
    this.get = function(route, parameters, requestOptions, callback) {
        return this.getRequest().get(route, parameters || {}, requestOptions, callback);
    };

    /**
     * Call any route, POST method
     * Ex: api.post('repos/show/my-username', {'email': 'my-new-email@provider.org'})
     *
     * @param {String}  route            the GitHub route
     * @param {Object}  parameters       POST parameters
     * @param {Object}  requestOptions   reconfigure the request
     * @return {Array}                     data returned
     */
    this.post = function(route, parameters, requestOptions, callback) {
        return this.getRequest().post(route, parameters || {}, requestOptions, callback);
    };

    /**
     * Get the request
     *
     * @return {Request}  a request instance
     */
    this.getRequest = function()
    {
        if(!this.request) {
            this.request = new Request({debug: this.debug});
        }

        return this.request;
    };

    /**
     * Get the user API
     *
     * @return  phpGitHubApiUser    the user API
     */
    this.getUserApi = function()
    {
        if(!this.$apis['user']) {
            this.$apis['user'] = new (require("./github/UserApi").UserApi)(this);
        }

        return this.$apis['user'];
    };

}).call(GitHubApi.prototype);

//
//
//  /**
//   * Inject another request
//   *
//   * @param   phpRequest   a request instance
//   * @return  phpGitHubApi          fluent interface
//   */
//  this.setRequest = function(phpRequest $request)
//  {
//    this.request = $request;
//
//    return this;
//  }
//
//
//  /**
//   * Get the issue API
//   *
//   * @return  phpGitHubApiIssue   the issue API
//   */
//  this.getIssueApi = function()
//  {
//    if(!isset(this.apis['issue']))
//    {
//      require_once(dirname(__FILE__).'/api/phpGitHubApiIssue.php');
//      this.apis['issue'] = new phpGitHubApiIssue(this);
//    }
//
//    return this.apis['issue'];
//  }
//
//  /**
//   * Get the commit API
//   *
//   * @return  phpGitHubApiCommit  the commit API
//   */
//  this.getCommitApi = function()
//  {
//    if(!isset(this.apis['commit']))
//    {
//      require_once(dirname(__FILE__).'/api/phpGitHubApiCommit.php');
//      this.apis['commit'] = new phpGitHubApiCommit(this);
//    }
//
//    return this.apis['commit'];
//  }
//
//  /**
//   * Get the repo API
//   *
//   * @return  phpGitHubRepoCommit  the repo API
//   */
//  this.getRepoApi = function()
//  {
//    if(!isset(this.apis['repo']))
//    {
//      require_once(dirname(__FILE__).'/api/phpGitHubApiRepo.php');
//      this.apis['repo'] = new phpGitHubApiRepo(this);
//    }
//
//    return this.apis['repo'];
//  }
//
//  /**
//   * Get the object API
//   *
//   * @return  phpGitHubApiObject  the object API
//   */
//  this.getObjectApi = function()
//  {
//    if(!isset(this.apis['object']))
//    {
//      require_once(dirname(__FILE__).'/api/phpGitHubApiObject.php');
//      this.apis['object'] = new phpGitHubApiObject(this);
//    }
//
//    return this.apis['object'];
//  }
//
//  /**
//   * Inject another API instance
//   *
//   * @param {String}                $name the API name
//   * @param   phpGitHubApiAbstract  $api  the API instance
//   * @return  phpGitHubApi                fluent interface
//   */
//  this.setApi = function($name, phpGitHubApiAbstract $instance)
//  {
//    this.apis[$name] = $instance;
//
//    return this;
//  }
//
//  /**
//   * Get any API
//   *
//   * @param {String}                $name the API name
//   * @return  phpGitHubApiAbstract        the API instance
//   */
//  this.getApi = function($name)
//  {
//    return this.apis[$name];
//  }
//
//  /**
//   * DEPRECATED METHODS (BC COMPATIBILITY)
//   */
//
//  /**
//   * @deprecated  use .getUserApi().search()
//   * @see         phpGitHubApiUser::search()
//   */
//  this.searchUsers = function($username)
//  {
//    return this.getUserApi().search($username);
//  }
//
//  /**
//   * @deprecated  use .getUserApi().show()
//   * @see         phpGitHubApiUser::show()
//   */
//  this.showUser = function($username)
//  {
//    return this.getUserApi().show($username);
//  }
//
//  /**
//   * @deprecated  use .getIssueApi().getList()
//   * @see         phpGitHubApiIssue::getList()
//   */
//  this.listIssues = function($username, $repo, $state = 'open')
//  {
//    return this.getIssueApi().getList($username, $repo, $state);
//  }
//
//  /**
//   * @deprecated  use .getIssueApi().search()
//   * @see         phpGitHubApiIssue::search()
//   */
//  this.searchIssues = function($username, $repo, $state, $searchTerm)
//  {
//    return this.getIssueApi().search($username, $repo, $state, $searchTerm);
//  }
//
//  /**
//   * @deprecated  use .getIssueApi().show()
//   * @see         phpGitHubApiIssue::show()
//   */
//  this.showIssue = function($username, $repo, $number)
//  {
//    return this.getIssueApi().show($username, $repo, $number);
//  }
//
//  /**
//   * @deprecated  use .getCommitApi().getBranchCommits()
//   * @see         phpGitHubApiCommit::getBranchCommits()
//   */
//  this.listBranchCommits = function($username, $repo, $branch)
//  {
//    return this.getCommitApi().getBranchCommits($username, $repo, $branch);
//  }
//
//  /**
//   * @deprecated  use .getCommitApi().getFileCommits()
//   * @see         phpGitHubApiCommit::getFileCommits()
//   */
//  this.listFileCommits = function($username, $repo, $branch, $path)
//  {
//    return this.getCommitApi().getFileCommits($username, $repo, $branch, $path);
//  }
//
//  /**
//   * @deprecated  use .getObjectApi().showTree()
//   * @see         phpGitHubApiObject::showTree()
//   */
//  this.listObjectTree = function($username, $repo, $treeSHA)
//  {
//    return this.getObjectApi().showTree($username, $repo, $treeSHA);
//  }
//
//  /**
//   * @deprecated  use .getObjectApi().showBlob()
//   * @see         phpGitHubApiObject::showBlob()
//   */
//  this.showObjectBlob = function($username, $repo, $treeSHA, $path)
//  {
//    return this.getObjectApi().showBlob($username, $repo, $treeSHA, $path);
//  }
//
//  /**
//   * @deprecated  use .getObjectApi().listBlobs()
//   * @see         phpGitHubApiObject::listBlobs()
//   */
//  this.listObjectBlobs = function($username, $repo, $treeSHA)
//  {
//    return this.getObjectApi().listBlobs($username, $repo, $treeSHA);
//  }
//}