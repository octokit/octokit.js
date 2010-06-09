var UserApi = exports.UserApi = function(api) {
    this.$api = api;
};

(function() {

    /**
     * Search users by username
     * http://develop.github.com/p/users.html#searching_for_users
     *
     * @param {String}  username         the username to search
     */
    this.search = function(username, callback)
    {
      this.$api.get(
          'user/search/' + encodeURI(username),
          null, null,
          this.$createListener(callback, "users")
      );
    };

    /**
     * Get extended information about a user by its username
     * http://develop.github.com/p/users.html#getting_user_information
     *
     * @param {String}  username         the username to show
     */
    this.show = function(username, callback)
    {
        this.$api.get(
            'user/show/' + encodeURI(username),
            null, null,
            this.$createListener(callback, "user")
        );
    };

    /**
     * Request the users that a specific user is following
     * http://develop.github.com/p/users.html#following_network
     *
     * @param {String}  username         the username
     */
    this.getFollowing = function(username, callback)
    {
        this.$api.get(
            'user/show/' + encodeURI(username) + "/following",
            null, null,
            this.$createListener(callback, "users")
        );
    };

    /**
     * Request the users following a specific user
     * http://develop.github.com/p/users.html#following_network
     *
     * @param {String}  username         the username
     */
    this.getFollowers = function(username, callback)
    {
        this.$api.get(
            'user/show/' + encodeURI(username) + '/followers',
            null, null,
            this.$createListener(callback, "users")
        );
    },

    /**
     * Update user informations. Requires authentication.
     * http://develop.github.com/p/users.html#authenticated_user_management
     *
     * @param {String}  username         the username to update
     * @param {Object}  data             key, value user attributes to update.
     *                                   key can be name, email, blog, company or location
     */
    this.update = function(username, data, callback)
    {
        var parameters = {};
        for (var key in data) {
            parameters["values[" + key + "]"] = data[key]
        }

        this.$api.post(
            'user/show/' + encodeURI(username),
            parameters, null,
            this.$createListener(callback, "user")
        );
    };

    this.$createListener = function(callback, key) {
        return function(err, response) {
            if (err) {
                callback & callback(err);
                return;
            }

            callback(err, response[key]);
        };
    };
//
//    /**
//     * Make the authenticated user follow the specified user. Requires authentication.
//     * http://develop.github.com/p/users.html#following_network
//     *
//     * @param {String}  username         the username to follow
//     * @return  array                     list of followed users
//     */
//    this.follow = function(username)
//    {
//      $response = this.$api.post('user/follow/'.urlencode(username));
//
//      return $response['users'];
//    }
//
//    /**
//     * Make the authenticated user unfollow the specified user. Requires authentication.
//     * http://develop.github.com/p/users.html#following_network
//     *
//     * @param {String}  username         the username to unfollow
//     * @return  array                     list of followed users
//     */
//    this.unFollow = function(username)
//    {
//      $response = this.$api.post('user/unfollow/'.urlencode(username));
//
//      return $response['users'];
//    }
//
//    /**
//     * Request the repos that a specific user is watching
//     * http://develop.github.com/p/users.html#watched_repos
//     *
//     * @param {String}  username         the username
//     * @return  array                     list of watched repos
//     */
//    this.getWatchedRepos = function(username)
//    {
//      $response = this.$api.get('repos/watched/'.urlencode(username));
//
//      return $response['repositories'];
//    }
//
//    /**
//     * Get the authenticated user emails. Requires authentication.
//     *
//     * @return  array                     list of authenticated user emails
//     */
//    this.getEmails = function()
//    {
//      $response = this.$api.get('user/emails');
//
//      return $response['emails'];
//    }
//
//    /**
//     * Add an email to the authenticated user. Requires authentication.
//     *
//     * @return  array                     list of authenticated user emails
//     */
//    this.addEmail = function($email)
//    {
//      $response = this.$api.post('user/email/add', array('email' => $email));
//
//      return $response['emails'];
//    }
//
//    /**
//     * Remove an email from the authenticated user. Requires authentication.
//     *
//     * @return  array                     list of authenticated user emails
//     */
//    this.removeEmail = function($email)
//    {
//      $response = this.$api.post('user/email/remove', array('email' => $email));
//
//      return $response['emails'];
//    }
//
//    /**
//     * Get a list with deploy keys that are set for the authenticated user. Requires authentication.
//     * @return  array
//     */
//    this.getKeys = function()
//    {
//      $response = this.$api.get('/user/keys');
//
//      return $response;
//    }
//
//    /**
//     * Add a public key for the authenticated user. Requires authentication.
//     *
//     * @param string $title title of the key
//     * @param string $key   public key data
//     * @return  array
//     */
//    this.addKey = function($title, $key)
//    {
//      $param = array(
//          'title' => $title,
//          'key' => $key
//      );
//      $response = this.$api.post('/user/key/add', $param);
//
//      return $response;
//    }

}).call(UserApi.prototype);