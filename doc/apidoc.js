/**
 * @api {get} /notifications/threads/:id/subscription checkNotificationThreadSubscription
 * @apiName checkNotificationThreadSubscription
 * @apiDescription Check to see if the current user is subscribed to a thread.
 * @apiGroup activity
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.activity.checkNotificationThreadSubscription({ ... });
 */

/**
 * @api {get} /user/starred/:user/:repo checkStarringRepo
 * @apiName checkStarringRepo
 * @apiDescription Check if you are starring a repository
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.checkStarringRepo({ ... });
 */

/**
 * @api {delete} /notifications/threads/:id/subscription deleteNotificationThreadSubscription
 * @apiName deleteNotificationThreadSubscription
 * @apiDescription Delete a notification thread subscription.
 * @apiGroup activity
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.activity.deleteNotificationThreadSubscription({ ... });
 */

/**
 * @api {get} /events getEvents
 * @apiName getEvents
 * @apiDescription List public events
 * @apiGroup activity
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEvents({ ... });
 */

/**
 * @api {get} /orgs/:org/events getEventsForOrg
 * @apiName getEventsForOrg
 * @apiDescription List public events for an organization
 * @apiGroup activity
 *
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForOrg({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/events getEventsForRepo
 * @apiName getEventsForRepo
 * @apiDescription List repository events
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/events getEventsForRepoIssues
 * @apiName getEventsForRepoIssues
 * @apiDescription List issue events for a repository
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoIssues({ ... });
 */

/**
 * @api {get} /networks/:user/:repo/events getEventsForRepoNetwork
 * @apiName getEventsForRepoNetwork
 * @apiDescription List public events for a network of repositories
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoNetwork({ ... });
 */

/**
 * @api {get} /users/:user/events getEventsForUser
 * @apiName getEventsForUser
 * @apiDescription List events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUser({ ... });
 */

/**
 * @api {get} /users/:user/events/orgs/:org getEventsForUserOrg
 * @apiName getEventsForUserOrg
 * @apiDescription List events for a user's organization
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserOrg({ ... });
 */

/**
 * @api {get} /users/:user/events/public getEventsForUserPublic
 * @apiName getEventsForUserPublic
 * @apiDescription List public events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserPublic({ ... });
 */

/**
 * @api {get} /users/:user/received_events getEventsReceived
 * @apiName getEventsReceived
 * @apiDescription List events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceived({ ... });
 */

/**
 * @api {get} /users/:user/received_events/public getEventsReceivedPublic
 * @apiName getEventsReceivedPublic
 * @apiDescription List public events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceivedPublic({ ... });
 */

/**
 * @api {get} /feeds getFeeds
 * @apiName getFeeds
 * @apiDescription Get all feeds available for the authenticated user.
 * @apiGroup activity
 *
 * @apiExample {js} ex:
github.activity.getFeeds({ ... });
 */

/**
 * @api {get} /notifications/threads/:id getNotificationThread
 * @apiName getNotificationThread
 * @apiDescription View a single notification thread.
 * @apiGroup activity
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.activity.getNotificationThread({ ... });
 */

/**
 * @api {get} /notifications getNotifications
 * @apiName getNotifications
 * @apiDescription Get all notifications for the current user, grouped by repository.
 * @apiGroup activity
 *
 * @apiParam {Boolean} [all=false]  If true, show notifications marked as read. Default: false
 * @apiParam {Boolean} [participating=false]  If true, only shows notifications in which the user is directly participating or mentioned. Default: false
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {String} [before]  Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @apiExample {js} ex:
github.activity.getNotifications({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/notifications getNotificationsForUser
 * @apiName getNotificationsForUser
 * @apiDescription Get all notifications for the given user.
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [all=false]  If true, show notifications marked as read. Default: false
 * @apiParam {Boolean} [participating=false]  If true, only shows notifications in which the user is directly participating or mentioned. Default: false
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {String} [before]  Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @apiExample {js} ex:
github.activity.getNotificationsForUser({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/subscription getRepoSubscription
 * @apiName getRepoSubscription
 * @apiDescription Get a Repository Subscription.
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getRepoSubscription({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/stargazers getStargazersForRepo
 * @apiName getStargazersForRepo
 * @apiDescription List Stargazers
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStargazersForRepo({ ... });
 */

/**
 * @api {get} /user/starred getStarredRepos
 * @apiName getStarredRepos
 * @apiDescription List repositories being starred by the authenticated user
 * @apiGroup activity
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStarredRepos({ ... });
 */

/**
 * @api {get} /users/:user/starred getStarredReposForUser
 * @apiName getStarredReposForUser
 * @apiDescription List repositories being starred by a user
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStarredReposForUser({ ... });
 */

/**
 * @api {get} /user/subscriptions getWatchedRepos
 * @apiName getWatchedRepos
 * @apiDescription List repositories being watched by the authenticated user.
 * @apiGroup activity
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchedRepos({ ... });
 */

/**
 * @api {get} /users/:user/subscriptions getWatchedReposForUser
 * @apiName getWatchedReposForUser
 * @apiDescription List repositories being watched by a user.
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchedReposForUser({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/subscribers getWatchersForRepo
 * @apiName getWatchersForRepo
 * @apiDescription Get watchers for repository.
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchersForRepo({ ... });
 */

/**
 * @api {patch} /notifications/threads/:id markNotificationThreadAsRead
 * @apiName markNotificationThreadAsRead
 * @apiDescription Mark a notification thread as read.
 * @apiGroup activity
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.activity.markNotificationThreadAsRead({ ... });
 */

/**
 * @api {put} /notifications markNotificationsAsRead
 * @apiName markNotificationsAsRead
 * @apiDescription Mark notifications as read for authenticated user.
 * @apiGroup activity
 *
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsRead({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/notifications markNotificationsAsReadForRepo
 * @apiName markNotificationsAsReadForRepo
 * @apiDescription Mark notifications in a repo as read.
 * @apiGroup activity
 *
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsReadForRepo({ ... });
 */

/**
 * @api {put} /notifications/threads/:id/subscription setNotificationThreadSubscription
 * @apiName setNotificationThreadSubscription
 * @apiDescription This lets you subscribe or unsubscribe from a conversation. Unsubscribing from a conversation mutes all future notifications (until you comment or get @mentioned once more).
 * @apiGroup activity
 *
 * @apiParam {String} id  
 * @apiParam {Boolean} [subscribed]  Determines if notifications should be received from this thread
 * @apiParam {Boolean} [ignored]  Determines if all notifications should be blocked from this thread
 * @apiExample {js} ex:
github.activity.setNotificationThreadSubscription({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/subscription setRepoSubscription
 * @apiName setRepoSubscription
 * @apiDescription Set a Repository Subscription
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [subscribed]  Determines if notifications should be received from this repository.
 * @apiParam {Boolean} [ignored]  Determines if all notifications should be blocked from this repository.
 * @apiExample {js} ex:
github.activity.setRepoSubscription({ ... });
 */

/**
 * @api {put} /user/starred/:user/:repo starRepo
 * @apiName starRepo
 * @apiDescription Star a repository
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.starRepo({ ... });
 */

/**
 * @api {delete} /user/starred/:user/:repo unstarRepo
 * @apiName unstarRepo
 * @apiDescription Unstar a repository
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unstarRepo({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/subscription unwatchRepo
 * @apiName unwatchRepo
 * @apiDescription Unwatch a repository.
 * @apiGroup activity
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unwatchRepo({ ... });
 */

/**
 * @api {get} /applications/:client_id/tokens/:access_token check
 * @apiName check
 * @apiDescription Check an authorization
 * @apiGroup authorization
 *
 * @apiParam {String} access_token  OAuth token
 * @apiParam {String} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiExample {js} ex:
github.authorization.check({ ... });
 */

/**
 * @api {post} /authorizations create
 * @apiName create
 * @apiDescription Create a new authorization
 * @apiGroup authorization
 *
 * @apiParam {Array} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {String} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {String} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiParam {String} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiParam {String} [client_secret]  The 40 character OAuth app client secret for which to create the token.
 * @apiParam {String} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiExample {js} ex:
github.authorization.create({ ... });
 */

/**
 * @api {delete} /authorizations/:id delete
 * @apiName delete
 * @apiDescription Delete an authorization
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.delete({ ... });
 */

/**
 * @api {delete} /applications/grants/:id deleteGrant
 * @apiName deleteGrant
 * @apiDescription Delete a grant. (In preview period. See README.)
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.deleteGrant({ ... });
 */

/**
 * @api {get} /authorizations/:id get
 * @apiName get
 * @apiDescription Get a single authorization
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.get({ ... });
 */

/**
 * @api {get} /authorizations getAll
 * @apiName getAll
 * @apiDescription List your authorizations
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getAll({ ... });
 */

/**
 * @api {get} /applications/grants/:id getGrant
 * @apiName getGrant
 * @apiDescription Get a single grant. (In preview period. See README.)
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getGrant({ ... });
 */

/**
 * @api {get} /applications/grants getGrants
 * @apiName getGrants
 * @apiDescription List your grants. (In preview period. See README.)
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getGrants({ ... });
 */

/**
 * @api {put} /authorizations/clients/:client_id getOrCreateAuthorizationForApp
 * @apiName getOrCreateAuthorizationForApp
 * @apiDescription Get or create an authorization for a specific app
 * @apiGroup authorization
 *
 * @apiParam {String} client_secret  The 40 character OAuth app client secret associated with the client ID specified in the URL.
 * @apiParam {String} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiParam {Array} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {String} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {String} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiParam {String} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiExample {js} ex:
github.authorization.getOrCreateAuthorizationForApp({ ... });
 */

/**
 * @api {put} /authorizations/clients/:client_id/:fingerprint getOrCreateAuthorizationForAppAndFingerprint
 * @apiName getOrCreateAuthorizationForAppAndFingerprint
 * @apiDescription Get or create an authorization for a specific app and fingerprint
 * @apiGroup authorization
 *
 * @apiParam {String} client_secret  The 40 character OAuth app client secret associated with the client ID specified in the URL.
 * @apiParam {String} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiParam {String} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiParam {Array} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {String} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {String} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiExample {js} ex:
github.authorization.getOrCreateAuthorizationForAppAndFingerprint({ ... });
 */

/**
 * @api {post} /applications/:client_id/tokens/:access_token reset
 * @apiName reset
 * @apiDescription Reset an authorization
 * @apiGroup authorization
 *
 * @apiParam {String} access_token  OAuth token
 * @apiParam {String} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiExample {js} ex:
github.authorization.reset({ ... });
 */

/**
 * @api {delete} /applications/:client_id/tokens/:access_token revoke
 * @apiName revoke
 * @apiDescription Revoke an authorization for an application
 * @apiGroup authorization
 *
 * @apiParam {String} access_token  OAuth token
 * @apiParam {String} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiExample {js} ex:
github.authorization.revoke({ ... });
 */

/**
 * @api {patch} /authorizations/:id update
 * @apiName update
 * @apiDescription Update an existing authorization
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiParam {Array} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {Array} [add_scopes]  A list of scopes to add to this authorization.
 * @apiParam {Array} [remove_scopes]  A list of scopes to remove from this authorization.
 * @apiParam {String} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {String} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiExample {js} ex:
github.authorization.update({ ... });
 */

/**
 * @api {post} /admin/organizations createOrg
 * @apiName createOrg
 * @apiDescription Create an organization
 * @apiGroup enterprise
 *
 * @apiParam {String} login  The organization's username.
 * @apiParam {String} admin  The login of the user who will manage this organization.
 * @apiParam {String} [profile_name]  The organization's display name.
 * @apiExample {js} ex:
github.enterprise.createOrg({ ... });
 */

/**
 * @api {get} /enterprise/settings/license getLicense
 * @apiName getLicense
 * @apiDescription Get license information
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getLicense({ ... });
 */

/**
 * @api {post} /staff/indexing_jobs queueIndexingJob
 * @apiName queueIndexingJob
 * @apiDescription Queue an indexing job
 * @apiGroup enterprise
 *
 * @apiParam {String} target  A string representing the item to index.
 * @apiExample {js} ex:
github.enterprise.queueIndexingJob({ ... });
 */

/**
 * @api {get} /enterprise/stats/:type stats
 * @apiName stats
 * @apiDescription Get statistics.
 * @apiGroup enterprise
 *
 * @apiParam {String} type  Possible values: issues, hooks, milestones, orgs, comments, pages, users, gists, pulls, repos, all.
 * @apiExample {js} ex:
github.enterprise.stats({ ... });
 */

/**
 * @api {post} /admin/ldap/teams/:team_id/sync syncLdapForTeam
 * @apiName syncLdapForTeam
 * @apiDescription Sync LDAP mapping for a team.
 * @apiGroup enterprise
 *
 * @apiParam {Number} [team_id]  
 * @apiExample {js} ex:
github.enterprise.syncLdapForTeam({ ... });
 */

/**
 * @api {post} /admin/ldap/users/:user/sync syncLdapForUser
 * @apiName syncLdapForUser
 * @apiDescription Sync LDAP mapping for a user.
 * @apiGroup enterprise
 *
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.enterprise.syncLdapForUser({ ... });
 */

/**
 * @api {patch} /admin/ldap/teams/:team_id/mapping updateLdapForTeam
 * @apiName updateLdapForTeam
 * @apiDescription Update LDAP mapping for a team.
 * @apiGroup enterprise
 *
 * @apiParam {Number} [team_id]  
 * @apiExample {js} ex:
github.enterprise.updateLdapForTeam({ ... });
 */

/**
 * @api {patch} /admin/ldap/users/:user/mapping updateLdapForUser
 * @apiName updateLdapForUser
 * @apiDescription Update LDAP mapping for a user.
 * @apiGroup enterprise
 *
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.enterprise.updateLdapForUser({ ... });
 */

/**
 * @api {get} /gists/:id/star checkStar
 * @apiName checkStar
 * @apiDescription Check if a gist is starred
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.checkStar({ ... });
 */

/**
 * @api {post} /gists create
 * @apiName create
 * @apiDescription Create a gist
 * @apiGroup gists
 *
 * @apiParam {Json} files  Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {Boolean} public  
 * @apiParam {String} [description]  
 * @apiExample {js} ex:
github.gists.create({ ... });
 */

/**
 * @api {post} /gists/:gist_id/comments createComment
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup gists
 *
 * @apiParam {String} gist_id  Id (SHA1 hash) of the gist.
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.gists.createComment({ ... });
 */

/**
 * @api {delete} /gists/:id delete
 * @apiName delete
 * @apiDescription Delete a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.delete({ ... });
 */

/**
 * @api {delete} /gists/:gist_id/comments/:id deleteComment
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup gists
 *
 * @apiParam {String} gist_id  Id (SHA1 hash) of the gist.
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.deleteComment({ ... });
 */

/**
 * @api {patch} /gists/:id edit
 * @apiName edit
 * @apiDescription Edit a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiParam {Json} files  Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {String} [description]  
 * @apiExample {js} ex:
github.gists.edit({ ... });
 */

/**
 * @api {patch} /gists/:gist_id/comments/:id editComment
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup gists
 *
 * @apiParam {String} gist_id  Id (SHA1 hash) of the gist.
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.gists.editComment({ ... });
 */

/**
 * @api {post} /gists/:id/forks fork
 * @apiName fork
 * @apiDescription Fork a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.fork({ ... });
 */

/**
 * @api {get} /gists/:id get
 * @apiName get
 * @apiDescription Get a single gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.get({ ... });
 */

/**
 * @api {get} /gists getAll
 * @apiName getAll
 * @apiDescription List the authenticated user's gists or if called anonymously, this will return all public gists
 * @apiGroup gists
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.gists.getAll({ ... });
 */

/**
 * @api {get} /gists/:gist_id/comments/:id getComment
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup gists
 *
 * @apiParam {String} gist_id  Id (SHA1 hash) of the gist.
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.getComment({ ... });
 */

/**
 * @api {get} /gists/:gist_id/comments getComments
 * @apiName getComments
 * @apiDescription List comments on a gist
 * @apiGroup gists
 *
 * @apiParam {String} gist_id  Id (SHA1 hash) of the gist.
 * @apiExample {js} ex:
github.gists.getComments({ ... });
 */

/**
 * @api {get} /gists/:id/commits getCommits
 * @apiName getCommits
 * @apiDescription List gist commits
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.getCommits({ ... });
 */

/**
 * @api {get} /users/:user/gists getForUser
 * @apiName getForUser
 * @apiDescription List a user's gists
 * @apiGroup gists
 *
 * @apiParam {String} user  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.gists.getForUser({ ... });
 */

/**
 * @api {get} /gists/:id/forks getForks
 * @apiName getForks
 * @apiDescription List gist forks
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gists.getForks({ ... });
 */

/**
 * @api {get} /gists/public getPublic
 * @apiName getPublic
 * @apiDescription List all public gists
 * @apiGroup gists
 *
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.gists.getPublic({ ... });
 */

/**
 * @api {get} /gists/:id/:sha getRevision
 * @apiName getRevision
 * @apiDescription Get a specific revision of a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gists.getRevision({ ... });
 */

/**
 * @api {get} /gists/starred getStarred
 * @apiName getStarred
 * @apiDescription List the authenticated user's starred gists
 * @apiGroup gists
 *
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.gists.getStarred({ ... });
 */

/**
 * @api {put} /gists/:id/star star
 * @apiName star
 * @apiDescription Star a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.star({ ... });
 */

/**
 * @api {delete} /gists/:id/star unstar
 * @apiName unstar
 * @apiDescription Unstar a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.unstar({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/git/blobs createBlob
 * @apiName createBlob
 * @apiDescription Create a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} content  
 * @apiParam {String} encoding  
 * @apiExample {js} ex:
github.gitdata.createBlob({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/git/commits createCommit
 * @apiName createCommit
 * @apiDescription Create a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} message  String of the commit message
 * @apiParam {String} tree  String of the SHA of the tree object this commit points to
 * @apiParam {Array} parents  Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided.
 * @apiParam {Json} [author]  
 * @apiParam {Json} [committer]  
 * @apiExample {js} ex:
github.gitdata.createCommit({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/git/refs createReference
 * @apiName createReference
 * @apiDescription Create a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.createReference({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/git/tags createTag
 * @apiName createTag
 * @apiDescription Create a Tag Object
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} tag  String of the tag
 * @apiParam {String} message  String of the tag message
 * @apiParam {String} object  String of the SHA of the git object this is tagging
 * @apiParam {String} type  String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
 * @apiParam {Json} tagger  JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged
 * @apiExample {js} ex:
github.gitdata.createTag({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/git/trees createTree
 * @apiName createTree
 * @apiDescription Create a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Json} tree  Array of Hash objects (of path, mode, type and sha) specifying a tree structure
 * @apiParam {String} [base_tree]  String of the SHA1 of the tree you want to update with new data
 * @apiExample {js} ex:
github.gitdata.createTree({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/git/refs/:ref deleteReference
 * @apiName deleteReference
 * @apiDescription Delete a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.deleteReference({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/blobs/:sha getBlob
 * @apiName getBlob
 * @apiDescription Get a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getBlob({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/commits/:sha getCommit
 * @apiName getCommit
 * @apiDescription Get a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommit({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/commits/:sha getCommitSignatureVerification
 * @apiName getCommitSignatureVerification
 * @apiDescription Get a Commit Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommitSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/refs/:ref getReference
 * @apiName getReference
 * @apiDescription Get a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.getReference({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/refs getReferences
 * @apiName getReferences
 * @apiDescription Get all References
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getReferences({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/tags/:sha getTag
 * @apiName getTag
 * @apiDescription Get a Tag
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTag({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/tags/:sha getTagSignatureVerification
 * @apiName getTagSignatureVerification
 * @apiDescription Get a Tag Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTagSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/refs/tags getTags
 * @apiName getTags
 * @apiDescription Get all tag References
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getTags({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/trees/:sha getTree
 * @apiName getTree
 * @apiDescription Get a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Boolean} [recursive]  
 * @apiExample {js} ex:
github.gitdata.getTree({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/git/refs/:ref updateReference
 * @apiName updateReference
 * @apiDescription Update a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha  
 * @apiParam {Boolean} [force=false]  Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
 * @apiExample {js} ex:
github.gitdata.updateReference({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/issues/:number/assignees addAssigneesToIssue
 * @apiName addAssigneesToIssue
 * @apiDescription Add assignees to an issue.
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} assignees  Logins for the users that should be added to the issue.
 * @apiExample {js} ex:
github.issues.addAssigneesToIssue({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/issues/:number/labels addLabels
 * @apiName addLabels
 * @apiDescription Add labels to an issue
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  
 * @apiExample {js} ex:
github.issues.addLabels({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/assignees/:assignee checkAssignee
 * @apiName checkAssignee
 * @apiDescription Check assignee
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} assignee  Login for the user that this issue should be assigned to.
 * @apiExample {js} ex:
github.issues.checkAssignee({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/issues create
 * @apiName create
 * @apiDescription Create an issue
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String} [body]  
 * @apiParam {String} [assignee]  Login for the user that this issue should be assigned to.
 * @apiParam {Number} [milestone]  Milestone to associate this issue with.
 * @apiParam {Json} [labels]  Array of strings - Labels to associate with this issue.
 * @apiParam {Array} [assignees]  Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.
 * @apiExample {js} ex:
github.issues.create({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/issues/:number/comments createComment
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.createComment({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/labels createLabel
 * @apiName createLabel
 * @apiDescription Create a label
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.createLabel({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/milestones createMilestone
 * @apiName createMilestone
 * @apiDescription Create a milestone
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String} [state=open]  
 * @apiParam {String} [description]  
 * @apiParam {Date} [due_on]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.issues.createMilestone({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/issues/comments/:id deleteComment
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.deleteComment({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/labels/:name deleteLabel
 * @apiName deleteLabel
 * @apiDescription Delete a label
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.deleteLabel({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/milestones/:number deleteMilestone
 * @apiName deleteMilestone
 * @apiDescription Delete a milestone
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.deleteMilestone({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/issues/:number edit
 * @apiName edit
 * @apiDescription Edit an issue
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [title]  
 * @apiParam {String} [body]  
 * @apiParam {String} [assignee]  Login for the user that this issue should be assigned to.
 * @apiParam {String} [state=open]  open or closed
 * @apiParam {Number} [milestone]  Milestone to associate this issue with.
 * @apiParam {Json} [labels]  Array of strings - Labels to associate with this issue.
 * @apiParam {Array} [assignees]  Logins for Users to assign to this issue. Pass one or more user logins to replace the set of assignees on this Issue. .Send an empty array ([]) to clear all assignees from the Issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.
 * @apiExample {js} ex:
github.issues.edit({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/issues/comments/:id editComment
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.editComment({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number get
 * @apiName get
 * @apiDescription Get a single issue
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.get({ ... });
 */

/**
 * @api {get} /issues getAll
 * @apiName getAll
 * @apiDescription List all issues across all the authenticated user's visible repositories including owned repositories, member repositories, and organization repositories
 * @apiGroup issues
 *
 * @apiParam {String} [filter]  
 * @apiParam {String} [state=open]  open, closed, or all
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String} [sort=created]  
 * @apiParam {String} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getAll({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/assignees getAssignees
 * @apiName getAssignees
 * @apiDescription List assignees
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.issues.getAssignees({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/comments/:id getComment
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getComment({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number/comments getComments
 * @apiName getComments
 * @apiDescription List comments on an issue
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getComments({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/comments getCommentsForRepo
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} [sort=created]  
 * @apiParam {String} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getCommentsForRepo({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/events/:id getEvent
 * @apiName getEvent
 * @apiDescription Get a single event
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getEvent({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number/events getEvents
 * @apiName getEvents
 * @apiDescription List events for an issue
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEvents({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/events getEventsForRepo
 * @apiName getEventsForRepo
 * @apiDescription List events for a repository
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number/timeline getEventsTimeline
 * @apiName getEventsTimeline
 * @apiDescription List events for an issue. (In preview period. See README.)
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsTimeline({ ... });
 */

/**
 * @api {get} /orgs/:org/issues getForOrg
 * @apiName getForOrg
 * @apiDescription List all issues for a given organization for the authenticated user
 * @apiGroup issues
 *
 * @apiParam {String} org  
 * @apiParam {String} [filter]  
 * @apiParam {String} [state=open]  open, closed, or all
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String} [sort=created]  
 * @apiParam {String} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getForOrg({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues getForRepo
 * @apiName getForRepo
 * @apiDescription List issues for a repository
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} [milestone]  
 * @apiParam {String} [state=open]  open, closed, or all
 * @apiParam {String} [assignee]  String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User.
 * @apiParam {String} [creator]  The user that created the issue.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String} [sort=created]  
 * @apiParam {String} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {String} [mentioned]  String User login.
 * @apiExample {js} ex:
github.issues.getForRepo({ ... });
 */

/**
 * @api {get} /user/issues getForUser
 * @apiName getForUser
 * @apiDescription List all issues across owned and member repositories for the authenticated user
 * @apiGroup issues
 *
 * @apiParam {String} [filter]  
 * @apiParam {String} [state=open]  open, closed, or all
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String} [sort=created]  
 * @apiParam {String} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getForUser({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number/labels getIssueLabels
 * @apiName getIssueLabels
 * @apiDescription List labels on an issue
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getIssueLabels({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/labels/:name getLabel
 * @apiName getLabel
 * @apiDescription Get a single label
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.getLabel({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/labels getLabels
 * @apiName getLabels
 * @apiDescription List all labels for this repository
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getLabels({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/milestones/:number getMilestone
 * @apiName getMilestone
 * @apiDescription Get a single milestone
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestone({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/milestones/:number/labels getMilestoneLabels
 * @apiName getMilestoneLabels
 * @apiDescription Get labels for every issue in a milestone
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestoneLabels({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/milestones getMilestones
 * @apiName getMilestones
 * @apiDescription List milestones for a repository
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} [state=open]  
 * @apiParam {String} [sort=due_on]  due_on, completeness, default: due_on
 * @apiParam {String} [direction=asc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getMilestones({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/issues/:number/lock lock
 * @apiName lock
 * @apiDescription Users with push access can lock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.lock({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/issues/:number/labels removeAllLabels
 * @apiName removeAllLabels
 * @apiDescription Remove all labels from an issue
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.removeAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/issues/:number/assignees removeAssigneesFromIssue
 * @apiName removeAssigneesFromIssue
 * @apiDescription Remove assignees from an issue.
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} assignees  Logins for the users that should be removed from the issue.
 * @apiExample {js} ex:
github.issues.removeAssigneesFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/issues/:number/labels/:name removeLabel
 * @apiName removeLabel
 * @apiDescription Remove a label from an issue
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.removeLabel({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/issues/:number/labels replaceAllLabels
 * @apiName replaceAllLabels
 * @apiDescription Replace all labels for an issue
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  Sending an empty array ([]) will remove all Labels from the Issue.
 * @apiExample {js} ex:
github.issues.replaceAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/issues/:number/lock unlock
 * @apiName unlock
 * @apiDescription Users with push access can unlock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.unlock({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/labels/:oldname updateLabel
 * @apiName updateLabel
 * @apiDescription Update a label
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} oldname  The old name of the label.
 * @apiParam {String} name  The new name of the label.
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.updateLabel({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/milestones/:number updateMilestone
 * @apiName updateMilestone
 * @apiDescription Update a milestone
 * @apiGroup issues
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} title  
 * @apiParam {String} [state=open]  
 * @apiParam {String} [description]  
 * @apiParam {Date} [due_on]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.issues.updateMilestone({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/import cancelImport
 * @apiName cancelImport
 * @apiDescription Cancel an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.cancelImport({ ... });
 */

/**
 * @api {delete} /orgs/:org/migrations/:id/archive deleteMigrationArchive
 * @apiName deleteMigrationArchive
 * @apiDescription Delete a migration archive
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.deleteMigrationArchive({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/import/authors getImportCommitAuthors
 * @apiName getImportCommitAuthors
 * @apiDescription Get import commit authors. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} [since]  Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step.
 * @apiExample {js} ex:
github.migrations.getImportCommitAuthors({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/import getImportProgress
 * @apiName getImportProgress
 * @apiDescription Get import progress. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.getImportProgress({ ... });
 */

/**
 * @api {get} /:user/:name/import/large_files getLargeImportFiles
 * @apiName getLargeImportFiles
 * @apiDescription List files larger than 100MB found during the import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} user  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.migrations.getLargeImportFiles({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations/:id/archive getMigrationArchiveLink
 * @apiName getMigrationArchiveLink
 * @apiDescription Get the URL to a migration archive.
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.getMigrationArchiveLink({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations/:id getMigrationStatus
 * @apiName getMigrationStatus
 * @apiDescription Get the status of a migration
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.getMigrationStatus({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations getMigrations
 * @apiName getMigrations
 * @apiDescription Get a list of migrations
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.migrations.getMigrations({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/import/authors/:author_id mapImportCommitAuthor
 * @apiName mapImportCommitAuthor
 * @apiDescription Map a commit author. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} author_id  The commit author id.
 * @apiParam {String} [email]  The new Git author email.
 * @apiParam {String} [name]  The new Git author name.
 * @apiExample {js} ex:
github.migrations.mapImportCommitAuthor({ ... });
 */

/**
 * @api {patch} /:user/:name/import/lfs setImportLfsPreference
 * @apiName setImportLfsPreference
 * @apiDescription Set import LFS preference. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} user  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.migrations.setImportLfsPreference({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/import startImport
 * @apiName startImport
 * @apiDescription Start an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} vcs_url  The URL of the originating repository.
 * @apiParam {String} [vcs]  The originating VCS type. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
 * @apiParam {String} [vcs_username]  If authentication is required, the username to provide to vcs_url.
 * @apiParam {String} [vcs_password]  If authentication is required, the password to provide to vcs_url.
 * @apiParam {String} [tfvc_project]  For a tfvc import, the name of the project that is being imported.
 * @apiExample {js} ex:
github.migrations.startImport({ ... });
 */

/**
 * @api {post} /orgs/:org/migrations startMigration
 * @apiName startMigration
 * @apiDescription Start a migration.
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {Array} repositories  A list of arrays indicating which repositories should be migrated.
 * @apiParam {Boolean} [lock_repositories=false]  Indicates whether repositories should be locked (to prevent manipulation) while migrating data. Default: false.
 * @apiParam {Boolean} [exclude_attachments=false]  Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). Default: false.
 * @apiExample {js} ex:
github.migrations.startMigration({ ... });
 */

/**
 * @api {delete} /orgs/:org/migrations/:id/repos/:repo/lock unlockRepoLockedForMigration
 * @apiName unlockRepoLockedForMigration
 * @apiDescription Unlock a repository that was locked for migration.
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.unlockRepoLockedForMigration({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/import updateImport
 * @apiName updateImport
 * @apiDescription Update existing import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.updateImport({ ... });
 */

/**
 * @api {get} /emojis getEmojis
 * @apiName getEmojis
 * @apiDescription Lists all the emojis available to use on GitHub.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getEmojis({ ... });
 */

/**
 * @api {get} /gitignore/templates/:name getGitignoreTemplate
 * @apiName getGitignoreTemplate
 * @apiDescription Get a single gitignore template
 * @apiGroup misc
 *
 * @apiParam {String} name  The name of the .gitignore template to get e.g. 'C'
 * @apiExample {js} ex:
github.misc.getGitignoreTemplate({ ... });
 */

/**
 * @api {get} /gitignore/templates getGitignoreTemplates
 * @apiName getGitignoreTemplates
 * @apiDescription Lists available gitignore templates
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getGitignoreTemplates({ ... });
 */

/**
 * @api {get} /licenses/:license getLicense
 * @apiName getLicense
 * @apiDescription Get an individual license. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiParam {String} license  Ex: /licenses/mit
 * @apiExample {js} ex:
github.misc.getLicense({ ... });
 */

/**
 * @api {get} /licenses getLicenses
 * @apiName getLicenses
 * @apiDescription List all licenses. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getLicenses({ ... });
 */

/**
 * @api {get} /meta getMeta
 * @apiName getMeta
 * @apiDescription This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getMeta({ ... });
 */

/**
 * @api {get} /rate_limit getRateLimit
 * @apiName getRateLimit
 * @apiDescription Get your current rate limit status
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getRateLimit({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/license getRepoLicense
 * @apiName getRepoLicense
 * @apiDescription Get the contents of a repository's license. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.misc.getRepoLicense({ ... });
 */

/**
 * @api {post} /markdown renderMarkdown
 * @apiName renderMarkdown
 * @apiDescription Render an arbitrary Markdown document
 * @apiGroup misc
 *
 * @apiParam {String} text  The Markdown text to render
 * @apiParam {String} [mode=markdown]  The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly.
 * @apiParam {String} [context]  The repository context. Only taken into account when rendering as `gfm`
 * @apiExample {js} ex:
github.misc.renderMarkdown({ ... });
 */

/**
 * @api {post} /markdown/raw renderMarkdownRaw
 * @apiName renderMarkdownRaw
 * @apiDescription Render a Markdown document in raw mode
 * @apiGroup misc
 *
 * @apiParam {String} data  Raw data to send as the body of the request
 * @apiExample {js} ex:
github.misc.renderMarkdownRaw({ ... });
 */

/**
 * @api {put} /orgs/:org/memberships/:user addOrganizationMembership
 * @apiName addOrganizationMembership
 * @apiDescription Add or update organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} user  
 * @apiParam {String} role  The role to give the user in the organization.
 * @apiExample {js} ex:
github.orgs.addOrganizationMembership({ ... });
 */

/**
 * @api {put} /teams/:id/memberships/:user addTeamMembership
 * @apiName addTeamMembership
 * @apiDescription Add team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} user  
 * @apiParam {String} [role=member]  The role that this user should have in the team.
 * @apiExample {js} ex:
github.orgs.addTeamMembership({ ... });
 */

/**
 * @api {put} /teams/:id/repos/:org/:repo addTeamRepo
 * @apiName addTeamRepo
 * @apiDescription Add team repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} org  
 * @apiParam {String} repo  
 * @apiParam {String} [permission]  `pull` - team members can pull, but not push or administer this repository, `push` - team members can pull and push, but not administer this repository, `admin` - team members can pull, push and administer this repository.
 * @apiExample {js} ex:
github.orgs.addTeamRepo({ ... });
 */

/**
 * @api {get} /orgs/:org/members/:user checkMembership
 * @apiName checkMembership
 * @apiDescription Check membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.orgs.checkMembership({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members/:user checkPublicMembership
 * @apiName checkPublicMembership
 * @apiDescription Check public membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.orgs.checkPublicMembership({ ... });
 */

/**
 * @api {get} /teams/:id/repos/:user/:repo checkTeamRepo
 * @apiName checkTeamRepo
 * @apiDescription Check if a team manages a repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.checkTeamRepo({ ... });
 */

/**
 * @api {delete} /orgs/:org/public_members/:user concealMembership
 * @apiName concealMembership
 * @apiDescription Conceal a user's membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.orgs.concealMembership({ ... });
 */

/**
 * @api {post} /orgs/:org/hooks createHook
 * @apiName createHook
 * @apiDescription Create a hook
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} name  Must be passed as "web".
 * @apiParam {Json} config  Key/value pairs to provide settings for this webhook
 * @apiParam {Array} [events=["push"]]  Determines what events the hook is triggered for. Default: ["push"].
 * @apiParam {Boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} ex:
github.orgs.createHook({ ... });
 */

/**
 * @api {post} /orgs/:org/teams createTeam
 * @apiName createTeam
 * @apiDescription Create team
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} name  
 * @apiParam {String} [description]  The description of the team.
 * @apiParam {Array} [repo_names]  The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
 * @apiParam {String} [privacy=secret]  The level of privacy this team should have.
 * @apiExample {js} ex:
github.orgs.createTeam({ ... });
 */

/**
 * @api {delete} /orgs/:org/hooks/:id deleteHook
 * @apiName deleteHook
 * @apiDescription Delete a hook
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.orgs.deleteHook({ ... });
 */

/**
 * @api {delete} /teams/:id deleteTeam
 * @apiName deleteTeam
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.orgs.deleteTeam({ ... });
 */

/**
 * @api {delete} /teams/:id/repos/:user/:repo deleteTeamRepo
 * @apiName deleteTeamRepo
 * @apiDescription Remove team repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.deleteTeamRepo({ ... });
 */

/**
 * @api {patch} /orgs/:org/hooks/:id editHook
 * @apiName editHook
 * @apiDescription Edit a hook
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiParam {Json} config  Key/value pairs to provide settings for this webhook
 * @apiParam {Array} [events=["push"]]  Determines what events the hook is triggered for. Default: ["push"].
 * @apiParam {Boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} ex:
github.orgs.editHook({ ... });
 */

/**
 * @api {patch} /teams/:id editTeam
 * @apiName editTeam
 * @apiDescription Edit team
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} [description]  The description of the team.
 * @apiParam {String} [privacy=secret]  The level of privacy this team should have.
 * @apiExample {js} ex:
github.orgs.editTeam({ ... });
 */

/**
 * @api {get} /orgs/:org get
 * @apiName get
 * @apiDescription Get an organization
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.get({ ... });
 */

/**
 * @api {get} /organizations getAll
 * @apiName getAll
 * @apiDescription List all organizations
 * @apiGroup orgs
 *
 * @apiParam {String} [since]  The integer ID of the last Organization that you've seen.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getAll({ ... });
 */

/**
 * @api {get} /users/:user/orgs getForUser
 * @apiName getForUser
 * @apiDescription List public organization memberships for the specified user.
 * @apiGroup orgs
 *
 * @apiParam {String} user  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getForUser({ ... });
 */

/**
 * @api {get} /orgs/:org/hooks/:id getHook
 * @apiName getHook
 * @apiDescription Get single hook
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.orgs.getHook({ ... });
 */

/**
 * @api {get} /orgs/:org/hooks getHooks
 * @apiName getHooks
 * @apiDescription List hooks
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getHooks({ ... });
 */

/**
 * @api {get} /orgs/:org/members getMembers
 * @apiName getMembers
 * @apiDescription Members list
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} [filter=all]  Filter members returned in the list.
 * @apiParam {String} [role=all]  Filter members returned by their role.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getMembers({ ... });
 */

/**
 * @api {get} /orgs/:org/memberships/:user getOrganizationMembership
 * @apiName getOrganizationMembership
 * @apiDescription Get organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.orgs.getOrganizationMembership({ ... });
 */

/**
 * @api {get} /user/memberships/orgs getOrganizationMemberships
 * @apiName getOrganizationMemberships
 * @apiDescription List your organization memberships
 * @apiGroup orgs
 *
 * @apiParam {String} [state]  Indicates the state of the memberships to return. Can be either active or pending. If not specified, both active and pending memberships are returned.
 * @apiExample {js} ex:
github.orgs.getOrganizationMemberships({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members getPublicMembers
 * @apiName getPublicMembers
 * @apiDescription Public members list
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiExample {js} ex:
github.orgs.getPublicMembers({ ... });
 */

/**
 * @api {get} /teams/:id getTeam
 * @apiName getTeam
 * @apiDescription Get team
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.orgs.getTeam({ ... });
 */

/**
 * @api {get} /teams/:id/members getTeamMembers
 * @apiName getTeamMembers
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} [role=all]  Filters members returned by their role in the team.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getTeamMembers({ ... });
 */

/**
 * @api {get} /teams/:id/memberships/:user getTeamMembership
 * @apiName getTeamMembership
 * @apiDescription Get team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.orgs.getTeamMembership({ ... });
 */

/**
 * @api {get} /teams/:id/repos getTeamRepos
 * @apiName getTeamRepos
 * @apiDescription Get team repos
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getTeamRepos({ ... });
 */

/**
 * @api {get} /orgs/:org/teams getTeams
 * @apiName getTeams
 * @apiDescription List teams
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getTeams({ ... });
 */

/**
 * @api {post} /orgs/:org/hooks/:id/pings pingHook
 * @apiName pingHook
 * @apiDescription Ping a hook
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.orgs.pingHook({ ... });
 */

/**
 * @api {put} /orgs/:org/public_members/:user publicizeMembership
 * @apiName publicizeMembership
 * @apiDescription Publicize a user's membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.orgs.publicizeMembership({ ... });
 */

/**
 * @api {delete} /orgs/:org/members/:user removeMember
 * @apiName removeMember
 * @apiDescription Remove a member
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.orgs.removeMember({ ... });
 */

/**
 * @api {delete} /orgs/:org/memberships/:user removeOrganizationMembership
 * @apiName removeOrganizationMembership
 * @apiDescription Remove organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.orgs.removeOrganizationMembership({ ... });
 */

/**
 * @api {delete} /teams/:id/memberships/:user removeTeamMembership
 * @apiName removeTeamMembership
 * @apiDescription Remove team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.orgs.removeTeamMembership({ ... });
 */

/**
 * @api {patch} /orgs/:org update
 * @apiName update
 * @apiDescription Edit an organization
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} [billing_email]  Billing email address. This address is not publicized.
 * @apiParam {String} [company]  The company name.
 * @apiParam {String} [email]  The publicly visible email address.
 * @apiParam {String} [location]  The location.
 * @apiParam {String} [name]  The shorthand name of the company.
 * @apiParam {String} [description]  The description of the company.
 * @apiExample {js} ex:
github.orgs.update({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number/merge checkMerged
 * @apiName checkMerged
 * @apiDescription Get if a pull request has been merged
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.checkMerged({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/pulls create
 * @apiName create
 * @apiDescription Create a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} title  The title of the pull request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiExample {js} ex:
github.pullRequests.create({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/pulls/:number/comments createComment
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiParam {String} commit_id  Sha of the commit to comment on.
 * @apiParam {String} path  Relative path of the file to comment on.
 * @apiParam {Number} position  Column index in the diff to comment on.
 * @apiExample {js} ex:
github.pullRequests.createComment({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/pulls/:number/comments createCommentReply
 * @apiName createCommentReply
 * @apiDescription Reply to existing pull request comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiParam {Number} in_reply_to  The comment id to reply to.
 * @apiExample {js} ex:
github.pullRequests.createCommentReply({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/pulls createFromIssue
 * @apiName createFromIssue
 * @apiDescription Create a pull request from an existing issue
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} issue  The issue number in this repository to turn into a Pull Request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiExample {js} ex:
github.pullRequests.createFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/pulls/comments/:number deleteComment
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.deleteComment({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/pulls/comments/:number editComment
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.pullRequests.editComment({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number get
 * @apiName get
 * @apiDescription Get a single pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.get({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls getAll
 * @apiName getAll
 * @apiDescription List pull requests
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} [state=open]  open, closed, or all
 * @apiParam {String} [head]  Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format.
 * @apiParam {String} [base]  Filter pulls by base branch name. Example: gh-pages.
 * @apiParam {String} [sort=created]  Possible values are: `created`, `updated`, `popularity`, `long-running`, Default: `created`
 * @apiParam {String} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getAll({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/comments/:number getComment
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.getComment({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number/comments getComments
 * @apiName getComments
 * @apiDescription List comments on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getComments({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/comments getCommentsForRepo
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} [sort=created]  Possible values are: `created`, `updated`, Default: `created`
 * @apiParam {String} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getCommentsForRepo({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number/commits getCommits
 * @apiName getCommits
 * @apiDescription List commits on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getCommits({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number/files getFiles
 * @apiName getFiles
 * @apiDescription List pull requests files
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getFiles({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/pulls/:number/merge merge
 * @apiName merge
 * @apiDescription Merge a pull request (Merge Button)
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [commit_message]  Extra detail to append to automatic commit message.
 * @apiParam {String} [sha]  SHA that pull request head must match to allow merge
 * @apiParam {String} [commit_title]  Title for the automatic commit message. (In preview period. See README.)
 * @apiParam {Boolean} [squash]  Commit a single commit to the head branch. (In preview period. See README.)
 * @apiExample {js} ex:
github.pullRequests.merge({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/pulls/:number update
 * @apiName update
 * @apiDescription Update a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [title]  The title of the pull request.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiParam {String} [state=open]  
 * @apiExample {js} ex:
github.pullRequests.update({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/comments/:id/reactions createForCommitComment
 * @apiName createForCommitComment
 * @apiDescription Create reaction for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForCommitComment({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/issues/:number/reactions createForIssue
 * @apiName createForIssue
 * @apiDescription Create reaction for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssue({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/issues/comments/:id/reactions createForIssueComment
 * @apiName createForIssueComment
 * @apiDescription Create reaction for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssueComment({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/pulls/comments/:id/reactions createForPullRequestReviewComment
 * @apiName createForPullRequestReviewComment
 * @apiDescription Create reaction for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForPullRequestReviewComment({ ... });
 */

/**
 * @api {delete} /reactions/:id delete
 * @apiName delete
 * @apiDescription Delete a reaction. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.reactions.delete({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/comments/:id/reactions getForCommitComment
 * @apiName getForCommitComment
 * @apiDescription List reactions for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForCommitComment({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number/reactions getForIssue
 * @apiName getForIssue
 * @apiDescription List reactions for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssue({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/comments/:id/reactions getForIssueComment
 * @apiName getForIssueComment
 * @apiDescription List reactions for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssueComment({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/comments/:id/reactions getForPullRequestReviewComment
 * @apiName getForPullRequestReviewComment
 * @apiDescription List reactions for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForPullRequestReviewComment({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/collaborators/:collabuser addCollaborator
 * @apiName addCollaborator
 * @apiDescription Add user as a collaborator
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} collabuser  
 * @apiParam {String} [permission=push]  `pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository.
 * @apiExample {js} ex:
github.repos.addCollaborator({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts addProtectedBranchRequiredStatusChecksContexts
 * @apiName addProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Add required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.addProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/branches/:branch/protection/restrictions/teams addProtectedBranchTeamRestrictions
 * @apiName addProtectedBranchTeamRestrictions
 * @apiDescription Add team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.addProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/branches/:branch/protection/restrictions/users addProtectedBranchUserRestrictions
 * @apiName addProtectedBranchUserRestrictions
 * @apiDescription Add user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.addProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/collaborators/:collabuser checkCollaborator
 * @apiName checkCollaborator
 * @apiDescription Check if user is a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} collabuser  
 * @apiExample {js} ex:
github.repos.checkCollaborator({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/compare/:base...:head compareCommits
 * @apiName compareCommits
 * @apiDescription Compare two commits.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiExample {js} ex:
github.repos.compareCommits({ ... });
 */

/**
 * @api {post} /user/repos create
 * @apiName create
 * @apiDescription Create a new repository for the authenticated user.
 * @apiGroup repos
 *
 * @apiParam {String} name  
 * @apiParam {String} [description]  
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiExample {js} ex:
github.repos.create({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/commits/:sha/comments createCommitComment
 * @apiName createCommitComment
 * @apiDescription Create a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {String} body  
 * @apiParam {String} [path]  Relative path of the file to comment on.
 * @apiParam {Number} [position]  Line index in the diff to comment on.
 * @apiParam {Number} [line]  Deprecated. Use position parameter instead. Line number in the file to comment on.
 * @apiExample {js} ex:
github.repos.createCommitComment({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/deployments createDeployment
 * @apiName createDeployment
 * @apiDescription Create a deployment.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} ref  The ref to deploy. This can be a branch, tag, or sha.
 * @apiParam {String} repo  
 * @apiParam {String} [task=deploy]  The named task to execute. e.g. deploy or deploy:migrations. Default: deploy
 * @apiParam {Boolean} [auto_merge=true]  Optional parameter to merge the default branch into the requested ref if it is behind the default branch. Default: true
 * @apiParam {Boolean} [production_environment]  Specifies if the given environment is a one that end-users directly interact with. Default: true when environment is `production` and false otherwise. (In preview period. See README.)
 * @apiParam {String} [payload=""]  Optional JSON payload with extra information about the deployment. Default: ""
 * @apiParam {String} [environment=none]  The name of the environment that was deployed to. e.g. staging or production. Default: none.
 * @apiParam {String} [description=""]  Optional short description. Default: ""
 * @apiParam {Boolean} [transient_environment=false]  Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: false. (In preview period. See README.)
 * @apiParam {Array} [required_contexts]  Optional array of status contexts verified against commit status checks. If this parameter is omitted from the parameters then all unique contexts will be verified before a deployment is created. To bypass checking entirely pass an empty array. Defaults to all unique contexts.
 * @apiExample {js} ex:
github.repos.createDeployment({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/deployments/:id/statuses createDeploymentStatus
 * @apiName createDeploymentStatus
 * @apiDescription Create a deployment status.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [state]  The state of the status. Can be one of pending, success, error, or failure.
 * @apiParam {String} [target_url=""]  The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. Default: ""
 * @apiParam {String} [log_url=""]  Functionally equivalent to target_url. Default: "". (In preview period. See README.)
 * @apiParam {String} [description=""]  A short description of the status. Default: ""
 * @apiParam {String} [environment_url=""]  URL for accessing the deployment environment. Default: "". (In preview period. See README.)
 * @apiParam {Boolean} [auto_inactive=true]  When true the new `inactive` status is added to all other non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. Default: true. (In preview period. See README.)
 * @apiExample {js} ex:
github.repos.createDeploymentStatus({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/contents/:path createFile
 * @apiName createFile
 * @apiDescription Create a new file in the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} path  The content path.
 * @apiParam {String} message  The commit message.
 * @apiParam {String} content  The new file content, Base64 encoded.
 * @apiParam {String} [branch]  The branch name. If not provided, uses the repository’s default branch (usually master).
 * @apiParam {Json} [committer]  
 * @apiExample {js} ex:
github.repos.createFile({ ... });
 */

/**
 * @api {post} /orgs/:org/repos createForOrg
 * @apiName createForOrg
 * @apiDescription Create a new repository for an organization.
 * @apiGroup repos
 *
 * @apiParam {String} org  
 * @apiParam {String} name  
 * @apiParam {String} [description]  
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {Number} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiExample {js} ex:
github.repos.createForOrg({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/hooks createHook
 * @apiName createHook
 * @apiDescription Create a hook.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {Json} config  A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {Array} [events=["push"]]  Determines what events the hook is triggered for. Default: `['push']`.
 * @apiParam {Boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} ex:
github.repos.createHook({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/keys createKey
 * @apiName createKey
 * @apiDescription Add a new deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String} key  
 * @apiParam {Boolean} [read_only]  If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
 * @apiExample {js} ex:
github.repos.createKey({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/projects createProject
 * @apiName createProject
 * @apiDescription Create a project.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.createProject({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/projects/columns/:id/cards createProjectCard
 * @apiName createProjectCard
 * @apiDescription Create a project card.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [note]  The note of the card.
 * @apiParam {String} [content_id]  The id of the Issue or Pull Request to associate with this card.
 * @apiParam {String} [content_type]  The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'.
 * @apiExample {js} ex:
github.repos.createProjectCard({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/projects/:number/columns createProjectColumn
 * @apiName createProjectColumn
 * @apiDescription Create a project column.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.repos.createProjectColumn({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/releases createRelease
 * @apiName createRelease
 * @apiDescription Create a release.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} tag_name  String of the tag
 * @apiParam {String} [target_commitish]  Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master).
 * @apiParam {String} [name]  
 * @apiParam {String} [body]  
 * @apiParam {Boolean} [draft=false]  true to create a draft (unpublished) release, false to create a published one. Default: false
 * @apiParam {Boolean} [prerelease=false]  true to identify the release as a prerelease. false to identify the release as a full release. Default: false
 * @apiExample {js} ex:
github.repos.createRelease({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/statuses/:sha createStatus
 * @apiName createStatus
 * @apiDescription Create a status.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {String} state  State of the status - can be one of pending, success, error, or failure.
 * @apiParam {String} [target_url]  Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status.
 * @apiParam {String} [description]  Short description of the status.
 * @apiParam {String} [context]  A string label to differentiate this status from the status of other systems.
 * @apiExample {js} ex:
github.repos.createStatus({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo delete
 * @apiName delete
 * @apiDescription Delete a repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.delete({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/releases/assets/:id deleteAsset
 * @apiName deleteAsset
 * @apiDescription Delete a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteAsset({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/comments/:id deleteCommitComment
 * @apiName deleteCommitComment
 * @apiDescription Delete a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteCommitComment({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/downloads/:id deleteDownload
 * @apiName deleteDownload
 * @apiDescription Delete a download.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteDownload({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/contents/:path deleteFile
 * @apiName deleteFile
 * @apiDescription Delete a file.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} path  The content path.
 * @apiParam {String} message  The commit message.
 * @apiParam {String} sha  The blob SHA of the file being removed.
 * @apiParam {String} [branch]  The branch name. If not provided, uses the repository’s default branch (usually master).
 * @apiParam {Json} [committer]  
 * @apiExample {js} ex:
github.repos.deleteFile({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/hooks/:id deleteHook
 * @apiName deleteHook
 * @apiDescription Deleate a hook.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteHook({ ... });
 */

/**
 * @api {delete} /repositories/:repo/invitations/:id deleteInvite
 * @apiName deleteInvite
 * @apiDescription Delete a repository invitation. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteInvite({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/keys/:id deleteKey
 * @apiName deleteKey
 * @apiDescription Remove a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteKey({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/projects/:number deleteProject
 * @apiName deleteProject
 * @apiDescription Delete a project.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.repos.deleteProject({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/projects/columns/cards/:id deleteProjectCard
 * @apiName deleteProjectCard
 * @apiDescription Delete a project card.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteProjectCard({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/projects/columns/:id deleteProjectColumn
 * @apiName deleteProjectColumn
 * @apiDescription Delete a project column.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteProjectColumn({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/releases/:id deleteRelease
 * @apiName deleteRelease
 * @apiDescription Delete a release
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteRelease({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo edit
 * @apiName edit
 * @apiDescription Update a repo.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} [description]  
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {String} [default_branch]  Updates the default branch for this repository.
 * @apiExample {js} ex:
github.repos.edit({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/releases/assets/:id editAsset
 * @apiName editAsset
 * @apiDescription Edit a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} [label]  An alternate short description of the asset. Used in place of the filename.
 * @apiExample {js} ex:
github.repos.editAsset({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/hooks/:id editHook
 * @apiName editHook
 * @apiDescription Edit a hook.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {Json} config  A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {Array} [events=["push"]]  Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`.
 * @apiParam {Array} [add_events]  Determines a list of events to be added to the list of events that the Hook triggers for.
 * @apiParam {Array} [remove_events]  Determines a list of events to be removed from the list of events that the Hook triggers for.
 * @apiParam {Boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} ex:
github.repos.editHook({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/releases/:id editRelease
 * @apiName editRelease
 * @apiDescription Edit a release.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} tag_name  String of the tag
 * @apiParam {String} [target_commitish]  Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master).
 * @apiParam {String} [name]  
 * @apiParam {String} [body]  
 * @apiParam {Boolean} [draft=false]  true to create a draft (unpublished) release, false to create a published one. Default: false
 * @apiParam {Boolean} [prerelease=false]  true to identify the release as a prerelease. false to identify the release as a full release. Default: false
 * @apiExample {js} ex:
github.repos.editRelease({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/forks fork
 * @apiName fork
 * @apiDescription Create a fork.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} [organization]  Optional parameter to specify the organization name if forking into an organization.
 * @apiExample {js} ex:
github.repos.fork({ ... });
 */

/**
 * @api {get} /repos/:user/:repo get
 * @apiName get
 * @apiDescription Get a repo for a user.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.get({ ... });
 */

/**
 * @api {get} /user/repos getAll
 * @apiName getAll
 * @apiDescription List your repositories
 * @apiGroup repos
 *
 * @apiParam {String} [visibility=all]  Can be one of `all`, `public`, or `private`. Default: `all`.
 * @apiParam {String} [affiliation=owner,collaborator,organization_member]  Comma-separated list of values. Can include: `owner`, `collaborator`, `organization_member`.
 * @apiParam {String} [type=all]  Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`.
 * @apiParam {String} [sort=full_name]  Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {String} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getAll({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/comments getAllCommitComments
 * @apiName getAllCommitComments
 * @apiDescription List commit comments for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getAllCommitComments({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/:archive_format/:ref getArchiveLink
 * @apiName getArchiveLink
 * @apiDescription Get archive link.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} archive_format=tarball  Either tarball or zipball, Deafult: tarball.
 * @apiParam {String} [ref]  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.repos.getArchiveLink({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/releases/assets/:id getAsset
 * @apiName getAsset
 * @apiDescription Get a single release asset.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getAsset({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/branches/:branch getBranch
 * @apiName getBranch
 * @apiDescription Get branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranch({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/branches/:branch/protection getBranchProtection
 * @apiName getBranchProtection
 * @apiDescription Get branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranchProtection({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/branches getBranches
 * @apiName getBranches
 * @apiDescription List branches. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [protected]  Set to true to only return protected branches
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranches({ ... });
 */

/**
 * @api {get} /repositories/:id getById
 * @apiName getById
 * @apiDescription Get a single repo by id.
 * @apiGroup repos
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getById({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/traffic/clones getClones
 * @apiName getClones
 * @apiDescription Get the total number of clones and breakdown per day or week for the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getClones({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/collaborators getCollaborators
 * @apiName getCollaborators
 * @apiDescription List collaborators
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCollaborators({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/commits/:sha/status getCombinedStatus
 * @apiName getCombinedStatus
 * @apiDescription Get the combined status for a specific ref.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCombinedStatus({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/commits/:sha getCommit
 * @apiName getCommit
 * @apiDescription Get a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.repos.getCommit({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/comments/:id getCommitComment
 * @apiName getCommitComment
 * @apiDescription Get a single commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getCommitComment({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/commits/:sha/comments getCommitComments
 * @apiName getCommitComments
 * @apiDescription List comments for a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCommitComments({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/commits getCommits
 * @apiName getCommits
 * @apiDescription List commits on a repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} [sha]  Sha or branch to start listing commits from.
 * @apiParam {String} [path]  Only commits containing this file path will be returned.
 * @apiParam {String} [author]  GitHub login or email address by which to filter by commit author.
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Date} [until]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCommits({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/contents/:path getContent
 * @apiName getContent
 * @apiDescription Get the contents of a file or directory in a repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} path  The content path.
 * @apiParam {String} [ref]  The String name of the Commit/Branch/Tag. Defaults to master.
 * @apiExample {js} ex:
github.repos.getContent({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/contributors getContributors
 * @apiName getContributors
 * @apiDescription Get contributors for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [anon]  Set to 1 or true to include anonymous contributors in results.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getContributors({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/deployments/:id/statuses getDeploymentStatuses
 * @apiName getDeploymentStatuses
 * @apiDescription List deployment statuses.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDeploymentStatuses({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/deployments getDeployments
 * @apiName getDeployments
 * @apiDescription List deployments.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} [sha=none]  The short or long sha that was recorded at creation time. Default: none.
 * @apiParam {String} [ref=none]  The name of the ref. This can be a branch, tag, or sha. Default: none.
 * @apiParam {String} [task=none]  The name of the task for the deployment. e.g. deploy or deploy:migrations. Default: none.
 * @apiParam {String} [environment=none]  The name of the environment that was deployed to. e.g. staging or production. Default: none.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getDeployments({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/downloads/:id getDownload
 * @apiName getDownload
 * @apiDescription Get a single download.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDownload({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/downloads getDownloads
 * @apiName getDownloads
 * @apiDescription List downloads for repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getDownloads({ ... });
 */

/**
 * @api {get} /orgs/:org/repos getForOrg
 * @apiName getForOrg
 * @apiDescription List repositories for the specified org.
 * @apiGroup repos
 *
 * @apiParam {String} org  
 * @apiParam {String} [type=all]  Possible values: `all`, `public`, `private`, `forks`, `sources`, `member`. Default: `all`.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForOrg({ ... });
 */

/**
 * @api {get} /users/:user/repos getForUser
 * @apiName getForUser
 * @apiDescription List public repositories for the specified user.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} [type=owner]  Possible values: `all`, `owner`, `member`. Default: `owner`.
 * @apiParam {String} [sort=full_name]  Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {String} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForUser({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/forks getForks
 * @apiName getForks
 * @apiDescription List forks.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} [sort=newest]  Possible values: `newest`, `oldest`, `stargazers`, default: `newest`.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForks({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/hooks/:id getHook
 * @apiName getHook
 * @apiDescription Get single hook.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getHook({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/hooks getHooks
 * @apiName getHooks
 * @apiDescription List hooks.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getHooks({ ... });
 */

/**
 * @api {get} /repositories/:repo/invitations getInvites
 * @apiName getInvites
 * @apiDescription List invitations for a repository. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getInvites({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/keys/:id getKey
 * @apiName getKey
 * @apiDescription Get a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getKey({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/keys getKeys
 * @apiName getKeys
 * @apiDescription List deploy keys.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getKeys({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/languages getLanguages
 * @apiName getLanguages
 * @apiDescription Get languages for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getLanguages({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pages/builds/latest getLatestPagesBuild
 * @apiName getLatestPagesBuild
 * @apiDescription Get latest Pages build
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/releases/latest getLatestRelease
 * @apiName getLatestRelease
 * @apiDescription Get the latest release.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestRelease({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pages getPages
 * @apiName getPages
 * @apiDescription Get information about a Pages site. (Use preview header to include additional info.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPages({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pages/builds/:id getPagesBuild
 * @apiName getPagesBuild
 * @apiDescription Get a specific Pages build
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pages/builds getPagesBuilds
 * @apiName getPagesBuilds
 * @apiDescription List Pages builds
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPagesBuilds({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/traffic/popular/paths getPaths
 * @apiName getPaths
 * @apiDescription Get the top 10 popular contents over the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPaths({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/projects/:number getProject
 * @apiName getProject
 * @apiDescription List a project.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.repos.getProject({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/projects/columns/cards/:id getProjectCard
 * @apiName getProjectCard
 * @apiDescription Get project card.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getProjectCard({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/projects/columns/:id/cards getProjectCards
 * @apiName getProjectCards
 * @apiDescription List project cards.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getProjectCards({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/projects/columns/:id getProjectColumn
 * @apiName getProjectColumn
 * @apiDescription Get a project column.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getProjectColumn({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/projects/:number/columns getProjectColumns
 * @apiName getProjectColumns
 * @apiDescription List a project's columns.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.repos.getProjectColumns({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/projects getProjects
 * @apiName getProjects
 * @apiDescription List projects.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getProjects({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/branches/:branch/protection/required_status_checks getProtectedBranchRequiredStatusChecks
 * @apiName getProtectedBranchRequiredStatusChecks
 * @apiDescription Get required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts getProtectedBranchRequiredStatusChecksContexts
 * @apiName getProtectedBranchRequiredStatusChecksContexts
 * @apiDescription List required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/branches/:branch/protection/restrictions getProtectedBranchRestrictions
 * @apiName getProtectedBranchRestrictions
 * @apiDescription Get restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRestrictions({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/branches/:branch/protection/restrictions/teams getProtectedBranchTeamRestrictions
 * @apiName getProtectedBranchTeamRestrictions
 * @apiDescription List team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/branches/:branch/protection/restrictions/users getProtectedBranchUserRestrictions
 * @apiName getProtectedBranchUserRestrictions
 * @apiDescription List user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repositories getPublic
 * @apiName getPublic
 * @apiDescription List all public repositories
 * @apiGroup repos
 *
 * @apiParam {String} [since]  The integer ID of the last Repository that you've seen.
 * @apiExample {js} ex:
github.repos.getPublic({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/readme getReadme
 * @apiName getReadme
 * @apiDescription Get the README for the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} [ref]  The name of the commit/branch/tag. Default: the repository’s default branch (usually master)
 * @apiExample {js} ex:
github.repos.getReadme({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/traffic/popular/referrers getReferrers
 * @apiName getReferrers
 * @apiDescription Get the top 10 referrers over the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReferrers({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/releases/:id getRelease
 * @apiName getRelease
 * @apiDescription Get a single release.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getRelease({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/releases/tags/:tag getReleaseByTag
 * @apiName getReleaseByTag
 * @apiDescription Get a release by tag name.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} tag  String of the tag
 * @apiExample {js} ex:
github.repos.getReleaseByTag({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/releases getReleases
 * @apiName getReleases
 * @apiDescription List releases for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReleases({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/commits/:ref getShaOfCommitRef
 * @apiName getShaOfCommitRef
 * @apiDescription Get the SHA-1 of a commit reference.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.repos.getShaOfCommitRef({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/stats/code_frequency getStatsCodeFrequency
 * @apiName getStatsCodeFrequency
 * @apiDescription Get the number of additions and deletions per week.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCodeFrequency({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/stats/commit_activity getStatsCommitActivity
 * @apiName getStatsCommitActivity
 * @apiDescription Get the last year of commit activity data.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCommitActivity({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/stats/contributors getStatsContributors
 * @apiName getStatsContributors
 * @apiDescription Get contributors list with additions, deletions, and commit counts.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsContributors({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/stats/participation getStatsParticipation
 * @apiName getStatsParticipation
 * @apiDescription Get the weekly commit count for the repository owner and everyone else.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsParticipation({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/stats/punch_card getStatsPunchCard
 * @apiName getStatsPunchCard
 * @apiDescription Get the number of commits per hour in each day.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsPunchCard({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/commits/:sha/statuses getStatuses
 * @apiName getStatuses
 * @apiDescription Get status for a specfic ref.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getStatuses({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/tags getTags
 * @apiName getTags
 * @apiDescription Get tags for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTags({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/teams getTeams
 * @apiName getTeams
 * @apiDescription Get teams for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTeams({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/traffic/views getViews
 * @apiName getViews
 * @apiDescription Get the total number of views and breakdown per day or week for the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getViews({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/releases/:id/assets listAssets
 * @apiName listAssets
 * @apiDescription List assets for a release.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.listAssets({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/merges merge
 * @apiName merge
 * @apiDescription Perform a merge.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} [commit_message]  Commit message to use for the merge commit. If omitted, a default message will be used.
 * @apiExample {js} ex:
github.repos.merge({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/projects/columns/cards/:id/moves moveProjectCard
 * @apiName moveProjectCard
 * @apiDescription Move a project card.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiParam {String} [column_id]  The id value of a column in the same project.
 * @apiExample {js} ex:
github.repos.moveProjectCard({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/projects/columns/:id/moves moveProjectColumn
 * @apiName moveProjectColumn
 * @apiDescription Move a project column.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiExample {js} ex:
github.repos.moveProjectColumn({ ... });
 */

/**
 * @api {get} /repositories/:id one
 * @apiName one
 * @apiDescription Get a specific repo.
 * @apiGroup repos
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.one({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/hooks/:id/pings pingHook
 * @apiName pingHook
 * @apiDescription Ping a hook.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.pingHook({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/branches/:branch/protection removeBranchProtection
 * @apiName removeBranchProtection
 * @apiDescription Remove branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeBranchProtection({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/collaborators/:collabuser removeCollaborator
 * @apiName removeCollaborator
 * @apiDescription Remove user as a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} collabuser  
 * @apiExample {js} ex:
github.repos.removeCollaborator({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/branches/:branch/protection/required_status_checks removeProtectedBranchRequiredStatusChecks
 * @apiName removeProtectedBranchRequiredStatusChecks
 * @apiDescription Remove required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts removeProtectedBranchRequiredStatusChecksContexts
 * @apiName removeProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Remove required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/branches/:branch/protection/restrictions removeProtectedBranchRestrictions
 * @apiName removeProtectedBranchRestrictions
 * @apiDescription Remove restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/branches/:branch/protection/restrictions/teams removeProtectedBranchTeamRestrictions
 * @apiName removeProtectedBranchTeamRestrictions
 * @apiDescription Remove team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/branches/:branch/protection/restrictions/users removeProtectedBranchUserRestrictions
 * @apiName removeProtectedBranchUserRestrictions
 * @apiDescription Remove user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts replaceProtectedBranchRequiredStatusChecksContexts
 * @apiName replaceProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Replace required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/branches/:branch/protection/restrictions/teams replaceProtectedBranchTeamRestrictions
 * @apiName replaceProtectedBranchTeamRestrictions
 * @apiDescription Replace team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/branches/:branch/protection/restrictions/users replaceProtectedBranchUserRestrictions
 * @apiName replaceProtectedBranchUserRestrictions
 * @apiDescription Replace user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/pages/builds requestPageBuild
 * @apiName requestPageBuild
 * @apiDescription Request a page build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.requestPageBuild({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/hooks/:id/test testHook
 * @apiName testHook
 * @apiDescription Test a [push] hook.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.testHook({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/branches/:branch/protection updateBranchProtection
 * @apiName updateBranchProtection
 * @apiDescription Update branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Json} required_status_checks  JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch. This object can have the value of `null` for disabled.
 * @apiParam {Json} restrictions  JSON object that contains the following keys: `users` - The list of user logins with push access, `teams` - The list of team slugs with push access. This object can have the value of `null` for disabled.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.updateBranchProtection({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/comments/:id updateCommitComment
 * @apiName updateCommitComment
 * @apiDescription Update a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.updateCommitComment({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/contents/:path updateFile
 * @apiName updateFile
 * @apiDescription Update a file.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} path  The content path.
 * @apiParam {String} message  The commit message.
 * @apiParam {String} content  The updated file content, Base64 encoded.
 * @apiParam {String} sha  The blob SHA of the file being replaced.
 * @apiParam {String} [branch]  The branch name. If not provided, uses the repository’s default branch (usually master).
 * @apiParam {Json} [committer]  
 * @apiExample {js} ex:
github.repos.updateFile({ ... });
 */

/**
 * @api {patch} /repositories/:repo/invitations/:id updateInvite
 * @apiName updateInvite
 * @apiDescription Update a repository invitation. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [permission]  The permissions that the associated user will have on the repository.
 * @apiExample {js} ex:
github.repos.updateInvite({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/projects/:number updateProject
 * @apiName updateProject
 * @apiDescription Update a project.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.updateProject({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/projects/columns/cards/:id updateProjectCard
 * @apiName updateProjectCard
 * @apiDescription Update a project card.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [note]  The note of the card.
 * @apiExample {js} ex:
github.repos.updateProjectCard({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/projects/columns/:id updateProjectColumn
 * @apiName updateProjectColumn
 * @apiDescription Update a project column.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.repos.updateProjectColumn({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/branches/:branch/protection/required_status_checks updateProtectedBranchRequiredStatusChecks
 * @apiName updateProtectedBranchRequiredStatusChecks
 * @apiDescription Update required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Json} body  JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.updateProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/releases/:id/assets uploadAsset
 * @apiName uploadAsset
 * @apiDescription Upload a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} user  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} filePath  The file path of the asset.
 * @apiParam {String} name  The file name of the asset. This should be set in a URI query parameter.
 * @apiParam {String} [label]  An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter.
 * @apiExample {js} ex:
github.repos.uploadAsset({ ... });
 */

/**
 * @api {get} /search/code code
 * @apiName code
 * @apiDescription Search code.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String} [sort]  The sort field. Can only be indexed, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: results are sorted by best match.
 * @apiParam {String} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.code({ ... });
 */

/**
 * @api {get} /legacy/user/email/:email email
 * @apiName email
 * @apiDescription Search against public email addresses.
 * @apiGroup search
 *
 * @apiParam {String} email  The email address
 * @apiExample {js} ex:
github.search.email({ ... });
 */

/**
 * @api {get} /search/issues issues
 * @apiName issues
 * @apiDescription Search issues.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String} [sort]  The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
 * @apiParam {String} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.issues({ ... });
 */

/**
 * @api {get} /search/repositories repos
 * @apiName repos
 * @apiDescription Search repositories.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String} [sort]  stars, forks, or updated
 * @apiParam {String} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.repos({ ... });
 */

/**
 * @api {get} /search/users users
 * @apiName users
 * @apiDescription Search users.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String} [sort]  The sort field. Can be followers, repositories, or joined. Default: results are sorted by best match.
 * @apiParam {String} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.users({ ... });
 */

/**
 * @api {patch} /user/repository_invitations/:id acceptRepoInvite
 * @apiName acceptRepoInvite
 * @apiDescription Accept a repository invitation. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.users.acceptRepoInvite({ ... });
 */

/**
 * @api {post} /user/emails addEmails
 * @apiName addEmails
 * @apiDescription Add email address(es)
 * @apiGroup users
 *
 * @apiParam {Array} body  You can post a single email address or an array of addresses.
 * @apiExample {js} ex:
github.users.addEmails({ ... });
 */

/**
 * @api {get} /user/following/:user checkFollowing
 * @apiName checkFollowing
 * @apiDescription Check if you are following a user
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.users.checkFollowing({ ... });
 */

/**
 * @api {get} /users/:user/following/:other_user checkIfOneFollowersOther
 * @apiName checkIfOneFollowersOther
 * @apiDescription Check if one user follows another
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiParam {String} other_user  Other user
 * @apiExample {js} ex:
github.users.checkIfOneFollowersOther({ ... });
 */

/**
 * @api {post} /user/gpg_keys createGpgKey
 * @apiName createGpgKey
 * @apiDescription Create a GPG key. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {String} armored_public_key  GPG key contents
 * @apiExample {js} ex:
github.users.createGpgKey({ ... });
 */

/**
 * @api {post} /user/keys createKey
 * @apiName createKey
 * @apiDescription Create a public key
 * @apiGroup users
 *
 * @apiParam {String} title  
 * @apiParam {String} key  
 * @apiExample {js} ex:
github.users.createKey({ ... });
 */

/**
 * @api {delete} /user/repository_invitations/:id declineRepoInvite
 * @apiName declineRepoInvite
 * @apiDescription Decline a repository invitation. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.users.declineRepoInvite({ ... });
 */

/**
 * @api {delete} /user/emails deleteEmails
 * @apiName deleteEmails
 * @apiDescription Delete email address(es)
 * @apiGroup users
 *
 * @apiParam {Array} body  You can post a single email address or an array of addresses.
 * @apiExample {js} ex:
github.users.deleteEmails({ ... });
 */

/**
 * @api {delete} /user/gpg_keys/:id deleteGpgKey
 * @apiName deleteGpgKey
 * @apiDescription Delete a GPG key. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.users.deleteGpgKey({ ... });
 */

/**
 * @api {delete} /user/keys/:id deleteKey
 * @apiName deleteKey
 * @apiDescription Delete a public key
 * @apiGroup users
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.users.deleteKey({ ... });
 */

/**
 * @api {delete} /users/:user/site_admin demote
 * @apiName demote
 * @apiDescription Demote a site administrator to an ordinary user
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.users.demote({ ... });
 */

/**
 * @api {patch} /user/memberships/orgs/:org editOrganizationMembership
 * @apiName editOrganizationMembership
 * @apiDescription Edit your organization membership
 * @apiGroup users
 *
 * @apiParam {String} org  
 * @apiParam {String} state  The state that the membership should be in. Only "active" will be accepted.
 * @apiExample {js} ex:
github.users.editOrganizationMembership({ ... });
 */

/**
 * @api {put} /user/following/:user followUser
 * @apiName followUser
 * @apiDescription Follow a user
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.users.followUser({ ... });
 */

/**
 * @api {get} /user get
 * @apiName get
 * @apiDescription Get the authenticated user
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.get({ ... });
 */

/**
 * @api {get} /users getAll
 * @apiName getAll
 * @apiDescription Get all users
 * @apiGroup users
 *
 * @apiParam {Number} [since]  The integer ID of the last User that you’ve seen.
 * @apiExample {js} ex:
github.users.getAll({ ... });
 */

/**
 * @api {get} /user/:id getById
 * @apiName getById
 * @apiDescription Get a single user by GitHub ID
 * @apiGroup users
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.users.getById({ ... });
 */

/**
 * @api {get} /user/emails getEmails
 * @apiName getEmails
 * @apiDescription List email addresses for a user
 * @apiGroup users
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getEmails({ ... });
 */

/**
 * @api {get} /users/followers getFollowers
 * @apiName getFollowers
 * @apiDescription List the authenticated user's followers
 * @apiGroup users
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getFollowers({ ... });
 */

/**
 * @api {get} /users/:user/followers getFollowersForUser
 * @apiName getFollowersForUser
 * @apiDescription List a user's followers
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getFollowersForUser({ ... });
 */

/**
 * @api {get} /user/following getFollowing
 * @apiName getFollowing
 * @apiDescription List who the authenticated user is following
 * @apiGroup users
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getFollowing({ ... });
 */

/**
 * @api {get} /users/:user/following getFollowingForUser
 * @apiName getFollowingForUser
 * @apiDescription List who a user is following
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getFollowingForUser({ ... });
 */

/**
 * @api {get} /users/:user getForUser
 * @apiName getForUser
 * @apiDescription Get a single user
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.users.getForUser({ ... });
 */

/**
 * @api {get} /user/gpg_keys/:id getGpgKey
 * @apiName getGpgKey
 * @apiDescription Get a single GPG key. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.users.getGpgKey({ ... });
 */

/**
 * @api {get} /user/gpg_keys getGpgKeys
 * @apiName getGpgKeys
 * @apiDescription List your GPG keys. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getGpgKeys({ ... });
 */

/**
 * @api {get} /user/keys/:id getKey
 * @apiName getKey
 * @apiDescription Get a single public key
 * @apiGroup users
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.users.getKey({ ... });
 */

/**
 * @api {get} /user/keys getKeys
 * @apiName getKeys
 * @apiDescription List your public keys
 * @apiGroup users
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getKeys({ ... });
 */

/**
 * @api {get} /users/:user/keys getKeysForUser
 * @apiName getKeysForUser
 * @apiDescription List public keys for a user
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getKeysForUser({ ... });
 */

/**
 * @api {get} /user/memberships/orgs/:org getOrganizationMembership
 * @apiName getOrganizationMembership
 * @apiDescription Get your organization membership
 * @apiGroup users
 *
 * @apiParam {String} org  
 * @apiExample {js} ex:
github.users.getOrganizationMembership({ ... });
 */

/**
 * @api {get} /user/orgs getOrgs
 * @apiName getOrgs
 * @apiDescription List organizations for the authenticated user.
 * @apiGroup users
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getOrgs({ ... });
 */

/**
 * @api {get} /user/repository_invitations getRepoInvites
 * @apiName getRepoInvites
 * @apiDescription List a user's repository invitations. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.getRepoInvites({ ... });
 */

/**
 * @api {get} /user/teams getTeams
 * @apiName getTeams
 * @apiDescription Get your teams
 * @apiGroup users
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getTeams({ ... });
 */

/**
 * @api {put} /users/:user/site_admin promote
 * @apiName promote
 * @apiDescription Promote an ordinary user to a site administrator
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.users.promote({ ... });
 */

/**
 * @api {put} /users/:user/suspended suspend
 * @apiName suspend
 * @apiDescription Suspend a user
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.users.suspend({ ... });
 */

/**
 * @api {delete} /user/following/:user unfollowUser
 * @apiName unfollowUser
 * @apiDescription Unfollow a user
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.users.unfollowUser({ ... });
 */

/**
 * @api {delete} /users/:user/suspended unsuspend
 * @apiName unsuspend
 * @apiDescription Unsuspend a user
 * @apiGroup users
 *
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.users.unsuspend({ ... });
 */

/**
 * @api {patch} /user update
 * @apiName update
 * @apiDescription Update the authenticated user
 * @apiGroup users
 *
 * @apiParam {String} [name]  The new name of the user
 * @apiParam {String} [email]  Publicly visible email address.
 * @apiParam {String} [blog]  The new blog URL of the user.
 * @apiParam {String} [company]  The new company of the user.
 * @apiParam {String} [location]  The new location of the user.
 * @apiParam {Boolean} [hireable]  The new hiring availability of the user.
 * @apiParam {String} [bio]  The new short biography of the user.
 * @apiExample {js} ex:
github.users.update({ ... });
 */

