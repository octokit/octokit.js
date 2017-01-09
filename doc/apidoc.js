/**
 * @api {get} /notifications/threads/:id/subscription checkNotificationThreadSubscription
 * @apiVersion 5.0.0
 * @apiName checkNotificationThreadSubscription
 * @apiDescription Check to see if the current user is subscribed to a thread.
 * @apiGroup activity
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.activity.checkNotificationThreadSubscription({ ... });
 */

/**
 * @api {get} /user/starred/:owner/:repo checkStarringRepo
 * @apiVersion 5.0.0
 * @apiName checkStarringRepo
 * @apiDescription Check if you are starring a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.checkStarringRepo({ ... });
 */

/**
 * @api {delete} /notifications/threads/:id/subscription deleteNotificationThreadSubscription
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @api {get} /repos/:owner/:repo/events getEventsForRepo
 * @apiVersion 5.0.0
 * @apiName getEventsForRepo
 * @apiDescription List repository events
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events getEventsForRepoIssues
 * @apiVersion 5.0.0
 * @apiName getEventsForRepoIssues
 * @apiDescription List issue events for a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoIssues({ ... });
 */

/**
 * @api {get} /networks/:owner/:repo/events getEventsForRepoNetwork
 * @apiVersion 5.0.0
 * @apiName getEventsForRepoNetwork
 * @apiDescription List public events for a network of repositories
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoNetwork({ ... });
 */

/**
 * @api {get} /users/:owner/events getEventsForUser
 * @apiVersion 5.0.0
 * @apiName getEventsForUser
 * @apiDescription List events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUser({ ... });
 */

/**
 * @api {get} /users/:owner/events/orgs/:org getEventsForUserOrg
 * @apiVersion 5.0.0
 * @apiName getEventsForUserOrg
 * @apiDescription List events for a user's organization
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserOrg({ ... });
 */

/**
 * @api {get} /users/:owner/events/public getEventsForUserPublic
 * @apiVersion 5.0.0
 * @apiName getEventsForUserPublic
 * @apiDescription List public events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserPublic({ ... });
 */

/**
 * @api {get} /users/:owner/received_events getEventsReceived
 * @apiVersion 5.0.0
 * @apiName getEventsReceived
 * @apiDescription List events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceived({ ... });
 */

/**
 * @api {get} /users/:owner/received_events/public getEventsReceivedPublic
 * @apiVersion 5.0.0
 * @apiName getEventsReceivedPublic
 * @apiDescription List public events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceivedPublic({ ... });
 */

/**
 * @api {get} /feeds getFeeds
 * @apiVersion 5.0.0
 * @apiName getFeeds
 * @apiDescription Get all feeds available for the authenticated user.
 * @apiGroup activity
 *
 * @apiExample {js} ex:
github.activity.getFeeds({ ... });
 */

/**
 * @api {get} /notifications/threads/:id getNotificationThread
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @api {get} /repos/:owner/:repo/notifications getNotificationsForUser
 * @apiVersion 5.0.0
 * @apiName getNotificationsForUser
 * @apiDescription Get all notifications for the given user.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [all=false]  If true, show notifications marked as read. Default: false
 * @apiParam {Boolean} [participating=false]  If true, only shows notifications in which the user is directly participating or mentioned. Default: false
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {String} [before]  Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @apiExample {js} ex:
github.activity.getNotificationsForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/subscription getRepoSubscription
 * @apiVersion 5.0.0
 * @apiName getRepoSubscription
 * @apiDescription Get a Repository Subscription.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getRepoSubscription({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stargazers getStargazersForRepo
 * @apiVersion 5.0.0
 * @apiName getStargazersForRepo
 * @apiDescription List Stargazers
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStargazersForRepo({ ... });
 */

/**
 * @api {get} /user/starred getStarredRepos
 * @apiVersion 5.0.0
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
 * @api {get} /users/:owner/starred getStarredReposForUser
 * @apiVersion 5.0.0
 * @apiName getStarredReposForUser
 * @apiDescription List repositories being starred by a user
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStarredReposForUser({ ... });
 */

/**
 * @api {get} /user/subscriptions getWatchedRepos
 * @apiVersion 5.0.0
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
 * @api {get} /users/:owner/subscriptions getWatchedReposForUser
 * @apiVersion 5.0.0
 * @apiName getWatchedReposForUser
 * @apiDescription List repositories being watched by a user.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchedReposForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/subscribers getWatchersForRepo
 * @apiVersion 5.0.0
 * @apiName getWatchersForRepo
 * @apiDescription Get watchers for repository.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchersForRepo({ ... });
 */

/**
 * @api {patch} /notifications/threads/:id markNotificationThreadAsRead
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
 * @apiName markNotificationsAsRead
 * @apiDescription Mark notifications as read for authenticated user.
 * @apiGroup activity
 *
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsRead({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/notifications markNotificationsAsReadForRepo
 * @apiVersion 5.0.0
 * @apiName markNotificationsAsReadForRepo
 * @apiDescription Mark notifications in a repo as read.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsReadForRepo({ ... });
 */

/**
 * @api {put} /notifications/threads/:id/subscription setNotificationThreadSubscription
 * @apiVersion 5.0.0
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
 * @api {put} /repos/:owner/:repo/subscription setRepoSubscription
 * @apiVersion 5.0.0
 * @apiName setRepoSubscription
 * @apiDescription Set a Repository Subscription
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [subscribed]  Determines if notifications should be received from this repository.
 * @apiParam {Boolean} [ignored]  Determines if all notifications should be blocked from this repository.
 * @apiExample {js} ex:
github.activity.setRepoSubscription({ ... });
 */

/**
 * @api {put} /user/starred/:owner/:repo starRepo
 * @apiVersion 5.0.0
 * @apiName starRepo
 * @apiDescription Star a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.starRepo({ ... });
 */

/**
 * @api {delete} /user/starred/:owner/:repo unstarRepo
 * @apiVersion 5.0.0
 * @apiName unstarRepo
 * @apiDescription Unstar a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unstarRepo({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/subscription unwatchRepo
 * @apiVersion 5.0.0
 * @apiName unwatchRepo
 * @apiDescription Unwatch a repository.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unwatchRepo({ ... });
 */

/**
 * @api {get} /applications/:client_id/tokens/:access_token check
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
 * @apiName getLicense
 * @apiDescription Get license information
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getLicense({ ... });
 */

/**
 * @api {post} /staff/indexing_jobs queueIndexingJob
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
 * @apiName getCommits
 * @apiDescription List gist commits
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.getCommits({ ... });
 */

/**
 * @api {get} /users/:owner/gists getForUser
 * @apiVersion 5.0.0
 * @apiName getForUser
 * @apiDescription List a user's gists
 * @apiGroup gists
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.gists.getForUser({ ... });
 */

/**
 * @api {get} /gists/:id/forks getForks
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
 * @apiName unstar
 * @apiDescription Unstar a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.unstar({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/blobs createBlob
 * @apiVersion 5.0.0
 * @apiName createBlob
 * @apiDescription Create a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} content  
 * @apiParam {String} encoding  
 * @apiExample {js} ex:
github.gitdata.createBlob({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/commits createCommit
 * @apiVersion 5.0.0
 * @apiName createCommit
 * @apiDescription Create a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/git/refs createReference
 * @apiVersion 5.0.0
 * @apiName createReference
 * @apiDescription Create a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.createReference({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/tags createTag
 * @apiVersion 5.0.0
 * @apiName createTag
 * @apiDescription Create a Tag Object
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/git/trees createTree
 * @apiVersion 5.0.0
 * @apiName createTree
 * @apiDescription Create a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Json} tree  Array of Hash objects (of path, mode, type and sha) specifying a tree structure
 * @apiParam {String} [base_tree]  String of the SHA1 of the tree you want to update with new data
 * @apiExample {js} ex:
github.gitdata.createTree({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/git/refs/:ref deleteReference
 * @apiVersion 5.0.0
 * @apiName deleteReference
 * @apiDescription Delete a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.deleteReference({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/blobs/:sha getBlob
 * @apiVersion 5.0.0
 * @apiName getBlob
 * @apiDescription Get a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getBlob({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/commits/:sha getCommit
 * @apiVersion 5.0.0
 * @apiName getCommit
 * @apiDescription Get a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/commits/:sha getCommitSignatureVerification
 * @apiVersion 5.0.0
 * @apiName getCommitSignatureVerification
 * @apiDescription Get a Commit Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommitSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs/:ref getReference
 * @apiVersion 5.0.0
 * @apiName getReference
 * @apiDescription Get a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.getReference({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs getReferences
 * @apiVersion 5.0.0
 * @apiName getReferences
 * @apiDescription Get all References
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getReferences({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/tags/:sha getTag
 * @apiVersion 5.0.0
 * @apiName getTag
 * @apiDescription Get a Tag
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTag({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/tags/:sha getTagSignatureVerification
 * @apiVersion 5.0.0
 * @apiName getTagSignatureVerification
 * @apiDescription Get a Tag Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTagSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs/tags getTags
 * @apiVersion 5.0.0
 * @apiName getTags
 * @apiDescription Get all tag References
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getTags({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/trees/:sha getTree
 * @apiVersion 5.0.0
 * @apiName getTree
 * @apiDescription Get a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Boolean} [recursive]  
 * @apiExample {js} ex:
github.gitdata.getTree({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/git/refs/:ref updateReference
 * @apiVersion 5.0.0
 * @apiName updateReference
 * @apiDescription Update a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha  
 * @apiParam {Boolean} [force=false]  Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
 * @apiExample {js} ex:
github.gitdata.updateReference({ ... });
 */

/**
 * @api {post} /installations/:installation_id/access_tokens createInstallationToken
 * @apiVersion 5.0.0
 * @apiName createInstallationToken
 * @apiDescription Create a new installation token. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {Number} installation_id  The id of the installation for this integration.
 * @apiParam {Number} [user_id]  The id of the user for whom the integration is acting on behalf of.
 * @apiExample {js} ex:
github.integrations.createInstallationToken({ ... });
 */

/**
 * @api {get} /integration/installations getInstallations
 * @apiVersion 5.0.0
 * @apiName getInstallations
 * @apiDescription List the integration's installations. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.integrations.getInstallations({ ... });
 */

/**
 * @api {post} /integration/identity/user getUserIdentity
 * @apiVersion 5.0.0
 * @apiName getUserIdentity
 * @apiDescription Request identity of user. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} [nonce]  
 * @apiExample {js} ex:
github.integrations.getUserIdentity({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/assignees addAssigneesToIssue
 * @apiVersion 5.0.0
 * @apiName addAssigneesToIssue
 * @apiDescription Add assignees to an issue.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} assignees  Logins for the users that should be added to the issue.
 * @apiExample {js} ex:
github.issues.addAssigneesToIssue({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/labels addLabels
 * @apiVersion 5.0.0
 * @apiName addLabels
 * @apiDescription Add labels to an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  
 * @apiExample {js} ex:
github.issues.addLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/assignees/:assignee checkAssignee
 * @apiVersion 5.0.0
 * @apiName checkAssignee
 * @apiDescription Check assignee
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} assignee  Login for the user that this issue should be assigned to.
 * @apiExample {js} ex:
github.issues.checkAssignee({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues create
 * @apiVersion 5.0.0
 * @apiName create
 * @apiDescription Create an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/issues/:number/comments createComment
 * @apiVersion 5.0.0
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.createComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/labels createLabel
 * @apiVersion 5.0.0
 * @apiName createLabel
 * @apiDescription Create a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.createLabel({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/milestones createMilestone
 * @apiVersion 5.0.0
 * @apiName createMilestone
 * @apiDescription Create a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String} [state=open]  
 * @apiParam {String} [description]  
 * @apiParam {Date} [due_on]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.issues.createMilestone({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/comments/:id deleteComment
 * @apiVersion 5.0.0
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.deleteComment({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/labels/:name deleteLabel
 * @apiVersion 5.0.0
 * @apiName deleteLabel
 * @apiDescription Delete a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.deleteLabel({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/milestones/:number deleteMilestone
 * @apiVersion 5.0.0
 * @apiName deleteMilestone
 * @apiDescription Delete a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.deleteMilestone({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/issues/:number edit
 * @apiVersion 5.0.0
 * @apiName edit
 * @apiDescription Edit an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/issues/comments/:id editComment
 * @apiVersion 5.0.0
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.editComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number get
 * @apiVersion 5.0.0
 * @apiName get
 * @apiDescription Get a single issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.get({ ... });
 */

/**
 * @api {get} /issues getAll
 * @apiVersion 5.0.0
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
 * @api {get} /repos/:owner/:repo/assignees getAssignees
 * @apiVersion 5.0.0
 * @apiName getAssignees
 * @apiDescription List assignees
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.issues.getAssignees({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments/:id getComment
 * @apiVersion 5.0.0
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/comments getComments
 * @apiVersion 5.0.0
 * @apiName getComments
 * @apiDescription List comments on an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments getCommentsForRepo
 * @apiVersion 5.0.0
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/issues/events/:id getEvent
 * @apiVersion 5.0.0
 * @apiName getEvent
 * @apiDescription Get a single event
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getEvent({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/events getEvents
 * @apiVersion 5.0.0
 * @apiName getEvents
 * @apiDescription List events for an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEvents({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events getEventsForRepo
 * @apiVersion 5.0.0
 * @apiName getEventsForRepo
 * @apiDescription List events for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/timeline getEventsTimeline
 * @apiVersion 5.0.0
 * @apiName getEventsTimeline
 * @apiDescription List events for an issue. (In preview period. See README.)
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsTimeline({ ... });
 */

/**
 * @api {get} /orgs/:org/issues getForOrg
 * @apiVersion 5.0.0
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
 * @api {get} /repos/:owner/:repo/issues getForRepo
 * @apiVersion 5.0.0
 * @apiName getForRepo
 * @apiDescription List issues for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @apiVersion 5.0.0
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
 * @api {get} /repos/:owner/:repo/issues/:number/labels getIssueLabels
 * @apiVersion 5.0.0
 * @apiName getIssueLabels
 * @apiDescription List labels on an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getIssueLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/labels/:name getLabel
 * @apiVersion 5.0.0
 * @apiName getLabel
 * @apiDescription Get a single label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.getLabel({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/labels getLabels
 * @apiVersion 5.0.0
 * @apiName getLabels
 * @apiDescription List all labels for this repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones/:number getMilestone
 * @apiVersion 5.0.0
 * @apiName getMilestone
 * @apiDescription Get a single milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestone({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones/:number/labels getMilestoneLabels
 * @apiVersion 5.0.0
 * @apiName getMilestoneLabels
 * @apiDescription Get labels for every issue in a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestoneLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones getMilestones
 * @apiVersion 5.0.0
 * @apiName getMilestones
 * @apiDescription List milestones for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {put} /repos/:owner/:repo/issues/:number/lock lock
 * @apiVersion 5.0.0
 * @apiName lock
 * @apiDescription Users with push access can lock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.lock({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/labels removeAllLabels
 * @apiVersion 5.0.0
 * @apiName removeAllLabels
 * @apiDescription Remove all labels from an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.removeAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/assignees removeAssigneesFromIssue
 * @apiVersion 5.0.0
 * @apiName removeAssigneesFromIssue
 * @apiDescription Remove assignees from an issue.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Json} body  JSON object that contains assignees array of logins for the users that should be removed from the issue.
 * @apiExample {js} ex:
github.issues.removeAssigneesFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/labels/:name removeLabel
 * @apiVersion 5.0.0
 * @apiName removeLabel
 * @apiDescription Remove a label from an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.removeLabel({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/issues/:number/labels replaceAllLabels
 * @apiVersion 5.0.0
 * @apiName replaceAllLabels
 * @apiDescription Replace all labels for an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  Sending an empty array ([]) will remove all Labels from the Issue.
 * @apiExample {js} ex:
github.issues.replaceAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/lock unlock
 * @apiVersion 5.0.0
 * @apiName unlock
 * @apiDescription Users with push access can unlock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.unlock({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/labels/:oldname updateLabel
 * @apiVersion 5.0.0
 * @apiName updateLabel
 * @apiDescription Update a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} oldname  The old name of the label.
 * @apiParam {String} name  The new name of the label.
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.updateLabel({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/milestones/:number updateMilestone
 * @apiVersion 5.0.0
 * @apiName updateMilestone
 * @apiDescription Update a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {delete} /repos/:owner/:repo/import cancelImport
 * @apiVersion 5.0.0
 * @apiName cancelImport
 * @apiDescription Cancel an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.cancelImport({ ... });
 */

/**
 * @api {delete} /orgs/:org/migrations/:id/archive deleteMigrationArchive
 * @apiVersion 5.0.0
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
 * @api {get} /repos/:owner/:repo/import/authors getImportCommitAuthors
 * @apiVersion 5.0.0
 * @apiName getImportCommitAuthors
 * @apiDescription Get import commit authors. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [since]  Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step.
 * @apiExample {js} ex:
github.migrations.getImportCommitAuthors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/import getImportProgress
 * @apiVersion 5.0.0
 * @apiName getImportProgress
 * @apiDescription Get import progress. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.getImportProgress({ ... });
 */

/**
 * @api {get} /:owner/:name/import/large_files getLargeImportFiles
 * @apiVersion 5.0.0
 * @apiName getLargeImportFiles
 * @apiDescription List files larger than 100MB found during the import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.migrations.getLargeImportFiles({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations/:id/archive getMigrationArchiveLink
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @api {patch} /repos/:owner/:repo/import/authors/:author_id mapImportCommitAuthor
 * @apiVersion 5.0.0
 * @apiName mapImportCommitAuthor
 * @apiDescription Map a commit author. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} author_id  The commit author id.
 * @apiParam {String} [email]  The new Git author email.
 * @apiParam {String} [name]  The new Git author name.
 * @apiExample {js} ex:
github.migrations.mapImportCommitAuthor({ ... });
 */

/**
 * @api {patch} /:owner/:name/import/lfs setImportLfsPreference
 * @apiVersion 5.0.0
 * @apiName setImportLfsPreference
 * @apiDescription Set import LFS preference. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.migrations.setImportLfsPreference({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/import startImport
 * @apiVersion 5.0.0
 * @apiName startImport
 * @apiDescription Start an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @api {patch} /repos/:owner/:repo/import updateImport
 * @apiVersion 5.0.0
 * @apiName updateImport
 * @apiDescription Update existing import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.updateImport({ ... });
 */

/**
 * @api {get} /emojis getEmojis
 * @apiVersion 5.0.0
 * @apiName getEmojis
 * @apiDescription Lists all the emojis available to use on GitHub.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getEmojis({ ... });
 */

/**
 * @api {get} /gitignore/templates/:name getGitignoreTemplate
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
 * @apiName getGitignoreTemplates
 * @apiDescription Lists available gitignore templates
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getGitignoreTemplates({ ... });
 */

/**
 * @api {get} /licenses/:license getLicense
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
 * @apiName getLicenses
 * @apiDescription List all licenses. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getLicenses({ ... });
 */

/**
 * @api {get} /meta getMeta
 * @apiVersion 5.0.0
 * @apiName getMeta
 * @apiDescription This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getMeta({ ... });
 */

/**
 * @api {get} /rate_limit getRateLimit
 * @apiVersion 5.0.0
 * @apiName getRateLimit
 * @apiDescription Get your current rate limit status
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getRateLimit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/license getRepoLicense
 * @apiVersion 5.0.0
 * @apiName getRepoLicense
 * @apiDescription Get the contents of a repository's license. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.misc.getRepoLicense({ ... });
 */

/**
 * @api {post} /markdown renderMarkdown
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @api {get} /orgs/:org/members/:owner checkMembership
 * @apiVersion 5.0.0
 * @apiName checkMembership
 * @apiDescription Check membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} owner  
 * @apiExample {js} ex:
github.orgs.checkMembership({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members/:user checkPublicMembership
 * @apiVersion 5.0.0
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
 * @api {get} /teams/:id/repos/:owner/:repo checkTeamRepo
 * @apiVersion 5.0.0
 * @apiName checkTeamRepo
 * @apiDescription Check if a team manages a repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.checkTeamRepo({ ... });
 */

/**
 * @api {delete} /orgs/:org/public_members/:user concealMembership
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
 * @apiName deleteTeam
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.orgs.deleteTeam({ ... });
 */

/**
 * @api {delete} /teams/:id/repos/:owner/:repo deleteTeamRepo
 * @apiVersion 5.0.0
 * @apiName deleteTeamRepo
 * @apiDescription Remove team repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.deleteTeamRepo({ ... });
 */

/**
 * @api {patch} /orgs/:org/hooks/:id editHook
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @api {get} /users/:owner/orgs getForUser
 * @apiVersion 5.0.0
 * @apiName getForUser
 * @apiDescription List public organization memberships for the specified user.
 * @apiGroup orgs
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getForUser({ ... });
 */

/**
 * @api {get} /orgs/:org/hooks/:id getHook
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @api {get} /repos/:owner/:repo/pulls/:number/merge checkMerged
 * @apiVersion 5.0.0
 * @apiName checkMerged
 * @apiDescription Get if a pull request has been merged
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.checkMerged({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls create
 * @apiVersion 5.0.0
 * @apiName create
 * @apiDescription Create a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  The title of the pull request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiExample {js} ex:
github.pullRequests.create({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/:number/comments createComment
 * @apiVersion 5.0.0
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/pulls/:number/comments createCommentReply
 * @apiVersion 5.0.0
 * @apiName createCommentReply
 * @apiDescription Reply to existing pull request comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiParam {Number} in_reply_to  The comment id to reply to.
 * @apiExample {js} ex:
github.pullRequests.createCommentReply({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls createFromIssue
 * @apiVersion 5.0.0
 * @apiName createFromIssue
 * @apiDescription Create a pull request from an existing issue
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} issue  The issue number in this repository to turn into a Pull Request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiExample {js} ex:
github.pullRequests.createFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/pulls/comments/:number deleteComment
 * @apiVersion 5.0.0
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.deleteComment({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/pulls/comments/:number editComment
 * @apiVersion 5.0.0
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.pullRequests.editComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number get
 * @apiVersion 5.0.0
 * @apiName get
 * @apiDescription Get a single pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.get({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls getAll
 * @apiVersion 5.0.0
 * @apiName getAll
 * @apiDescription List pull requests
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/pulls/comments/:number getComment
 * @apiVersion 5.0.0
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.getComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/comments getComments
 * @apiVersion 5.0.0
 * @apiName getComments
 * @apiDescription List comments on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments getCommentsForRepo
 * @apiVersion 5.0.0
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/pulls/:number/commits getCommits
 * @apiVersion 5.0.0
 * @apiName getCommits
 * @apiDescription List commits on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getCommits({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/files getFiles
 * @apiVersion 5.0.0
 * @apiName getFiles
 * @apiDescription List pull requests files
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getFiles({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/pulls/:number/merge merge
 * @apiVersion 5.0.0
 * @apiName merge
 * @apiDescription Merge a pull request (Merge Button)
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [commit_title]  Title for the automatic commit message. (In preview period. See README.)
 * @apiParam {String} [commit_message]  Extra detail to append to automatic commit message.
 * @apiParam {String} [sha]  SHA that pull request head must match to allow merge
 * @apiParam {String} [merge_method=merge]  Merge method to use. Possible values are `merge`, `squash`, or `rebase`. (In preview period. See README.)
 * @apiExample {js} ex:
github.pullRequests.merge({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/pulls/:number update
 * @apiVersion 5.0.0
 * @apiName update
 * @apiDescription Update a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [title]  The title of the pull request.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiParam {String} [state=open]  
 * @apiExample {js} ex:
github.pullRequests.update({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/comments/:id/reactions createForCommitComment
 * @apiVersion 5.0.0
 * @apiName createForCommitComment
 * @apiDescription Create reaction for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForCommitComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/reactions createForIssue
 * @apiVersion 5.0.0
 * @apiName createForIssue
 * @apiDescription Create reaction for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssue({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/comments/:id/reactions createForIssueComment
 * @apiVersion 5.0.0
 * @apiName createForIssueComment
 * @apiDescription Create reaction for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssueComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/comments/:id/reactions createForPullRequestReviewComment
 * @apiVersion 5.0.0
 * @apiName createForPullRequestReviewComment
 * @apiDescription Create reaction for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForPullRequestReviewComment({ ... });
 */

/**
 * @api {delete} /reactions/:id delete
 * @apiVersion 5.0.0
 * @apiName delete
 * @apiDescription Delete a reaction. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.reactions.delete({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments/:id/reactions getForCommitComment
 * @apiVersion 5.0.0
 * @apiName getForCommitComment
 * @apiDescription List reactions for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForCommitComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/reactions getForIssue
 * @apiVersion 5.0.0
 * @apiName getForIssue
 * @apiDescription List reactions for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssue({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments/:id/reactions getForIssueComment
 * @apiVersion 5.0.0
 * @apiName getForIssueComment
 * @apiDescription List reactions for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssueComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments/:id/reactions getForPullRequestReviewComment
 * @apiVersion 5.0.0
 * @apiName getForPullRequestReviewComment
 * @apiDescription List reactions for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForPullRequestReviewComment({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/collaborators/:collabuser addCollaborator
 * @apiVersion 5.0.0
 * @apiName addCollaborator
 * @apiDescription Add user as a collaborator
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} collabuser  
 * @apiParam {String} [permission=push]  `pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository.
 * @apiExample {js} ex:
github.repos.addCollaborator({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts addProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 5.0.0
 * @apiName addProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Add required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.addProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams addProtectedBranchTeamRestrictions
 * @apiVersion 5.0.0
 * @apiName addProtectedBranchTeamRestrictions
 * @apiDescription Add team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.addProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/restrictions/users addProtectedBranchUserRestrictions
 * @apiVersion 5.0.0
 * @apiName addProtectedBranchUserRestrictions
 * @apiDescription Add user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.addProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/collaborators/:collabuser checkCollaborator
 * @apiVersion 5.0.0
 * @apiName checkCollaborator
 * @apiDescription Check if user is a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} collabuser  
 * @apiExample {js} ex:
github.repos.checkCollaborator({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/compare/:base...:head compareCommits
 * @apiVersion 5.0.0
 * @apiName compareCommits
 * @apiDescription Compare two commits.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiExample {js} ex:
github.repos.compareCommits({ ... });
 */

/**
 * @api {post} /user/repos create
 * @apiVersion 5.0.0
 * @apiName create
 * @apiDescription Create a new repository for the authenticated user.
 * @apiGroup repos
 *
 * @apiParam {String} name  
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {String} [description]  
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.create({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/commits/:sha/comments createCommitComment
 * @apiVersion 5.0.0
 * @apiName createCommitComment
 * @apiDescription Create a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/deployments createDeployment
 * @apiVersion 5.0.0
 * @apiName createDeployment
 * @apiDescription Create a deployment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/deployments/:id/statuses createDeploymentStatus
 * @apiVersion 5.0.0
 * @apiName createDeploymentStatus
 * @apiDescription Create a deployment status.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {put} /repos/:owner/:repo/contents/:path createFile
 * @apiVersion 5.0.0
 * @apiName createFile
 * @apiDescription Create a new file in the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 5.0.0
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
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {Number} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.createForOrg({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks createHook
 * @apiVersion 5.0.0
 * @apiName createHook
 * @apiDescription Create a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {Json} config  A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {Array} [events=["push"]]  Determines what events the hook is triggered for. Default: `['push']`.
 * @apiParam {Boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} ex:
github.repos.createHook({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/keys createKey
 * @apiVersion 5.0.0
 * @apiName createKey
 * @apiDescription Add a new deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String} key  
 * @apiParam {Boolean} [read_only]  If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
 * @apiExample {js} ex:
github.repos.createKey({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects createProject
 * @apiVersion 5.0.0
 * @apiName createProject
 * @apiDescription Create a project.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.createProject({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects/columns/:id/cards createProjectCard
 * @apiVersion 5.0.0
 * @apiName createProjectCard
 * @apiDescription Create a project card.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [note]  The note of the card.
 * @apiParam {String} [content_id]  The id of the Issue or Pull Request to associate with this card.
 * @apiParam {String} [content_type]  The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'.
 * @apiExample {js} ex:
github.repos.createProjectCard({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects/:number/columns createProjectColumn
 * @apiVersion 5.0.0
 * @apiName createProjectColumn
 * @apiDescription Create a project column.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.repos.createProjectColumn({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases createRelease
 * @apiVersion 5.0.0
 * @apiName createRelease
 * @apiDescription Create a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/statuses/:sha createStatus
 * @apiVersion 5.0.0
 * @apiName createStatus
 * @apiDescription Create a status.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {delete} /repos/:owner/:repo delete
 * @apiVersion 5.0.0
 * @apiName delete
 * @apiDescription Delete a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.delete({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/assets/:id deleteAsset
 * @apiVersion 5.0.0
 * @apiName deleteAsset
 * @apiDescription Delete a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteAsset({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/comments/:id deleteCommitComment
 * @apiVersion 5.0.0
 * @apiName deleteCommitComment
 * @apiDescription Delete a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteCommitComment({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/downloads/:id deleteDownload
 * @apiVersion 5.0.0
 * @apiName deleteDownload
 * @apiDescription Delete a download.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteDownload({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/contents/:path deleteFile
 * @apiVersion 5.0.0
 * @apiName deleteFile
 * @apiDescription Delete a file.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {delete} /repos/:owner/:repo/hooks/:id deleteHook
 * @apiVersion 5.0.0
 * @apiName deleteHook
 * @apiDescription Deleate a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteHook({ ... });
 */

/**
 * @api {delete} /repositories/:repo/invitations/:id deleteInvite
 * @apiVersion 5.0.0
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
 * @api {delete} /repos/:owner/:repo/keys/:id deleteKey
 * @apiVersion 5.0.0
 * @apiName deleteKey
 * @apiDescription Remove a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteKey({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/projects/:number deleteProject
 * @apiVersion 5.0.0
 * @apiName deleteProject
 * @apiDescription Delete a project.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.repos.deleteProject({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/projects/columns/cards/:id deleteProjectCard
 * @apiVersion 5.0.0
 * @apiName deleteProjectCard
 * @apiDescription Delete a project card.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteProjectCard({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/projects/columns/:id deleteProjectColumn
 * @apiVersion 5.0.0
 * @apiName deleteProjectColumn
 * @apiDescription Delete a project column.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteProjectColumn({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/:id deleteRelease
 * @apiVersion 5.0.0
 * @apiName deleteRelease
 * @apiDescription Delete a release
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteRelease({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo edit
 * @apiVersion 5.0.0
 * @apiName edit
 * @apiDescription Update a repo.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiParam {String} repo  
 * @apiParam {String} [description]  
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {String} [default_branch]  Updates the default branch for this repository.
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.edit({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/releases/assets/:id editAsset
 * @apiVersion 5.0.0
 * @apiName editAsset
 * @apiDescription Edit a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} [label]  An alternate short description of the asset. Used in place of the filename.
 * @apiExample {js} ex:
github.repos.editAsset({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/hooks/:id editHook
 * @apiVersion 5.0.0
 * @apiName editHook
 * @apiDescription Edit a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/releases/:id editRelease
 * @apiVersion 5.0.0
 * @apiName editRelease
 * @apiDescription Edit a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/forks fork
 * @apiVersion 5.0.0
 * @apiName fork
 * @apiDescription Create a fork.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [organization]  Optional parameter to specify the organization name if forking into an organization.
 * @apiExample {js} ex:
github.repos.fork({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo get
 * @apiVersion 5.0.0
 * @apiName get
 * @apiDescription Get a repo for a user.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.get({ ... });
 */

/**
 * @api {get} /user/repos getAll
 * @apiVersion 5.0.0
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
 * @api {get} /repos/:owner/:repo/comments getAllCommitComments
 * @apiVersion 5.0.0
 * @apiName getAllCommitComments
 * @apiDescription List commit comments for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getAllCommitComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/:archive_format/:ref getArchiveLink
 * @apiVersion 5.0.0
 * @apiName getArchiveLink
 * @apiDescription Get archive link.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} archive_format=tarball  Either tarball or zipball, Deafult: tarball.
 * @apiParam {String} [ref]  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.repos.getArchiveLink({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/assets/:id getAsset
 * @apiVersion 5.0.0
 * @apiName getAsset
 * @apiDescription Get a single release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getAsset({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch getBranch
 * @apiVersion 5.0.0
 * @apiName getBranch
 * @apiDescription Get branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranch({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection getBranchProtection
 * @apiVersion 5.0.0
 * @apiName getBranchProtection
 * @apiDescription Get branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranchProtection({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches getBranches
 * @apiVersion 5.0.0
 * @apiName getBranches
 * @apiDescription List branches. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [protected]  Set to true to only return protected branches
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranches({ ... });
 */

/**
 * @api {get} /repositories/:id getById
 * @apiVersion 5.0.0
 * @apiName getById
 * @apiDescription Get a single repo by id.
 * @apiGroup repos
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getById({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/clones getClones
 * @apiVersion 5.0.0
 * @apiName getClones
 * @apiDescription Get the total number of clones and breakdown per day or week for the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getClones({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/collaborators getCollaborators
 * @apiVersion 5.0.0
 * @apiName getCollaborators
 * @apiDescription List collaborators
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCollaborators({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:sha/status getCombinedStatus
 * @apiVersion 5.0.0
 * @apiName getCombinedStatus
 * @apiDescription Get the combined status for a specific ref.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCombinedStatus({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:sha getCommit
 * @apiVersion 5.0.0
 * @apiName getCommit
 * @apiDescription Get a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.repos.getCommit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments/:id getCommitComment
 * @apiVersion 5.0.0
 * @apiName getCommitComment
 * @apiDescription Get a single commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getCommitComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:sha/comments getCommitComments
 * @apiVersion 5.0.0
 * @apiName getCommitComments
 * @apiDescription List comments for a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCommitComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits getCommits
 * @apiVersion 5.0.0
 * @apiName getCommits
 * @apiDescription List commits on a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/contents/:path getContent
 * @apiVersion 5.0.0
 * @apiName getContent
 * @apiDescription Get the contents of a file or directory in a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} path  The content path.
 * @apiParam {String} [ref]  The String name of the Commit/Branch/Tag. Defaults to master.
 * @apiExample {js} ex:
github.repos.getContent({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/contributors getContributors
 * @apiVersion 5.0.0
 * @apiName getContributors
 * @apiDescription Get contributors for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [anon]  Set to 1 or true to include anonymous contributors in results.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getContributors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/deployments/:id/statuses getDeploymentStatuses
 * @apiVersion 5.0.0
 * @apiName getDeploymentStatuses
 * @apiDescription List deployment statuses.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDeploymentStatuses({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/deployments getDeployments
 * @apiVersion 5.0.0
 * @apiName getDeployments
 * @apiDescription List deployments.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/downloads/:id getDownload
 * @apiVersion 5.0.0
 * @apiName getDownload
 * @apiDescription Get a single download.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDownload({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/downloads getDownloads
 * @apiVersion 5.0.0
 * @apiName getDownloads
 * @apiDescription List downloads for repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getDownloads({ ... });
 */

/**
 * @api {get} /orgs/:org/repos getForOrg
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @api {get} /repos/:owner/:repo/forks getForks
 * @apiVersion 5.0.0
 * @apiName getForks
 * @apiDescription List forks.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [sort=newest]  Possible values: `newest`, `oldest`, `stargazers`, default: `newest`.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForks({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/hooks/:id getHook
 * @apiVersion 5.0.0
 * @apiName getHook
 * @apiDescription Get single hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getHook({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/hooks getHooks
 * @apiVersion 5.0.0
 * @apiName getHooks
 * @apiDescription List hooks.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getHooks({ ... });
 */

/**
 * @api {get} /repositories/:repo/invitations getInvites
 * @apiVersion 5.0.0
 * @apiName getInvites
 * @apiDescription List invitations for a repository. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getInvites({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/keys/:id getKey
 * @apiVersion 5.0.0
 * @apiName getKey
 * @apiDescription Get a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getKey({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/keys getKeys
 * @apiVersion 5.0.0
 * @apiName getKeys
 * @apiDescription List deploy keys.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getKeys({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/languages getLanguages
 * @apiVersion 5.0.0
 * @apiName getLanguages
 * @apiDescription Get languages for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getLanguages({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds/latest getLatestPagesBuild
 * @apiVersion 5.0.0
 * @apiName getLatestPagesBuild
 * @apiDescription Get latest Pages build
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/latest getLatestRelease
 * @apiVersion 5.0.0
 * @apiName getLatestRelease
 * @apiDescription Get the latest release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages getPages
 * @apiVersion 5.0.0
 * @apiName getPages
 * @apiDescription Get information about a Pages site. (Use preview header to include additional info.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPages({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds/:id getPagesBuild
 * @apiVersion 5.0.0
 * @apiName getPagesBuild
 * @apiDescription Get a specific Pages build
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds getPagesBuilds
 * @apiVersion 5.0.0
 * @apiName getPagesBuilds
 * @apiDescription List Pages builds
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPagesBuilds({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/popular/paths getPaths
 * @apiVersion 5.0.0
 * @apiName getPaths
 * @apiDescription Get the top 10 popular contents over the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPaths({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects/:number getProject
 * @apiVersion 5.0.0
 * @apiName getProject
 * @apiDescription List a project.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.repos.getProject({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects/columns/cards/:id getProjectCard
 * @apiVersion 5.0.0
 * @apiName getProjectCard
 * @apiDescription Get project card.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getProjectCard({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects/columns/:id/cards getProjectCards
 * @apiVersion 5.0.0
 * @apiName getProjectCards
 * @apiDescription List project cards.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getProjectCards({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects/columns/:id getProjectColumn
 * @apiVersion 5.0.0
 * @apiName getProjectColumn
 * @apiDescription Get a project column.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getProjectColumn({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects/:number/columns getProjectColumns
 * @apiVersion 5.0.0
 * @apiName getProjectColumns
 * @apiDescription List a project's columns.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.repos.getProjectColumns({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects getProjects
 * @apiVersion 5.0.0
 * @apiName getProjects
 * @apiDescription List projects.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getProjects({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/required_status_checks getProtectedBranchRequiredStatusChecks
 * @apiVersion 5.0.0
 * @apiName getProtectedBranchRequiredStatusChecks
 * @apiDescription Get required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts getProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 5.0.0
 * @apiName getProtectedBranchRequiredStatusChecksContexts
 * @apiDescription List required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions getProtectedBranchRestrictions
 * @apiVersion 5.0.0
 * @apiName getProtectedBranchRestrictions
 * @apiDescription Get restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams getProtectedBranchTeamRestrictions
 * @apiVersion 5.0.0
 * @apiName getProtectedBranchTeamRestrictions
 * @apiDescription List team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions/users getProtectedBranchUserRestrictions
 * @apiVersion 5.0.0
 * @apiName getProtectedBranchUserRestrictions
 * @apiDescription List user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repositories getPublic
 * @apiVersion 5.0.0
 * @apiName getPublic
 * @apiDescription List all public repositories
 * @apiGroup repos
 *
 * @apiParam {String} [since]  The integer ID of the last Repository that you've seen.
 * @apiExample {js} ex:
github.repos.getPublic({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/readme getReadme
 * @apiVersion 5.0.0
 * @apiName getReadme
 * @apiDescription Get the README for the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [ref]  The name of the commit/branch/tag. Default: the repository’s default branch (usually master)
 * @apiExample {js} ex:
github.repos.getReadme({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/popular/referrers getReferrers
 * @apiVersion 5.0.0
 * @apiName getReferrers
 * @apiDescription Get the top 10 referrers over the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReferrers({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id getRelease
 * @apiVersion 5.0.0
 * @apiName getRelease
 * @apiDescription Get a single release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/tags/:tag getReleaseByTag
 * @apiVersion 5.0.0
 * @apiName getReleaseByTag
 * @apiDescription Get a release by tag name.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} tag  String of the tag
 * @apiExample {js} ex:
github.repos.getReleaseByTag({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases getReleases
 * @apiVersion 5.0.0
 * @apiName getReleases
 * @apiDescription List releases for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReleases({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref getShaOfCommitRef
 * @apiVersion 5.0.0
 * @apiName getShaOfCommitRef
 * @apiDescription Get the SHA-1 of a commit reference.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.repos.getShaOfCommitRef({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/code_frequency getStatsCodeFrequency
 * @apiVersion 5.0.0
 * @apiName getStatsCodeFrequency
 * @apiDescription Get the number of additions and deletions per week.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCodeFrequency({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/commit_activity getStatsCommitActivity
 * @apiVersion 5.0.0
 * @apiName getStatsCommitActivity
 * @apiDescription Get the last year of commit activity data.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCommitActivity({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/contributors getStatsContributors
 * @apiVersion 5.0.0
 * @apiName getStatsContributors
 * @apiDescription Get contributors list with additions, deletions, and commit counts.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsContributors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/participation getStatsParticipation
 * @apiVersion 5.0.0
 * @apiName getStatsParticipation
 * @apiDescription Get the weekly commit count for the repository owner and everyone else.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsParticipation({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/punch_card getStatsPunchCard
 * @apiVersion 5.0.0
 * @apiName getStatsPunchCard
 * @apiDescription Get the number of commits per hour in each day.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsPunchCard({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:sha/statuses getStatuses
 * @apiVersion 5.0.0
 * @apiName getStatuses
 * @apiDescription Get status for a specfic ref.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getStatuses({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/tags getTags
 * @apiVersion 5.0.0
 * @apiName getTags
 * @apiDescription Get tags for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTags({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/teams getTeams
 * @apiVersion 5.0.0
 * @apiName getTeams
 * @apiDescription Get teams for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTeams({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/views getViews
 * @apiVersion 5.0.0
 * @apiName getViews
 * @apiDescription Get the total number of views and breakdown per day or week for the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getViews({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id/assets listAssets
 * @apiVersion 5.0.0
 * @apiName listAssets
 * @apiDescription List assets for a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.listAssets({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/merges merge
 * @apiVersion 5.0.0
 * @apiName merge
 * @apiDescription Perform a merge.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} [commit_message]  Commit message to use for the merge commit. If omitted, a default message will be used.
 * @apiExample {js} ex:
github.repos.merge({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects/columns/cards/:id/moves moveProjectCard
 * @apiVersion 5.0.0
 * @apiName moveProjectCard
 * @apiDescription Move a project card.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiParam {String} [column_id]  The id value of a column in the same project.
 * @apiExample {js} ex:
github.repos.moveProjectCard({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects/columns/:id/moves moveProjectColumn
 * @apiVersion 5.0.0
 * @apiName moveProjectColumn
 * @apiDescription Move a project column.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiExample {js} ex:
github.repos.moveProjectColumn({ ... });
 */

/**
 * @api {get} /repositories/:id one
 * @apiVersion 5.0.0
 * @apiName one
 * @apiDescription Get a specific repo.
 * @apiGroup repos
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.one({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks/:id/pings pingHook
 * @apiVersion 5.0.0
 * @apiName pingHook
 * @apiDescription Ping a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.pingHook({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection removeBranchProtection
 * @apiVersion 5.0.0
 * @apiName removeBranchProtection
 * @apiDescription Remove branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeBranchProtection({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/collaborators/:collabuser removeCollaborator
 * @apiVersion 5.0.0
 * @apiName removeCollaborator
 * @apiDescription Remove user as a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} collabuser  
 * @apiExample {js} ex:
github.repos.removeCollaborator({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/required_status_checks removeProtectedBranchRequiredStatusChecks
 * @apiVersion 5.0.0
 * @apiName removeProtectedBranchRequiredStatusChecks
 * @apiDescription Remove required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts removeProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 5.0.0
 * @apiName removeProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Remove required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions removeProtectedBranchRestrictions
 * @apiVersion 5.0.0
 * @apiName removeProtectedBranchRestrictions
 * @apiDescription Remove restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams removeProtectedBranchTeamRestrictions
 * @apiVersion 5.0.0
 * @apiName removeProtectedBranchTeamRestrictions
 * @apiDescription Remove team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions/users removeProtectedBranchUserRestrictions
 * @apiVersion 5.0.0
 * @apiName removeProtectedBranchUserRestrictions
 * @apiDescription Remove user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts replaceProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 5.0.0
 * @apiName replaceProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Replace required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams replaceProtectedBranchTeamRestrictions
 * @apiVersion 5.0.0
 * @apiName replaceProtectedBranchTeamRestrictions
 * @apiDescription Replace team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/restrictions/users replaceProtectedBranchUserRestrictions
 * @apiVersion 5.0.0
 * @apiName replaceProtectedBranchUserRestrictions
 * @apiDescription Replace user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pages/builds requestPageBuild
 * @apiVersion 5.0.0
 * @apiName requestPageBuild
 * @apiDescription Request a page build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.requestPageBuild({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks/:id/test testHook
 * @apiVersion 5.0.0
 * @apiName testHook
 * @apiDescription Test a [push] hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.testHook({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection updateBranchProtection
 * @apiVersion 5.0.0
 * @apiName updateBranchProtection
 * @apiDescription Update branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/comments/:id updateCommitComment
 * @apiVersion 5.0.0
 * @apiName updateCommitComment
 * @apiDescription Update a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.updateCommitComment({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/contents/:path updateFile
 * @apiVersion 5.0.0
 * @apiName updateFile
 * @apiDescription Update a file.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 5.0.0
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
 * @api {patch} /repos/:owner/:repo/projects/:number updateProject
 * @apiVersion 5.0.0
 * @apiName updateProject
 * @apiDescription Update a project.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.updateProject({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/projects/columns/cards/:id updateProjectCard
 * @apiVersion 5.0.0
 * @apiName updateProjectCard
 * @apiDescription Update a project card.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [note]  The note of the card.
 * @apiExample {js} ex:
github.repos.updateProjectCard({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/projects/columns/:id updateProjectColumn
 * @apiVersion 5.0.0
 * @apiName updateProjectColumn
 * @apiDescription Update a project column.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.repos.updateProjectColumn({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/branches/:branch/protection/required_status_checks updateProtectedBranchRequiredStatusChecks
 * @apiVersion 5.0.0
 * @apiName updateProtectedBranchRequiredStatusChecks
 * @apiDescription Update required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Json} body  JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.updateProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases/:id/assets uploadAsset
 * @apiVersion 5.0.0
 * @apiName uploadAsset
 * @apiDescription Upload a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
 * @apiName get
 * @apiDescription Get the authenticated user
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.get({ ... });
 */

/**
 * @api {get} /users getAll
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
 * @apiName getRepoInvites
 * @apiDescription List a user's repository invitations. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.getRepoInvites({ ... });
 */

/**
 * @api {get} /user/teams getTeams
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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
 * @apiVersion 5.0.0
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

/**
 * @api {get} /notifications/threads/:id/subscription checkNotificationThreadSubscription
 * @apiVersion 5.3.3
 * @apiName checkNotificationThreadSubscription
 * @apiDescription Check to see if the current user is subscribed to a thread.
 * @apiGroup activity
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.activity.checkNotificationThreadSubscription({ ... });
 */

/**
 * @api {get} /user/starred/:owner/:repo checkStarringRepo
 * @apiVersion 5.3.3
 * @apiName checkStarringRepo
 * @apiDescription Check if you are starring a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.checkStarringRepo({ ... });
 */

/**
 * @api {delete} /notifications/threads/:id/subscription deleteNotificationThreadSubscription
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @api {get} /repos/:owner/:repo/events getEventsForRepo
 * @apiVersion 5.3.3
 * @apiName getEventsForRepo
 * @apiDescription List repository events
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events getEventsForRepoIssues
 * @apiVersion 5.3.3
 * @apiName getEventsForRepoIssues
 * @apiDescription List issue events for a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoIssues({ ... });
 */

/**
 * @api {get} /networks/:owner/:repo/events getEventsForRepoNetwork
 * @apiVersion 5.3.3
 * @apiName getEventsForRepoNetwork
 * @apiDescription List public events for a network of repositories
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoNetwork({ ... });
 */

/**
 * @api {get} /users/:owner/events getEventsForUser
 * @apiVersion 5.3.3
 * @apiName getEventsForUser
 * @apiDescription List events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUser({ ... });
 */

/**
 * @api {get} /users/:owner/events/orgs/:org getEventsForUserOrg
 * @apiVersion 5.3.3
 * @apiName getEventsForUserOrg
 * @apiDescription List events for a user's organization
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserOrg({ ... });
 */

/**
 * @api {get} /users/:owner/events/public getEventsForUserPublic
 * @apiVersion 5.3.3
 * @apiName getEventsForUserPublic
 * @apiDescription List public events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserPublic({ ... });
 */

/**
 * @api {get} /users/:owner/received_events getEventsReceived
 * @apiVersion 5.3.3
 * @apiName getEventsReceived
 * @apiDescription List events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceived({ ... });
 */

/**
 * @api {get} /users/:owner/received_events/public getEventsReceivedPublic
 * @apiVersion 5.3.3
 * @apiName getEventsReceivedPublic
 * @apiDescription List public events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceivedPublic({ ... });
 */

/**
 * @api {get} /feeds getFeeds
 * @apiVersion 5.3.3
 * @apiName getFeeds
 * @apiDescription Get all feeds available for the authenticated user.
 * @apiGroup activity
 *
 * @apiExample {js} ex:
github.activity.getFeeds({ ... });
 */

/**
 * @api {get} /notifications/threads/:id getNotificationThread
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @api {get} /repos/:owner/:repo/notifications getNotificationsForUser
 * @apiVersion 5.3.3
 * @apiName getNotificationsForUser
 * @apiDescription Get all notifications for the given user.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [all=false]  If true, show notifications marked as read. Default: false
 * @apiParam {Boolean} [participating=false]  If true, only shows notifications in which the user is directly participating or mentioned. Default: false
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {String} [before]  Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @apiExample {js} ex:
github.activity.getNotificationsForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/subscription getRepoSubscription
 * @apiVersion 5.3.3
 * @apiName getRepoSubscription
 * @apiDescription Get a Repository Subscription.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getRepoSubscription({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stargazers getStargazersForRepo
 * @apiVersion 5.3.3
 * @apiName getStargazersForRepo
 * @apiDescription List Stargazers
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStargazersForRepo({ ... });
 */

/**
 * @api {get} /user/starred getStarredRepos
 * @apiVersion 5.3.3
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
 * @api {get} /users/:owner/starred getStarredReposForUser
 * @apiVersion 5.3.3
 * @apiName getStarredReposForUser
 * @apiDescription List repositories being starred by a user
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStarredReposForUser({ ... });
 */

/**
 * @api {get} /user/subscriptions getWatchedRepos
 * @apiVersion 5.3.3
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
 * @api {get} /users/:owner/subscriptions getWatchedReposForUser
 * @apiVersion 5.3.3
 * @apiName getWatchedReposForUser
 * @apiDescription List repositories being watched by a user.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchedReposForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/subscribers getWatchersForRepo
 * @apiVersion 5.3.3
 * @apiName getWatchersForRepo
 * @apiDescription Get watchers for repository.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchersForRepo({ ... });
 */

/**
 * @api {patch} /notifications/threads/:id markNotificationThreadAsRead
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName markNotificationsAsRead
 * @apiDescription Mark notifications as read for authenticated user.
 * @apiGroup activity
 *
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsRead({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/notifications markNotificationsAsReadForRepo
 * @apiVersion 5.3.3
 * @apiName markNotificationsAsReadForRepo
 * @apiDescription Mark notifications in a repo as read.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsReadForRepo({ ... });
 */

/**
 * @api {put} /notifications/threads/:id/subscription setNotificationThreadSubscription
 * @apiVersion 5.3.3
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
 * @api {put} /repos/:owner/:repo/subscription setRepoSubscription
 * @apiVersion 5.3.3
 * @apiName setRepoSubscription
 * @apiDescription Set a Repository Subscription
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [subscribed]  Determines if notifications should be received from this repository.
 * @apiParam {Boolean} [ignored]  Determines if all notifications should be blocked from this repository.
 * @apiExample {js} ex:
github.activity.setRepoSubscription({ ... });
 */

/**
 * @api {put} /user/starred/:owner/:repo starRepo
 * @apiVersion 5.3.3
 * @apiName starRepo
 * @apiDescription Star a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.starRepo({ ... });
 */

/**
 * @api {delete} /user/starred/:owner/:repo unstarRepo
 * @apiVersion 5.3.3
 * @apiName unstarRepo
 * @apiDescription Unstar a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unstarRepo({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/subscription unwatchRepo
 * @apiVersion 5.3.3
 * @apiName unwatchRepo
 * @apiDescription Unwatch a repository.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unwatchRepo({ ... });
 */

/**
 * @api {get} /applications/:client_id/tokens/:access_token check
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName create
 * @apiDescription Create a new authorization.
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
 * @apiVersion 5.3.3
 * @apiName delete
 * @apiDescription Delete an authorization.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.delete({ ... });
 */

/**
 * @api {delete} /applications/grants/:id deleteGrant
 * @apiVersion 5.3.3
 * @apiName deleteGrant
 * @apiDescription Delete a grant.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.deleteGrant({ ... });
 */

/**
 * @api {get} /authorizations/:id get
 * @apiVersion 5.3.3
 * @apiName get
 * @apiDescription Get a single authorization.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.get({ ... });
 */

/**
 * @api {get} /authorizations getAll
 * @apiVersion 5.3.3
 * @apiName getAll
 * @apiDescription List your authorizations.
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getAll({ ... });
 */

/**
 * @api {get} /applications/grants/:id getGrant
 * @apiVersion 5.3.3
 * @apiName getGrant
 * @apiDescription Get a single grant.
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
 * @apiVersion 5.3.3
 * @apiName getGrants
 * @apiDescription List your grants.
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getGrants({ ... });
 */

/**
 * @api {put} /authorizations/clients/:client_id getOrCreateAuthorizationForApp
 * @apiVersion 5.3.3
 * @apiName getOrCreateAuthorizationForApp
 * @apiDescription Get or create an authorization for a specific app.
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
 * @apiVersion 5.3.3
 * @apiName getOrCreateAuthorizationForAppAndFingerprint
 * @apiDescription Get or create an authorization for a specific app and fingerprint.
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName update
 * @apiDescription Update an existing authorization.
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
 * @apiVersion 5.3.3
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
 * @api {post} /admin/pre_receive_environments createPreReceiveEnvironment
 * @apiVersion 5.3.3
 * @apiName createPreReceiveEnvironment
 * @apiDescription Create a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} name  The new pre-receive environment's name.
 * @apiParam {String} image_url  URL from which to download a tarball of this environment.
 * @apiExample {js} ex:
github.enterprise.createPreReceiveEnvironment({ ... });
 */

/**
 * @api {post} /admin/pre-receive-hooks createPreReceiveHook
 * @apiVersion 5.3.3
 * @apiName createPreReceiveHook
 * @apiDescription Create a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} name  The name of the hook.
 * @apiParam {String} script  The script that the hook runs.
 * @apiParam {Json} script_repository  The GitHub repository where the script is kept.
 * @apiParam {Json} environment  The pre-receive environment where the script is executed.
 * @apiParam {String} [enforcement=disabled]  The state of enforcement for this hook. default: disabled
 * @apiParam {Boolean} [allow_downstream_configuration=false]  Whether enforcement can be overridden at the org or repo level. default: false
 * @apiExample {js} ex:
github.enterprise.createPreReceiveHook({ ... });
 */

/**
 * @api {delete} /admin/pre_receive_environments/:id deletePreReceiveEnvironment
 * @apiVersion 5.3.3
 * @apiName deletePreReceiveEnvironment
 * @apiDescription Delete a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.deletePreReceiveEnvironment({ ... });
 */

/**
 * @api {delete} /admin/pre_receive_hooks/:id deletePreReceiveHook
 * @apiVersion 5.3.3
 * @apiName deletePreReceiveHook
 * @apiDescription Delete a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.deletePreReceiveHook({ ... });
 */

/**
 * @api {patch} /admin/pre_receive_environments/:id editPreReceiveEnvironment
 * @apiVersion 5.3.3
 * @apiName editPreReceiveEnvironment
 * @apiDescription Create a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiParam {String} name  This pre-receive environment's new name.
 * @apiParam {String} image_url  URL from which to download a tarball of this environment.
 * @apiExample {js} ex:
github.enterprise.editPreReceiveEnvironment({ ... });
 */

/**
 * @api {patch} /admin/pre_receive_hooks/:id editPreReceiveHook
 * @apiVersion 5.3.3
 * @apiName editPreReceiveHook
 * @apiDescription Edit a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiParam {Json} body  JSON object that contains pre-receive hook info.
 * @apiExample {js} ex:
github.enterprise.editPreReceiveHook({ ... });
 */

/**
 * @api {get} /enterprise/settings/license getLicense
 * @apiVersion 5.3.3
 * @apiName getLicense
 * @apiDescription Get license information
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getLicense({ ... });
 */

/**
 * @api {get} /admin/pre-receive-environments/:id getPreReceiveEnvironment
 * @apiVersion 5.3.3
 * @apiName getPreReceiveEnvironment
 * @apiDescription Get a single pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironment({ ... });
 */

/**
 * @api {get} /admin/pre-receive-environments/:id/downloads/latest getPreReceiveEnvironmentDownloadStatus
 * @apiVersion 5.3.3
 * @apiName getPreReceiveEnvironmentDownloadStatus
 * @apiDescription Get a pre-receive environment's download status. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironmentDownloadStatus({ ... });
 */

/**
 * @api {get} /admin/pre_receive_environments getPreReceiveEnvironments
 * @apiVersion 5.3.3
 * @apiName getPreReceiveEnvironments
 * @apiDescription List pre-receive environments. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironments({ ... });
 */

/**
 * @api {get} /admin/pre-receive-hooks/:id getPreReceiveHook
 * @apiVersion 5.3.3
 * @apiName getPreReceiveHook
 * @apiDescription Get a single pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveHook({ ... });
 */

/**
 * @api {get} /admin/pre-receive-hooks getPreReceiveHooks
 * @apiVersion 5.3.3
 * @apiName getPreReceiveHooks
 * @apiDescription List pre-receive hooks. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getPreReceiveHooks({ ... });
 */

/**
 * @api {post} /staff/indexing_jobs queueIndexingJob
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName syncLdapForTeam
 * @apiDescription Sync LDAP mapping for a team.
 * @apiGroup enterprise
 *
 * @apiParam {Number} team_id  
 * @apiExample {js} ex:
github.enterprise.syncLdapForTeam({ ... });
 */

/**
 * @api {post} /admin/ldap/users/:user/sync syncLdapForUser
 * @apiVersion 5.3.3
 * @apiName syncLdapForUser
 * @apiDescription Sync LDAP mapping for a user.
 * @apiGroup enterprise
 *
 * @apiParam {String} user  
 * @apiExample {js} ex:
github.enterprise.syncLdapForUser({ ... });
 */

/**
 * @api {post} /admin/pre_receive_environments/:id/downloads triggerPreReceiveEnvironmentDownload
 * @apiVersion 5.3.3
 * @apiName triggerPreReceiveEnvironmentDownload
 * @apiDescription Trigger a pre-receive environment download. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.triggerPreReceiveEnvironmentDownload({ ... });
 */

/**
 * @api {patch} /admin/ldap/teams/:team_id/mapping updateLdapForTeam
 * @apiVersion 5.3.3
 * @apiName updateLdapForTeam
 * @apiDescription Update LDAP mapping for a team.
 * @apiGroup enterprise
 *
 * @apiParam {Number} team_id  
 * @apiParam {String} ldap_dn  LDAP DN for user
 * @apiExample {js} ex:
github.enterprise.updateLdapForTeam({ ... });
 */

/**
 * @api {patch} /admin/ldap/users/:user/mapping updateLdapForUser
 * @apiVersion 5.3.3
 * @apiName updateLdapForUser
 * @apiDescription Update LDAP mapping for a user.
 * @apiGroup enterprise
 *
 * @apiParam {String} user  
 * @apiParam {String} ldap_dn  LDAP DN for user
 * @apiExample {js} ex:
github.enterprise.updateLdapForUser({ ... });
 */

/**
 * @api {get} /gists/:id/star checkStar
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName edit
 * @apiDescription Edit a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiParam {Json} files  Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {String} [description]  
 * @apiParam {String} [content]  Updated file contents.
 * @apiParam {String} [filename]  New name for this file.
 * @apiExample {js} ex:
github.gists.edit({ ... });
 */

/**
 * @api {patch} /gists/:gist_id/comments/:id editComment
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName getCommits
 * @apiDescription List gist commits
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.getCommits({ ... });
 */

/**
 * @api {get} /users/:owner/gists getForUser
 * @apiVersion 5.3.3
 * @apiName getForUser
 * @apiDescription List a user's gists
 * @apiGroup gists
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.gists.getForUser({ ... });
 */

/**
 * @api {get} /gists/:id/forks getForks
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName unstar
 * @apiDescription Unstar a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.unstar({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/blobs createBlob
 * @apiVersion 5.3.3
 * @apiName createBlob
 * @apiDescription Create a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} content  
 * @apiParam {String} encoding  
 * @apiExample {js} ex:
github.gitdata.createBlob({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/commits createCommit
 * @apiVersion 5.3.3
 * @apiName createCommit
 * @apiDescription Create a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/git/refs createReference
 * @apiVersion 5.3.3
 * @apiName createReference
 * @apiDescription Create a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.createReference({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/tags createTag
 * @apiVersion 5.3.3
 * @apiName createTag
 * @apiDescription Create a Tag Object
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/git/trees createTree
 * @apiVersion 5.3.3
 * @apiName createTree
 * @apiDescription Create a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Json} tree  Array of Hash objects (of path, mode, type and sha) specifying a tree structure
 * @apiParam {String} [base_tree]  String of the SHA1 of the tree you want to update with new data
 * @apiExample {js} ex:
github.gitdata.createTree({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/git/refs/:ref deleteReference
 * @apiVersion 5.3.3
 * @apiName deleteReference
 * @apiDescription Delete a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.deleteReference({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/blobs/:sha getBlob
 * @apiVersion 5.3.3
 * @apiName getBlob
 * @apiDescription Get a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getBlob({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/commits/:sha getCommit
 * @apiVersion 5.3.3
 * @apiName getCommit
 * @apiDescription Get a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/commits/:sha getCommitSignatureVerification
 * @apiVersion 5.3.3
 * @apiName getCommitSignatureVerification
 * @apiDescription Get a Commit Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommitSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs/:ref getReference
 * @apiVersion 5.3.3
 * @apiName getReference
 * @apiDescription Get a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.getReference({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs getReferences
 * @apiVersion 5.3.3
 * @apiName getReferences
 * @apiDescription Get all References
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getReferences({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/tags/:sha getTag
 * @apiVersion 5.3.3
 * @apiName getTag
 * @apiDescription Get a Tag
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTag({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/tags/:sha getTagSignatureVerification
 * @apiVersion 5.3.3
 * @apiName getTagSignatureVerification
 * @apiDescription Get a Tag Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTagSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs/tags getTags
 * @apiVersion 5.3.3
 * @apiName getTags
 * @apiDescription Get all tag References
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getTags({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/trees/:sha getTree
 * @apiVersion 5.3.3
 * @apiName getTree
 * @apiDescription Get a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Boolean} [recursive]  
 * @apiExample {js} ex:
github.gitdata.getTree({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/git/refs/:ref updateReference
 * @apiVersion 5.3.3
 * @apiName updateReference
 * @apiDescription Update a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha  
 * @apiParam {Boolean} [force=false]  Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
 * @apiExample {js} ex:
github.gitdata.updateReference({ ... });
 */

/**
 * @api {post} /installations/:installation_id/access_tokens createInstallationToken
 * @apiVersion 5.3.3
 * @apiName createInstallationToken
 * @apiDescription Create a new installation token. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {Number} installation_id  The id of the installation for this integration.
 * @apiParam {Number} [user_id]  The id of the user for whom the integration is acting on behalf of.
 * @apiExample {js} ex:
github.integrations.createInstallationToken({ ... });
 */

/**
 * @api {get} /installation/repositories getInstallationRepositories
 * @apiVersion 5.3.3
 * @apiName getInstallationRepositories
 * @apiDescription List repositories that are accessible to the authenticated installation.
 * @apiGroup integrations
 *
 * @apiParam {String} [user_id]  The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user.
 * @apiExample {js} ex:
github.integrations.getInstallationRepositories({ ... });
 */

/**
 * @api {get} /integration/installations getInstallations
 * @apiVersion 5.3.3
 * @apiName getInstallations
 * @apiDescription List the integration's installations. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.integrations.getInstallations({ ... });
 */

/**
 * @api {post} /integration/identity/user getUserIdentity
 * @apiVersion 5.3.3
 * @apiName getUserIdentity
 * @apiDescription Request identity of user. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} [nonce]  
 * @apiExample {js} ex:
github.integrations.getUserIdentity({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/assignees addAssigneesToIssue
 * @apiVersion 5.3.3
 * @apiName addAssigneesToIssue
 * @apiDescription Add assignees to an issue.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} assignees  Logins for the users that should be added to the issue.
 * @apiExample {js} ex:
github.issues.addAssigneesToIssue({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/labels addLabels
 * @apiVersion 5.3.3
 * @apiName addLabels
 * @apiDescription Add labels to an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  
 * @apiExample {js} ex:
github.issues.addLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/assignees/:assignee checkAssignee
 * @apiVersion 5.3.3
 * @apiName checkAssignee
 * @apiDescription Check assignee
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} assignee  Login for the user that this issue should be assigned to.
 * @apiExample {js} ex:
github.issues.checkAssignee({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues create
 * @apiVersion 5.3.3
 * @apiName create
 * @apiDescription Create an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/issues/:number/comments createComment
 * @apiVersion 5.3.3
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.createComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/labels createLabel
 * @apiVersion 5.3.3
 * @apiName createLabel
 * @apiDescription Create a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.createLabel({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/milestones createMilestone
 * @apiVersion 5.3.3
 * @apiName createMilestone
 * @apiDescription Create a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String} [state=open]  
 * @apiParam {String} [description]  
 * @apiParam {Date} [due_on]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.issues.createMilestone({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/comments/:id deleteComment
 * @apiVersion 5.3.3
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.deleteComment({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/labels/:name deleteLabel
 * @apiVersion 5.3.3
 * @apiName deleteLabel
 * @apiDescription Delete a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.deleteLabel({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/milestones/:number deleteMilestone
 * @apiVersion 5.3.3
 * @apiName deleteMilestone
 * @apiDescription Delete a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.deleteMilestone({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/issues/:number edit
 * @apiVersion 5.3.3
 * @apiName edit
 * @apiDescription Edit an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/issues/comments/:id editComment
 * @apiVersion 5.3.3
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.editComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number get
 * @apiVersion 5.3.3
 * @apiName get
 * @apiDescription Get a single issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.get({ ... });
 */

/**
 * @api {get} /issues getAll
 * @apiVersion 5.3.3
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
 * @api {get} /repos/:owner/:repo/assignees getAssignees
 * @apiVersion 5.3.3
 * @apiName getAssignees
 * @apiDescription List assignees
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.issues.getAssignees({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments/:id getComment
 * @apiVersion 5.3.3
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/comments getComments
 * @apiVersion 5.3.3
 * @apiName getComments
 * @apiDescription List comments on an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments getCommentsForRepo
 * @apiVersion 5.3.3
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/issues/events/:id getEvent
 * @apiVersion 5.3.3
 * @apiName getEvent
 * @apiDescription Get a single event
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getEvent({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/events getEvents
 * @apiVersion 5.3.3
 * @apiName getEvents
 * @apiDescription List events for an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEvents({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events getEventsForRepo
 * @apiVersion 5.3.3
 * @apiName getEventsForRepo
 * @apiDescription List events for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/timeline getEventsTimeline
 * @apiVersion 5.3.3
 * @apiName getEventsTimeline
 * @apiDescription List events for an issue. (In preview period. See README.)
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsTimeline({ ... });
 */

/**
 * @api {get} /orgs/:org/issues getForOrg
 * @apiVersion 5.3.3
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
 * @api {get} /repos/:owner/:repo/issues getForRepo
 * @apiVersion 5.3.3
 * @apiName getForRepo
 * @apiDescription List issues for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @apiVersion 5.3.3
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
 * @api {get} /repos/:owner/:repo/issues/:number/labels getIssueLabels
 * @apiVersion 5.3.3
 * @apiName getIssueLabels
 * @apiDescription List labels on an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getIssueLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/labels/:name getLabel
 * @apiVersion 5.3.3
 * @apiName getLabel
 * @apiDescription Get a single label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.getLabel({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/labels getLabels
 * @apiVersion 5.3.3
 * @apiName getLabels
 * @apiDescription List all labels for this repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones/:number getMilestone
 * @apiVersion 5.3.3
 * @apiName getMilestone
 * @apiDescription Get a single milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestone({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones/:number/labels getMilestoneLabels
 * @apiVersion 5.3.3
 * @apiName getMilestoneLabels
 * @apiDescription Get labels for every issue in a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestoneLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones getMilestones
 * @apiVersion 5.3.3
 * @apiName getMilestones
 * @apiDescription List milestones for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {put} /repos/:owner/:repo/issues/:number/lock lock
 * @apiVersion 5.3.3
 * @apiName lock
 * @apiDescription Users with push access can lock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.lock({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/labels removeAllLabels
 * @apiVersion 5.3.3
 * @apiName removeAllLabels
 * @apiDescription Remove all labels from an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.removeAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/assignees removeAssigneesFromIssue
 * @apiVersion 5.3.3
 * @apiName removeAssigneesFromIssue
 * @apiDescription Remove assignees from an issue.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Json} body  JSON object that contains assignees array of logins for the users that should be removed from the issue.
 * @apiExample {js} ex:
github.issues.removeAssigneesFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/labels/:name removeLabel
 * @apiVersion 5.3.3
 * @apiName removeLabel
 * @apiDescription Remove a label from an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.removeLabel({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/issues/:number/labels replaceAllLabels
 * @apiVersion 5.3.3
 * @apiName replaceAllLabels
 * @apiDescription Replace all labels for an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  Sending an empty array ([]) will remove all Labels from the Issue.
 * @apiExample {js} ex:
github.issues.replaceAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/lock unlock
 * @apiVersion 5.3.3
 * @apiName unlock
 * @apiDescription Users with push access can unlock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.unlock({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/labels/:oldname updateLabel
 * @apiVersion 5.3.3
 * @apiName updateLabel
 * @apiDescription Update a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} oldname  The old name of the label.
 * @apiParam {String} name  The new name of the label.
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.updateLabel({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/milestones/:number updateMilestone
 * @apiVersion 5.3.3
 * @apiName updateMilestone
 * @apiDescription Update a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {delete} /repos/:owner/:repo/import cancelImport
 * @apiVersion 5.3.3
 * @apiName cancelImport
 * @apiDescription Cancel an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.cancelImport({ ... });
 */

/**
 * @api {delete} /orgs/:org/migrations/:id/archive deleteMigrationArchive
 * @apiVersion 5.3.3
 * @apiName deleteMigrationArchive
 * @apiDescription Delete a migration archive. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.deleteMigrationArchive({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/import/authors getImportCommitAuthors
 * @apiVersion 5.3.3
 * @apiName getImportCommitAuthors
 * @apiDescription Get import commit authors. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [since]  Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step.
 * @apiExample {js} ex:
github.migrations.getImportCommitAuthors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/import getImportProgress
 * @apiVersion 5.3.3
 * @apiName getImportProgress
 * @apiDescription Get import progress. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.getImportProgress({ ... });
 */

/**
 * @api {get} /:owner/:name/import/large_files getLargeImportFiles
 * @apiVersion 5.3.3
 * @apiName getLargeImportFiles
 * @apiDescription List files larger than 100MB found during the import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.migrations.getLargeImportFiles({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations/:id/archive getMigrationArchiveLink
 * @apiVersion 5.3.3
 * @apiName getMigrationArchiveLink
 * @apiDescription Get the URL to a migration archive. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.getMigrationArchiveLink({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations/:id getMigrationStatus
 * @apiVersion 5.3.3
 * @apiName getMigrationStatus
 * @apiDescription Get the status of a migration. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.getMigrationStatus({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations getMigrations
 * @apiVersion 5.3.3
 * @apiName getMigrations
 * @apiDescription Get a list of migrations. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.migrations.getMigrations({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/import/authors/:author_id mapImportCommitAuthor
 * @apiVersion 5.3.3
 * @apiName mapImportCommitAuthor
 * @apiDescription Map a commit author. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} author_id  The commit author id.
 * @apiParam {String} [email]  The new Git author email.
 * @apiParam {String} [name]  The new Git author name.
 * @apiExample {js} ex:
github.migrations.mapImportCommitAuthor({ ... });
 */

/**
 * @api {patch} /:owner/:name/import/lfs setImportLfsPreference
 * @apiVersion 5.3.3
 * @apiName setImportLfsPreference
 * @apiDescription Set import LFS preference. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.migrations.setImportLfsPreference({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/import startImport
 * @apiVersion 5.3.3
 * @apiName startImport
 * @apiDescription Start an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
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
 * @apiVersion 5.3.3
 * @apiName startMigration
 * @apiDescription Start a migration. (In preview period. See README.)
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
 * @apiVersion 5.3.3
 * @apiName unlockRepoLockedForMigration
 * @apiDescription Unlock a repository that was locked for migration. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.unlockRepoLockedForMigration({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/import updateImport
 * @apiVersion 5.3.3
 * @apiName updateImport
 * @apiDescription Update existing import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.updateImport({ ... });
 */

/**
 * @api {get} /emojis getEmojis
 * @apiVersion 5.3.3
 * @apiName getEmojis
 * @apiDescription Lists all the emojis available to use on GitHub.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getEmojis({ ... });
 */

/**
 * @api {get} /gitignore/templates/:name getGitignoreTemplate
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName getGitignoreTemplates
 * @apiDescription Lists available gitignore templates
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getGitignoreTemplates({ ... });
 */

/**
 * @api {get} /licenses/:license getLicense
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName getLicenses
 * @apiDescription List all licenses. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getLicenses({ ... });
 */

/**
 * @api {get} /meta getMeta
 * @apiVersion 5.3.3
 * @apiName getMeta
 * @apiDescription This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getMeta({ ... });
 */

/**
 * @api {get} /rate_limit getRateLimit
 * @apiVersion 5.3.3
 * @apiName getRateLimit
 * @apiDescription Get your current rate limit status
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getRateLimit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/license getRepoLicense
 * @apiVersion 5.3.3
 * @apiName getRepoLicense
 * @apiDescription Get the contents of a repository's license. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.misc.getRepoLicense({ ... });
 */

/**
 * @api {post} /markdown renderMarkdown
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @api {get} /orgs/:org/members/:owner checkMembership
 * @apiVersion 5.3.3
 * @apiName checkMembership
 * @apiDescription Check membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} owner  
 * @apiExample {js} ex:
github.orgs.checkMembership({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members/:user checkPublicMembership
 * @apiVersion 5.3.3
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
 * @api {get} /teams/:id/repos/:owner/:repo checkTeamRepo
 * @apiVersion 5.3.3
 * @apiName checkTeamRepo
 * @apiDescription Check if a team manages a repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.checkTeamRepo({ ... });
 */

/**
 * @api {delete} /orgs/:org/public_members/:user concealMembership
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName deleteTeam
 * @apiDescription Delete team
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.orgs.deleteTeam({ ... });
 */

/**
 * @api {delete} /teams/:id/repos/:owner/:repo deleteTeamRepo
 * @apiVersion 5.3.3
 * @apiName deleteTeamRepo
 * @apiDescription Remove team repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.deleteTeamRepo({ ... });
 */

/**
 * @api {patch} /orgs/:org/hooks/:id editHook
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @api {get} /users/:owner/orgs getForUser
 * @apiVersion 5.3.3
 * @apiName getForUser
 * @apiDescription List public organization memberships for the specified user.
 * @apiGroup orgs
 *
 * @apiParam {String} owner  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getForUser({ ... });
 */

/**
 * @api {get} /orgs/:org/hooks/:id getHook
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName getTeamMembers
 * @apiDescription List team members
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @api {get} /repos/:owner/:repo/pulls/:number/merge checkMerged
 * @apiVersion 5.3.3
 * @apiName checkMerged
 * @apiDescription Get if a pull request has been merged
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.checkMerged({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls create
 * @apiVersion 5.3.3
 * @apiName create
 * @apiDescription Create a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  The title of the pull request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiExample {js} ex:
github.pullRequests.create({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/:number/comments createComment
 * @apiVersion 5.3.3
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/pulls/:number/comments createCommentReply
 * @apiVersion 5.3.3
 * @apiName createCommentReply
 * @apiDescription Reply to existing pull request comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiParam {Number} in_reply_to  The comment id to reply to.
 * @apiExample {js} ex:
github.pullRequests.createCommentReply({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls createFromIssue
 * @apiVersion 5.3.3
 * @apiName createFromIssue
 * @apiDescription Create a pull request from an existing issue
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} issue  The issue number in this repository to turn into a Pull Request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiExample {js} ex:
github.pullRequests.createFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/pulls/comments/:number deleteComment
 * @apiVersion 5.3.3
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.deleteComment({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/pulls/comments/:number editComment
 * @apiVersion 5.3.3
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.pullRequests.editComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number get
 * @apiVersion 5.3.3
 * @apiName get
 * @apiDescription Get a single pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.get({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls getAll
 * @apiVersion 5.3.3
 * @apiName getAll
 * @apiDescription List pull requests
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/pulls/comments/:number getComment
 * @apiVersion 5.3.3
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.getComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/comments getComments
 * @apiVersion 5.3.3
 * @apiName getComments
 * @apiDescription List comments on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments getCommentsForRepo
 * @apiVersion 5.3.3
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/pulls/:number/commits getCommits
 * @apiVersion 5.3.3
 * @apiName getCommits
 * @apiDescription List commits on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getCommits({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/files getFiles
 * @apiVersion 5.3.3
 * @apiName getFiles
 * @apiDescription List pull requests files
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getFiles({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/pulls/:number/merge merge
 * @apiVersion 5.3.3
 * @apiName merge
 * @apiDescription Merge a pull request (Merge Button)
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [commit_title]  Title for the automatic commit message. (In preview period. See README.)
 * @apiParam {String} [commit_message]  Extra detail to append to automatic commit message.
 * @apiParam {String} [sha]  SHA that pull request head must match to allow merge
 * @apiParam {String} [merge_method=merge]  Merge method to use. Possible values are `merge`, `squash`, or `rebase`. (In preview period. See README.)
 * @apiExample {js} ex:
github.pullRequests.merge({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/pulls/:number update
 * @apiVersion 5.3.3
 * @apiName update
 * @apiDescription Update a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [title]  The title of the pull request.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiParam {String} [state=open]  
 * @apiExample {js} ex:
github.pullRequests.update({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/comments/:id/reactions createForCommitComment
 * @apiVersion 5.3.3
 * @apiName createForCommitComment
 * @apiDescription Create reaction for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForCommitComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/reactions createForIssue
 * @apiVersion 5.3.3
 * @apiName createForIssue
 * @apiDescription Create reaction for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssue({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/comments/:id/reactions createForIssueComment
 * @apiVersion 5.3.3
 * @apiName createForIssueComment
 * @apiDescription Create reaction for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssueComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/comments/:id/reactions createForPullRequestReviewComment
 * @apiVersion 5.3.3
 * @apiName createForPullRequestReviewComment
 * @apiDescription Create reaction for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForPullRequestReviewComment({ ... });
 */

/**
 * @api {delete} /reactions/:id delete
 * @apiVersion 5.3.3
 * @apiName delete
 * @apiDescription Delete a reaction. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.reactions.delete({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments/:id/reactions getForCommitComment
 * @apiVersion 5.3.3
 * @apiName getForCommitComment
 * @apiDescription List reactions for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForCommitComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/reactions getForIssue
 * @apiVersion 5.3.3
 * @apiName getForIssue
 * @apiDescription List reactions for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssue({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments/:id/reactions getForIssueComment
 * @apiVersion 5.3.3
 * @apiName getForIssueComment
 * @apiDescription List reactions for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssueComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments/:id/reactions getForPullRequestReviewComment
 * @apiVersion 5.3.3
 * @apiName getForPullRequestReviewComment
 * @apiDescription List reactions for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForPullRequestReviewComment({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/collaborators/:collabuser addCollaborator
 * @apiVersion 5.3.3
 * @apiName addCollaborator
 * @apiDescription Add user as a collaborator
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} collabuser  
 * @apiParam {String} [permission=push]  `pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository.
 * @apiExample {js} ex:
github.repos.addCollaborator({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts addProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 5.3.3
 * @apiName addProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Add required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.addProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams addProtectedBranchTeamRestrictions
 * @apiVersion 5.3.3
 * @apiName addProtectedBranchTeamRestrictions
 * @apiDescription Add team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.addProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/restrictions/users addProtectedBranchUserRestrictions
 * @apiVersion 5.3.3
 * @apiName addProtectedBranchUserRestrictions
 * @apiDescription Add user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.addProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/collaborators/:collabuser checkCollaborator
 * @apiVersion 5.3.3
 * @apiName checkCollaborator
 * @apiDescription Check if user is a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} collabuser  
 * @apiExample {js} ex:
github.repos.checkCollaborator({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/compare/:base...:head compareCommits
 * @apiVersion 5.3.3
 * @apiName compareCommits
 * @apiDescription Compare two commits.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiExample {js} ex:
github.repos.compareCommits({ ... });
 */

/**
 * @api {post} /user/repos create
 * @apiVersion 5.3.3
 * @apiName create
 * @apiDescription Create a new repository for the authenticated user.
 * @apiGroup repos
 *
 * @apiParam {String} name  
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {String} [description]  
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.create({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/commits/:sha/comments createCommitComment
 * @apiVersion 5.3.3
 * @apiName createCommitComment
 * @apiDescription Create a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/deployments createDeployment
 * @apiVersion 5.3.3
 * @apiName createDeployment
 * @apiDescription Create a deployment. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/deployments/:id/statuses createDeploymentStatus
 * @apiVersion 5.3.3
 * @apiName createDeploymentStatus
 * @apiDescription Create a deployment status. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {put} /repos/:owner/:repo/contents/:path createFile
 * @apiVersion 5.3.3
 * @apiName createFile
 * @apiDescription Create a new file in the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 5.3.3
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
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {Number} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.createForOrg({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks createHook
 * @apiVersion 5.3.3
 * @apiName createHook
 * @apiDescription Create a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {Json} config  A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {Array} [events=["push"]]  Determines what events the hook is triggered for. Default: `['push']`.
 * @apiParam {Boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} ex:
github.repos.createHook({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/keys createKey
 * @apiVersion 5.3.3
 * @apiName createKey
 * @apiDescription Add a new deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String} key  
 * @apiParam {Boolean} [read_only]  If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
 * @apiExample {js} ex:
github.repos.createKey({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects createProject
 * @apiVersion 5.3.3
 * @apiName createProject
 * @apiDescription Create a project. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.createProject({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects/columns/:id/cards createProjectCard
 * @apiVersion 5.3.3
 * @apiName createProjectCard
 * @apiDescription Create a project card. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [note]  The note of the card.
 * @apiParam {String} [content_id]  The id of the Issue or Pull Request to associate with this card.
 * @apiParam {String} [content_type]  The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'.
 * @apiExample {js} ex:
github.repos.createProjectCard({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects/:number/columns createProjectColumn
 * @apiVersion 5.3.3
 * @apiName createProjectColumn
 * @apiDescription Create a project column. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.repos.createProjectColumn({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases createRelease
 * @apiVersion 5.3.3
 * @apiName createRelease
 * @apiDescription Create a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/statuses/:sha createStatus
 * @apiVersion 5.3.3
 * @apiName createStatus
 * @apiDescription Create a status.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {delete} /repos/:owner/:repo delete
 * @apiVersion 5.3.3
 * @apiName delete
 * @apiDescription Delete a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.delete({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/assets/:id deleteAsset
 * @apiVersion 5.3.3
 * @apiName deleteAsset
 * @apiDescription Delete a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteAsset({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/comments/:id deleteCommitComment
 * @apiVersion 5.3.3
 * @apiName deleteCommitComment
 * @apiDescription Delete a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteCommitComment({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/downloads/:id deleteDownload
 * @apiVersion 5.3.3
 * @apiName deleteDownload
 * @apiDescription Delete a download.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteDownload({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/contents/:path deleteFile
 * @apiVersion 5.3.3
 * @apiName deleteFile
 * @apiDescription Delete a file.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {delete} /repos/:owner/:repo/hooks/:id deleteHook
 * @apiVersion 5.3.3
 * @apiName deleteHook
 * @apiDescription Deleate a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteHook({ ... });
 */

/**
 * @api {delete} /repositories/:repo/invitations/:id deleteInvite
 * @apiVersion 5.3.3
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
 * @api {delete} /repos/:owner/:repo/keys/:id deleteKey
 * @apiVersion 5.3.3
 * @apiName deleteKey
 * @apiDescription Remove a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteKey({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/projects/:number deleteProject
 * @apiVersion 5.3.3
 * @apiName deleteProject
 * @apiDescription Delete a project. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.repos.deleteProject({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/projects/columns/cards/:id deleteProjectCard
 * @apiVersion 5.3.3
 * @apiName deleteProjectCard
 * @apiDescription Delete a project card. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteProjectCard({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/projects/columns/:id deleteProjectColumn
 * @apiVersion 5.3.3
 * @apiName deleteProjectColumn
 * @apiDescription Delete a project column. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteProjectColumn({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/:id deleteRelease
 * @apiVersion 5.3.3
 * @apiName deleteRelease
 * @apiDescription Delete a release
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteRelease({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo edit
 * @apiVersion 5.3.3
 * @apiName edit
 * @apiDescription Update a repo.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiParam {String} repo  
 * @apiParam {String} [description]  
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {String} [default_branch]  Updates the default branch for this repository.
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.edit({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/releases/assets/:id editAsset
 * @apiVersion 5.3.3
 * @apiName editAsset
 * @apiDescription Edit a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} [label]  An alternate short description of the asset. Used in place of the filename.
 * @apiExample {js} ex:
github.repos.editAsset({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/hooks/:id editHook
 * @apiVersion 5.3.3
 * @apiName editHook
 * @apiDescription Edit a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/releases/:id editRelease
 * @apiVersion 5.3.3
 * @apiName editRelease
 * @apiDescription Edit a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/forks fork
 * @apiVersion 5.3.3
 * @apiName fork
 * @apiDescription Create a fork.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [organization]  Optional parameter to specify the organization name if forking into an organization.
 * @apiExample {js} ex:
github.repos.fork({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo get
 * @apiVersion 5.3.3
 * @apiName get
 * @apiDescription Get a repo for a user.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.get({ ... });
 */

/**
 * @api {get} /user/repos getAll
 * @apiVersion 5.3.3
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
 * @api {get} /repos/:owner/:repo/comments getAllCommitComments
 * @apiVersion 5.3.3
 * @apiName getAllCommitComments
 * @apiDescription List commit comments for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getAllCommitComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/:archive_format/:ref getArchiveLink
 * @apiVersion 5.3.3
 * @apiName getArchiveLink
 * @apiDescription Get archive link.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} archive_format=tarball  Either tarball or zipball, Deafult: tarball.
 * @apiParam {String} [ref]  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.repos.getArchiveLink({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/assets/:id getAsset
 * @apiVersion 5.3.3
 * @apiName getAsset
 * @apiDescription Get a single release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getAsset({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch getBranch
 * @apiVersion 5.3.3
 * @apiName getBranch
 * @apiDescription Get branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranch({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection getBranchProtection
 * @apiVersion 5.3.3
 * @apiName getBranchProtection
 * @apiDescription Get branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranchProtection({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches getBranches
 * @apiVersion 5.3.3
 * @apiName getBranches
 * @apiDescription List branches. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [protected]  Set to true to only return protected branches
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranches({ ... });
 */

/**
 * @api {get} /repositories/:id getById
 * @apiVersion 5.3.3
 * @apiName getById
 * @apiDescription Get a single repo by id.
 * @apiGroup repos
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getById({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/clones getClones
 * @apiVersion 5.3.3
 * @apiName getClones
 * @apiDescription Get the total number of clones and breakdown per day or week for the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getClones({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/collaborators getCollaborators
 * @apiVersion 5.3.3
 * @apiName getCollaborators
 * @apiDescription List collaborators
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCollaborators({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:sha/status getCombinedStatus
 * @apiVersion 5.3.3
 * @apiName getCombinedStatus
 * @apiDescription Get the combined status for a specific ref.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCombinedStatus({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:sha getCommit
 * @apiVersion 5.3.3
 * @apiName getCommit
 * @apiDescription Get a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.repos.getCommit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments/:id getCommitComment
 * @apiVersion 5.3.3
 * @apiName getCommitComment
 * @apiDescription Get a single commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getCommitComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:sha/comments getCommitComments
 * @apiVersion 5.3.3
 * @apiName getCommitComments
 * @apiDescription List comments for a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCommitComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits getCommits
 * @apiVersion 5.3.3
 * @apiName getCommits
 * @apiDescription List commits on a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/contents/:path getContent
 * @apiVersion 5.3.3
 * @apiName getContent
 * @apiDescription Get the contents of a file or directory in a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} path  The content path.
 * @apiParam {String} [ref]  The String name of the Commit/Branch/Tag. Defaults to master.
 * @apiExample {js} ex:
github.repos.getContent({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/contributors getContributors
 * @apiVersion 5.3.3
 * @apiName getContributors
 * @apiDescription Get contributors for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [anon]  Set to 1 or true to include anonymous contributors in results.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getContributors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/deployments/:id/statuses getDeploymentStatuses
 * @apiVersion 5.3.3
 * @apiName getDeploymentStatuses
 * @apiDescription List deployment statuses. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDeploymentStatuses({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/deployments getDeployments
 * @apiVersion 5.3.3
 * @apiName getDeployments
 * @apiDescription List deployments. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/downloads/:id getDownload
 * @apiVersion 5.3.3
 * @apiName getDownload
 * @apiDescription Get a single download.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDownload({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/downloads getDownloads
 * @apiVersion 5.3.3
 * @apiName getDownloads
 * @apiDescription List downloads for repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getDownloads({ ... });
 */

/**
 * @api {get} /orgs/:org/repos getForOrg
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @api {get} /repos/:owner/:repo/forks getForks
 * @apiVersion 5.3.3
 * @apiName getForks
 * @apiDescription List forks.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [sort=newest]  Possible values: `newest`, `oldest`, `stargazers`, default: `newest`.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForks({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/hooks/:id getHook
 * @apiVersion 5.3.3
 * @apiName getHook
 * @apiDescription Get single hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getHook({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/hooks getHooks
 * @apiVersion 5.3.3
 * @apiName getHooks
 * @apiDescription List hooks.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getHooks({ ... });
 */

/**
 * @api {get} /repositories/:repo/invitations getInvites
 * @apiVersion 5.3.3
 * @apiName getInvites
 * @apiDescription List invitations for a repository. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getInvites({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/keys/:id getKey
 * @apiVersion 5.3.3
 * @apiName getKey
 * @apiDescription Get a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getKey({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/keys getKeys
 * @apiVersion 5.3.3
 * @apiName getKeys
 * @apiDescription List deploy keys.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getKeys({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/languages getLanguages
 * @apiVersion 5.3.3
 * @apiName getLanguages
 * @apiDescription Get languages for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getLanguages({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds/latest getLatestPagesBuild
 * @apiVersion 5.3.3
 * @apiName getLatestPagesBuild
 * @apiDescription Get latest Pages build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/latest getLatestRelease
 * @apiVersion 5.3.3
 * @apiName getLatestRelease
 * @apiDescription Get the latest release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages getPages
 * @apiVersion 5.3.3
 * @apiName getPages
 * @apiDescription Get information about a Pages site. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPages({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds/:id getPagesBuild
 * @apiVersion 5.3.3
 * @apiName getPagesBuild
 * @apiDescription Get a specific Pages build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds getPagesBuilds
 * @apiVersion 5.3.3
 * @apiName getPagesBuilds
 * @apiDescription List Pages builds. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPagesBuilds({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/popular/paths getPaths
 * @apiVersion 5.3.3
 * @apiName getPaths
 * @apiDescription Get the top 10 popular contents over the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPaths({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects/:number getProject
 * @apiVersion 5.3.3
 * @apiName getProject
 * @apiDescription List a project. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.repos.getProject({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects/columns/cards/:id getProjectCard
 * @apiVersion 5.3.3
 * @apiName getProjectCard
 * @apiDescription Get project card. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getProjectCard({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects/columns/:id/cards getProjectCards
 * @apiVersion 5.3.3
 * @apiName getProjectCards
 * @apiDescription List project cards. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getProjectCards({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects/columns/:id getProjectColumn
 * @apiVersion 5.3.3
 * @apiName getProjectColumn
 * @apiDescription Get a project column. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getProjectColumn({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects/:number/columns getProjectColumns
 * @apiVersion 5.3.3
 * @apiName getProjectColumns
 * @apiDescription List a project's columns. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.repos.getProjectColumns({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects getProjects
 * @apiVersion 5.3.3
 * @apiName getProjects
 * @apiDescription List projects. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getProjects({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/required_status_checks getProtectedBranchRequiredStatusChecks
 * @apiVersion 5.3.3
 * @apiName getProtectedBranchRequiredStatusChecks
 * @apiDescription Get required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts getProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 5.3.3
 * @apiName getProtectedBranchRequiredStatusChecksContexts
 * @apiDescription List required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions getProtectedBranchRestrictions
 * @apiVersion 5.3.3
 * @apiName getProtectedBranchRestrictions
 * @apiDescription Get restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams getProtectedBranchTeamRestrictions
 * @apiVersion 5.3.3
 * @apiName getProtectedBranchTeamRestrictions
 * @apiDescription List team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions/users getProtectedBranchUserRestrictions
 * @apiVersion 5.3.3
 * @apiName getProtectedBranchUserRestrictions
 * @apiDescription List user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repositories getPublic
 * @apiVersion 5.3.3
 * @apiName getPublic
 * @apiDescription List all public repositories
 * @apiGroup repos
 *
 * @apiParam {String} [since]  The integer ID of the last Repository that you've seen.
 * @apiExample {js} ex:
github.repos.getPublic({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/readme getReadme
 * @apiVersion 5.3.3
 * @apiName getReadme
 * @apiDescription Get the README for the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [ref]  The name of the commit/branch/tag. Default: the repository’s default branch (usually master)
 * @apiExample {js} ex:
github.repos.getReadme({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/popular/referrers getReferrers
 * @apiVersion 5.3.3
 * @apiName getReferrers
 * @apiDescription Get the top 10 referrers over the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReferrers({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id getRelease
 * @apiVersion 5.3.3
 * @apiName getRelease
 * @apiDescription Get a single release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/tags/:tag getReleaseByTag
 * @apiVersion 5.3.3
 * @apiName getReleaseByTag
 * @apiDescription Get a release by tag name.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} tag  String of the tag
 * @apiExample {js} ex:
github.repos.getReleaseByTag({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases getReleases
 * @apiVersion 5.3.3
 * @apiName getReleases
 * @apiDescription List releases for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReleases({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref getShaOfCommitRef
 * @apiVersion 5.3.3
 * @apiName getShaOfCommitRef
 * @apiDescription Get the SHA-1 of a commit reference.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.repos.getShaOfCommitRef({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/code_frequency getStatsCodeFrequency
 * @apiVersion 5.3.3
 * @apiName getStatsCodeFrequency
 * @apiDescription Get the number of additions and deletions per week.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCodeFrequency({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/commit_activity getStatsCommitActivity
 * @apiVersion 5.3.3
 * @apiName getStatsCommitActivity
 * @apiDescription Get the last year of commit activity data.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCommitActivity({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/contributors getStatsContributors
 * @apiVersion 5.3.3
 * @apiName getStatsContributors
 * @apiDescription Get contributors list with additions, deletions, and commit counts.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsContributors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/participation getStatsParticipation
 * @apiVersion 5.3.3
 * @apiName getStatsParticipation
 * @apiDescription Get the weekly commit count for the repository owner and everyone else.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsParticipation({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/punch_card getStatsPunchCard
 * @apiVersion 5.3.3
 * @apiName getStatsPunchCard
 * @apiDescription Get the number of commits per hour in each day.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsPunchCard({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:sha/statuses getStatuses
 * @apiVersion 5.3.3
 * @apiName getStatuses
 * @apiDescription Get status for a specfic ref.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getStatuses({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/tags getTags
 * @apiVersion 5.3.3
 * @apiName getTags
 * @apiDescription Get tags for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTags({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/teams getTeams
 * @apiVersion 5.3.3
 * @apiName getTeams
 * @apiDescription Get teams for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTeams({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/views getViews
 * @apiVersion 5.3.3
 * @apiName getViews
 * @apiDescription Get the total number of views and breakdown per day or week for the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getViews({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id/assets listAssets
 * @apiVersion 5.3.3
 * @apiName listAssets
 * @apiDescription List assets for a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.listAssets({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/merges merge
 * @apiVersion 5.3.3
 * @apiName merge
 * @apiDescription Perform a merge.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} [commit_message]  Commit message to use for the merge commit. If omitted, a default message will be used.
 * @apiExample {js} ex:
github.repos.merge({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects/columns/cards/:id/moves moveProjectCard
 * @apiVersion 5.3.3
 * @apiName moveProjectCard
 * @apiDescription Move a project card. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiParam {String} [column_id]  The id value of a column in the same project.
 * @apiExample {js} ex:
github.repos.moveProjectCard({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects/columns/:id/moves moveProjectColumn
 * @apiVersion 5.3.3
 * @apiName moveProjectColumn
 * @apiDescription Move a project column. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiExample {js} ex:
github.repos.moveProjectColumn({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks/:id/pings pingHook
 * @apiVersion 5.3.3
 * @apiName pingHook
 * @apiDescription Ping a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.pingHook({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection removeBranchProtection
 * @apiVersion 5.3.3
 * @apiName removeBranchProtection
 * @apiDescription Remove branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeBranchProtection({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/collaborators/:collabuser removeCollaborator
 * @apiVersion 5.3.3
 * @apiName removeCollaborator
 * @apiDescription Remove user as a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} collabuser  
 * @apiExample {js} ex:
github.repos.removeCollaborator({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/required_status_checks removeProtectedBranchRequiredStatusChecks
 * @apiVersion 5.3.3
 * @apiName removeProtectedBranchRequiredStatusChecks
 * @apiDescription Remove required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts removeProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 5.3.3
 * @apiName removeProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Remove required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions removeProtectedBranchRestrictions
 * @apiVersion 5.3.3
 * @apiName removeProtectedBranchRestrictions
 * @apiDescription Remove restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams removeProtectedBranchTeamRestrictions
 * @apiVersion 5.3.3
 * @apiName removeProtectedBranchTeamRestrictions
 * @apiDescription Remove team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions/users removeProtectedBranchUserRestrictions
 * @apiVersion 5.3.3
 * @apiName removeProtectedBranchUserRestrictions
 * @apiDescription Remove user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts replaceProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 5.3.3
 * @apiName replaceProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Replace required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams replaceProtectedBranchTeamRestrictions
 * @apiVersion 5.3.3
 * @apiName replaceProtectedBranchTeamRestrictions
 * @apiDescription Replace team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/restrictions/users replaceProtectedBranchUserRestrictions
 * @apiVersion 5.3.3
 * @apiName replaceProtectedBranchUserRestrictions
 * @apiDescription Replace user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pages/builds requestPageBuild
 * @apiVersion 5.3.3
 * @apiName requestPageBuild
 * @apiDescription Request a page build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.requestPageBuild({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks/:id/tests testHook
 * @apiVersion 5.3.3
 * @apiName testHook
 * @apiDescription Test a [push] hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.testHook({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection updateBranchProtection
 * @apiVersion 5.3.3
 * @apiName updateBranchProtection
 * @apiDescription Update branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/comments/:id updateCommitComment
 * @apiVersion 5.3.3
 * @apiName updateCommitComment
 * @apiDescription Update a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.updateCommitComment({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/contents/:path updateFile
 * @apiVersion 5.3.3
 * @apiName updateFile
 * @apiDescription Update a file.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 5.3.3
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
 * @api {patch} /repos/:owner/:repo/projects/:number updateProject
 * @apiVersion 5.3.3
 * @apiName updateProject
 * @apiDescription Update a project. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.updateProject({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/projects/columns/cards/:id updateProjectCard
 * @apiVersion 5.3.3
 * @apiName updateProjectCard
 * @apiDescription Update a project card. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [note]  The note of the card.
 * @apiExample {js} ex:
github.repos.updateProjectCard({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/projects/columns/:id updateProjectColumn
 * @apiVersion 5.3.3
 * @apiName updateProjectColumn
 * @apiDescription Update a project column. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.repos.updateProjectColumn({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/branches/:branch/protection/required_status_checks updateProtectedBranchRequiredStatusChecks
 * @apiVersion 5.3.3
 * @apiName updateProtectedBranchRequiredStatusChecks
 * @apiDescription Update required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Boolean} [include_admins]  Enforce required status checks for repository administrators.
 * @apiParam {Boolean} [strict]  Require branches to be up to date before merging.
 * @apiParam {Array} [contexts]  The list of status checks to require in order to merge into this branch.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.updateProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases/:id/assets uploadAsset
 * @apiVersion 5.3.3
 * @apiName uploadAsset
 * @apiDescription Upload a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName get
 * @apiDescription Get the authenticated user
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.get({ ... });
 */

/**
 * @api {get} /users getAll
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @api {get} /user/followers getFollowers
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
 * @apiName getRepoInvites
 * @apiDescription List a user's repository invitations. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.getRepoInvites({ ... });
 */

/**
 * @api {get} /user/teams getTeams
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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
 * @apiVersion 5.3.3
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

/**
 * @api {get} /notifications/threads/:id/subscription checkNotificationThreadSubscription
 * @apiVersion 6.0.0
 * @apiName checkNotificationThreadSubscription
 * @apiDescription Check to see if the current user is subscribed to a thread.
 * @apiGroup activity
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.activity.checkNotificationThreadSubscription({ ... });
 */

/**
 * @api {get} /user/starred/:owner/:repo checkStarringRepo
 * @apiVersion 6.0.0
 * @apiName checkStarringRepo
 * @apiDescription Check if you are starring a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.checkStarringRepo({ ... });
 */

/**
 * @api {delete} /notifications/threads/:id/subscription deleteNotificationThreadSubscription
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @api {get} /repos/:owner/:repo/events getEventsForRepo
 * @apiVersion 6.0.0
 * @apiName getEventsForRepo
 * @apiDescription List repository events
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events getEventsForRepoIssues
 * @apiVersion 6.0.0
 * @apiName getEventsForRepoIssues
 * @apiDescription List issue events for a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoIssues({ ... });
 */

/**
 * @api {get} /networks/:owner/:repo/events getEventsForRepoNetwork
 * @apiVersion 6.0.0
 * @apiName getEventsForRepoNetwork
 * @apiDescription List public events for a network of repositories
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoNetwork({ ... });
 */

/**
 * @api {get} /users/:username/events getEventsForUser
 * @apiVersion 6.0.0
 * @apiName getEventsForUser
 * @apiDescription List events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUser({ ... });
 */

/**
 * @api {get} /users/:username/events/orgs/:org getEventsForUserOrg
 * @apiVersion 6.0.0
 * @apiName getEventsForUserOrg
 * @apiDescription List events for a user's organization
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserOrg({ ... });
 */

/**
 * @api {get} /users/:username/events/public getEventsForUserPublic
 * @apiVersion 6.0.0
 * @apiName getEventsForUserPublic
 * @apiDescription List public events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserPublic({ ... });
 */

/**
 * @api {get} /users/:username/received_events getEventsReceived
 * @apiVersion 6.0.0
 * @apiName getEventsReceived
 * @apiDescription List events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceived({ ... });
 */

/**
 * @api {get} /users/:username/received_events/public getEventsReceivedPublic
 * @apiVersion 6.0.0
 * @apiName getEventsReceivedPublic
 * @apiDescription List public events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceivedPublic({ ... });
 */

/**
 * @api {get} /feeds getFeeds
 * @apiVersion 6.0.0
 * @apiName getFeeds
 * @apiDescription Get all feeds available for the authenticated user.
 * @apiGroup activity
 *
 * @apiExample {js} ex:
github.activity.getFeeds({ ... });
 */

/**
 * @api {get} /notifications/threads/:id getNotificationThread
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @api {get} /repos/:owner/:repo/notifications getNotificationsForUser
 * @apiVersion 6.0.0
 * @apiName getNotificationsForUser
 * @apiDescription Get all notifications for the given user.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [all=false]  If true, show notifications marked as read. Default: false
 * @apiParam {Boolean} [participating=false]  If true, only shows notifications in which the user is directly participating or mentioned. Default: false
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {String} [before]  Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @apiExample {js} ex:
github.activity.getNotificationsForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/subscription getRepoSubscription
 * @apiVersion 6.0.0
 * @apiName getRepoSubscription
 * @apiDescription Get a Repository Subscription.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getRepoSubscription({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stargazers getStargazersForRepo
 * @apiVersion 6.0.0
 * @apiName getStargazersForRepo
 * @apiDescription List Stargazers
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStargazersForRepo({ ... });
 */

/**
 * @api {get} /user/starred getStarredRepos
 * @apiVersion 6.0.0
 * @apiName getStarredRepos
 * @apiDescription List repositories being starred by the authenticated user
 * @apiGroup activity
 *
 * @apiParam {String} [sort=created]  
 * @apiParam {String} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStarredRepos({ ... });
 */

/**
 * @api {get} /users/:username/starred getStarredReposForUser
 * @apiVersion 6.0.0
 * @apiName getStarredReposForUser
 * @apiDescription List repositories being starred by a user
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {String} [sort=created]  
 * @apiParam {String} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStarredReposForUser({ ... });
 */

/**
 * @api {get} /user/subscriptions getWatchedRepos
 * @apiVersion 6.0.0
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
 * @api {get} /users/:username/subscriptions getWatchedReposForUser
 * @apiVersion 6.0.0
 * @apiName getWatchedReposForUser
 * @apiDescription List repositories being watched by a user.
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchedReposForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/subscribers getWatchersForRepo
 * @apiVersion 6.0.0
 * @apiName getWatchersForRepo
 * @apiDescription Get watchers for repository.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchersForRepo({ ... });
 */

/**
 * @api {patch} /notifications/threads/:id markNotificationThreadAsRead
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName markNotificationsAsRead
 * @apiDescription Mark notifications as read for authenticated user.
 * @apiGroup activity
 *
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsRead({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/notifications markNotificationsAsReadForRepo
 * @apiVersion 6.0.0
 * @apiName markNotificationsAsReadForRepo
 * @apiDescription Mark notifications in a repo as read.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsReadForRepo({ ... });
 */

/**
 * @api {put} /notifications/threads/:id/subscription setNotificationThreadSubscription
 * @apiVersion 6.0.0
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
 * @api {put} /repos/:owner/:repo/subscription setRepoSubscription
 * @apiVersion 6.0.0
 * @apiName setRepoSubscription
 * @apiDescription Set a Repository Subscription
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [subscribed]  Determines if notifications should be received from this repository.
 * @apiParam {Boolean} [ignored]  Determines if all notifications should be blocked from this repository.
 * @apiExample {js} ex:
github.activity.setRepoSubscription({ ... });
 */

/**
 * @api {put} /user/starred/:owner/:repo starRepo
 * @apiVersion 6.0.0
 * @apiName starRepo
 * @apiDescription Star a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.starRepo({ ... });
 */

/**
 * @api {delete} /user/starred/:owner/:repo unstarRepo
 * @apiVersion 6.0.0
 * @apiName unstarRepo
 * @apiDescription Unstar a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unstarRepo({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/subscription unwatchRepo
 * @apiVersion 6.0.0
 * @apiName unwatchRepo
 * @apiDescription Unwatch a repository.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unwatchRepo({ ... });
 */

/**
 * @api {get} /applications/:client_id/tokens/:access_token check
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName create
 * @apiDescription Create a new authorization.
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
 * @apiVersion 6.0.0
 * @apiName delete
 * @apiDescription Delete an authorization.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.delete({ ... });
 */

/**
 * @api {delete} /applications/grants/:id deleteGrant
 * @apiVersion 6.0.0
 * @apiName deleteGrant
 * @apiDescription Delete a grant.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.deleteGrant({ ... });
 */

/**
 * @api {get} /authorizations/:id get
 * @apiVersion 6.0.0
 * @apiName get
 * @apiDescription Get a single authorization.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.get({ ... });
 */

/**
 * @api {get} /authorizations getAll
 * @apiVersion 6.0.0
 * @apiName getAll
 * @apiDescription List your authorizations.
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getAll({ ... });
 */

/**
 * @api {get} /applications/grants/:id getGrant
 * @apiVersion 6.0.0
 * @apiName getGrant
 * @apiDescription Get a single grant.
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
 * @apiVersion 6.0.0
 * @apiName getGrants
 * @apiDescription List your grants.
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getGrants({ ... });
 */

/**
 * @api {put} /authorizations/clients/:client_id getOrCreateAuthorizationForApp
 * @apiVersion 6.0.0
 * @apiName getOrCreateAuthorizationForApp
 * @apiDescription Get or create an authorization for a specific app.
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
 * @apiVersion 6.0.0
 * @apiName getOrCreateAuthorizationForAppAndFingerprint
 * @apiDescription Get or create an authorization for a specific app and fingerprint.
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName update
 * @apiDescription Update an existing authorization.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiParam {Array} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {Array} [add_scopes]  A list of scopes to add to this authorization.
 * @apiParam {Array} [remove_scopes]  A list of scopes to remove from this authorization.
 * @apiParam {String} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {String} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiParam {String} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiExample {js} ex:
github.authorization.update({ ... });
 */

/**
 * @api {post} /admin/organizations createOrg
 * @apiVersion 6.0.0
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
 * @api {post} /admin/pre_receive_environments createPreReceiveEnvironment
 * @apiVersion 6.0.0
 * @apiName createPreReceiveEnvironment
 * @apiDescription Create a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} name  The new pre-receive environment's name.
 * @apiParam {String} image_url  URL from which to download a tarball of this environment.
 * @apiExample {js} ex:
github.enterprise.createPreReceiveEnvironment({ ... });
 */

/**
 * @api {post} /admin/pre-receive-hooks createPreReceiveHook
 * @apiVersion 6.0.0
 * @apiName createPreReceiveHook
 * @apiDescription Create a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} name  The name of the hook.
 * @apiParam {String} script  The script that the hook runs.
 * @apiParam {Json} script_repository  The GitHub repository where the script is kept.
 * @apiParam {Json} environment  The pre-receive environment where the script is executed.
 * @apiParam {String} [enforcement=disabled]  The state of enforcement for this hook. default: disabled
 * @apiParam {Boolean} [allow_downstream_configuration=false]  Whether enforcement can be overridden at the org or repo level. default: false
 * @apiExample {js} ex:
github.enterprise.createPreReceiveHook({ ... });
 */

/**
 * @api {delete} /admin/pre_receive_environments/:id deletePreReceiveEnvironment
 * @apiVersion 6.0.0
 * @apiName deletePreReceiveEnvironment
 * @apiDescription Delete a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.deletePreReceiveEnvironment({ ... });
 */

/**
 * @api {delete} /admin/pre_receive_hooks/:id deletePreReceiveHook
 * @apiVersion 6.0.0
 * @apiName deletePreReceiveHook
 * @apiDescription Delete a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.deletePreReceiveHook({ ... });
 */

/**
 * @api {patch} /admin/pre_receive_environments/:id editPreReceiveEnvironment
 * @apiVersion 6.0.0
 * @apiName editPreReceiveEnvironment
 * @apiDescription Create a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiParam {String} name  This pre-receive environment's new name.
 * @apiParam {String} image_url  URL from which to download a tarball of this environment.
 * @apiExample {js} ex:
github.enterprise.editPreReceiveEnvironment({ ... });
 */

/**
 * @api {patch} /admin/pre_receive_hooks/:id editPreReceiveHook
 * @apiVersion 6.0.0
 * @apiName editPreReceiveHook
 * @apiDescription Edit a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiParam {Json} body  JSON object that contains pre-receive hook info.
 * @apiExample {js} ex:
github.enterprise.editPreReceiveHook({ ... });
 */

/**
 * @api {get} /enterprise/settings/license getLicense
 * @apiVersion 6.0.0
 * @apiName getLicense
 * @apiDescription Get license information
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getLicense({ ... });
 */

/**
 * @api {get} /admin/pre-receive-environments/:id getPreReceiveEnvironment
 * @apiVersion 6.0.0
 * @apiName getPreReceiveEnvironment
 * @apiDescription Get a single pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironment({ ... });
 */

/**
 * @api {get} /admin/pre-receive-environments/:id/downloads/latest getPreReceiveEnvironmentDownloadStatus
 * @apiVersion 6.0.0
 * @apiName getPreReceiveEnvironmentDownloadStatus
 * @apiDescription Get a pre-receive environment's download status. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironmentDownloadStatus({ ... });
 */

/**
 * @api {get} /admin/pre_receive_environments getPreReceiveEnvironments
 * @apiVersion 6.0.0
 * @apiName getPreReceiveEnvironments
 * @apiDescription List pre-receive environments. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironments({ ... });
 */

/**
 * @api {get} /admin/pre-receive-hooks/:id getPreReceiveHook
 * @apiVersion 6.0.0
 * @apiName getPreReceiveHook
 * @apiDescription Get a single pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveHook({ ... });
 */

/**
 * @api {get} /admin/pre-receive-hooks getPreReceiveHooks
 * @apiVersion 6.0.0
 * @apiName getPreReceiveHooks
 * @apiDescription List pre-receive hooks. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getPreReceiveHooks({ ... });
 */

/**
 * @api {post} /staff/indexing_jobs queueIndexingJob
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName syncLdapForTeam
 * @apiDescription Sync LDAP mapping for a team.
 * @apiGroup enterprise
 *
 * @apiParam {Number} team_id  
 * @apiExample {js} ex:
github.enterprise.syncLdapForTeam({ ... });
 */

/**
 * @api {post} /admin/ldap/users/:username/sync syncLdapForUser
 * @apiVersion 6.0.0
 * @apiName syncLdapForUser
 * @apiDescription Sync LDAP mapping for a user.
 * @apiGroup enterprise
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.enterprise.syncLdapForUser({ ... });
 */

/**
 * @api {post} /admin/pre_receive_environments/:id/downloads triggerPreReceiveEnvironmentDownload
 * @apiVersion 6.0.0
 * @apiName triggerPreReceiveEnvironmentDownload
 * @apiDescription Trigger a pre-receive environment download. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.triggerPreReceiveEnvironmentDownload({ ... });
 */

/**
 * @api {patch} /admin/ldap/teams/:team_id/mapping updateLdapForTeam
 * @apiVersion 6.0.0
 * @apiName updateLdapForTeam
 * @apiDescription Update LDAP mapping for a team.
 * @apiGroup enterprise
 *
 * @apiParam {Number} team_id  
 * @apiParam {String} ldap_dn  LDAP DN for user
 * @apiExample {js} ex:
github.enterprise.updateLdapForTeam({ ... });
 */

/**
 * @api {patch} /admin/ldap/users/:username/mapping updateLdapForUser
 * @apiVersion 6.0.0
 * @apiName updateLdapForUser
 * @apiDescription Update LDAP mapping for a user.
 * @apiGroup enterprise
 *
 * @apiParam {String} username  
 * @apiParam {String} ldap_dn  LDAP DN for user
 * @apiExample {js} ex:
github.enterprise.updateLdapForUser({ ... });
 */

/**
 * @api {get} /gists/:id/star checkStar
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName edit
 * @apiDescription Edit a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiParam {Json} files  Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {String} [description]  
 * @apiParam {String} [content]  Updated file contents.
 * @apiParam {String} [filename]  New name for this file.
 * @apiExample {js} ex:
github.gists.edit({ ... });
 */

/**
 * @api {patch} /gists/:gist_id/comments/:id editComment
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName getAll
 * @apiDescription List the authenticated user's gists or if called anonymously, this will return all public gists
 * @apiGroup gists
 *
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gists.getAll({ ... });
 */

/**
 * @api {get} /gists/:gist_id/comments/:id getComment
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName getCommits
 * @apiDescription List gist commits
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.getCommits({ ... });
 */

/**
 * @api {get} /users/:username/gists getForUser
 * @apiVersion 6.0.0
 * @apiName getForUser
 * @apiDescription List a user's gists
 * @apiGroup gists
 *
 * @apiParam {String} username  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gists.getForUser({ ... });
 */

/**
 * @api {get} /gists/:id/forks getForks
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName unstar
 * @apiDescription Unstar a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.unstar({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/blobs createBlob
 * @apiVersion 6.0.0
 * @apiName createBlob
 * @apiDescription Create a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} content  
 * @apiParam {String} encoding  
 * @apiExample {js} ex:
github.gitdata.createBlob({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/commits createCommit
 * @apiVersion 6.0.0
 * @apiName createCommit
 * @apiDescription Create a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/git/refs createReference
 * @apiVersion 6.0.0
 * @apiName createReference
 * @apiDescription Create a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.createReference({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/tags createTag
 * @apiVersion 6.0.0
 * @apiName createTag
 * @apiDescription Create a Tag Object
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/git/trees createTree
 * @apiVersion 6.0.0
 * @apiName createTree
 * @apiDescription Create a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Json} tree  Array of Hash objects (of path, mode, type and sha) specifying a tree structure
 * @apiParam {String} [base_tree]  String of the SHA1 of the tree you want to update with new data
 * @apiExample {js} ex:
github.gitdata.createTree({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/git/refs/:ref deleteReference
 * @apiVersion 6.0.0
 * @apiName deleteReference
 * @apiDescription Delete a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.deleteReference({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/blobs/:sha getBlob
 * @apiVersion 6.0.0
 * @apiName getBlob
 * @apiDescription Get a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getBlob({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/commits/:sha getCommit
 * @apiVersion 6.0.0
 * @apiName getCommit
 * @apiDescription Get a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/commits/:sha getCommitSignatureVerification
 * @apiVersion 6.0.0
 * @apiName getCommitSignatureVerification
 * @apiDescription Get a Commit Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommitSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs/:ref getReference
 * @apiVersion 6.0.0
 * @apiName getReference
 * @apiDescription Get a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.getReference({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs getReferences
 * @apiVersion 6.0.0
 * @apiName getReferences
 * @apiDescription Get all References
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getReferences({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/tags/:sha getTag
 * @apiVersion 6.0.0
 * @apiName getTag
 * @apiDescription Get a Tag
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTag({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/tags/:sha getTagSignatureVerification
 * @apiVersion 6.0.0
 * @apiName getTagSignatureVerification
 * @apiDescription Get a Tag Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTagSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs/tags getTags
 * @apiVersion 6.0.0
 * @apiName getTags
 * @apiDescription Get all tag References
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getTags({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/trees/:sha getTree
 * @apiVersion 6.0.0
 * @apiName getTree
 * @apiDescription Get a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Boolean} [recursive]  
 * @apiExample {js} ex:
github.gitdata.getTree({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/git/refs/:ref updateReference
 * @apiVersion 6.0.0
 * @apiName updateReference
 * @apiDescription Update a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha  
 * @apiParam {Boolean} [force=false]  Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
 * @apiExample {js} ex:
github.gitdata.updateReference({ ... });
 */

/**
 * @api {post} /installations/:installation_id/repositories/:repository_id addRepoToInstallation
 * @apiVersion 6.0.0
 * @apiName addRepoToInstallation
 * @apiDescription Add a single repository to an installation. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} installation_id  
 * @apiParam {String} repository_id  
 * @apiExample {js} ex:
github.integrations.addRepoToInstallation({ ... });
 */

/**
 * @api {post} /installations/:installation_id/access_tokens createInstallationToken
 * @apiVersion 6.0.0
 * @apiName createInstallationToken
 * @apiDescription Create a new installation token. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} installation_id  
 * @apiParam {String} [user_id]  The id of the user for whom the integration is acting on behalf of.
 * @apiExample {js} ex:
github.integrations.createInstallationToken({ ... });
 */

/**
 * @api {get} /installation/repositories getInstallationRepositories
 * @apiVersion 6.0.0
 * @apiName getInstallationRepositories
 * @apiDescription List repositories that are accessible to the authenticated installation. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} [user_id]  The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user.
 * @apiExample {js} ex:
github.integrations.getInstallationRepositories({ ... });
 */

/**
 * @api {get} /integration/installations getInstallations
 * @apiVersion 6.0.0
 * @apiName getInstallations
 * @apiDescription List the integration's installations. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.integrations.getInstallations({ ... });
 */

/**
 * @api {post} /integration/identity/user getUserIdentity
 * @apiVersion 6.0.0
 * @apiName getUserIdentity
 * @apiDescription Request identity of user. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} [nonce]  
 * @apiExample {js} ex:
github.integrations.getUserIdentity({ ... });
 */

/**
 * @api {post} /installations/:installation_id/repositories/:repository_id removeRepoFromInstallation
 * @apiVersion 6.0.0
 * @apiName removeRepoFromInstallation
 * @apiDescription Remove a single repository from an installation. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} installation_id  
 * @apiParam {String} repository_id  
 * @apiExample {js} ex:
github.integrations.removeRepoFromInstallation({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/assignees addAssigneesToIssue
 * @apiVersion 6.0.0
 * @apiName addAssigneesToIssue
 * @apiDescription Add assignees to an issue.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} assignees  Logins for the users that should be added to the issue.
 * @apiExample {js} ex:
github.issues.addAssigneesToIssue({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/labels addLabels
 * @apiVersion 6.0.0
 * @apiName addLabels
 * @apiDescription Add labels to an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  
 * @apiExample {js} ex:
github.issues.addLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/assignees/:assignee checkAssignee
 * @apiVersion 6.0.0
 * @apiName checkAssignee
 * @apiDescription Check assignee
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} assignee  Login for the user that this issue should be assigned to.
 * @apiExample {js} ex:
github.issues.checkAssignee({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues create
 * @apiVersion 6.0.0
 * @apiName create
 * @apiDescription Create an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/issues/:number/comments createComment
 * @apiVersion 6.0.0
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.createComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/labels createLabel
 * @apiVersion 6.0.0
 * @apiName createLabel
 * @apiDescription Create a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.createLabel({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/milestones createMilestone
 * @apiVersion 6.0.0
 * @apiName createMilestone
 * @apiDescription Create a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String} [state=open]  
 * @apiParam {String} [description]  
 * @apiParam {Date} [due_on]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.issues.createMilestone({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/comments/:id deleteComment
 * @apiVersion 6.0.0
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.deleteComment({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/labels/:name deleteLabel
 * @apiVersion 6.0.0
 * @apiName deleteLabel
 * @apiDescription Delete a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.deleteLabel({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/milestones/:number deleteMilestone
 * @apiVersion 6.0.0
 * @apiName deleteMilestone
 * @apiDescription Delete a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.deleteMilestone({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/issues/:number edit
 * @apiVersion 6.0.0
 * @apiName edit
 * @apiDescription Edit an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/issues/comments/:id editComment
 * @apiVersion 6.0.0
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.editComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number get
 * @apiVersion 6.0.0
 * @apiName get
 * @apiDescription Get a single issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.get({ ... });
 */

/**
 * @api {get} /issues getAll
 * @apiVersion 6.0.0
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
 * @api {get} /repos/:owner/:repo/assignees getAssignees
 * @apiVersion 6.0.0
 * @apiName getAssignees
 * @apiDescription List assignees
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.issues.getAssignees({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments/:id getComment
 * @apiVersion 6.0.0
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/comments getComments
 * @apiVersion 6.0.0
 * @apiName getComments
 * @apiDescription List comments on an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments getCommentsForRepo
 * @apiVersion 6.0.0
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/issues/events/:id getEvent
 * @apiVersion 6.0.0
 * @apiName getEvent
 * @apiDescription Get a single event
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getEvent({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:issue_number/events getEvents
 * @apiVersion 6.0.0
 * @apiName getEvents
 * @apiDescription List events for an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} issue_number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEvents({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events getEventsForRepo
 * @apiVersion 6.0.0
 * @apiName getEventsForRepo
 * @apiDescription List events for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:issue_number/timeline getEventsTimeline
 * @apiVersion 6.0.0
 * @apiName getEventsTimeline
 * @apiDescription List events for an issue. (In preview period. See README.)
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} issue_number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsTimeline({ ... });
 */

/**
 * @api {get} /orgs/:org/issues getForOrg
 * @apiVersion 6.0.0
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
 * @api {get} /repos/:owner/:repo/issues getForRepo
 * @apiVersion 6.0.0
 * @apiName getForRepo
 * @apiDescription List issues for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @apiVersion 6.0.0
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
 * @api {get} /repos/:owner/:repo/issues/:number/labels getIssueLabels
 * @apiVersion 6.0.0
 * @apiName getIssueLabels
 * @apiDescription List labels on an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getIssueLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/labels/:name getLabel
 * @apiVersion 6.0.0
 * @apiName getLabel
 * @apiDescription Get a single label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.getLabel({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/labels getLabels
 * @apiVersion 6.0.0
 * @apiName getLabels
 * @apiDescription List all labels for this repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones/:number getMilestone
 * @apiVersion 6.0.0
 * @apiName getMilestone
 * @apiDescription Get a single milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestone({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones/:number/labels getMilestoneLabels
 * @apiVersion 6.0.0
 * @apiName getMilestoneLabels
 * @apiDescription Get labels for every issue in a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestoneLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones getMilestones
 * @apiVersion 6.0.0
 * @apiName getMilestones
 * @apiDescription List milestones for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {put} /repos/:owner/:repo/issues/:number/lock lock
 * @apiVersion 6.0.0
 * @apiName lock
 * @apiDescription Users with push access can lock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.lock({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/labels removeAllLabels
 * @apiVersion 6.0.0
 * @apiName removeAllLabels
 * @apiDescription Remove all labels from an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.removeAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/assignees removeAssigneesFromIssue
 * @apiVersion 6.0.0
 * @apiName removeAssigneesFromIssue
 * @apiDescription Remove assignees from an issue.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Json} body  JSON object that contains assignees array of logins for the users that should be removed from the issue.
 * @apiExample {js} ex:
github.issues.removeAssigneesFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/labels/:name removeLabel
 * @apiVersion 6.0.0
 * @apiName removeLabel
 * @apiDescription Remove a label from an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.removeLabel({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/issues/:number/labels replaceAllLabels
 * @apiVersion 6.0.0
 * @apiName replaceAllLabels
 * @apiDescription Replace all labels for an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  Sending an empty array ([]) will remove all Labels from the Issue.
 * @apiExample {js} ex:
github.issues.replaceAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/lock unlock
 * @apiVersion 6.0.0
 * @apiName unlock
 * @apiDescription Users with push access can unlock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.unlock({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/labels/:oldname updateLabel
 * @apiVersion 6.0.0
 * @apiName updateLabel
 * @apiDescription Update a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} oldname  The old name of the label.
 * @apiParam {String} name  The new name of the label.
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.updateLabel({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/milestones/:number updateMilestone
 * @apiVersion 6.0.0
 * @apiName updateMilestone
 * @apiDescription Update a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {delete} /repos/:owner/:repo/import cancelImport
 * @apiVersion 6.0.0
 * @apiName cancelImport
 * @apiDescription Cancel an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.cancelImport({ ... });
 */

/**
 * @api {delete} /orgs/:org/migrations/:id/archive deleteMigrationArchive
 * @apiVersion 6.0.0
 * @apiName deleteMigrationArchive
 * @apiDescription Delete a migration archive. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.deleteMigrationArchive({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/import/authors getImportCommitAuthors
 * @apiVersion 6.0.0
 * @apiName getImportCommitAuthors
 * @apiDescription Get import commit authors. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [since]  Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step.
 * @apiExample {js} ex:
github.migrations.getImportCommitAuthors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/import getImportProgress
 * @apiVersion 6.0.0
 * @apiName getImportProgress
 * @apiDescription Get import progress. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.getImportProgress({ ... });
 */

/**
 * @api {get} /:owner/:name/import/large_files getLargeImportFiles
 * @apiVersion 6.0.0
 * @apiName getLargeImportFiles
 * @apiDescription List files larger than 100MB found during the import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.migrations.getLargeImportFiles({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations/:id/archive getMigrationArchiveLink
 * @apiVersion 6.0.0
 * @apiName getMigrationArchiveLink
 * @apiDescription Get the URL to a migration archive. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.getMigrationArchiveLink({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations/:id getMigrationStatus
 * @apiVersion 6.0.0
 * @apiName getMigrationStatus
 * @apiDescription Get the status of a migration. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.getMigrationStatus({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations getMigrations
 * @apiVersion 6.0.0
 * @apiName getMigrations
 * @apiDescription Get a list of migrations. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.migrations.getMigrations({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/import/authors/:author_id mapImportCommitAuthor
 * @apiVersion 6.0.0
 * @apiName mapImportCommitAuthor
 * @apiDescription Map a commit author. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} author_id  The commit author id.
 * @apiParam {String} [email]  The new Git author email.
 * @apiParam {String} [name]  The new Git author name.
 * @apiExample {js} ex:
github.migrations.mapImportCommitAuthor({ ... });
 */

/**
 * @api {patch} /:owner/:name/import/lfs setImportLfsPreference
 * @apiVersion 6.0.0
 * @apiName setImportLfsPreference
 * @apiDescription Set import LFS preference. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiParam {String} use_lfs  Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).
 * @apiExample {js} ex:
github.migrations.setImportLfsPreference({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/import startImport
 * @apiVersion 6.0.0
 * @apiName startImport
 * @apiDescription Start an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
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
 * @apiVersion 6.0.0
 * @apiName startMigration
 * @apiDescription Start a migration. (In preview period. See README.)
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
 * @api {delete} /orgs/:org/migrations/:id/repos/:repo_name/lock unlockRepoLockedForMigration
 * @apiVersion 6.0.0
 * @apiName unlockRepoLockedForMigration
 * @apiDescription Unlock a repository that was locked for migration. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiParam {String} repo_name  
 * @apiExample {js} ex:
github.migrations.unlockRepoLockedForMigration({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/import updateImport
 * @apiVersion 6.0.0
 * @apiName updateImport
 * @apiDescription Update existing import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.updateImport({ ... });
 */

/**
 * @api {get} /emojis getEmojis
 * @apiVersion 6.0.0
 * @apiName getEmojis
 * @apiDescription Lists all the emojis available to use on GitHub.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getEmojis({ ... });
 */

/**
 * @api {get} /gitignore/templates/:name getGitignoreTemplate
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName getGitignoreTemplates
 * @apiDescription Lists available gitignore templates
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getGitignoreTemplates({ ... });
 */

/**
 * @api {get} /licenses/:license getLicense
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName getLicenses
 * @apiDescription List all licenses. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getLicenses({ ... });
 */

/**
 * @api {get} /meta getMeta
 * @apiVersion 6.0.0
 * @apiName getMeta
 * @apiDescription This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getMeta({ ... });
 */

/**
 * @api {get} /rate_limit getRateLimit
 * @apiVersion 6.0.0
 * @apiName getRateLimit
 * @apiDescription Get your current rate limit status
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getRateLimit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/license getRepoLicense
 * @apiVersion 6.0.0
 * @apiName getRepoLicense
 * @apiDescription Get the contents of a repository's license. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.misc.getRepoLicense({ ... });
 */

/**
 * @api {post} /markdown renderMarkdown
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName renderMarkdownRaw
 * @apiDescription Render a Markdown document in raw mode
 * @apiGroup misc
 *
 * @apiParam {String} data  Raw data to send as the body of the request
 * @apiExample {js} ex:
github.misc.renderMarkdownRaw({ ... });
 */

/**
 * @api {put} /orgs/:org/memberships/:username addOrgMembership
 * @apiVersion 6.0.0
 * @apiName addOrgMembership
 * @apiDescription Add or update organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiParam {String} role  The role to give the user in the organization.
 * @apiExample {js} ex:
github.orgs.addOrgMembership({ ... });
 */

/**
 * @api {put} /teams/:id/memberships/:username addTeamMembership
 * @apiVersion 6.0.0
 * @apiName addTeamMembership
 * @apiDescription Add team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} username  
 * @apiParam {String} [role=member]  The role that this user should have in the team.
 * @apiExample {js} ex:
github.orgs.addTeamMembership({ ... });
 */

/**
 * @api {put} /teams/:id/repos/:org/:repo addTeamRepo
 * @apiVersion 6.0.0
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
 * @api {get} /orgs/:org/members/:username checkMembership
 * @apiVersion 6.0.0
 * @apiName checkMembership
 * @apiDescription Check membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.checkMembership({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members/:username checkPublicMembership
 * @apiVersion 6.0.0
 * @apiName checkPublicMembership
 * @apiDescription Check public membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.checkPublicMembership({ ... });
 */

/**
 * @api {get} /teams/:id/repos/:owner/:repo checkTeamRepo
 * @apiVersion 6.0.0
 * @apiName checkTeamRepo
 * @apiDescription Check if a team manages a repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.checkTeamRepo({ ... });
 */

/**
 * @api {delete} /orgs/:org/public_members/:username concealMembership
 * @apiVersion 6.0.0
 * @apiName concealMembership
 * @apiDescription Conceal a user's membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.concealMembership({ ... });
 */

/**
 * @api {post} /orgs/:org/hooks createHook
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName deleteTeam
 * @apiDescription Delete team
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.orgs.deleteTeam({ ... });
 */

/**
 * @api {delete} /teams/:id/repos/:owner/:repo deleteTeamRepo
 * @apiVersion 6.0.0
 * @apiName deleteTeamRepo
 * @apiDescription Remove team repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.deleteTeamRepo({ ... });
 */

/**
 * @api {patch} /orgs/:org/hooks/:id editHook
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @api {get} /users/:username/orgs getForUser
 * @apiVersion 6.0.0
 * @apiName getForUser
 * @apiDescription List public organization memberships for the specified user.
 * @apiGroup orgs
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getForUser({ ... });
 */

/**
 * @api {get} /orgs/:org/hooks/:id getHook
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @api {get} /orgs/:org/memberships/:username getOrgMembership
 * @apiVersion 6.0.0
 * @apiName getOrgMembership
 * @apiDescription Get organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.getOrgMembership({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members getPublicMembers
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName getTeamMembers
 * @apiDescription List team members
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
 * @api {get} /teams/:id/memberships/:username getTeamMembership
 * @apiVersion 6.0.0
 * @apiName getTeamMembership
 * @apiDescription Get team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.getTeamMembership({ ... });
 */

/**
 * @api {get} /teams/:id/repos getTeamRepos
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @api {put} /orgs/:org/public_members/:username publicizeMembership
 * @apiVersion 6.0.0
 * @apiName publicizeMembership
 * @apiDescription Publicize a user's membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.publicizeMembership({ ... });
 */

/**
 * @api {delete} /orgs/:org/members/:username removeMember
 * @apiVersion 6.0.0
 * @apiName removeMember
 * @apiDescription Remove a member
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.removeMember({ ... });
 */

/**
 * @api {delete} /orgs/:org/memberships/:username removeOrgMembership
 * @apiVersion 6.0.0
 * @apiName removeOrgMembership
 * @apiDescription Remove organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.removeOrgMembership({ ... });
 */

/**
 * @api {delete} /teams/:id/memberships/:username removeTeamMembership
 * @apiVersion 6.0.0
 * @apiName removeTeamMembership
 * @apiDescription Remove team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.removeTeamMembership({ ... });
 */

/**
 * @api {patch} /orgs/:org update
 * @apiVersion 6.0.0
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
 * @api {post} /orgs/:org/projects createOrgProject
 * @apiVersion 6.0.0
 * @apiName createOrgProject
 * @apiDescription Create an organization project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} org  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.projects.createOrgProject({ ... });
 */

/**
 * @api {post} /projects/columns/:column_id/cards createProjectCard
 * @apiVersion 6.0.0
 * @apiName createProjectCard
 * @apiDescription Create a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} column_id  
 * @apiParam {String} [note]  The note of the card.
 * @apiParam {String} [content_id]  The id of the Issue or Pull Request to associate with this card.
 * @apiParam {String} [content_type]  The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'.
 * @apiExample {js} ex:
github.projects.createProjectCard({ ... });
 */

/**
 * @api {post} /projects/:project_id/columns createProjectColumn
 * @apiVersion 6.0.0
 * @apiName createProjectColumn
 * @apiDescription Create a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} project_id  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.projects.createProjectColumn({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects createRepoProject
 * @apiVersion 6.0.0
 * @apiName createRepoProject
 * @apiDescription Create a repository project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.projects.createRepoProject({ ... });
 */

/**
 * @api {delete} /projects/:id deleteProject
 * @apiVersion 6.0.0
 * @apiName deleteProject
 * @apiDescription Delete a project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.deleteProject({ ... });
 */

/**
 * @api {delete} /projects/columns/cards/:id deleteProjectCard
 * @apiVersion 6.0.0
 * @apiName deleteProjectCard
 * @apiDescription Delete a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.deleteProjectCard({ ... });
 */

/**
 * @api {delete} /projects/columns/:id deleteProjectColumn
 * @apiVersion 6.0.0
 * @apiName deleteProjectColumn
 * @apiDescription Delete a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.deleteProjectColumn({ ... });
 */

/**
 * @api {get} /orgs/:org/projects getOrgProjects
 * @apiVersion 6.0.0
 * @apiName getOrgProjects
 * @apiDescription List organization projects. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} org  
 * @apiExample {js} ex:
github.projects.getOrgProjects({ ... });
 */

/**
 * @api {get} /projects/:id getProject
 * @apiVersion 6.0.0
 * @apiName getProject
 * @apiDescription Get a project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.getProject({ ... });
 */

/**
 * @api {get} /projects/columns/cards/:id getProjectCard
 * @apiVersion 6.0.0
 * @apiName getProjectCard
 * @apiDescription Get project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.getProjectCard({ ... });
 */

/**
 * @api {get} /projects/columns/:column_id/cards getProjectCards
 * @apiVersion 6.0.0
 * @apiName getProjectCards
 * @apiDescription List project cards. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} column_id  
 * @apiExample {js} ex:
github.projects.getProjectCards({ ... });
 */

/**
 * @api {get} /projects/columns/:id getProjectColumn
 * @apiVersion 6.0.0
 * @apiName getProjectColumn
 * @apiDescription Get a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.getProjectColumn({ ... });
 */

/**
 * @api {get} /projects/:project_id/columns getProjectColumns
 * @apiVersion 6.0.0
 * @apiName getProjectColumns
 * @apiDescription List project columns. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} project_id  
 * @apiExample {js} ex:
github.projects.getProjectColumns({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects getRepoProjects
 * @apiVersion 6.0.0
 * @apiName getRepoProjects
 * @apiDescription List repository projects. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.projects.getRepoProjects({ ... });
 */

/**
 * @api {post} /projects/columns/cards/:id/moves moveProjectCard
 * @apiVersion 6.0.0
 * @apiName moveProjectCard
 * @apiDescription Move a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiParam {String} [column_id]  The id value of a column in the same project.
 * @apiExample {js} ex:
github.projects.moveProjectCard({ ... });
 */

/**
 * @api {post} /projects/columns/:id/moves moveProjectColumn
 * @apiVersion 6.0.0
 * @apiName moveProjectColumn
 * @apiDescription Move a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiExample {js} ex:
github.projects.moveProjectColumn({ ... });
 */

/**
 * @api {patch} /projects/:id updateProject
 * @apiVersion 6.0.0
 * @apiName updateProject
 * @apiDescription Update a project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.projects.updateProject({ ... });
 */

/**
 * @api {patch} /projects/columns/cards/:id updateProjectCard
 * @apiVersion 6.0.0
 * @apiName updateProjectCard
 * @apiDescription Update a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} [note]  The note of the card.
 * @apiExample {js} ex:
github.projects.updateProjectCard({ ... });
 */

/**
 * @api {patch} /projects/columns/:id updateProjectColumn
 * @apiVersion 6.0.0
 * @apiName updateProjectColumn
 * @apiDescription Update a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.projects.updateProjectColumn({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/merge checkMerged
 * @apiVersion 6.0.0
 * @apiName checkMerged
 * @apiDescription Get if a pull request has been merged
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.checkMerged({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls create
 * @apiVersion 6.0.0
 * @apiName create
 * @apiDescription Create a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  The title of the pull request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiExample {js} ex:
github.pullRequests.create({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/:number/comments createComment
 * @apiVersion 6.0.0
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/pulls/:number/comments createCommentReply
 * @apiVersion 6.0.0
 * @apiName createCommentReply
 * @apiDescription Reply to existing pull request comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiParam {Number} in_reply_to  The comment id to reply to.
 * @apiExample {js} ex:
github.pullRequests.createCommentReply({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls createFromIssue
 * @apiVersion 6.0.0
 * @apiName createFromIssue
 * @apiDescription Create a pull request from an existing issue
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} issue  The issue number in this repository to turn into a Pull Request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiExample {js} ex:
github.pullRequests.createFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/pulls/comments/:id deleteComment
 * @apiVersion 6.0.0
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.pullRequests.deleteComment({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/pulls/comments/:id editComment
 * @apiVersion 6.0.0
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.pullRequests.editComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number get
 * @apiVersion 6.0.0
 * @apiName get
 * @apiDescription Get a single pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.get({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls getAll
 * @apiVersion 6.0.0
 * @apiName getAll
 * @apiDescription List pull requests
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/pulls/comments/:id getComment
 * @apiVersion 6.0.0
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.pullRequests.getComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/comments getComments
 * @apiVersion 6.0.0
 * @apiName getComments
 * @apiDescription List comments on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments getCommentsForRepo
 * @apiVersion 6.0.0
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/pulls/:number/commits getCommits
 * @apiVersion 6.0.0
 * @apiName getCommits
 * @apiDescription List commits on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getCommits({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/files getFiles
 * @apiVersion 6.0.0
 * @apiName getFiles
 * @apiDescription List pull requests files
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getFiles({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/pulls/:number/merge merge
 * @apiVersion 6.0.0
 * @apiName merge
 * @apiDescription Merge a pull request (Merge Button)
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [commit_title]  Title for the automatic commit message. (In preview period. See README.)
 * @apiParam {String} [commit_message]  Extra detail to append to automatic commit message.
 * @apiParam {String} [sha]  SHA that pull request head must match to allow merge
 * @apiParam {String} [merge_method=merge]  Merge method to use. Possible values are `merge`, `squash`, or `rebase`. (In preview period. See README.)
 * @apiExample {js} ex:
github.pullRequests.merge({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/pulls/:number update
 * @apiVersion 6.0.0
 * @apiName update
 * @apiDescription Update a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} [title]  The title of the pull request.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiParam {String} [state=open]  
 * @apiExample {js} ex:
github.pullRequests.update({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/comments/:id/reactions createForCommitComment
 * @apiVersion 6.0.0
 * @apiName createForCommitComment
 * @apiDescription Create reaction for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForCommitComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/reactions createForIssue
 * @apiVersion 6.0.0
 * @apiName createForIssue
 * @apiDescription Create reaction for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssue({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/comments/:id/reactions createForIssueComment
 * @apiVersion 6.0.0
 * @apiName createForIssueComment
 * @apiDescription Create reaction for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssueComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/comments/:id/reactions createForPullRequestReviewComment
 * @apiVersion 6.0.0
 * @apiName createForPullRequestReviewComment
 * @apiDescription Create reaction for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForPullRequestReviewComment({ ... });
 */

/**
 * @api {delete} /reactions/:id delete
 * @apiVersion 6.0.0
 * @apiName delete
 * @apiDescription Delete a reaction. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.reactions.delete({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments/:id/reactions getForCommitComment
 * @apiVersion 6.0.0
 * @apiName getForCommitComment
 * @apiDescription List reactions for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForCommitComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/reactions getForIssue
 * @apiVersion 6.0.0
 * @apiName getForIssue
 * @apiDescription List reactions for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssue({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments/:id/reactions getForIssueComment
 * @apiVersion 6.0.0
 * @apiName getForIssueComment
 * @apiDescription List reactions for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssueComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments/:id/reactions getForPullRequestReviewComment
 * @apiVersion 6.0.0
 * @apiName getForPullRequestReviewComment
 * @apiDescription List reactions for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForPullRequestReviewComment({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/collaborators/:username addCollaborator
 * @apiVersion 6.0.0
 * @apiName addCollaborator
 * @apiDescription Add user as a collaborator
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} username  
 * @apiParam {String} [permission=push]  `pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository.
 * @apiExample {js} ex:
github.repos.addCollaborator({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts addProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 6.0.0
 * @apiName addProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Add required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} ex:
github.repos.addProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams addProtectedBranchTeamRestrictions
 * @apiVersion 6.0.0
 * @apiName addProtectedBranchTeamRestrictions
 * @apiDescription Add team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.addProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/restrictions/users addProtectedBranchUserRestrictions
 * @apiVersion 6.0.0
 * @apiName addProtectedBranchUserRestrictions
 * @apiDescription Add user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.addProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/collaborators/:username checkCollaborator
 * @apiVersion 6.0.0
 * @apiName checkCollaborator
 * @apiDescription Check if user is a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.repos.checkCollaborator({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/compare/:base...:head compareCommits
 * @apiVersion 6.0.0
 * @apiName compareCommits
 * @apiDescription Compare two commits.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiExample {js} ex:
github.repos.compareCommits({ ... });
 */

/**
 * @api {post} /user/repos create
 * @apiVersion 6.0.0
 * @apiName create
 * @apiDescription Create a new repository for the authenticated user.
 * @apiGroup repos
 *
 * @apiParam {String} name  
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {String} [description]  
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Number} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
 * @apiExample {js} ex:
github.repos.create({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/commits/:sha/comments createCommitComment
 * @apiVersion 6.0.0
 * @apiName createCommitComment
 * @apiDescription Create a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/deployments createDeployment
 * @apiVersion 6.0.0
 * @apiName createDeployment
 * @apiDescription Create a deployment. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/deployments/:id/statuses createDeploymentStatus
 * @apiVersion 6.0.0
 * @apiName createDeploymentStatus
 * @apiDescription Create a deployment status. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {put} /repos/:owner/:repo/contents/:path createFile
 * @apiVersion 6.0.0
 * @apiName createFile
 * @apiDescription Create a new file in the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 6.0.0
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
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {Number} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.createForOrg({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks createHook
 * @apiVersion 6.0.0
 * @apiName createHook
 * @apiDescription Create a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {Json} config  A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {Array} [events=["push"]]  Determines what events the hook is triggered for. Default: `['push']`.
 * @apiParam {Boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} ex:
github.repos.createHook({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/keys createKey
 * @apiVersion 6.0.0
 * @apiName createKey
 * @apiDescription Add a new deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String} key  
 * @apiParam {Boolean} [read_only]  If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
 * @apiExample {js} ex:
github.repos.createKey({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases createRelease
 * @apiVersion 6.0.0
 * @apiName createRelease
 * @apiDescription Create a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/statuses/:sha createStatus
 * @apiVersion 6.0.0
 * @apiName createStatus
 * @apiDescription Create a status.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {delete} /repos/:owner/:repo delete
 * @apiVersion 6.0.0
 * @apiName delete
 * @apiDescription Delete a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.delete({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/assets/:id deleteAsset
 * @apiVersion 6.0.0
 * @apiName deleteAsset
 * @apiDescription Delete a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteAsset({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/comments/:id deleteCommitComment
 * @apiVersion 6.0.0
 * @apiName deleteCommitComment
 * @apiDescription Delete a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteCommitComment({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/downloads/:id deleteDownload
 * @apiVersion 6.0.0
 * @apiName deleteDownload
 * @apiDescription Delete a download.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteDownload({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/contents/:path deleteFile
 * @apiVersion 6.0.0
 * @apiName deleteFile
 * @apiDescription Delete a file.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {delete} /repos/:owner/:repo/hooks/:id deleteHook
 * @apiVersion 6.0.0
 * @apiName deleteHook
 * @apiDescription Deleate a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteHook({ ... });
 */

/**
 * @api {delete} /repositories/:repo_id/invitations/:invitation_id deleteInvite
 * @apiVersion 6.0.0
 * @apiName deleteInvite
 * @apiDescription Delete a repository invitation. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo_id  
 * @apiParam {String} invitation_id  
 * @apiExample {js} ex:
github.repos.deleteInvite({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/keys/:id deleteKey
 * @apiVersion 6.0.0
 * @apiName deleteKey
 * @apiDescription Remove a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteKey({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/:id deleteRelease
 * @apiVersion 6.0.0
 * @apiName deleteRelease
 * @apiDescription Delete a release
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteRelease({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo edit
 * @apiVersion 6.0.0
 * @apiName edit
 * @apiDescription Update a repo.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiParam {String} repo  
 * @apiParam {String} [description]  
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {String} [default_branch]  Updates the default branch for this repository.
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.edit({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/releases/assets/:id editAsset
 * @apiVersion 6.0.0
 * @apiName editAsset
 * @apiDescription Edit a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} [label]  An alternate short description of the asset. Used in place of the filename.
 * @apiExample {js} ex:
github.repos.editAsset({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/hooks/:id editHook
 * @apiVersion 6.0.0
 * @apiName editHook
 * @apiDescription Edit a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/releases/:id editRelease
 * @apiVersion 6.0.0
 * @apiName editRelease
 * @apiDescription Edit a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/forks fork
 * @apiVersion 6.0.0
 * @apiName fork
 * @apiDescription Create a fork.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [organization]  Optional parameter to specify the organization name if forking into an organization.
 * @apiExample {js} ex:
github.repos.fork({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo get
 * @apiVersion 6.0.0
 * @apiName get
 * @apiDescription Get a repo for a user.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.get({ ... });
 */

/**
 * @api {get} /user/repos getAll
 * @apiVersion 6.0.0
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
 * @api {get} /repos/:owner/:repo/comments getAllCommitComments
 * @apiVersion 6.0.0
 * @apiName getAllCommitComments
 * @apiDescription List commit comments for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getAllCommitComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/:archive_format/:ref getArchiveLink
 * @apiVersion 6.0.0
 * @apiName getArchiveLink
 * @apiDescription Get archive link.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} archive_format=tarball  Either tarball or zipball, Deafult: tarball.
 * @apiParam {String} [ref]  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.repos.getArchiveLink({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/assets/:id getAsset
 * @apiVersion 6.0.0
 * @apiName getAsset
 * @apiDescription Get a single release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getAsset({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch getBranch
 * @apiVersion 6.0.0
 * @apiName getBranch
 * @apiDescription Get branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranch({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection getBranchProtection
 * @apiVersion 6.0.0
 * @apiName getBranchProtection
 * @apiDescription Get branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranchProtection({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches getBranches
 * @apiVersion 6.0.0
 * @apiName getBranches
 * @apiDescription List branches. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [protected]  Set to true to only return protected branches
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranches({ ... });
 */

/**
 * @api {get} /repositories/:id getById
 * @apiVersion 6.0.0
 * @apiName getById
 * @apiDescription Get a single repo by id.
 * @apiGroup repos
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getById({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/clones getClones
 * @apiVersion 6.0.0
 * @apiName getClones
 * @apiDescription Get the total number of clones and breakdown per day or week for the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getClones({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/collaborators getCollaborators
 * @apiVersion 6.0.0
 * @apiName getCollaborators
 * @apiDescription List collaborators
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCollaborators({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref/status getCombinedStatus
 * @apiVersion 6.0.0
 * @apiName getCombinedStatus
 * @apiDescription Get the combined status for a specific ref.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  Ref to fetch the status for. It can be a SHA, a branch name, or a tag name.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCombinedStatus({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:sha getCommit
 * @apiVersion 6.0.0
 * @apiName getCommit
 * @apiDescription Get a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.repos.getCommit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments/:id getCommitComment
 * @apiVersion 6.0.0
 * @apiName getCommitComment
 * @apiDescription Get a single commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getCommitComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref/comments getCommitComments
 * @apiVersion 6.0.0
 * @apiName getCommitComments
 * @apiDescription List comments for a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCommitComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits getCommits
 * @apiVersion 6.0.0
 * @apiName getCommits
 * @apiDescription List commits on a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/contents/:path getContent
 * @apiVersion 6.0.0
 * @apiName getContent
 * @apiDescription Get the contents of a file or directory in a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} path  The content path.
 * @apiParam {String} [ref]  The String name of the Commit/Branch/Tag. Defaults to master.
 * @apiExample {js} ex:
github.repos.getContent({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/contributors getContributors
 * @apiVersion 6.0.0
 * @apiName getContributors
 * @apiDescription Get contributors for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [anon]  Set to 1 or true to include anonymous contributors in results.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getContributors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/deployments/:id/statuses getDeploymentStatuses
 * @apiVersion 6.0.0
 * @apiName getDeploymentStatuses
 * @apiDescription List deployment statuses. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDeploymentStatuses({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/deployments getDeployments
 * @apiVersion 6.0.0
 * @apiName getDeployments
 * @apiDescription List deployments. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/downloads/:id getDownload
 * @apiVersion 6.0.0
 * @apiName getDownload
 * @apiDescription Get a single download.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDownload({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/downloads getDownloads
 * @apiVersion 6.0.0
 * @apiName getDownloads
 * @apiDescription List downloads for repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getDownloads({ ... });
 */

/**
 * @api {get} /orgs/:org/repos getForOrg
 * @apiVersion 6.0.0
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
 * @api {get} /users/:username/repos getForUser
 * @apiVersion 6.0.0
 * @apiName getForUser
 * @apiDescription List public repositories for the specified user.
 * @apiGroup repos
 *
 * @apiParam {String} username  
 * @apiParam {String} [type=owner]  Possible values: `all`, `owner`, `member`. Default: `owner`.
 * @apiParam {String} [sort=full_name]  Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {String} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/forks getForks
 * @apiVersion 6.0.0
 * @apiName getForks
 * @apiDescription List forks.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [sort=newest]  Possible values: `newest`, `oldest`, `stargazers`, default: `newest`.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForks({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/hooks/:id getHook
 * @apiVersion 6.0.0
 * @apiName getHook
 * @apiDescription Get single hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getHook({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/hooks getHooks
 * @apiVersion 6.0.0
 * @apiName getHooks
 * @apiDescription List hooks.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getHooks({ ... });
 */

/**
 * @api {get} /repositories/:repo_id/invitations getInvites
 * @apiVersion 6.0.0
 * @apiName getInvites
 * @apiDescription List invitations for a repository. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo_id  
 * @apiExample {js} ex:
github.repos.getInvites({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/keys/:id getKey
 * @apiVersion 6.0.0
 * @apiName getKey
 * @apiDescription Get a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getKey({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/keys getKeys
 * @apiVersion 6.0.0
 * @apiName getKeys
 * @apiDescription List deploy keys.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getKeys({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/languages getLanguages
 * @apiVersion 6.0.0
 * @apiName getLanguages
 * @apiDescription Get languages for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getLanguages({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds/latest getLatestPagesBuild
 * @apiVersion 6.0.0
 * @apiName getLatestPagesBuild
 * @apiDescription Get latest Pages build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/latest getLatestRelease
 * @apiVersion 6.0.0
 * @apiName getLatestRelease
 * @apiDescription Get the latest release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages getPages
 * @apiVersion 6.0.0
 * @apiName getPages
 * @apiDescription Get information about a Pages site. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPages({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds/:id getPagesBuild
 * @apiVersion 6.0.0
 * @apiName getPagesBuild
 * @apiDescription Get a specific Pages build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds getPagesBuilds
 * @apiVersion 6.0.0
 * @apiName getPagesBuilds
 * @apiDescription List Pages builds. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPagesBuilds({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/popular/paths getPaths
 * @apiVersion 6.0.0
 * @apiName getPaths
 * @apiDescription Get the top 10 popular contents over the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPaths({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/required_status_checks getProtectedBranchRequiredStatusChecks
 * @apiVersion 6.0.0
 * @apiName getProtectedBranchRequiredStatusChecks
 * @apiDescription Get required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts getProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 6.0.0
 * @apiName getProtectedBranchRequiredStatusChecksContexts
 * @apiDescription List required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions getProtectedBranchRestrictions
 * @apiVersion 6.0.0
 * @apiName getProtectedBranchRestrictions
 * @apiDescription Get restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams getProtectedBranchTeamRestrictions
 * @apiVersion 6.0.0
 * @apiName getProtectedBranchTeamRestrictions
 * @apiDescription List team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions/users getProtectedBranchUserRestrictions
 * @apiVersion 6.0.0
 * @apiName getProtectedBranchUserRestrictions
 * @apiDescription List user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repositories getPublic
 * @apiVersion 6.0.0
 * @apiName getPublic
 * @apiDescription List all public repositories
 * @apiGroup repos
 *
 * @apiParam {String} [since]  The integer ID of the last Repository that you've seen.
 * @apiExample {js} ex:
github.repos.getPublic({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/readme getReadme
 * @apiVersion 6.0.0
 * @apiName getReadme
 * @apiDescription Get the README for the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [ref]  The name of the commit/branch/tag. Default: the repository’s default branch (usually master)
 * @apiExample {js} ex:
github.repos.getReadme({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/popular/referrers getReferrers
 * @apiVersion 6.0.0
 * @apiName getReferrers
 * @apiDescription Get the top 10 referrers over the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReferrers({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id getRelease
 * @apiVersion 6.0.0
 * @apiName getRelease
 * @apiDescription Get a single release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/tags/:tag getReleaseByTag
 * @apiVersion 6.0.0
 * @apiName getReleaseByTag
 * @apiDescription Get a release by tag name.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} tag  String of the tag
 * @apiExample {js} ex:
github.repos.getReleaseByTag({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases getReleases
 * @apiVersion 6.0.0
 * @apiName getReleases
 * @apiDescription List releases for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReleases({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref getShaOfCommitRef
 * @apiVersion 6.0.0
 * @apiName getShaOfCommitRef
 * @apiDescription Get the SHA-1 of a commit reference.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.repos.getShaOfCommitRef({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/code_frequency getStatsCodeFrequency
 * @apiVersion 6.0.0
 * @apiName getStatsCodeFrequency
 * @apiDescription Get the number of additions and deletions per week.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCodeFrequency({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/commit_activity getStatsCommitActivity
 * @apiVersion 6.0.0
 * @apiName getStatsCommitActivity
 * @apiDescription Get the last year of commit activity data.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCommitActivity({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/contributors getStatsContributors
 * @apiVersion 6.0.0
 * @apiName getStatsContributors
 * @apiDescription Get contributors list with additions, deletions, and commit counts.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsContributors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/participation getStatsParticipation
 * @apiVersion 6.0.0
 * @apiName getStatsParticipation
 * @apiDescription Get the weekly commit count for the repository owner and everyone else.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsParticipation({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/punch_card getStatsPunchCard
 * @apiVersion 6.0.0
 * @apiName getStatsPunchCard
 * @apiDescription Get the number of commits per hour in each day.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsPunchCard({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref/statuses getStatuses
 * @apiVersion 6.0.0
 * @apiName getStatuses
 * @apiDescription List statuses for a specfic ref.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getStatuses({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/tags getTags
 * @apiVersion 6.0.0
 * @apiName getTags
 * @apiDescription Get tags for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTags({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/teams getTeams
 * @apiVersion 6.0.0
 * @apiName getTeams
 * @apiDescription Get teams for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTeams({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/views getViews
 * @apiVersion 6.0.0
 * @apiName getViews
 * @apiDescription Get the total number of views and breakdown per day or week for the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getViews({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id/assets listAssets
 * @apiVersion 6.0.0
 * @apiName listAssets
 * @apiDescription List assets for a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.listAssets({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/merges merge
 * @apiVersion 6.0.0
 * @apiName merge
 * @apiDescription Perform a merge.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} [commit_message]  Commit message to use for the merge commit. If omitted, a default message will be used.
 * @apiExample {js} ex:
github.repos.merge({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks/:id/pings pingHook
 * @apiVersion 6.0.0
 * @apiName pingHook
 * @apiDescription Ping a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.pingHook({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection removeBranchProtection
 * @apiVersion 6.0.0
 * @apiName removeBranchProtection
 * @apiDescription Remove branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeBranchProtection({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/collaborators/:username removeCollaborator
 * @apiVersion 6.0.0
 * @apiName removeCollaborator
 * @apiDescription Remove user as a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.repos.removeCollaborator({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/required_status_checks removeProtectedBranchRequiredStatusChecks
 * @apiVersion 6.0.0
 * @apiName removeProtectedBranchRequiredStatusChecks
 * @apiDescription Remove required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts removeProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 6.0.0
 * @apiName removeProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Remove required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions removeProtectedBranchRestrictions
 * @apiVersion 6.0.0
 * @apiName removeProtectedBranchRestrictions
 * @apiDescription Remove restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams removeProtectedBranchTeamRestrictions
 * @apiVersion 6.0.0
 * @apiName removeProtectedBranchTeamRestrictions
 * @apiDescription Remove team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.removeProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions/users removeProtectedBranchUserRestrictions
 * @apiVersion 6.0.0
 * @apiName removeProtectedBranchUserRestrictions
 * @apiDescription Remove user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.removeProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts replaceProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 6.0.0
 * @apiName replaceProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Replace required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams replaceProtectedBranchTeamRestrictions
 * @apiVersion 6.0.0
 * @apiName replaceProtectedBranchTeamRestrictions
 * @apiDescription Replace team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/restrictions/users replaceProtectedBranchUserRestrictions
 * @apiVersion 6.0.0
 * @apiName replaceProtectedBranchUserRestrictions
 * @apiDescription Replace user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pages/builds requestPageBuild
 * @apiVersion 6.0.0
 * @apiName requestPageBuild
 * @apiDescription Request a page build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.requestPageBuild({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks/:id/tests testHook
 * @apiVersion 6.0.0
 * @apiName testHook
 * @apiDescription Test a [push] hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.testHook({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection updateBranchProtection
 * @apiVersion 6.0.0
 * @apiName updateBranchProtection
 * @apiDescription Update branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/comments/:id updateCommitComment
 * @apiVersion 6.0.0
 * @apiName updateCommitComment
 * @apiDescription Update a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.updateCommitComment({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/contents/:path updateFile
 * @apiVersion 6.0.0
 * @apiName updateFile
 * @apiDescription Update a file.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repositories/:repo_id/invitations/:invitation_id updateInvite
 * @apiVersion 6.0.0
 * @apiName updateInvite
 * @apiDescription Update a repository invitation. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo_id  
 * @apiParam {String} invitation_id  
 * @apiParam {String} [permission]  The permissions that the associated user will have on the repository.
 * @apiExample {js} ex:
github.repos.updateInvite({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/branches/:branch/protection/required_status_checks updateProtectedBranchRequiredStatusChecks
 * @apiVersion 6.0.0
 * @apiName updateProtectedBranchRequiredStatusChecks
 * @apiDescription Update required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Boolean} [include_admins]  Enforce required status checks for repository administrators.
 * @apiParam {Boolean} [strict]  Require branches to be up to date before merging.
 * @apiParam {Array} [contexts]  The list of status checks to require in order to merge into this branch.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.updateProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases/:id/assets uploadAsset
 * @apiVersion 6.0.0
 * @apiName uploadAsset
 * @apiDescription Upload a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @api {patch} /user/repository_invitations/:invitation_id acceptRepoInvite
 * @apiVersion 6.0.0
 * @apiName acceptRepoInvite
 * @apiDescription Accept a repository invitation. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {String} invitation_id  
 * @apiExample {js} ex:
github.users.acceptRepoInvite({ ... });
 */

/**
 * @api {post} /user/emails addEmails
 * @apiVersion 6.0.0
 * @apiName addEmails
 * @apiDescription Add email address(es)
 * @apiGroup users
 *
 * @apiParam {Array} body  You can post a single email address or an array of addresses.
 * @apiExample {js} ex:
github.users.addEmails({ ... });
 */

/**
 * @api {get} /user/following/:username checkFollowing
 * @apiVersion 6.0.0
 * @apiName checkFollowing
 * @apiDescription Check if you are following a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.checkFollowing({ ... });
 */

/**
 * @api {get} /users/:username/following/:target_user checkIfOneFollowersOther
 * @apiVersion 6.0.0
 * @apiName checkIfOneFollowersOther
 * @apiDescription Check if one user follows another
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {String} target_user  
 * @apiExample {js} ex:
github.users.checkIfOneFollowersOther({ ... });
 */

/**
 * @api {post} /user/gpg_keys createGpgKey
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @api {delete} /user/repository_invitations/:invitation_id declineRepoInvite
 * @apiVersion 6.0.0
 * @apiName declineRepoInvite
 * @apiDescription Decline a repository invitation. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {String} invitation_id  
 * @apiExample {js} ex:
github.users.declineRepoInvite({ ... });
 */

/**
 * @api {delete} /user/emails deleteEmails
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName deleteKey
 * @apiDescription Delete a public key
 * @apiGroup users
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.users.deleteKey({ ... });
 */

/**
 * @api {delete} /users/:username/site_admin demote
 * @apiVersion 6.0.0
 * @apiName demote
 * @apiDescription Demote a site administrator to an ordinary user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.demote({ ... });
 */

/**
 * @api {patch} /user/memberships/orgs/:org editOrgMembership
 * @apiVersion 6.0.0
 * @apiName editOrgMembership
 * @apiDescription Edit your organization membership
 * @apiGroup users
 *
 * @apiParam {String} org  
 * @apiParam {String} state  The state that the membership should be in. Only "active" will be accepted.
 * @apiExample {js} ex:
github.users.editOrgMembership({ ... });
 */

/**
 * @api {put} /user/following/:username followUser
 * @apiVersion 6.0.0
 * @apiName followUser
 * @apiDescription Follow a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.followUser({ ... });
 */

/**
 * @api {get} /user get
 * @apiVersion 6.0.0
 * @apiName get
 * @apiDescription Get the authenticated user
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.get({ ... });
 */

/**
 * @api {get} /users getAll
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @api {get} /user/followers getFollowers
 * @apiVersion 6.0.0
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
 * @api {get} /users/:username/followers getFollowersForUser
 * @apiVersion 6.0.0
 * @apiName getFollowersForUser
 * @apiDescription List a user's followers
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getFollowersForUser({ ... });
 */

/**
 * @api {get} /user/following getFollowing
 * @apiVersion 6.0.0
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
 * @api {get} /users/:username/following getFollowingForUser
 * @apiVersion 6.0.0
 * @apiName getFollowingForUser
 * @apiDescription List who a user is following
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getFollowingForUser({ ... });
 */

/**
 * @api {get} /users/:username getForUser
 * @apiVersion 6.0.0
 * @apiName getForUser
 * @apiDescription Get a single user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.getForUser({ ... });
 */

/**
 * @api {get} /user/gpg_keys/:id getGpgKey
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
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
 * @api {get} /users/:username/keys getKeysForUser
 * @apiVersion 6.0.0
 * @apiName getKeysForUser
 * @apiDescription List public keys for a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getKeysForUser({ ... });
 */

/**
 * @api {get} /user/memberships/orgs/:org getOrgMembership
 * @apiVersion 6.0.0
 * @apiName getOrgMembership
 * @apiDescription Get your organization membership
 * @apiGroup users
 *
 * @apiParam {String} org  
 * @apiExample {js} ex:
github.users.getOrgMembership({ ... });
 */

/**
 * @api {get} /user/memberships/orgs getOrgMemberships
 * @apiVersion 6.0.0
 * @apiName getOrgMemberships
 * @apiDescription List your organization memberships
 * @apiGroup users
 *
 * @apiParam {String} [state]  Indicates the state of the memberships to return. Can be either active or pending. If not specified, both active and pending memberships are returned.
 * @apiExample {js} ex:
github.users.getOrgMemberships({ ... });
 */

/**
 * @api {get} /user/orgs getOrgs
 * @apiVersion 6.0.0
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
 * @apiVersion 6.0.0
 * @apiName getRepoInvites
 * @apiDescription List a user's repository invitations. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.getRepoInvites({ ... });
 */

/**
 * @api {get} /user/teams getTeams
 * @apiVersion 6.0.0
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
 * @api {put} /users/:username/site_admin promote
 * @apiVersion 6.0.0
 * @apiName promote
 * @apiDescription Promote an ordinary user to a site administrator
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.promote({ ... });
 */

/**
 * @api {put} /users/:username/suspended suspend
 * @apiVersion 6.0.0
 * @apiName suspend
 * @apiDescription Suspend a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.suspend({ ... });
 */

/**
 * @api {delete} /user/following/:username unfollowUser
 * @apiVersion 6.0.0
 * @apiName unfollowUser
 * @apiDescription Unfollow a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.unfollowUser({ ... });
 */

/**
 * @api {delete} /users/:username/suspended unsuspend
 * @apiVersion 6.0.0
 * @apiName unsuspend
 * @apiDescription Unsuspend a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.unsuspend({ ... });
 */

/**
 * @api {patch} /user update
 * @apiVersion 6.0.0
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

/**
 * @api {get} /notifications/threads/:id/subscription checkNotificationThreadSubscription
 * @apiVersion 6.0.3
 * @apiName checkNotificationThreadSubscription
 * @apiDescription Check to see if the current user is subscribed to a thread.
 * @apiGroup activity
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.activity.checkNotificationThreadSubscription({ ... });
 */

/**
 * @api {get} /user/starred/:owner/:repo checkStarringRepo
 * @apiVersion 6.0.3
 * @apiName checkStarringRepo
 * @apiDescription Check if you are starring a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.checkStarringRepo({ ... });
 */

/**
 * @api {delete} /notifications/threads/:id/subscription deleteNotificationThreadSubscription
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @api {get} /repos/:owner/:repo/events getEventsForRepo
 * @apiVersion 6.0.3
 * @apiName getEventsForRepo
 * @apiDescription List repository events
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events getEventsForRepoIssues
 * @apiVersion 6.0.3
 * @apiName getEventsForRepoIssues
 * @apiDescription List issue events for a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoIssues({ ... });
 */

/**
 * @api {get} /networks/:owner/:repo/events getEventsForRepoNetwork
 * @apiVersion 6.0.3
 * @apiName getEventsForRepoNetwork
 * @apiDescription List public events for a network of repositories
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoNetwork({ ... });
 */

/**
 * @api {get} /users/:username/events getEventsForUser
 * @apiVersion 6.0.3
 * @apiName getEventsForUser
 * @apiDescription List events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUser({ ... });
 */

/**
 * @api {get} /users/:username/events/orgs/:org getEventsForUserOrg
 * @apiVersion 6.0.3
 * @apiName getEventsForUserOrg
 * @apiDescription List events for a user's organization
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserOrg({ ... });
 */

/**
 * @api {get} /users/:username/events/public getEventsForUserPublic
 * @apiVersion 6.0.3
 * @apiName getEventsForUserPublic
 * @apiDescription List public events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserPublic({ ... });
 */

/**
 * @api {get} /users/:username/received_events getEventsReceived
 * @apiVersion 6.0.3
 * @apiName getEventsReceived
 * @apiDescription List events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceived({ ... });
 */

/**
 * @api {get} /users/:username/received_events/public getEventsReceivedPublic
 * @apiVersion 6.0.3
 * @apiName getEventsReceivedPublic
 * @apiDescription List public events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceivedPublic({ ... });
 */

/**
 * @api {get} /feeds getFeeds
 * @apiVersion 6.0.3
 * @apiName getFeeds
 * @apiDescription Get all feeds available for the authenticated user.
 * @apiGroup activity
 *
 * @apiExample {js} ex:
github.activity.getFeeds({ ... });
 */

/**
 * @api {get} /notifications/threads/:id getNotificationThread
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @api {get} /repos/:owner/:repo/notifications getNotificationsForUser
 * @apiVersion 6.0.3
 * @apiName getNotificationsForUser
 * @apiDescription Get all notifications for the given user.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [all=false]  If true, show notifications marked as read. Default: false
 * @apiParam {Boolean} [participating=false]  If true, only shows notifications in which the user is directly participating or mentioned. Default: false
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {String} [before]  Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @apiExample {js} ex:
github.activity.getNotificationsForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/subscription getRepoSubscription
 * @apiVersion 6.0.3
 * @apiName getRepoSubscription
 * @apiDescription Get a Repository Subscription.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getRepoSubscription({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stargazers getStargazersForRepo
 * @apiVersion 6.0.3
 * @apiName getStargazersForRepo
 * @apiDescription List Stargazers
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStargazersForRepo({ ... });
 */

/**
 * @api {get} /user/starred getStarredRepos
 * @apiVersion 6.0.3
 * @apiName getStarredRepos
 * @apiDescription List repositories being starred by the authenticated user
 * @apiGroup activity
 *
 * @apiParam {String=created,updated} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStarredRepos({ ... });
 */

/**
 * @api {get} /users/:username/starred getStarredReposForUser
 * @apiVersion 6.0.3
 * @apiName getStarredReposForUser
 * @apiDescription List repositories being starred by a user
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {String=created,updated} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStarredReposForUser({ ... });
 */

/**
 * @api {get} /user/subscriptions getWatchedRepos
 * @apiVersion 6.0.3
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
 * @api {get} /users/:username/subscriptions getWatchedReposForUser
 * @apiVersion 6.0.3
 * @apiName getWatchedReposForUser
 * @apiDescription List repositories being watched by a user.
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchedReposForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/subscribers getWatchersForRepo
 * @apiVersion 6.0.3
 * @apiName getWatchersForRepo
 * @apiDescription Get watchers for repository.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchersForRepo({ ... });
 */

/**
 * @api {patch} /notifications/threads/:id markNotificationThreadAsRead
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName markNotificationsAsRead
 * @apiDescription Mark notifications as read for authenticated user.
 * @apiGroup activity
 *
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsRead({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/notifications markNotificationsAsReadForRepo
 * @apiVersion 6.0.3
 * @apiName markNotificationsAsReadForRepo
 * @apiDescription Mark notifications in a repo as read.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsReadForRepo({ ... });
 */

/**
 * @api {put} /notifications/threads/:id/subscription setNotificationThreadSubscription
 * @apiVersion 6.0.3
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
 * @api {put} /repos/:owner/:repo/subscription setRepoSubscription
 * @apiVersion 6.0.3
 * @apiName setRepoSubscription
 * @apiDescription Set a Repository Subscription
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [subscribed]  Determines if notifications should be received from this repository.
 * @apiParam {Boolean} [ignored]  Determines if all notifications should be blocked from this repository.
 * @apiExample {js} ex:
github.activity.setRepoSubscription({ ... });
 */

/**
 * @api {put} /user/starred/:owner/:repo starRepo
 * @apiVersion 6.0.3
 * @apiName starRepo
 * @apiDescription Star a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.starRepo({ ... });
 */

/**
 * @api {delete} /user/starred/:owner/:repo unstarRepo
 * @apiVersion 6.0.3
 * @apiName unstarRepo
 * @apiDescription Unstar a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unstarRepo({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/subscription unwatchRepo
 * @apiVersion 6.0.3
 * @apiName unwatchRepo
 * @apiDescription Unwatch a repository.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unwatchRepo({ ... });
 */

/**
 * @api {get} /applications/:client_id/tokens/:access_token check
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName create
 * @apiDescription Create a new authorization.
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
 * @apiVersion 6.0.3
 * @apiName delete
 * @apiDescription Delete an authorization.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.delete({ ... });
 */

/**
 * @api {delete} /applications/grants/:id deleteGrant
 * @apiVersion 6.0.3
 * @apiName deleteGrant
 * @apiDescription Delete a grant.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.deleteGrant({ ... });
 */

/**
 * @api {get} /authorizations/:id get
 * @apiVersion 6.0.3
 * @apiName get
 * @apiDescription Get a single authorization.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.get({ ... });
 */

/**
 * @api {get} /authorizations getAll
 * @apiVersion 6.0.3
 * @apiName getAll
 * @apiDescription List your authorizations.
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getAll({ ... });
 */

/**
 * @api {get} /applications/grants/:id getGrant
 * @apiVersion 6.0.3
 * @apiName getGrant
 * @apiDescription Get a single grant.
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
 * @apiVersion 6.0.3
 * @apiName getGrants
 * @apiDescription List your grants.
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getGrants({ ... });
 */

/**
 * @api {put} /authorizations/clients/:client_id getOrCreateAuthorizationForApp
 * @apiVersion 6.0.3
 * @apiName getOrCreateAuthorizationForApp
 * @apiDescription Get or create an authorization for a specific app.
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
 * @apiVersion 6.0.3
 * @apiName getOrCreateAuthorizationForAppAndFingerprint
 * @apiDescription Get or create an authorization for a specific app and fingerprint.
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName update
 * @apiDescription Update an existing authorization.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiParam {Array} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {Array} [add_scopes]  A list of scopes to add to this authorization.
 * @apiParam {Array} [remove_scopes]  A list of scopes to remove from this authorization.
 * @apiParam {String} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {String} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiParam {String} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiExample {js} ex:
github.authorization.update({ ... });
 */

/**
 * @api {post} /admin/organizations createOrg
 * @apiVersion 6.0.3
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
 * @api {post} /admin/pre_receive_environments createPreReceiveEnvironment
 * @apiVersion 6.0.3
 * @apiName createPreReceiveEnvironment
 * @apiDescription Create a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} name  The new pre-receive environment's name.
 * @apiParam {String} image_url  URL from which to download a tarball of this environment.
 * @apiExample {js} ex:
github.enterprise.createPreReceiveEnvironment({ ... });
 */

/**
 * @api {post} /admin/pre-receive-hooks createPreReceiveHook
 * @apiVersion 6.0.3
 * @apiName createPreReceiveHook
 * @apiDescription Create a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} name  The name of the hook.
 * @apiParam {String} script  The script that the hook runs.
 * @apiParam {Json} script_repository  The GitHub repository where the script is kept.
 * @apiParam {Json} environment  The pre-receive environment where the script is executed.
 * @apiParam {String} [enforcement=disabled]  The state of enforcement for this hook. default: disabled
 * @apiParam {Boolean} [allow_downstream_configuration=false]  Whether enforcement can be overridden at the org or repo level. default: false
 * @apiExample {js} ex:
github.enterprise.createPreReceiveHook({ ... });
 */

/**
 * @api {delete} /admin/pre_receive_environments/:id deletePreReceiveEnvironment
 * @apiVersion 6.0.3
 * @apiName deletePreReceiveEnvironment
 * @apiDescription Delete a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.deletePreReceiveEnvironment({ ... });
 */

/**
 * @api {delete} /admin/pre_receive_hooks/:id deletePreReceiveHook
 * @apiVersion 6.0.3
 * @apiName deletePreReceiveHook
 * @apiDescription Delete a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.deletePreReceiveHook({ ... });
 */

/**
 * @api {patch} /admin/pre_receive_environments/:id editPreReceiveEnvironment
 * @apiVersion 6.0.3
 * @apiName editPreReceiveEnvironment
 * @apiDescription Create a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiParam {String} name  This pre-receive environment's new name.
 * @apiParam {String} image_url  URL from which to download a tarball of this environment.
 * @apiExample {js} ex:
github.enterprise.editPreReceiveEnvironment({ ... });
 */

/**
 * @api {patch} /admin/pre_receive_hooks/:id editPreReceiveHook
 * @apiVersion 6.0.3
 * @apiName editPreReceiveHook
 * @apiDescription Edit a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiParam {Json} body  JSON object that contains pre-receive hook info.
 * @apiExample {js} ex:
github.enterprise.editPreReceiveHook({ ... });
 */

/**
 * @api {get} /enterprise/settings/license getLicense
 * @apiVersion 6.0.3
 * @apiName getLicense
 * @apiDescription Get license information
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getLicense({ ... });
 */

/**
 * @api {get} /admin/pre-receive-environments/:id getPreReceiveEnvironment
 * @apiVersion 6.0.3
 * @apiName getPreReceiveEnvironment
 * @apiDescription Get a single pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironment({ ... });
 */

/**
 * @api {get} /admin/pre-receive-environments/:id/downloads/latest getPreReceiveEnvironmentDownloadStatus
 * @apiVersion 6.0.3
 * @apiName getPreReceiveEnvironmentDownloadStatus
 * @apiDescription Get a pre-receive environment's download status. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironmentDownloadStatus({ ... });
 */

/**
 * @api {get} /admin/pre_receive_environments getPreReceiveEnvironments
 * @apiVersion 6.0.3
 * @apiName getPreReceiveEnvironments
 * @apiDescription List pre-receive environments. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironments({ ... });
 */

/**
 * @api {get} /admin/pre-receive-hooks/:id getPreReceiveHook
 * @apiVersion 6.0.3
 * @apiName getPreReceiveHook
 * @apiDescription Get a single pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveHook({ ... });
 */

/**
 * @api {get} /admin/pre-receive-hooks getPreReceiveHooks
 * @apiVersion 6.0.3
 * @apiName getPreReceiveHooks
 * @apiDescription List pre-receive hooks. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getPreReceiveHooks({ ... });
 */

/**
 * @api {post} /staff/indexing_jobs queueIndexingJob
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName stats
 * @apiDescription Get statistics.
 * @apiGroup enterprise
 *
 * @apiParam {String=issues,hooks,milestones,orgs,comments,pages,users,gists,pulls,repos,all} type  Possible values: issues, hooks, milestones, orgs, comments, pages, users, gists, pulls, repos, all.
 * @apiExample {js} ex:
github.enterprise.stats({ ... });
 */

/**
 * @api {post} /admin/ldap/teams/:team_id/sync syncLdapForTeam
 * @apiVersion 6.0.3
 * @apiName syncLdapForTeam
 * @apiDescription Sync LDAP mapping for a team.
 * @apiGroup enterprise
 *
 * @apiParam {Number} team_id  
 * @apiExample {js} ex:
github.enterprise.syncLdapForTeam({ ... });
 */

/**
 * @api {post} /admin/ldap/users/:username/sync syncLdapForUser
 * @apiVersion 6.0.3
 * @apiName syncLdapForUser
 * @apiDescription Sync LDAP mapping for a user.
 * @apiGroup enterprise
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.enterprise.syncLdapForUser({ ... });
 */

/**
 * @api {post} /admin/pre_receive_environments/:id/downloads triggerPreReceiveEnvironmentDownload
 * @apiVersion 6.0.3
 * @apiName triggerPreReceiveEnvironmentDownload
 * @apiDescription Trigger a pre-receive environment download. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.triggerPreReceiveEnvironmentDownload({ ... });
 */

/**
 * @api {patch} /admin/ldap/teams/:team_id/mapping updateLdapForTeam
 * @apiVersion 6.0.3
 * @apiName updateLdapForTeam
 * @apiDescription Update LDAP mapping for a team.
 * @apiGroup enterprise
 *
 * @apiParam {Number} team_id  
 * @apiParam {String} ldap_dn  LDAP DN for user
 * @apiExample {js} ex:
github.enterprise.updateLdapForTeam({ ... });
 */

/**
 * @api {patch} /admin/ldap/users/:username/mapping updateLdapForUser
 * @apiVersion 6.0.3
 * @apiName updateLdapForUser
 * @apiDescription Update LDAP mapping for a user.
 * @apiGroup enterprise
 *
 * @apiParam {String} username  
 * @apiParam {String} ldap_dn  LDAP DN for user
 * @apiExample {js} ex:
github.enterprise.updateLdapForUser({ ... });
 */

/**
 * @api {get} /gists/:id/star checkStar
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName edit
 * @apiDescription Edit a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiParam {Json} files  Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {String} [description]  
 * @apiParam {String} [content]  Updated file contents.
 * @apiParam {String} [filename]  New name for this file.
 * @apiExample {js} ex:
github.gists.edit({ ... });
 */

/**
 * @api {patch} /gists/:gist_id/comments/:id editComment
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName getAll
 * @apiDescription List the authenticated user's gists or if called anonymously, this will return all public gists
 * @apiGroup gists
 *
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gists.getAll({ ... });
 */

/**
 * @api {get} /gists/:gist_id/comments/:id getComment
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName getCommits
 * @apiDescription List gist commits
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.getCommits({ ... });
 */

/**
 * @api {get} /users/:username/gists getForUser
 * @apiVersion 6.0.3
 * @apiName getForUser
 * @apiDescription List a user's gists
 * @apiGroup gists
 *
 * @apiParam {String} username  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gists.getForUser({ ... });
 */

/**
 * @api {get} /gists/:id/forks getForks
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName unstar
 * @apiDescription Unstar a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.unstar({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/blobs createBlob
 * @apiVersion 6.0.3
 * @apiName createBlob
 * @apiDescription Create a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} content  
 * @apiParam {String} encoding  
 * @apiExample {js} ex:
github.gitdata.createBlob({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/commits createCommit
 * @apiVersion 6.0.3
 * @apiName createCommit
 * @apiDescription Create a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/git/refs createReference
 * @apiVersion 6.0.3
 * @apiName createReference
 * @apiDescription Create a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  The name of the fully qualified reference (ie: refs/heads/master). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.createReference({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/tags createTag
 * @apiVersion 6.0.3
 * @apiName createTag
 * @apiDescription Create a Tag Object
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/git/trees createTree
 * @apiVersion 6.0.3
 * @apiName createTree
 * @apiDescription Create a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Json} tree  Array of Hash objects (of path, mode, type and sha) specifying a tree structure
 * @apiParam {String} [base_tree]  String of the SHA1 of the tree you want to update with new data
 * @apiExample {js} ex:
github.gitdata.createTree({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/git/refs/:ref deleteReference
 * @apiVersion 6.0.3
 * @apiName deleteReference
 * @apiDescription Delete a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.deleteReference({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/blobs/:sha getBlob
 * @apiVersion 6.0.3
 * @apiName getBlob
 * @apiDescription Get a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getBlob({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/commits/:sha getCommit
 * @apiVersion 6.0.3
 * @apiName getCommit
 * @apiDescription Get a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/commits/:sha getCommitSignatureVerification
 * @apiVersion 6.0.3
 * @apiName getCommitSignatureVerification
 * @apiDescription Get a Commit Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommitSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs/:ref getReference
 * @apiVersion 6.0.3
 * @apiName getReference
 * @apiDescription Get a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.getReference({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs getReferences
 * @apiVersion 6.0.3
 * @apiName getReferences
 * @apiDescription Get all References
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getReferences({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/tags/:sha getTag
 * @apiVersion 6.0.3
 * @apiName getTag
 * @apiDescription Get a Tag
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTag({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/tags/:sha getTagSignatureVerification
 * @apiVersion 6.0.3
 * @apiName getTagSignatureVerification
 * @apiDescription Get a Tag Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTagSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs/tags getTags
 * @apiVersion 6.0.3
 * @apiName getTags
 * @apiDescription Get all tag References
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getTags({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/trees/:sha getTree
 * @apiVersion 6.0.3
 * @apiName getTree
 * @apiDescription Get a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Boolean} [recursive]  
 * @apiExample {js} ex:
github.gitdata.getTree({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/git/refs/:ref updateReference
 * @apiVersion 6.0.3
 * @apiName updateReference
 * @apiDescription Update a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha  
 * @apiParam {Boolean} [force=false]  Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
 * @apiExample {js} ex:
github.gitdata.updateReference({ ... });
 */

/**
 * @api {post} /installations/:installation_id/repositories/:repository_id addRepoToInstallation
 * @apiVersion 6.0.3
 * @apiName addRepoToInstallation
 * @apiDescription Add a single repository to an installation. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} installation_id  
 * @apiParam {String} repository_id  
 * @apiExample {js} ex:
github.integrations.addRepoToInstallation({ ... });
 */

/**
 * @api {post} /installations/:installation_id/access_tokens createInstallationToken
 * @apiVersion 6.0.3
 * @apiName createInstallationToken
 * @apiDescription Create a new installation token. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} installation_id  
 * @apiParam {String} [user_id]  The id of the user for whom the integration is acting on behalf of.
 * @apiExample {js} ex:
github.integrations.createInstallationToken({ ... });
 */

/**
 * @api {get} /installation/repositories getInstallationRepositories
 * @apiVersion 6.0.3
 * @apiName getInstallationRepositories
 * @apiDescription List repositories that are accessible to the authenticated installation. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} [user_id]  The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user.
 * @apiExample {js} ex:
github.integrations.getInstallationRepositories({ ... });
 */

/**
 * @api {get} /integration/installations getInstallations
 * @apiVersion 6.0.3
 * @apiName getInstallations
 * @apiDescription List the integration's installations. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.integrations.getInstallations({ ... });
 */

/**
 * @api {post} /integration/identity/user getUserIdentity
 * @apiVersion 6.0.3
 * @apiName getUserIdentity
 * @apiDescription Request identity of user. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} [nonce]  
 * @apiExample {js} ex:
github.integrations.getUserIdentity({ ... });
 */

/**
 * @api {post} /installations/:installation_id/repositories/:repository_id removeRepoFromInstallation
 * @apiVersion 6.0.3
 * @apiName removeRepoFromInstallation
 * @apiDescription Remove a single repository from an installation. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} installation_id  
 * @apiParam {String} repository_id  
 * @apiExample {js} ex:
github.integrations.removeRepoFromInstallation({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/assignees addAssigneesToIssue
 * @apiVersion 6.0.3
 * @apiName addAssigneesToIssue
 * @apiDescription Add assignees to an issue.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} assignees  Logins for the users that should be added to the issue.
 * @apiExample {js} ex:
github.issues.addAssigneesToIssue({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/labels addLabels
 * @apiVersion 6.0.3
 * @apiName addLabels
 * @apiDescription Add labels to an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  
 * @apiExample {js} ex:
github.issues.addLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/assignees/:assignee checkAssignee
 * @apiVersion 6.0.3
 * @apiName checkAssignee
 * @apiDescription Check assignee
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} assignee  Login for the user that this issue should be assigned to.
 * @apiExample {js} ex:
github.issues.checkAssignee({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues create
 * @apiVersion 6.0.3
 * @apiName create
 * @apiDescription Create an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/issues/:number/comments createComment
 * @apiVersion 6.0.3
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.createComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/labels createLabel
 * @apiVersion 6.0.3
 * @apiName createLabel
 * @apiDescription Create a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.createLabel({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/milestones createMilestone
 * @apiVersion 6.0.3
 * @apiName createMilestone
 * @apiDescription Create a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String=open,closed,all} [state=open]  
 * @apiParam {String} [description]  
 * @apiParam {Date} [due_on]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.issues.createMilestone({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/comments/:id deleteComment
 * @apiVersion 6.0.3
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.deleteComment({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/labels/:name deleteLabel
 * @apiVersion 6.0.3
 * @apiName deleteLabel
 * @apiDescription Delete a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.deleteLabel({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/milestones/:number deleteMilestone
 * @apiVersion 6.0.3
 * @apiName deleteMilestone
 * @apiDescription Delete a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.deleteMilestone({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/issues/:number edit
 * @apiVersion 6.0.3
 * @apiName edit
 * @apiDescription Edit an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [title]  
 * @apiParam {String} [body]  
 * @apiParam {String} [assignee]  Login for the user that this issue should be assigned to.
 * @apiParam {String=open,closed} [state=open]  open or closed
 * @apiParam {Number} [milestone]  Milestone to associate this issue with.
 * @apiParam {Json} [labels]  Array of strings - Labels to associate with this issue.
 * @apiParam {Array} [assignees]  Logins for Users to assign to this issue. Pass one or more user logins to replace the set of assignees on this Issue. .Send an empty array ([]) to clear all assignees from the Issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.
 * @apiExample {js} ex:
github.issues.edit({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/issues/comments/:id editComment
 * @apiVersion 6.0.3
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.editComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number get
 * @apiVersion 6.0.3
 * @apiName get
 * @apiDescription Get a single issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.get({ ... });
 */

/**
 * @api {get} /issues getAll
 * @apiVersion 6.0.3
 * @apiName getAll
 * @apiDescription List all issues across all the authenticated user's visible repositories including owned repositories, member repositories, and organization repositories
 * @apiGroup issues
 *
 * @apiParam {String=all,assigned,created,mentioned,subscribed} [filter]  
 * @apiParam {String=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String=created,updated,comments} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getAll({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/assignees getAssignees
 * @apiVersion 6.0.3
 * @apiName getAssignees
 * @apiDescription List assignees
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.issues.getAssignees({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments/:id getComment
 * @apiVersion 6.0.3
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/comments getComments
 * @apiVersion 6.0.3
 * @apiName getComments
 * @apiDescription List comments on an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments getCommentsForRepo
 * @apiVersion 6.0.3
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=created,updated} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getCommentsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events/:id getEvent
 * @apiVersion 6.0.3
 * @apiName getEvent
 * @apiDescription Get a single event
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getEvent({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:issue_number/events getEvents
 * @apiVersion 6.0.3
 * @apiName getEvents
 * @apiDescription List events for an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} issue_number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEvents({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events getEventsForRepo
 * @apiVersion 6.0.3
 * @apiName getEventsForRepo
 * @apiDescription List events for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:issue_number/timeline getEventsTimeline
 * @apiVersion 6.0.3
 * @apiName getEventsTimeline
 * @apiDescription List events for an issue. (In preview period. See README.)
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} issue_number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsTimeline({ ... });
 */

/**
 * @api {get} /orgs/:org/issues getForOrg
 * @apiVersion 6.0.3
 * @apiName getForOrg
 * @apiDescription List all issues for a given organization for the authenticated user
 * @apiGroup issues
 *
 * @apiParam {String} org  
 * @apiParam {String=all,assigned,created,mentioned,subscribed} [filter]  
 * @apiParam {String=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String=created,updated,comments} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getForOrg({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues getForRepo
 * @apiVersion 6.0.3
 * @apiName getForRepo
 * @apiDescription List issues for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [milestone]  
 * @apiParam {String=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {String} [assignee]  String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User.
 * @apiParam {String} [creator]  The user that created the issue.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String=created,updated,comments} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {String} [mentioned]  String User login.
 * @apiExample {js} ex:
github.issues.getForRepo({ ... });
 */

/**
 * @api {get} /user/issues getForUser
 * @apiVersion 6.0.3
 * @apiName getForUser
 * @apiDescription List all issues across owned and member repositories for the authenticated user
 * @apiGroup issues
 *
 * @apiParam {String=all,assigned,created,mentioned,subscribed} [filter]  
 * @apiParam {String=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String=created,updated,comments} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/labels getIssueLabels
 * @apiVersion 6.0.3
 * @apiName getIssueLabels
 * @apiDescription List labels on an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getIssueLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/labels/:name getLabel
 * @apiVersion 6.0.3
 * @apiName getLabel
 * @apiDescription Get a single label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.getLabel({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/labels getLabels
 * @apiVersion 6.0.3
 * @apiName getLabels
 * @apiDescription List all labels for this repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones/:number getMilestone
 * @apiVersion 6.0.3
 * @apiName getMilestone
 * @apiDescription Get a single milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestone({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones/:number/labels getMilestoneLabels
 * @apiVersion 6.0.3
 * @apiName getMilestoneLabels
 * @apiDescription Get labels for every issue in a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestoneLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones getMilestones
 * @apiVersion 6.0.3
 * @apiName getMilestones
 * @apiDescription List milestones for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=open,closed,all} [state=open]  
 * @apiParam {String=due_on,completeness} [sort=due_on]  due_on, completeness, default: due_on
 * @apiParam {String=asc,desc} [direction=asc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getMilestones({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/issues/:number/lock lock
 * @apiVersion 6.0.3
 * @apiName lock
 * @apiDescription Users with push access can lock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.lock({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/labels removeAllLabels
 * @apiVersion 6.0.3
 * @apiName removeAllLabels
 * @apiDescription Remove all labels from an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.removeAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/assignees removeAssigneesFromIssue
 * @apiVersion 6.0.3
 * @apiName removeAssigneesFromIssue
 * @apiDescription Remove assignees from an issue.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Json} body  JSON object that contains assignees array of logins for the users that should be removed from the issue.
 * @apiExample {js} ex:
github.issues.removeAssigneesFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/labels/:name removeLabel
 * @apiVersion 6.0.3
 * @apiName removeLabel
 * @apiDescription Remove a label from an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.removeLabel({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/issues/:number/labels replaceAllLabels
 * @apiVersion 6.0.3
 * @apiName replaceAllLabels
 * @apiDescription Replace all labels for an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  Sending an empty array ([]) will remove all Labels from the Issue.
 * @apiExample {js} ex:
github.issues.replaceAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/lock unlock
 * @apiVersion 6.0.3
 * @apiName unlock
 * @apiDescription Users with push access can unlock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.unlock({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/labels/:oldname updateLabel
 * @apiVersion 6.0.3
 * @apiName updateLabel
 * @apiDescription Update a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} oldname  The old name of the label.
 * @apiParam {String} name  The new name of the label.
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.updateLabel({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/milestones/:number updateMilestone
 * @apiVersion 6.0.3
 * @apiName updateMilestone
 * @apiDescription Update a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} title  
 * @apiParam {String=open,closed,all} [state=open]  
 * @apiParam {String} [description]  
 * @apiParam {Date} [due_on]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.issues.updateMilestone({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/import cancelImport
 * @apiVersion 6.0.3
 * @apiName cancelImport
 * @apiDescription Cancel an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.cancelImport({ ... });
 */

/**
 * @api {delete} /orgs/:org/migrations/:id/archive deleteMigrationArchive
 * @apiVersion 6.0.3
 * @apiName deleteMigrationArchive
 * @apiDescription Delete a migration archive. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.deleteMigrationArchive({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/import/authors getImportCommitAuthors
 * @apiVersion 6.0.3
 * @apiName getImportCommitAuthors
 * @apiDescription Get import commit authors. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [since]  Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step.
 * @apiExample {js} ex:
github.migrations.getImportCommitAuthors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/import getImportProgress
 * @apiVersion 6.0.3
 * @apiName getImportProgress
 * @apiDescription Get import progress. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.getImportProgress({ ... });
 */

/**
 * @api {get} /:owner/:name/import/large_files getLargeImportFiles
 * @apiVersion 6.0.3
 * @apiName getLargeImportFiles
 * @apiDescription List files larger than 100MB found during the import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.migrations.getLargeImportFiles({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations/:id/archive getMigrationArchiveLink
 * @apiVersion 6.0.3
 * @apiName getMigrationArchiveLink
 * @apiDescription Get the URL to a migration archive. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.getMigrationArchiveLink({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations/:id getMigrationStatus
 * @apiVersion 6.0.3
 * @apiName getMigrationStatus
 * @apiDescription Get the status of a migration. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.getMigrationStatus({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations getMigrations
 * @apiVersion 6.0.3
 * @apiName getMigrations
 * @apiDescription Get a list of migrations. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.migrations.getMigrations({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/import/authors/:author_id mapImportCommitAuthor
 * @apiVersion 6.0.3
 * @apiName mapImportCommitAuthor
 * @apiDescription Map a commit author. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} author_id  The commit author id.
 * @apiParam {String} [email]  The new Git author email.
 * @apiParam {String} [name]  The new Git author name.
 * @apiExample {js} ex:
github.migrations.mapImportCommitAuthor({ ... });
 */

/**
 * @api {patch} /:owner/:name/import/lfs setImportLfsPreference
 * @apiVersion 6.0.3
 * @apiName setImportLfsPreference
 * @apiDescription Set import LFS preference. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiParam {String} use_lfs  Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).
 * @apiExample {js} ex:
github.migrations.setImportLfsPreference({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/import startImport
 * @apiVersion 6.0.3
 * @apiName startImport
 * @apiDescription Start an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} vcs_url  The URL of the originating repository.
 * @apiParam {String=subversion,git,mercurial,tfvc} [vcs]  The originating VCS type. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
 * @apiParam {String} [vcs_username]  If authentication is required, the username to provide to vcs_url.
 * @apiParam {String} [vcs_password]  If authentication is required, the password to provide to vcs_url.
 * @apiParam {String} [tfvc_project]  For a tfvc import, the name of the project that is being imported.
 * @apiExample {js} ex:
github.migrations.startImport({ ... });
 */

/**
 * @api {post} /orgs/:org/migrations startMigration
 * @apiVersion 6.0.3
 * @apiName startMigration
 * @apiDescription Start a migration. (In preview period. See README.)
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
 * @api {delete} /orgs/:org/migrations/:id/repos/:repo_name/lock unlockRepoLockedForMigration
 * @apiVersion 6.0.3
 * @apiName unlockRepoLockedForMigration
 * @apiDescription Unlock a repository that was locked for migration. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiParam {String} repo_name  
 * @apiExample {js} ex:
github.migrations.unlockRepoLockedForMigration({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/import updateImport
 * @apiVersion 6.0.3
 * @apiName updateImport
 * @apiDescription Update existing import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.updateImport({ ... });
 */

/**
 * @api {get} /emojis getEmojis
 * @apiVersion 6.0.3
 * @apiName getEmojis
 * @apiDescription Lists all the emojis available to use on GitHub.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getEmojis({ ... });
 */

/**
 * @api {get} /gitignore/templates/:name getGitignoreTemplate
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName getGitignoreTemplates
 * @apiDescription Lists available gitignore templates
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getGitignoreTemplates({ ... });
 */

/**
 * @api {get} /licenses/:license getLicense
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName getLicenses
 * @apiDescription List all licenses. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getLicenses({ ... });
 */

/**
 * @api {get} /meta getMeta
 * @apiVersion 6.0.3
 * @apiName getMeta
 * @apiDescription This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getMeta({ ... });
 */

/**
 * @api {get} /rate_limit getRateLimit
 * @apiVersion 6.0.3
 * @apiName getRateLimit
 * @apiDescription Get your current rate limit status
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getRateLimit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/license getRepoLicense
 * @apiVersion 6.0.3
 * @apiName getRepoLicense
 * @apiDescription Get the contents of a repository's license. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.misc.getRepoLicense({ ... });
 */

/**
 * @api {post} /markdown renderMarkdown
 * @apiVersion 6.0.3
 * @apiName renderMarkdown
 * @apiDescription Render an arbitrary Markdown document
 * @apiGroup misc
 *
 * @apiParam {String} text  The Markdown text to render
 * @apiParam {String=markdown,gfm} [mode=markdown]  The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly.
 * @apiParam {String} [context]  The repository context. Only taken into account when rendering as `gfm`
 * @apiExample {js} ex:
github.misc.renderMarkdown({ ... });
 */

/**
 * @api {post} /markdown/raw renderMarkdownRaw
 * @apiVersion 6.0.3
 * @apiName renderMarkdownRaw
 * @apiDescription Render a Markdown document in raw mode
 * @apiGroup misc
 *
 * @apiParam {String} data  Raw data to send as the body of the request
 * @apiExample {js} ex:
github.misc.renderMarkdownRaw({ ... });
 */

/**
 * @api {put} /orgs/:org/memberships/:username addOrgMembership
 * @apiVersion 6.0.3
 * @apiName addOrgMembership
 * @apiDescription Add or update organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiParam {String=admin,member} role  The role to give the user in the organization.
 * @apiExample {js} ex:
github.orgs.addOrgMembership({ ... });
 */

/**
 * @api {put} /teams/:id/memberships/:username addTeamMembership
 * @apiVersion 6.0.3
 * @apiName addTeamMembership
 * @apiDescription Add team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} username  
 * @apiParam {String=member,maintainer} [role=member]  The role that this user should have in the team.
 * @apiExample {js} ex:
github.orgs.addTeamMembership({ ... });
 */

/**
 * @api {put} /teams/:id/repos/:org/:repo addTeamRepo
 * @apiVersion 6.0.3
 * @apiName addTeamRepo
 * @apiDescription Add team repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} org  
 * @apiParam {String} repo  
 * @apiParam {String=pull,push,admin} [permission]  `pull` - team members can pull, but not push or administer this repository, `push` - team members can pull and push, but not administer this repository, `admin` - team members can pull, push and administer this repository.
 * @apiExample {js} ex:
github.orgs.addTeamRepo({ ... });
 */

/**
 * @api {get} /orgs/:org/members/:username checkMembership
 * @apiVersion 6.0.3
 * @apiName checkMembership
 * @apiDescription Check membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.checkMembership({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members/:username checkPublicMembership
 * @apiVersion 6.0.3
 * @apiName checkPublicMembership
 * @apiDescription Check public membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.checkPublicMembership({ ... });
 */

/**
 * @api {get} /teams/:id/repos/:owner/:repo checkTeamRepo
 * @apiVersion 6.0.3
 * @apiName checkTeamRepo
 * @apiDescription Check if a team manages a repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.checkTeamRepo({ ... });
 */

/**
 * @api {delete} /orgs/:org/public_members/:username concealMembership
 * @apiVersion 6.0.3
 * @apiName concealMembership
 * @apiDescription Conceal a user's membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.concealMembership({ ... });
 */

/**
 * @api {post} /orgs/:org/hooks createHook
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName createTeam
 * @apiDescription Create team
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} name  
 * @apiParam {String} [description]  The description of the team.
 * @apiParam {Array} [repo_names]  The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
 * @apiParam {String=secret,closed} [privacy=secret]  The level of privacy this team should have.
 * @apiExample {js} ex:
github.orgs.createTeam({ ... });
 */

/**
 * @api {delete} /orgs/:org/hooks/:id deleteHook
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName deleteTeam
 * @apiDescription Delete team
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.orgs.deleteTeam({ ... });
 */

/**
 * @api {delete} /teams/:id/repos/:owner/:repo deleteTeamRepo
 * @apiVersion 6.0.3
 * @apiName deleteTeamRepo
 * @apiDescription Remove team repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.deleteTeamRepo({ ... });
 */

/**
 * @api {patch} /orgs/:org/hooks/:id editHook
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName editTeam
 * @apiDescription Edit team
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} [description]  The description of the team.
 * @apiParam {String=secret,closed} [privacy=secret]  The level of privacy this team should have.
 * @apiExample {js} ex:
github.orgs.editTeam({ ... });
 */

/**
 * @api {get} /orgs/:org get
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @api {get} /users/:username/orgs getForUser
 * @apiVersion 6.0.3
 * @apiName getForUser
 * @apiDescription List public organization memberships for the specified user.
 * @apiGroup orgs
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getForUser({ ... });
 */

/**
 * @api {get} /orgs/:org/hooks/:id getHook
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName getMembers
 * @apiDescription Members list
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String=all,2fa_disabled} [filter=all]  Filter members returned in the list.
 * @apiParam {String=all,admin,member} [role=all]  Filter members returned by their role.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getMembers({ ... });
 */

/**
 * @api {get} /orgs/:org/memberships/:username getOrgMembership
 * @apiVersion 6.0.3
 * @apiName getOrgMembership
 * @apiDescription Get organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.getOrgMembership({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members getPublicMembers
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName getTeamMembers
 * @apiDescription List team members
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String=member,maintainer,all} [role=all]  Filters members returned by their role in the team.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getTeamMembers({ ... });
 */

/**
 * @api {get} /teams/:id/memberships/:username getTeamMembership
 * @apiVersion 6.0.3
 * @apiName getTeamMembership
 * @apiDescription Get team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.getTeamMembership({ ... });
 */

/**
 * @api {get} /teams/:id/repos getTeamRepos
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @api {put} /orgs/:org/public_members/:username publicizeMembership
 * @apiVersion 6.0.3
 * @apiName publicizeMembership
 * @apiDescription Publicize a user's membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.publicizeMembership({ ... });
 */

/**
 * @api {delete} /orgs/:org/members/:username removeMember
 * @apiVersion 6.0.3
 * @apiName removeMember
 * @apiDescription Remove a member
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.removeMember({ ... });
 */

/**
 * @api {delete} /orgs/:org/memberships/:username removeOrgMembership
 * @apiVersion 6.0.3
 * @apiName removeOrgMembership
 * @apiDescription Remove organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.removeOrgMembership({ ... });
 */

/**
 * @api {delete} /teams/:id/memberships/:username removeTeamMembership
 * @apiVersion 6.0.3
 * @apiName removeTeamMembership
 * @apiDescription Remove team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.removeTeamMembership({ ... });
 */

/**
 * @api {patch} /orgs/:org update
 * @apiVersion 6.0.3
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
 * @api {post} /orgs/:org/projects createOrgProject
 * @apiVersion 6.0.3
 * @apiName createOrgProject
 * @apiDescription Create an organization project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} org  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.projects.createOrgProject({ ... });
 */

/**
 * @api {post} /projects/columns/:column_id/cards createProjectCard
 * @apiVersion 6.0.3
 * @apiName createProjectCard
 * @apiDescription Create a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} column_id  
 * @apiParam {String} [note]  The note of the card.
 * @apiParam {String} [content_id]  The id of the Issue or Pull Request to associate with this card.
 * @apiParam {String} [content_type]  The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'.
 * @apiExample {js} ex:
github.projects.createProjectCard({ ... });
 */

/**
 * @api {post} /projects/:project_id/columns createProjectColumn
 * @apiVersion 6.0.3
 * @apiName createProjectColumn
 * @apiDescription Create a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} project_id  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.projects.createProjectColumn({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects createRepoProject
 * @apiVersion 6.0.3
 * @apiName createRepoProject
 * @apiDescription Create a repository project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.projects.createRepoProject({ ... });
 */

/**
 * @api {delete} /projects/:id deleteProject
 * @apiVersion 6.0.3
 * @apiName deleteProject
 * @apiDescription Delete a project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.deleteProject({ ... });
 */

/**
 * @api {delete} /projects/columns/cards/:id deleteProjectCard
 * @apiVersion 6.0.3
 * @apiName deleteProjectCard
 * @apiDescription Delete a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.deleteProjectCard({ ... });
 */

/**
 * @api {delete} /projects/columns/:id deleteProjectColumn
 * @apiVersion 6.0.3
 * @apiName deleteProjectColumn
 * @apiDescription Delete a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.deleteProjectColumn({ ... });
 */

/**
 * @api {get} /orgs/:org/projects getOrgProjects
 * @apiVersion 6.0.3
 * @apiName getOrgProjects
 * @apiDescription List organization projects. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} org  
 * @apiExample {js} ex:
github.projects.getOrgProjects({ ... });
 */

/**
 * @api {get} /projects/:id getProject
 * @apiVersion 6.0.3
 * @apiName getProject
 * @apiDescription Get a project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.getProject({ ... });
 */

/**
 * @api {get} /projects/columns/cards/:id getProjectCard
 * @apiVersion 6.0.3
 * @apiName getProjectCard
 * @apiDescription Get project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.getProjectCard({ ... });
 */

/**
 * @api {get} /projects/columns/:column_id/cards getProjectCards
 * @apiVersion 6.0.3
 * @apiName getProjectCards
 * @apiDescription List project cards. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} column_id  
 * @apiExample {js} ex:
github.projects.getProjectCards({ ... });
 */

/**
 * @api {get} /projects/columns/:id getProjectColumn
 * @apiVersion 6.0.3
 * @apiName getProjectColumn
 * @apiDescription Get a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.getProjectColumn({ ... });
 */

/**
 * @api {get} /projects/:project_id/columns getProjectColumns
 * @apiVersion 6.0.3
 * @apiName getProjectColumns
 * @apiDescription List project columns. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} project_id  
 * @apiExample {js} ex:
github.projects.getProjectColumns({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects getRepoProjects
 * @apiVersion 6.0.3
 * @apiName getRepoProjects
 * @apiDescription List repository projects. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.projects.getRepoProjects({ ... });
 */

/**
 * @api {post} /projects/columns/cards/:id/moves moveProjectCard
 * @apiVersion 6.0.3
 * @apiName moveProjectCard
 * @apiDescription Move a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiParam {String} [column_id]  The id value of a column in the same project.
 * @apiExample {js} ex:
github.projects.moveProjectCard({ ... });
 */

/**
 * @api {post} /projects/columns/:id/moves moveProjectColumn
 * @apiVersion 6.0.3
 * @apiName moveProjectColumn
 * @apiDescription Move a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiExample {js} ex:
github.projects.moveProjectColumn({ ... });
 */

/**
 * @api {patch} /projects/:id updateProject
 * @apiVersion 6.0.3
 * @apiName updateProject
 * @apiDescription Update a project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.projects.updateProject({ ... });
 */

/**
 * @api {patch} /projects/columns/cards/:id updateProjectCard
 * @apiVersion 6.0.3
 * @apiName updateProjectCard
 * @apiDescription Update a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} [note]  The note of the card.
 * @apiExample {js} ex:
github.projects.updateProjectCard({ ... });
 */

/**
 * @api {patch} /projects/columns/:id updateProjectColumn
 * @apiVersion 6.0.3
 * @apiName updateProjectColumn
 * @apiDescription Update a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.projects.updateProjectColumn({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/merge checkMerged
 * @apiVersion 6.0.3
 * @apiName checkMerged
 * @apiDescription Get if a pull request has been merged
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.checkMerged({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls create
 * @apiVersion 6.0.3
 * @apiName create
 * @apiDescription Create a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  The title of the pull request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiExample {js} ex:
github.pullRequests.create({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/:number/comments createComment
 * @apiVersion 6.0.3
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/pulls/:number/comments createCommentReply
 * @apiVersion 6.0.3
 * @apiName createCommentReply
 * @apiDescription Reply to existing pull request comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiParam {Number} in_reply_to  The comment id to reply to.
 * @apiExample {js} ex:
github.pullRequests.createCommentReply({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls createFromIssue
 * @apiVersion 6.0.3
 * @apiName createFromIssue
 * @apiDescription Create a pull request from an existing issue
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} issue  The issue number in this repository to turn into a Pull Request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiExample {js} ex:
github.pullRequests.createFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/pulls/comments/:id deleteComment
 * @apiVersion 6.0.3
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.pullRequests.deleteComment({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/pulls/comments/:id editComment
 * @apiVersion 6.0.3
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.pullRequests.editComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number get
 * @apiVersion 6.0.3
 * @apiName get
 * @apiDescription Get a single pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.get({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls getAll
 * @apiVersion 6.0.3
 * @apiName getAll
 * @apiDescription List pull requests
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {String} [head]  Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format.
 * @apiParam {String} [base]  Filter pulls by base branch name. Example: gh-pages.
 * @apiParam {String=created,updated,popularity,long-running} [sort=created]  Possible values are: `created`, `updated`, `popularity`, `long-running`, Default: `created`
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getAll({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments/:id getComment
 * @apiVersion 6.0.3
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.pullRequests.getComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/comments getComments
 * @apiVersion 6.0.3
 * @apiName getComments
 * @apiDescription List comments on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments getCommentsForRepo
 * @apiVersion 6.0.3
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=created,updated} [sort=created]  Possible values are: `created`, `updated`, Default: `created`
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getCommentsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/commits getCommits
 * @apiVersion 6.0.3
 * @apiName getCommits
 * @apiDescription List commits on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getCommits({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/files getFiles
 * @apiVersion 6.0.3
 * @apiName getFiles
 * @apiDescription List pull requests files
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getFiles({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/pulls/:number/merge merge
 * @apiVersion 6.0.3
 * @apiName merge
 * @apiDescription Merge a pull request (Merge Button)
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [commit_title]  Title for the automatic commit message. (In preview period. See README.)
 * @apiParam {String} [commit_message]  Extra detail to append to automatic commit message.
 * @apiParam {String} [sha]  SHA that pull request head must match to allow merge
 * @apiParam {String=merge,squash,rebase} [merge_method=merge]  Merge method to use. Possible values are `merge`, `squash`, or `rebase`. (In preview period. See README.)
 * @apiExample {js} ex:
github.pullRequests.merge({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/pulls/:number update
 * @apiVersion 6.0.3
 * @apiName update
 * @apiDescription Update a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} [title]  The title of the pull request.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiParam {String=open,closed,all} [state=open]  
 * @apiExample {js} ex:
github.pullRequests.update({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/comments/:id/reactions createForCommitComment
 * @apiVersion 6.0.3
 * @apiName createForCommitComment
 * @apiDescription Create reaction for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForCommitComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/reactions createForIssue
 * @apiVersion 6.0.3
 * @apiName createForIssue
 * @apiDescription Create reaction for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssue({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/comments/:id/reactions createForIssueComment
 * @apiVersion 6.0.3
 * @apiName createForIssueComment
 * @apiDescription Create reaction for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssueComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/comments/:id/reactions createForPullRequestReviewComment
 * @apiVersion 6.0.3
 * @apiName createForPullRequestReviewComment
 * @apiDescription Create reaction for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForPullRequestReviewComment({ ... });
 */

/**
 * @api {delete} /reactions/:id delete
 * @apiVersion 6.0.3
 * @apiName delete
 * @apiDescription Delete a reaction. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.reactions.delete({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments/:id/reactions getForCommitComment
 * @apiVersion 6.0.3
 * @apiName getForCommitComment
 * @apiDescription List reactions for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForCommitComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/reactions getForIssue
 * @apiVersion 6.0.3
 * @apiName getForIssue
 * @apiDescription List reactions for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssue({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments/:id/reactions getForIssueComment
 * @apiVersion 6.0.3
 * @apiName getForIssueComment
 * @apiDescription List reactions for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssueComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments/:id/reactions getForPullRequestReviewComment
 * @apiVersion 6.0.3
 * @apiName getForPullRequestReviewComment
 * @apiDescription List reactions for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForPullRequestReviewComment({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/collaborators/:username addCollaborator
 * @apiVersion 6.0.3
 * @apiName addCollaborator
 * @apiDescription Add user as a collaborator
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} username  
 * @apiParam {String=pull,push,admin} [permission=push]  `pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository.
 * @apiExample {js} ex:
github.repos.addCollaborator({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts addProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 6.0.3
 * @apiName addProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Add required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} ex:
github.repos.addProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams addProtectedBranchTeamRestrictions
 * @apiVersion 6.0.3
 * @apiName addProtectedBranchTeamRestrictions
 * @apiDescription Add team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.addProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/restrictions/users addProtectedBranchUserRestrictions
 * @apiVersion 6.0.3
 * @apiName addProtectedBranchUserRestrictions
 * @apiDescription Add user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.addProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/collaborators/:username checkCollaborator
 * @apiVersion 6.0.3
 * @apiName checkCollaborator
 * @apiDescription Check if user is a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.repos.checkCollaborator({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/compare/:base...:head compareCommits
 * @apiVersion 6.0.3
 * @apiName compareCommits
 * @apiDescription Compare two commits.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiExample {js} ex:
github.repos.compareCommits({ ... });
 */

/**
 * @api {post} /user/repos create
 * @apiVersion 6.0.3
 * @apiName create
 * @apiDescription Create a new repository for the authenticated user.
 * @apiGroup repos
 *
 * @apiParam {String} name  
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {String} [description]  
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Number} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
 * @apiExample {js} ex:
github.repos.create({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/commits/:sha/comments createCommitComment
 * @apiVersion 6.0.3
 * @apiName createCommitComment
 * @apiDescription Create a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/deployments createDeployment
 * @apiVersion 6.0.3
 * @apiName createDeployment
 * @apiDescription Create a deployment. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/deployments/:id/statuses createDeploymentStatus
 * @apiVersion 6.0.3
 * @apiName createDeploymentStatus
 * @apiDescription Create a deployment status. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {put} /repos/:owner/:repo/contents/:path createFile
 * @apiVersion 6.0.3
 * @apiName createFile
 * @apiDescription Create a new file in the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 6.0.3
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
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {Number} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.createForOrg({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks createHook
 * @apiVersion 6.0.3
 * @apiName createHook
 * @apiDescription Create a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {Json} config  A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {Array} [events=["push"]]  Determines what events the hook is triggered for. Default: `['push']`.
 * @apiParam {Boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} ex:
github.repos.createHook({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/keys createKey
 * @apiVersion 6.0.3
 * @apiName createKey
 * @apiDescription Add a new deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String} key  
 * @apiParam {Boolean} [read_only]  If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
 * @apiExample {js} ex:
github.repos.createKey({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases createRelease
 * @apiVersion 6.0.3
 * @apiName createRelease
 * @apiDescription Create a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/statuses/:sha createStatus
 * @apiVersion 6.0.3
 * @apiName createStatus
 * @apiDescription Create a status.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {String=pending,success,error,failure} state  State of the status - can be one of pending, success, error, or failure.
 * @apiParam {String} [target_url]  Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status.
 * @apiParam {String} [description]  Short description of the status.
 * @apiParam {String} [context]  A string label to differentiate this status from the status of other systems.
 * @apiExample {js} ex:
github.repos.createStatus({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo delete
 * @apiVersion 6.0.3
 * @apiName delete
 * @apiDescription Delete a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.delete({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/assets/:id deleteAsset
 * @apiVersion 6.0.3
 * @apiName deleteAsset
 * @apiDescription Delete a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteAsset({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/comments/:id deleteCommitComment
 * @apiVersion 6.0.3
 * @apiName deleteCommitComment
 * @apiDescription Delete a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteCommitComment({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/downloads/:id deleteDownload
 * @apiVersion 6.0.3
 * @apiName deleteDownload
 * @apiDescription Delete a download.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteDownload({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/contents/:path deleteFile
 * @apiVersion 6.0.3
 * @apiName deleteFile
 * @apiDescription Delete a file.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {delete} /repos/:owner/:repo/hooks/:id deleteHook
 * @apiVersion 6.0.3
 * @apiName deleteHook
 * @apiDescription Deleate a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteHook({ ... });
 */

/**
 * @api {delete} /repositories/:repo_id/invitations/:invitation_id deleteInvite
 * @apiVersion 6.0.3
 * @apiName deleteInvite
 * @apiDescription Delete a repository invitation. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo_id  
 * @apiParam {String} invitation_id  
 * @apiExample {js} ex:
github.repos.deleteInvite({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/keys/:id deleteKey
 * @apiVersion 6.0.3
 * @apiName deleteKey
 * @apiDescription Remove a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteKey({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/:id deleteRelease
 * @apiVersion 6.0.3
 * @apiName deleteRelease
 * @apiDescription Delete a release
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteRelease({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo edit
 * @apiVersion 6.0.3
 * @apiName edit
 * @apiDescription Update a repo.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiParam {String} repo  
 * @apiParam {String} [description]  
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {String} [default_branch]  Updates the default branch for this repository.
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.edit({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/releases/assets/:id editAsset
 * @apiVersion 6.0.3
 * @apiName editAsset
 * @apiDescription Edit a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} [label]  An alternate short description of the asset. Used in place of the filename.
 * @apiExample {js} ex:
github.repos.editAsset({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/hooks/:id editHook
 * @apiVersion 6.0.3
 * @apiName editHook
 * @apiDescription Edit a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/releases/:id editRelease
 * @apiVersion 6.0.3
 * @apiName editRelease
 * @apiDescription Edit a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/forks fork
 * @apiVersion 6.0.3
 * @apiName fork
 * @apiDescription Create a fork.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [organization]  Optional parameter to specify the organization name if forking into an organization.
 * @apiExample {js} ex:
github.repos.fork({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo get
 * @apiVersion 6.0.3
 * @apiName get
 * @apiDescription Get a repo for a user.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.get({ ... });
 */

/**
 * @api {get} /user/repos getAll
 * @apiVersion 6.0.3
 * @apiName getAll
 * @apiDescription List your repositories
 * @apiGroup repos
 *
 * @apiParam {String=all,public,private} [visibility=all]  Can be one of `all`, `public`, or `private`. Default: `all`.
 * @apiParam {String} [affiliation=owner,collaborator,organization_member]  Comma-separated list of values. Can include: `owner`, `collaborator`, `organization_member`.
 * @apiParam {String=all,owner,public,private,member} [type=all]  Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`.
 * @apiParam {String=created,updated,pushed,full_name} [sort=full_name]  Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getAll({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments getAllCommitComments
 * @apiVersion 6.0.3
 * @apiName getAllCommitComments
 * @apiDescription List commit comments for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getAllCommitComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/:archive_format/:ref getArchiveLink
 * @apiVersion 6.0.3
 * @apiName getArchiveLink
 * @apiDescription Get archive link.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=tarball,zipball} archive_format=tarball  Either tarball or zipball, Deafult: tarball.
 * @apiParam {String} [ref]  A valid Git reference. Default: the repository’s default branch (usually master).
 * @apiExample {js} ex:
github.repos.getArchiveLink({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/assets/:id getAsset
 * @apiVersion 6.0.3
 * @apiName getAsset
 * @apiDescription Get a single release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getAsset({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch getBranch
 * @apiVersion 6.0.3
 * @apiName getBranch
 * @apiDescription Get branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranch({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection getBranchProtection
 * @apiVersion 6.0.3
 * @apiName getBranchProtection
 * @apiDescription Get branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranchProtection({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches getBranches
 * @apiVersion 6.0.3
 * @apiName getBranches
 * @apiDescription List branches. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [protected]  Set to true to only return protected branches
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranches({ ... });
 */

/**
 * @api {get} /repositories/:id getById
 * @apiVersion 6.0.3
 * @apiName getById
 * @apiDescription Get a single repo by id.
 * @apiGroup repos
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getById({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/clones getClones
 * @apiVersion 6.0.3
 * @apiName getClones
 * @apiDescription Get the total number of clones and breakdown per day or week for the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getClones({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/collaborators getCollaborators
 * @apiVersion 6.0.3
 * @apiName getCollaborators
 * @apiDescription List collaborators
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCollaborators({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref/status getCombinedStatus
 * @apiVersion 6.0.3
 * @apiName getCombinedStatus
 * @apiDescription Get the combined status for a specific ref.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  Ref to fetch the status for. It can be a SHA, a branch name, or a tag name.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCombinedStatus({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:sha getCommit
 * @apiVersion 6.0.3
 * @apiName getCommit
 * @apiDescription Get a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.repos.getCommit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments/:id getCommitComment
 * @apiVersion 6.0.3
 * @apiName getCommitComment
 * @apiDescription Get a single commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getCommitComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref/comments getCommitComments
 * @apiVersion 6.0.3
 * @apiName getCommitComments
 * @apiDescription List comments for a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCommitComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits getCommits
 * @apiVersion 6.0.3
 * @apiName getCommits
 * @apiDescription List commits on a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/contents/:path getContent
 * @apiVersion 6.0.3
 * @apiName getContent
 * @apiDescription Get the contents of a file or directory in a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} path  The content path.
 * @apiParam {String} [ref]  The String name of the Commit/Branch/Tag. Defaults to master.
 * @apiExample {js} ex:
github.repos.getContent({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/contributors getContributors
 * @apiVersion 6.0.3
 * @apiName getContributors
 * @apiDescription Get contributors for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [anon]  Set to 1 or true to include anonymous contributors in results.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getContributors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/deployments/:id/statuses getDeploymentStatuses
 * @apiVersion 6.0.3
 * @apiName getDeploymentStatuses
 * @apiDescription List deployment statuses. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDeploymentStatuses({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/deployments getDeployments
 * @apiVersion 6.0.3
 * @apiName getDeployments
 * @apiDescription List deployments. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/downloads/:id getDownload
 * @apiVersion 6.0.3
 * @apiName getDownload
 * @apiDescription Get a single download.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDownload({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/downloads getDownloads
 * @apiVersion 6.0.3
 * @apiName getDownloads
 * @apiDescription List downloads for repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getDownloads({ ... });
 */

/**
 * @api {get} /orgs/:org/repos getForOrg
 * @apiVersion 6.0.3
 * @apiName getForOrg
 * @apiDescription List repositories for the specified org.
 * @apiGroup repos
 *
 * @apiParam {String} org  
 * @apiParam {String=all,public,private,forks,sources,member} [type=all]  Possible values: `all`, `public`, `private`, `forks`, `sources`, `member`. Default: `all`.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForOrg({ ... });
 */

/**
 * @api {get} /users/:username/repos getForUser
 * @apiVersion 6.0.3
 * @apiName getForUser
 * @apiDescription List public repositories for the specified user.
 * @apiGroup repos
 *
 * @apiParam {String} username  
 * @apiParam {String=all,owner,member} [type=owner]  Possible values: `all`, `owner`, `member`. Default: `owner`.
 * @apiParam {String=created,updated,pushed,full_name} [sort=full_name]  Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/forks getForks
 * @apiVersion 6.0.3
 * @apiName getForks
 * @apiDescription List forks.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=newest,oldest,stargazers} [sort=newest]  Possible values: `newest`, `oldest`, `stargazers`, default: `newest`.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForks({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/hooks/:id getHook
 * @apiVersion 6.0.3
 * @apiName getHook
 * @apiDescription Get single hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getHook({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/hooks getHooks
 * @apiVersion 6.0.3
 * @apiName getHooks
 * @apiDescription List hooks.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getHooks({ ... });
 */

/**
 * @api {get} /repositories/:repo_id/invitations getInvites
 * @apiVersion 6.0.3
 * @apiName getInvites
 * @apiDescription List invitations for a repository. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo_id  
 * @apiExample {js} ex:
github.repos.getInvites({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/keys/:id getKey
 * @apiVersion 6.0.3
 * @apiName getKey
 * @apiDescription Get a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getKey({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/keys getKeys
 * @apiVersion 6.0.3
 * @apiName getKeys
 * @apiDescription List deploy keys.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getKeys({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/languages getLanguages
 * @apiVersion 6.0.3
 * @apiName getLanguages
 * @apiDescription Get languages for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getLanguages({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds/latest getLatestPagesBuild
 * @apiVersion 6.0.3
 * @apiName getLatestPagesBuild
 * @apiDescription Get latest Pages build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/latest getLatestRelease
 * @apiVersion 6.0.3
 * @apiName getLatestRelease
 * @apiDescription Get the latest release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages getPages
 * @apiVersion 6.0.3
 * @apiName getPages
 * @apiDescription Get information about a Pages site. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPages({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds/:id getPagesBuild
 * @apiVersion 6.0.3
 * @apiName getPagesBuild
 * @apiDescription Get a specific Pages build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds getPagesBuilds
 * @apiVersion 6.0.3
 * @apiName getPagesBuilds
 * @apiDescription List Pages builds. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPagesBuilds({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/popular/paths getPaths
 * @apiVersion 6.0.3
 * @apiName getPaths
 * @apiDescription Get the top 10 popular contents over the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPaths({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/required_status_checks getProtectedBranchRequiredStatusChecks
 * @apiVersion 6.0.3
 * @apiName getProtectedBranchRequiredStatusChecks
 * @apiDescription Get required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts getProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 6.0.3
 * @apiName getProtectedBranchRequiredStatusChecksContexts
 * @apiDescription List required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions getProtectedBranchRestrictions
 * @apiVersion 6.0.3
 * @apiName getProtectedBranchRestrictions
 * @apiDescription Get restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams getProtectedBranchTeamRestrictions
 * @apiVersion 6.0.3
 * @apiName getProtectedBranchTeamRestrictions
 * @apiDescription List team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions/users getProtectedBranchUserRestrictions
 * @apiVersion 6.0.3
 * @apiName getProtectedBranchUserRestrictions
 * @apiDescription List user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repositories getPublic
 * @apiVersion 6.0.3
 * @apiName getPublic
 * @apiDescription List all public repositories
 * @apiGroup repos
 *
 * @apiParam {String} [since]  The integer ID of the last Repository that you've seen.
 * @apiExample {js} ex:
github.repos.getPublic({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/readme getReadme
 * @apiVersion 6.0.3
 * @apiName getReadme
 * @apiDescription Get the README for the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [ref]  The name of the commit/branch/tag. Default: the repository’s default branch (usually master)
 * @apiExample {js} ex:
github.repos.getReadme({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/popular/referrers getReferrers
 * @apiVersion 6.0.3
 * @apiName getReferrers
 * @apiDescription Get the top 10 referrers over the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReferrers({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id getRelease
 * @apiVersion 6.0.3
 * @apiName getRelease
 * @apiDescription Get a single release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/tags/:tag getReleaseByTag
 * @apiVersion 6.0.3
 * @apiName getReleaseByTag
 * @apiDescription Get a release by tag name.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} tag  String of the tag
 * @apiExample {js} ex:
github.repos.getReleaseByTag({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases getReleases
 * @apiVersion 6.0.3
 * @apiName getReleases
 * @apiDescription List releases for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReleases({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref getShaOfCommitRef
 * @apiVersion 6.0.3
 * @apiName getShaOfCommitRef
 * @apiDescription Get the SHA-1 of a commit reference.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.repos.getShaOfCommitRef({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/code_frequency getStatsCodeFrequency
 * @apiVersion 6.0.3
 * @apiName getStatsCodeFrequency
 * @apiDescription Get the number of additions and deletions per week.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCodeFrequency({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/commit_activity getStatsCommitActivity
 * @apiVersion 6.0.3
 * @apiName getStatsCommitActivity
 * @apiDescription Get the last year of commit activity data.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCommitActivity({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/contributors getStatsContributors
 * @apiVersion 6.0.3
 * @apiName getStatsContributors
 * @apiDescription Get contributors list with additions, deletions, and commit counts.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsContributors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/participation getStatsParticipation
 * @apiVersion 6.0.3
 * @apiName getStatsParticipation
 * @apiDescription Get the weekly commit count for the repository owner and everyone else.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsParticipation({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/punch_card getStatsPunchCard
 * @apiVersion 6.0.3
 * @apiName getStatsPunchCard
 * @apiDescription Get the number of commits per hour in each day.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsPunchCard({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref/statuses getStatuses
 * @apiVersion 6.0.3
 * @apiName getStatuses
 * @apiDescription List statuses for a specfic ref.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getStatuses({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/tags getTags
 * @apiVersion 6.0.3
 * @apiName getTags
 * @apiDescription Get tags for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTags({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/teams getTeams
 * @apiVersion 6.0.3
 * @apiName getTeams
 * @apiDescription Get teams for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTeams({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/views getViews
 * @apiVersion 6.0.3
 * @apiName getViews
 * @apiDescription Get the total number of views and breakdown per day or week for the last 14 days. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getViews({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id/assets listAssets
 * @apiVersion 6.0.3
 * @apiName listAssets
 * @apiDescription List assets for a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.listAssets({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/merges merge
 * @apiVersion 6.0.3
 * @apiName merge
 * @apiDescription Perform a merge.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} [commit_message]  Commit message to use for the merge commit. If omitted, a default message will be used.
 * @apiExample {js} ex:
github.repos.merge({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks/:id/pings pingHook
 * @apiVersion 6.0.3
 * @apiName pingHook
 * @apiDescription Ping a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.pingHook({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection removeBranchProtection
 * @apiVersion 6.0.3
 * @apiName removeBranchProtection
 * @apiDescription Remove branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeBranchProtection({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/collaborators/:username removeCollaborator
 * @apiVersion 6.0.3
 * @apiName removeCollaborator
 * @apiDescription Remove user as a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.repos.removeCollaborator({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/required_status_checks removeProtectedBranchRequiredStatusChecks
 * @apiVersion 6.0.3
 * @apiName removeProtectedBranchRequiredStatusChecks
 * @apiDescription Remove required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts removeProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 6.0.3
 * @apiName removeProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Remove required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions removeProtectedBranchRestrictions
 * @apiVersion 6.0.3
 * @apiName removeProtectedBranchRestrictions
 * @apiDescription Remove restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams removeProtectedBranchTeamRestrictions
 * @apiVersion 6.0.3
 * @apiName removeProtectedBranchTeamRestrictions
 * @apiDescription Remove team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.removeProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions/users removeProtectedBranchUserRestrictions
 * @apiVersion 6.0.3
 * @apiName removeProtectedBranchUserRestrictions
 * @apiDescription Remove user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.removeProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts replaceProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 6.0.3
 * @apiName replaceProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Replace required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams replaceProtectedBranchTeamRestrictions
 * @apiVersion 6.0.3
 * @apiName replaceProtectedBranchTeamRestrictions
 * @apiDescription Replace team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/restrictions/users replaceProtectedBranchUserRestrictions
 * @apiVersion 6.0.3
 * @apiName replaceProtectedBranchUserRestrictions
 * @apiDescription Replace user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pages/builds requestPageBuild
 * @apiVersion 6.0.3
 * @apiName requestPageBuild
 * @apiDescription Request a page build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.requestPageBuild({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks/:id/tests testHook
 * @apiVersion 6.0.3
 * @apiName testHook
 * @apiDescription Test a [push] hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.testHook({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection updateBranchProtection
 * @apiVersion 6.0.3
 * @apiName updateBranchProtection
 * @apiDescription Update branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/comments/:id updateCommitComment
 * @apiVersion 6.0.3
 * @apiName updateCommitComment
 * @apiDescription Update a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.updateCommitComment({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/contents/:path updateFile
 * @apiVersion 6.0.3
 * @apiName updateFile
 * @apiDescription Update a file.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repositories/:repo_id/invitations/:invitation_id updateInvite
 * @apiVersion 6.0.3
 * @apiName updateInvite
 * @apiDescription Update a repository invitation. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo_id  
 * @apiParam {String} invitation_id  
 * @apiParam {String=read,write,admin} [permission]  The permissions that the associated user will have on the repository.
 * @apiExample {js} ex:
github.repos.updateInvite({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/branches/:branch/protection/required_status_checks updateProtectedBranchRequiredStatusChecks
 * @apiVersion 6.0.3
 * @apiName updateProtectedBranchRequiredStatusChecks
 * @apiDescription Update required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Boolean} [include_admins]  Enforce required status checks for repository administrators.
 * @apiParam {Boolean} [strict]  Require branches to be up to date before merging.
 * @apiParam {Array} [contexts]  The list of status checks to require in order to merge into this branch.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.updateProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases/:id/assets uploadAsset
 * @apiVersion 6.0.3
 * @apiName uploadAsset
 * @apiDescription Upload a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 6.0.3
 * @apiName code
 * @apiDescription Search code.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String=indexed} [sort]  The sort field. Can only be indexed, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: results are sorted by best match.
 * @apiParam {String=asc,desc} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.code({ ... });
 */

/**
 * @api {get} /legacy/user/email/:email email
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName issues
 * @apiDescription Search issues.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String=comments,created,updated} [sort]  The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
 * @apiParam {String=asc,desc} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.issues({ ... });
 */

/**
 * @api {get} /search/repositories repos
 * @apiVersion 6.0.3
 * @apiName repos
 * @apiDescription Search repositories.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String=stars,forks,updated} [sort]  stars, forks, or updated
 * @apiParam {String=asc,desc} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.repos({ ... });
 */

/**
 * @api {get} /search/users users
 * @apiVersion 6.0.3
 * @apiName users
 * @apiDescription Search users.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String=followers,repositories,joined} [sort]  The sort field. Can be followers, repositories, or joined. Default: results are sorted by best match.
 * @apiParam {String=asc,desc} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.users({ ... });
 */

/**
 * @api {patch} /user/repository_invitations/:invitation_id acceptRepoInvite
 * @apiVersion 6.0.3
 * @apiName acceptRepoInvite
 * @apiDescription Accept a repository invitation. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {String} invitation_id  
 * @apiExample {js} ex:
github.users.acceptRepoInvite({ ... });
 */

/**
 * @api {post} /user/emails addEmails
 * @apiVersion 6.0.3
 * @apiName addEmails
 * @apiDescription Add email address(es)
 * @apiGroup users
 *
 * @apiParam {Array} body  You can post a single email address or an array of addresses.
 * @apiExample {js} ex:
github.users.addEmails({ ... });
 */

/**
 * @api {get} /user/following/:username checkFollowing
 * @apiVersion 6.0.3
 * @apiName checkFollowing
 * @apiDescription Check if you are following a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.checkFollowing({ ... });
 */

/**
 * @api {get} /users/:username/following/:target_user checkIfOneFollowersOther
 * @apiVersion 6.0.3
 * @apiName checkIfOneFollowersOther
 * @apiDescription Check if one user follows another
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {String} target_user  
 * @apiExample {js} ex:
github.users.checkIfOneFollowersOther({ ... });
 */

/**
 * @api {post} /user/gpg_keys createGpgKey
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @api {delete} /user/repository_invitations/:invitation_id declineRepoInvite
 * @apiVersion 6.0.3
 * @apiName declineRepoInvite
 * @apiDescription Decline a repository invitation. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {String} invitation_id  
 * @apiExample {js} ex:
github.users.declineRepoInvite({ ... });
 */

/**
 * @api {delete} /user/emails deleteEmails
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName deleteKey
 * @apiDescription Delete a public key
 * @apiGroup users
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.users.deleteKey({ ... });
 */

/**
 * @api {delete} /users/:username/site_admin demote
 * @apiVersion 6.0.3
 * @apiName demote
 * @apiDescription Demote a site administrator to an ordinary user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.demote({ ... });
 */

/**
 * @api {patch} /user/memberships/orgs/:org editOrgMembership
 * @apiVersion 6.0.3
 * @apiName editOrgMembership
 * @apiDescription Edit your organization membership
 * @apiGroup users
 *
 * @apiParam {String} org  
 * @apiParam {String=active} state  The state that the membership should be in. Only "active" will be accepted.
 * @apiExample {js} ex:
github.users.editOrgMembership({ ... });
 */

/**
 * @api {put} /user/following/:username followUser
 * @apiVersion 6.0.3
 * @apiName followUser
 * @apiDescription Follow a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.followUser({ ... });
 */

/**
 * @api {get} /user get
 * @apiVersion 6.0.3
 * @apiName get
 * @apiDescription Get the authenticated user
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.get({ ... });
 */

/**
 * @api {get} /users getAll
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @api {get} /user/followers getFollowers
 * @apiVersion 6.0.3
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
 * @api {get} /users/:username/followers getFollowersForUser
 * @apiVersion 6.0.3
 * @apiName getFollowersForUser
 * @apiDescription List a user's followers
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getFollowersForUser({ ... });
 */

/**
 * @api {get} /user/following getFollowing
 * @apiVersion 6.0.3
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
 * @api {get} /users/:username/following getFollowingForUser
 * @apiVersion 6.0.3
 * @apiName getFollowingForUser
 * @apiDescription List who a user is following
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getFollowingForUser({ ... });
 */

/**
 * @api {get} /users/:username getForUser
 * @apiVersion 6.0.3
 * @apiName getForUser
 * @apiDescription Get a single user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.getForUser({ ... });
 */

/**
 * @api {get} /user/gpg_keys/:id getGpgKey
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
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
 * @api {get} /users/:username/keys getKeysForUser
 * @apiVersion 6.0.3
 * @apiName getKeysForUser
 * @apiDescription List public keys for a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getKeysForUser({ ... });
 */

/**
 * @api {get} /user/memberships/orgs/:org getOrgMembership
 * @apiVersion 6.0.3
 * @apiName getOrgMembership
 * @apiDescription Get your organization membership
 * @apiGroup users
 *
 * @apiParam {String} org  
 * @apiExample {js} ex:
github.users.getOrgMembership({ ... });
 */

/**
 * @api {get} /user/memberships/orgs getOrgMemberships
 * @apiVersion 6.0.3
 * @apiName getOrgMemberships
 * @apiDescription List your organization memberships
 * @apiGroup users
 *
 * @apiParam {String=active,pending} [state]  Indicates the state of the memberships to return. Can be either active or pending. If not specified, both active and pending memberships are returned.
 * @apiExample {js} ex:
github.users.getOrgMemberships({ ... });
 */

/**
 * @api {get} /user/orgs getOrgs
 * @apiVersion 6.0.3
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
 * @apiVersion 6.0.3
 * @apiName getRepoInvites
 * @apiDescription List a user's repository invitations. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.getRepoInvites({ ... });
 */

/**
 * @api {get} /user/teams getTeams
 * @apiVersion 6.0.3
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
 * @api {put} /users/:username/site_admin promote
 * @apiVersion 6.0.3
 * @apiName promote
 * @apiDescription Promote an ordinary user to a site administrator
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.promote({ ... });
 */

/**
 * @api {put} /users/:username/suspended suspend
 * @apiVersion 6.0.3
 * @apiName suspend
 * @apiDescription Suspend a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.suspend({ ... });
 */

/**
 * @api {delete} /user/following/:username unfollowUser
 * @apiVersion 6.0.3
 * @apiName unfollowUser
 * @apiDescription Unfollow a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.unfollowUser({ ... });
 */

/**
 * @api {delete} /users/:username/suspended unsuspend
 * @apiVersion 6.0.3
 * @apiName unsuspend
 * @apiDescription Unsuspend a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.unsuspend({ ... });
 */

/**
 * @api {patch} /user update
 * @apiVersion 6.0.3
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

/**
 * @api {get} /notifications/threads/:id/subscription checkNotificationThreadSubscription
 * @apiVersion 7.3.2
 * @apiName checkNotificationThreadSubscription
 * @apiDescription Check to see if the current user is subscribed to a thread.
 * @apiGroup activity
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.activity.checkNotificationThreadSubscription({ ... });
 */

/**
 * @api {get} /user/starred/:owner/:repo checkStarringRepo
 * @apiVersion 7.3.2
 * @apiName checkStarringRepo
 * @apiDescription Check if you are starring a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.checkStarringRepo({ ... });
 */

/**
 * @api {delete} /notifications/threads/:id/subscription deleteNotificationThreadSubscription
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @api {get} /repos/:owner/:repo/events getEventsForRepo
 * @apiVersion 7.3.2
 * @apiName getEventsForRepo
 * @apiDescription List repository events
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events getEventsForRepoIssues
 * @apiVersion 7.3.2
 * @apiName getEventsForRepoIssues
 * @apiDescription List issue events for a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoIssues({ ... });
 */

/**
 * @api {get} /networks/:owner/:repo/events getEventsForRepoNetwork
 * @apiVersion 7.3.2
 * @apiName getEventsForRepoNetwork
 * @apiDescription List public events for a network of repositories
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForRepoNetwork({ ... });
 */

/**
 * @api {get} /users/:username/events getEventsForUser
 * @apiVersion 7.3.2
 * @apiName getEventsForUser
 * @apiDescription List events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUser({ ... });
 */

/**
 * @api {get} /users/:username/events/orgs/:org getEventsForUserOrg
 * @apiVersion 7.3.2
 * @apiName getEventsForUserOrg
 * @apiDescription List events for a user's organization
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserOrg({ ... });
 */

/**
 * @api {get} /users/:username/events/public getEventsForUserPublic
 * @apiVersion 7.3.2
 * @apiName getEventsForUserPublic
 * @apiDescription List public events performed by a user
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsForUserPublic({ ... });
 */

/**
 * @api {get} /users/:username/received_events getEventsReceived
 * @apiVersion 7.3.2
 * @apiName getEventsReceived
 * @apiDescription List events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceived({ ... });
 */

/**
 * @api {get} /users/:username/received_events/public getEventsReceivedPublic
 * @apiVersion 7.3.2
 * @apiName getEventsReceivedPublic
 * @apiDescription List public events that a user has received
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getEventsReceivedPublic({ ... });
 */

/**
 * @api {get} /feeds getFeeds
 * @apiVersion 7.3.2
 * @apiName getFeeds
 * @apiDescription Get all feeds available for the authenticated user.
 * @apiGroup activity
 *
 * @apiExample {js} ex:
github.activity.getFeeds({ ... });
 */

/**
 * @api {get} /notifications/threads/:id getNotificationThread
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @api {get} /repos/:owner/:repo/notifications getNotificationsForUser
 * @apiVersion 7.3.2
 * @apiName getNotificationsForUser
 * @apiDescription Get all notifications for the given user.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [all=false]  If true, show notifications marked as read. Default: false
 * @apiParam {Boolean} [participating=false]  If true, only shows notifications in which the user is directly participating or mentioned. Default: false
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {String} [before]  Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @apiExample {js} ex:
github.activity.getNotificationsForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/subscription getRepoSubscription
 * @apiVersion 7.3.2
 * @apiName getRepoSubscription
 * @apiDescription Get a Repository Subscription.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getRepoSubscription({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stargazers getStargazersForRepo
 * @apiVersion 7.3.2
 * @apiName getStargazersForRepo
 * @apiDescription List Stargazers
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStargazersForRepo({ ... });
 */

/**
 * @api {get} /user/starred getStarredRepos
 * @apiVersion 7.3.2
 * @apiName getStarredRepos
 * @apiDescription List repositories being starred by the authenticated user
 * @apiGroup activity
 *
 * @apiParam {String=created,updated} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStarredRepos({ ... });
 */

/**
 * @api {get} /users/:username/starred getStarredReposForUser
 * @apiVersion 7.3.2
 * @apiName getStarredReposForUser
 * @apiDescription List repositories being starred by a user
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {String=created,updated} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getStarredReposForUser({ ... });
 */

/**
 * @api {get} /user/subscriptions getWatchedRepos
 * @apiVersion 7.3.2
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
 * @api {get} /users/:username/subscriptions getWatchedReposForUser
 * @apiVersion 7.3.2
 * @apiName getWatchedReposForUser
 * @apiDescription List repositories being watched by a user.
 * @apiGroup activity
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchedReposForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/subscribers getWatchersForRepo
 * @apiVersion 7.3.2
 * @apiName getWatchersForRepo
 * @apiDescription Get watchers for repository.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.activity.getWatchersForRepo({ ... });
 */

/**
 * @api {patch} /notifications/threads/:id markNotificationThreadAsRead
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName markNotificationsAsRead
 * @apiDescription Mark notifications as read for authenticated user.
 * @apiGroup activity
 *
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsRead({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/notifications markNotificationsAsReadForRepo
 * @apiVersion 7.3.2
 * @apiName markNotificationsAsReadForRepo
 * @apiDescription Mark notifications in a repo as read.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [last_read_at=Time.now]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now
 * @apiExample {js} ex:
github.activity.markNotificationsAsReadForRepo({ ... });
 */

/**
 * @api {put} /notifications/threads/:id/subscription setNotificationThreadSubscription
 * @apiVersion 7.3.2
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
 * @api {put} /repos/:owner/:repo/subscription setRepoSubscription
 * @apiVersion 7.3.2
 * @apiName setRepoSubscription
 * @apiDescription Set a Repository Subscription
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [subscribed]  Determines if notifications should be received from this repository.
 * @apiParam {Boolean} [ignored]  Determines if all notifications should be blocked from this repository.
 * @apiExample {js} ex:
github.activity.setRepoSubscription({ ... });
 */

/**
 * @api {put} /user/starred/:owner/:repo starRepo
 * @apiVersion 7.3.2
 * @apiName starRepo
 * @apiDescription Star a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.starRepo({ ... });
 */

/**
 * @api {delete} /user/starred/:owner/:repo unstarRepo
 * @apiVersion 7.3.2
 * @apiName unstarRepo
 * @apiDescription Unstar a repository
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unstarRepo({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/subscription unwatchRepo
 * @apiVersion 7.3.2
 * @apiName unwatchRepo
 * @apiDescription Unwatch a repository.
 * @apiGroup activity
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.activity.unwatchRepo({ ... });
 */

/**
 * @api {get} /applications/:client_id/tokens/:access_token check
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName create
 * @apiDescription Create a new authorization.
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
 * @apiVersion 7.3.2
 * @apiName delete
 * @apiDescription Delete an authorization.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.delete({ ... });
 */

/**
 * @api {delete} /applications/grants/:id deleteGrant
 * @apiVersion 7.3.2
 * @apiName deleteGrant
 * @apiDescription Delete a grant.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.deleteGrant({ ... });
 */

/**
 * @api {get} /authorizations/:id get
 * @apiVersion 7.3.2
 * @apiName get
 * @apiDescription Get a single authorization.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.authorization.get({ ... });
 */

/**
 * @api {get} /authorizations getAll
 * @apiVersion 7.3.2
 * @apiName getAll
 * @apiDescription List your authorizations.
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getAll({ ... });
 */

/**
 * @api {get} /applications/grants/:id getGrant
 * @apiVersion 7.3.2
 * @apiName getGrant
 * @apiDescription Get a single grant.
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
 * @apiVersion 7.3.2
 * @apiName getGrants
 * @apiDescription List your grants.
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getGrants({ ... });
 */

/**
 * @api {put} /authorizations/clients/:client_id getOrCreateAuthorizationForApp
 * @apiVersion 7.3.2
 * @apiName getOrCreateAuthorizationForApp
 * @apiDescription Get or create an authorization for a specific app.
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
 * @apiVersion 7.3.2
 * @apiName getOrCreateAuthorizationForAppAndFingerprint
 * @apiDescription Get or create an authorization for a specific app and fingerprint.
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName update
 * @apiDescription Update an existing authorization.
 * @apiGroup authorization
 *
 * @apiParam {String} id  
 * @apiParam {Array} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {Array} [add_scopes]  A list of scopes to add to this authorization.
 * @apiParam {Array} [remove_scopes]  A list of scopes to remove from this authorization.
 * @apiParam {String} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {String} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiParam {String} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiExample {js} ex:
github.authorization.update({ ... });
 */

/**
 * @api {post} /admin/organizations createOrg
 * @apiVersion 7.3.2
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
 * @api {post} /admin/pre_receive_environments createPreReceiveEnvironment
 * @apiVersion 7.3.2
 * @apiName createPreReceiveEnvironment
 * @apiDescription Create a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} name  The new pre-receive environment's name.
 * @apiParam {String} image_url  URL from which to download a tarball of this environment.
 * @apiExample {js} ex:
github.enterprise.createPreReceiveEnvironment({ ... });
 */

/**
 * @api {post} /admin/pre-receive-hooks createPreReceiveHook
 * @apiVersion 7.3.2
 * @apiName createPreReceiveHook
 * @apiDescription Create a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} name  The name of the hook.
 * @apiParam {String} script  The script that the hook runs.
 * @apiParam {Json} script_repository  The GitHub repository where the script is kept.
 * @apiParam {Json} environment  The pre-receive environment where the script is executed.
 * @apiParam {String} [enforcement=disabled]  The state of enforcement for this hook. default: disabled
 * @apiParam {Boolean} [allow_downstream_configuration=false]  Whether enforcement can be overridden at the org or repo level. default: false
 * @apiExample {js} ex:
github.enterprise.createPreReceiveHook({ ... });
 */

/**
 * @api {delete} /admin/pre_receive_environments/:id deletePreReceiveEnvironment
 * @apiVersion 7.3.2
 * @apiName deletePreReceiveEnvironment
 * @apiDescription Delete a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.deletePreReceiveEnvironment({ ... });
 */

/**
 * @api {delete} /admin/pre_receive_hooks/:id deletePreReceiveHook
 * @apiVersion 7.3.2
 * @apiName deletePreReceiveHook
 * @apiDescription Delete a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.deletePreReceiveHook({ ... });
 */

/**
 * @api {patch} /admin/pre_receive_environments/:id editPreReceiveEnvironment
 * @apiVersion 7.3.2
 * @apiName editPreReceiveEnvironment
 * @apiDescription Create a pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiParam {String} name  This pre-receive environment's new name.
 * @apiParam {String} image_url  URL from which to download a tarball of this environment.
 * @apiExample {js} ex:
github.enterprise.editPreReceiveEnvironment({ ... });
 */

/**
 * @api {patch} /admin/pre_receive_hooks/:id editPreReceiveHook
 * @apiVersion 7.3.2
 * @apiName editPreReceiveHook
 * @apiDescription Edit a pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiParam {Json} body  JSON object that contains pre-receive hook info.
 * @apiExample {js} ex:
github.enterprise.editPreReceiveHook({ ... });
 */

/**
 * @api {get} /enterprise/settings/license getLicense
 * @apiVersion 7.3.2
 * @apiName getLicense
 * @apiDescription Get license information
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getLicense({ ... });
 */

/**
 * @api {get} /admin/pre-receive-environments/:id getPreReceiveEnvironment
 * @apiVersion 7.3.2
 * @apiName getPreReceiveEnvironment
 * @apiDescription Get a single pre-receive environment. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironment({ ... });
 */

/**
 * @api {get} /admin/pre-receive-environments/:id/downloads/latest getPreReceiveEnvironmentDownloadStatus
 * @apiVersion 7.3.2
 * @apiName getPreReceiveEnvironmentDownloadStatus
 * @apiDescription Get a pre-receive environment's download status. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironmentDownloadStatus({ ... });
 */

/**
 * @api {get} /admin/pre_receive_environments getPreReceiveEnvironments
 * @apiVersion 7.3.2
 * @apiName getPreReceiveEnvironments
 * @apiDescription List pre-receive environments. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getPreReceiveEnvironments({ ... });
 */

/**
 * @api {get} /admin/pre-receive-hooks/:id getPreReceiveHook
 * @apiVersion 7.3.2
 * @apiName getPreReceiveHook
 * @apiDescription Get a single pre-receive hook. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.getPreReceiveHook({ ... });
 */

/**
 * @api {get} /admin/pre-receive-hooks getPreReceiveHooks
 * @apiVersion 7.3.2
 * @apiName getPreReceiveHooks
 * @apiDescription List pre-receive hooks. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiExample {js} ex:
github.enterprise.getPreReceiveHooks({ ... });
 */

/**
 * @api {post} /staff/indexing_jobs queueIndexingJob
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName stats
 * @apiDescription Get statistics.
 * @apiGroup enterprise
 *
 * @apiParam {String=issues,hooks,milestones,orgs,comments,pages,users,gists,pulls,repos,all} type  Possible values: issues, hooks, milestones, orgs, comments, pages, users, gists, pulls, repos, all.
 * @apiExample {js} ex:
github.enterprise.stats({ ... });
 */

/**
 * @api {post} /admin/ldap/teams/:team_id/sync syncLdapForTeam
 * @apiVersion 7.3.2
 * @apiName syncLdapForTeam
 * @apiDescription Sync LDAP mapping for a team.
 * @apiGroup enterprise
 *
 * @apiParam {Number} team_id  
 * @apiExample {js} ex:
github.enterprise.syncLdapForTeam({ ... });
 */

/**
 * @api {post} /admin/ldap/users/:username/sync syncLdapForUser
 * @apiVersion 7.3.2
 * @apiName syncLdapForUser
 * @apiDescription Sync LDAP mapping for a user.
 * @apiGroup enterprise
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.enterprise.syncLdapForUser({ ... });
 */

/**
 * @api {post} /admin/pre_receive_environments/:id/downloads triggerPreReceiveEnvironmentDownload
 * @apiVersion 7.3.2
 * @apiName triggerPreReceiveEnvironmentDownload
 * @apiDescription Trigger a pre-receive environment download. (In preview period. See README.)
 * @apiGroup enterprise
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.enterprise.triggerPreReceiveEnvironmentDownload({ ... });
 */

/**
 * @api {patch} /admin/ldap/teams/:team_id/mapping updateLdapForTeam
 * @apiVersion 7.3.2
 * @apiName updateLdapForTeam
 * @apiDescription Update LDAP mapping for a team.
 * @apiGroup enterprise
 *
 * @apiParam {Number} team_id  
 * @apiParam {String} ldap_dn  LDAP DN for user
 * @apiExample {js} ex:
github.enterprise.updateLdapForTeam({ ... });
 */

/**
 * @api {patch} /admin/ldap/users/:username/mapping updateLdapForUser
 * @apiVersion 7.3.2
 * @apiName updateLdapForUser
 * @apiDescription Update LDAP mapping for a user.
 * @apiGroup enterprise
 *
 * @apiParam {String} username  
 * @apiParam {String} ldap_dn  LDAP DN for user
 * @apiExample {js} ex:
github.enterprise.updateLdapForUser({ ... });
 */

/**
 * @api {get} /gists/:id/star checkStar
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName edit
 * @apiDescription Edit a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiParam {Json} files  Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {String} [description]  
 * @apiParam {String} [content]  Updated file contents.
 * @apiParam {String} [filename]  New name for this file.
 * @apiExample {js} ex:
github.gists.edit({ ... });
 */

/**
 * @api {patch} /gists/:gist_id/comments/:id editComment
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName getAll
 * @apiDescription List the authenticated user's gists or if called anonymously, this will return all public gists
 * @apiGroup gists
 *
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gists.getAll({ ... });
 */

/**
 * @api {get} /gists/:gist_id/comments/:id getComment
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName getCommits
 * @apiDescription List gist commits
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.getCommits({ ... });
 */

/**
 * @api {get} /users/:username/gists getForUser
 * @apiVersion 7.3.2
 * @apiName getForUser
 * @apiDescription List a user's gists
 * @apiGroup gists
 *
 * @apiParam {String} username  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gists.getForUser({ ... });
 */

/**
 * @api {get} /gists/:id/forks getForks
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName unstar
 * @apiDescription Unstar a gist
 * @apiGroup gists
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.gists.unstar({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/blobs createBlob
 * @apiVersion 7.3.2
 * @apiName createBlob
 * @apiDescription Create a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} content  
 * @apiParam {String} encoding  
 * @apiExample {js} ex:
github.gitdata.createBlob({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/commits createCommit
 * @apiVersion 7.3.2
 * @apiName createCommit
 * @apiDescription Create a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/git/refs createReference
 * @apiVersion 7.3.2
 * @apiName createReference
 * @apiDescription Create a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  The name of the fully qualified reference (ie: refs/heads/master). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.createReference({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/git/tags createTag
 * @apiVersion 7.3.2
 * @apiName createTag
 * @apiDescription Create a Tag Object
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/git/trees createTree
 * @apiVersion 7.3.2
 * @apiName createTree
 * @apiDescription Create a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Json} tree  Array of Hash objects (of path, mode, type and sha) specifying a tree structure
 * @apiParam {String} [base_tree]  String of the SHA1 of the tree you want to update with new data
 * @apiExample {js} ex:
github.gitdata.createTree({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/git/refs/:ref deleteReference
 * @apiVersion 7.3.2
 * @apiName deleteReference
 * @apiDescription Delete a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.deleteReference({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/blobs/:sha getBlob
 * @apiVersion 7.3.2
 * @apiName getBlob
 * @apiDescription Get a Blob
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getBlob({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/commits/:sha getCommit
 * @apiVersion 7.3.2
 * @apiName getCommit
 * @apiDescription Get a Commit
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/commits/:sha getCommitSignatureVerification
 * @apiVersion 7.3.2
 * @apiName getCommitSignatureVerification
 * @apiDescription Get a Commit Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getCommitSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs/:ref getReference
 * @apiVersion 7.3.2
 * @apiName getReference
 * @apiDescription Get a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.getReference({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs/ getReferences
 * @apiVersion 7.3.2
 * @apiName getReferences
 * @apiDescription Get all References
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getReferences({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/tags/:sha getTag
 * @apiVersion 7.3.2
 * @apiName getTag
 * @apiDescription Get a Tag
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTag({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/tags/:sha getTagSignatureVerification
 * @apiVersion 7.3.2
 * @apiName getTagSignatureVerification
 * @apiDescription Get a Tag Signature Verification. (In preview period. See README.)
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.gitdata.getTagSignatureVerification({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/refs/tags getTags
 * @apiVersion 7.3.2
 * @apiName getTags
 * @apiDescription Get all tag References
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getTags({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/git/trees/:sha getTree
 * @apiVersion 7.3.2
 * @apiName getTree
 * @apiDescription Get a Tree
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {Boolean} [recursive]  
 * @apiExample {js} ex:
github.gitdata.getTree({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/git/refs/:ref updateReference
 * @apiVersion 7.3.2
 * @apiName updateReference
 * @apiDescription Update a Reference
 * @apiGroup gitdata
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha  
 * @apiParam {Boolean} [force=false]  Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
 * @apiExample {js} ex:
github.gitdata.updateReference({ ... });
 */

/**
 * @api {post} /installations/:installation_id/repositories/:repository_id addRepoToInstallation
 * @apiVersion 7.3.2
 * @apiName addRepoToInstallation
 * @apiDescription Add a single repository to an installation. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} installation_id  
 * @apiParam {String} repository_id  
 * @apiExample {js} ex:
github.integrations.addRepoToInstallation({ ... });
 */

/**
 * @api {post} /installations/:installation_id/access_tokens createInstallationToken
 * @apiVersion 7.3.2
 * @apiName createInstallationToken
 * @apiDescription Create a new installation token. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} installation_id  
 * @apiParam {String} [user_id]  The id of the user for whom the integration is acting on behalf of.
 * @apiExample {js} ex:
github.integrations.createInstallationToken({ ... });
 */

/**
 * @api {get} /installation/repositories getInstallationRepositories
 * @apiVersion 7.3.2
 * @apiName getInstallationRepositories
 * @apiDescription List repositories that are accessible to the authenticated installation. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} [user_id]  The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user.
 * @apiExample {js} ex:
github.integrations.getInstallationRepositories({ ... });
 */

/**
 * @api {get} /integration/installations getInstallations
 * @apiVersion 7.3.2
 * @apiName getInstallations
 * @apiDescription List the integration's installations. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.integrations.getInstallations({ ... });
 */

/**
 * @api {post} /integration/identity/user getUserIdentity
 * @apiVersion 7.3.2
 * @apiName getUserIdentity
 * @apiDescription Request identity of user. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} [nonce]  
 * @apiExample {js} ex:
github.integrations.getUserIdentity({ ... });
 */

/**
 * @api {post} /installations/:installation_id/repositories/:repository_id removeRepoFromInstallation
 * @apiVersion 7.3.2
 * @apiName removeRepoFromInstallation
 * @apiDescription Remove a single repository from an installation. (In preview period. See README.)
 * @apiGroup integrations
 *
 * @apiParam {String} installation_id  
 * @apiParam {String} repository_id  
 * @apiExample {js} ex:
github.integrations.removeRepoFromInstallation({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/assignees addAssigneesToIssue
 * @apiVersion 7.3.2
 * @apiName addAssigneesToIssue
 * @apiDescription Add assignees to an issue.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} assignees  Logins for the users that should be added to the issue.
 * @apiExample {js} ex:
github.issues.addAssigneesToIssue({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/labels addLabels
 * @apiVersion 7.3.2
 * @apiName addLabels
 * @apiDescription Add labels to an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  
 * @apiExample {js} ex:
github.issues.addLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/assignees/:assignee checkAssignee
 * @apiVersion 7.3.2
 * @apiName checkAssignee
 * @apiDescription Check assignee
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} assignee  Login for the user that this issue should be assigned to.
 * @apiExample {js} ex:
github.issues.checkAssignee({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues create
 * @apiVersion 7.3.2
 * @apiName create
 * @apiDescription Create an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/issues/:number/comments createComment
 * @apiVersion 7.3.2
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.createComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/labels createLabel
 * @apiVersion 7.3.2
 * @apiName createLabel
 * @apiDescription Create a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.createLabel({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/milestones createMilestone
 * @apiVersion 7.3.2
 * @apiName createMilestone
 * @apiDescription Create a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String=open,closed,all} [state=open]  
 * @apiParam {String} [description]  
 * @apiParam {Date} [due_on]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.issues.createMilestone({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/comments/:id deleteComment
 * @apiVersion 7.3.2
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.deleteComment({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/labels/:name deleteLabel
 * @apiVersion 7.3.2
 * @apiName deleteLabel
 * @apiDescription Delete a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.deleteLabel({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/milestones/:number deleteMilestone
 * @apiVersion 7.3.2
 * @apiName deleteMilestone
 * @apiDescription Delete a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.deleteMilestone({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/issues/:number edit
 * @apiVersion 7.3.2
 * @apiName edit
 * @apiDescription Edit an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [title]  
 * @apiParam {String} [body]  
 * @apiParam {String} [assignee]  Login for the user that this issue should be assigned to.
 * @apiParam {String=open,closed} [state=open]  open or closed
 * @apiParam {Number} [milestone]  Milestone to associate this issue with.
 * @apiParam {Json} [labels]  Array of strings - Labels to associate with this issue.
 * @apiParam {Array} [assignees]  Logins for Users to assign to this issue. Pass one or more user logins to replace the set of assignees on this Issue. .Send an empty array ([]) to clear all assignees from the Issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.
 * @apiExample {js} ex:
github.issues.edit({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/issues/comments/:id editComment
 * @apiVersion 7.3.2
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.issues.editComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number get
 * @apiVersion 7.3.2
 * @apiName get
 * @apiDescription Get a single issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.get({ ... });
 */

/**
 * @api {get} /issues getAll
 * @apiVersion 7.3.2
 * @apiName getAll
 * @apiDescription List all issues across all the authenticated user's visible repositories including owned repositories, member repositories, and organization repositories
 * @apiGroup issues
 *
 * @apiParam {String=all,assigned,created,mentioned,subscribed} [filter]  
 * @apiParam {String=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String=created,updated,comments} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getAll({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/assignees getAssignees
 * @apiVersion 7.3.2
 * @apiName getAssignees
 * @apiDescription List assignees
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.issues.getAssignees({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments/:id getComment
 * @apiVersion 7.3.2
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/comments getComments
 * @apiVersion 7.3.2
 * @apiName getComments
 * @apiDescription List comments on an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments getCommentsForRepo
 * @apiVersion 7.3.2
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=created,updated} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getCommentsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events/:id getEvent
 * @apiVersion 7.3.2
 * @apiName getEvent
 * @apiDescription Get a single event
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.issues.getEvent({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:issue_number/events getEvents
 * @apiVersion 7.3.2
 * @apiName getEvents
 * @apiDescription List events for an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} issue_number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEvents({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/events getEventsForRepo
 * @apiVersion 7.3.2
 * @apiName getEventsForRepo
 * @apiDescription List events for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:issue_number/timeline getEventsTimeline
 * @apiVersion 7.3.2
 * @apiName getEventsTimeline
 * @apiDescription List events for an issue. (In preview period. See README.)
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} issue_number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEventsTimeline({ ... });
 */

/**
 * @api {get} /orgs/:org/issues getForOrg
 * @apiVersion 7.3.2
 * @apiName getForOrg
 * @apiDescription List all issues for a given organization for the authenticated user
 * @apiGroup issues
 *
 * @apiParam {String} org  
 * @apiParam {String=all,assigned,created,mentioned,subscribed} [filter]  
 * @apiParam {String=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String=created,updated,comments} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getForOrg({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues getForRepo
 * @apiVersion 7.3.2
 * @apiName getForRepo
 * @apiDescription List issues for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [milestone]  
 * @apiParam {String=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {String} [assignee]  String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User.
 * @apiParam {String} [creator]  The user that created the issue.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String=created,updated,comments} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {String} [mentioned]  String User login.
 * @apiExample {js} ex:
github.issues.getForRepo({ ... });
 */

/**
 * @api {get} /user/issues getForUser
 * @apiVersion 7.3.2
 * @apiName getForUser
 * @apiDescription List all issues across owned and member repositories for the authenticated user
 * @apiGroup issues
 *
 * @apiParam {String=all,assigned,created,mentioned,subscribed} [filter]  
 * @apiParam {String=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {String} [labels]  String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String=created,updated,comments} [sort=created]  
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/labels getIssueLabels
 * @apiVersion 7.3.2
 * @apiName getIssueLabels
 * @apiDescription List labels on an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getIssueLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/labels/:name getLabel
 * @apiVersion 7.3.2
 * @apiName getLabel
 * @apiDescription Get a single label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.getLabel({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/labels getLabels
 * @apiVersion 7.3.2
 * @apiName getLabels
 * @apiDescription List all labels for this repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones/:number getMilestone
 * @apiVersion 7.3.2
 * @apiName getMilestone
 * @apiDescription Get a single milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestone({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones/:number/labels getMilestoneLabels
 * @apiVersion 7.3.2
 * @apiName getMilestoneLabels
 * @apiDescription Get labels for every issue in a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.getMilestoneLabels({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/milestones getMilestones
 * @apiVersion 7.3.2
 * @apiName getMilestones
 * @apiDescription List milestones for a repository
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=open,closed,all} [state=open]  
 * @apiParam {String=due_on,completeness} [sort=due_on]  due_on, completeness, default: due_on
 * @apiParam {String=asc,desc} [direction=asc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getMilestones({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/issues/:number/lock lock
 * @apiVersion 7.3.2
 * @apiName lock
 * @apiDescription Users with push access can lock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.lock({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/labels removeAllLabels
 * @apiVersion 7.3.2
 * @apiName removeAllLabels
 * @apiDescription Remove all labels from an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.removeAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/assignees removeAssigneesFromIssue
 * @apiVersion 7.3.2
 * @apiName removeAssigneesFromIssue
 * @apiDescription Remove assignees from an issue.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Json} body  JSON object that contains assignees array of logins for the users that should be removed from the issue.
 * @apiExample {js} ex:
github.issues.removeAssigneesFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/labels/:name removeLabel
 * @apiVersion 7.3.2
 * @apiName removeLabel
 * @apiDescription Remove a label from an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.issues.removeLabel({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/issues/:number/labels replaceAllLabels
 * @apiVersion 7.3.2
 * @apiName replaceAllLabels
 * @apiDescription Replace all labels for an issue
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} body  Sending an empty array ([]) will remove all Labels from the Issue.
 * @apiExample {js} ex:
github.issues.replaceAllLabels({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/issues/:number/lock unlock
 * @apiVersion 7.3.2
 * @apiName unlock
 * @apiDescription Users with push access can unlock an issue's conversation.
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.issues.unlock({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/labels/:oldname updateLabel
 * @apiVersion 7.3.2
 * @apiName updateLabel
 * @apiDescription Update a label
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} oldname  The old name of the label.
 * @apiParam {String} name  The new name of the label.
 * @apiParam {String} color  6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.updateLabel({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/milestones/:number updateMilestone
 * @apiVersion 7.3.2
 * @apiName updateMilestone
 * @apiDescription Update a milestone
 * @apiGroup issues
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} title  
 * @apiParam {String=open,closed,all} [state=open]  
 * @apiParam {String} [description]  
 * @apiParam {Date} [due_on]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.issues.updateMilestone({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/import cancelImport
 * @apiVersion 7.3.2
 * @apiName cancelImport
 * @apiDescription Cancel an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.cancelImport({ ... });
 */

/**
 * @api {delete} /orgs/:org/migrations/:id/archive deleteMigrationArchive
 * @apiVersion 7.3.2
 * @apiName deleteMigrationArchive
 * @apiDescription Delete a migration archive. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.deleteMigrationArchive({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/import/authors getImportCommitAuthors
 * @apiVersion 7.3.2
 * @apiName getImportCommitAuthors
 * @apiDescription Get import commit authors. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [since]  Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step.
 * @apiExample {js} ex:
github.migrations.getImportCommitAuthors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/import getImportProgress
 * @apiVersion 7.3.2
 * @apiName getImportProgress
 * @apiDescription Get import progress. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.getImportProgress({ ... });
 */

/**
 * @api {get} /:owner/:name/import/large_files getLargeImportFiles
 * @apiVersion 7.3.2
 * @apiName getLargeImportFiles
 * @apiDescription List files larger than 100MB found during the import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.migrations.getLargeImportFiles({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations/:id/archive getMigrationArchiveLink
 * @apiVersion 7.3.2
 * @apiName getMigrationArchiveLink
 * @apiDescription Get the URL to a migration archive. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.getMigrationArchiveLink({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations/:id getMigrationStatus
 * @apiVersion 7.3.2
 * @apiName getMigrationStatus
 * @apiDescription Get the status of a migration. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.migrations.getMigrationStatus({ ... });
 */

/**
 * @api {get} /orgs/:org/migrations getMigrations
 * @apiVersion 7.3.2
 * @apiName getMigrations
 * @apiDescription Get a list of migrations. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.migrations.getMigrations({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/import/authors/:author_id mapImportCommitAuthor
 * @apiVersion 7.3.2
 * @apiName mapImportCommitAuthor
 * @apiDescription Map a commit author. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} author_id  The commit author id.
 * @apiParam {String} [email]  The new Git author email.
 * @apiParam {String} [name]  The new Git author name.
 * @apiExample {js} ex:
github.migrations.mapImportCommitAuthor({ ... });
 */

/**
 * @api {patch} /:owner/:name/import/lfs setImportLfsPreference
 * @apiVersion 7.3.2
 * @apiName setImportLfsPreference
 * @apiDescription Set import LFS preference. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiParam {String} use_lfs  Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).
 * @apiExample {js} ex:
github.migrations.setImportLfsPreference({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/import startImport
 * @apiVersion 7.3.2
 * @apiName startImport
 * @apiDescription Start an import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} vcs_url  The URL of the originating repository.
 * @apiParam {String=subversion,git,mercurial,tfvc} [vcs]  The originating VCS type. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
 * @apiParam {String} [vcs_username]  If authentication is required, the username to provide to vcs_url.
 * @apiParam {String} [vcs_password]  If authentication is required, the password to provide to vcs_url.
 * @apiParam {String} [tfvc_project]  For a tfvc import, the name of the project that is being imported.
 * @apiExample {js} ex:
github.migrations.startImport({ ... });
 */

/**
 * @api {post} /orgs/:org/migrations startMigration
 * @apiVersion 7.3.2
 * @apiName startMigration
 * @apiDescription Start a migration. (In preview period. See README.)
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
 * @api {delete} /orgs/:org/migrations/:id/repos/:repo_name/lock unlockRepoLockedForMigration
 * @apiVersion 7.3.2
 * @apiName unlockRepoLockedForMigration
 * @apiDescription Unlock a repository that was locked for migration. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} org  
 * @apiParam {String} id  
 * @apiParam {String} repo_name  
 * @apiExample {js} ex:
github.migrations.unlockRepoLockedForMigration({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/import updateImport
 * @apiVersion 7.3.2
 * @apiName updateImport
 * @apiDescription Update existing import. (In preview period. See README.)
 * @apiGroup migrations
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.migrations.updateImport({ ... });
 */

/**
 * @api {get} /emojis getEmojis
 * @apiVersion 7.3.2
 * @apiName getEmojis
 * @apiDescription Lists all the emojis available to use on GitHub.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getEmojis({ ... });
 */

/**
 * @api {get} /gitignore/templates/:name getGitignoreTemplate
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName getGitignoreTemplates
 * @apiDescription Lists available gitignore templates
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getGitignoreTemplates({ ... });
 */

/**
 * @api {get} /licenses/:license getLicense
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName getLicenses
 * @apiDescription List all licenses. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getLicenses({ ... });
 */

/**
 * @api {get} /meta getMeta
 * @apiVersion 7.3.2
 * @apiName getMeta
 * @apiDescription This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getMeta({ ... });
 */

/**
 * @api {get} /rate_limit getRateLimit
 * @apiVersion 7.3.2
 * @apiName getRateLimit
 * @apiDescription Get your current rate limit status
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.getRateLimit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/license getRepoLicense
 * @apiVersion 7.3.2
 * @apiName getRepoLicense
 * @apiDescription Get the contents of a repository's license. (In preview period. See README.)
 * @apiGroup misc
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.misc.getRepoLicense({ ... });
 */

/**
 * @api {post} /markdown renderMarkdown
 * @apiVersion 7.3.2
 * @apiName renderMarkdown
 * @apiDescription Render an arbitrary Markdown document
 * @apiGroup misc
 *
 * @apiParam {String} text  The Markdown text to render
 * @apiParam {String=markdown,gfm} [mode=markdown]  The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly.
 * @apiParam {String} [context]  The repository context. Only taken into account when rendering as `gfm`
 * @apiExample {js} ex:
github.misc.renderMarkdown({ ... });
 */

/**
 * @api {post} /markdown/raw renderMarkdownRaw
 * @apiVersion 7.3.2
 * @apiName renderMarkdownRaw
 * @apiDescription Render a Markdown document in raw mode
 * @apiGroup misc
 *
 * @apiParam {String} data  Raw data to send as the body of the request
 * @apiExample {js} ex:
github.misc.renderMarkdownRaw({ ... });
 */

/**
 * @api {put} /orgs/:org/memberships/:username addOrgMembership
 * @apiVersion 7.3.2
 * @apiName addOrgMembership
 * @apiDescription Add or update organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiParam {String=admin,member} role  The role to give the user in the organization.
 * @apiExample {js} ex:
github.orgs.addOrgMembership({ ... });
 */

/**
 * @api {put} /teams/:id/memberships/:username addTeamMembership
 * @apiVersion 7.3.2
 * @apiName addTeamMembership
 * @apiDescription Add team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} username  
 * @apiParam {String=member,maintainer} [role=member]  The role that this user should have in the team.
 * @apiExample {js} ex:
github.orgs.addTeamMembership({ ... });
 */

/**
 * @api {put} /teams/:id/repos/:org/:repo addTeamRepo
 * @apiVersion 7.3.2
 * @apiName addTeamRepo
 * @apiDescription Add team repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} org  
 * @apiParam {String} repo  
 * @apiParam {String=pull,push,admin} [permission]  `pull` - team members can pull, but not push or administer this repository, `push` - team members can pull and push, but not administer this repository, `admin` - team members can pull, push and administer this repository.
 * @apiExample {js} ex:
github.orgs.addTeamRepo({ ... });
 */

/**
 * @api {get} /orgs/:org/members/:username checkMembership
 * @apiVersion 7.3.2
 * @apiName checkMembership
 * @apiDescription Check membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.checkMembership({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members/:username checkPublicMembership
 * @apiVersion 7.3.2
 * @apiName checkPublicMembership
 * @apiDescription Check public membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.checkPublicMembership({ ... });
 */

/**
 * @api {get} /teams/:id/repos/:owner/:repo checkTeamRepo
 * @apiVersion 7.3.2
 * @apiName checkTeamRepo
 * @apiDescription Check if a team manages a repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.checkTeamRepo({ ... });
 */

/**
 * @api {delete} /orgs/:org/public_members/:username concealMembership
 * @apiVersion 7.3.2
 * @apiName concealMembership
 * @apiDescription Conceal a user's membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.concealMembership({ ... });
 */

/**
 * @api {put} /orgs/:org/outside_collaborator/:username convertMemberToOutsideCollaborator
 * @apiVersion 7.3.2
 * @apiName convertMemberToOutsideCollaborator
 * @apiDescription Convert member to outside collaborator.
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.convertMemberToOutsideCollaborator({ ... });
 */

/**
 * @api {post} /orgs/:org/hooks createHook
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName createTeam
 * @apiDescription Create team
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} name  
 * @apiParam {String} [description]  The description of the team.
 * @apiParam {Array} [maintainers]  The logins of organization members to add as maintainers of the team.
 * @apiParam {Array} [repo_names]  The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
 * @apiParam {String=secret,closed} [privacy=secret]  The level of privacy this team should have.
 * @apiExample {js} ex:
github.orgs.createTeam({ ... });
 */

/**
 * @api {delete} /orgs/:org/hooks/:id deleteHook
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName deleteTeam
 * @apiDescription Delete team
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.orgs.deleteTeam({ ... });
 */

/**
 * @api {delete} /teams/:id/repos/:owner/:repo deleteTeamRepo
 * @apiVersion 7.3.2
 * @apiName deleteTeamRepo
 * @apiDescription Remove team repository
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.orgs.deleteTeamRepo({ ... });
 */

/**
 * @api {patch} /orgs/:org/hooks/:id editHook
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName editTeam
 * @apiDescription Edit team
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} [description]  The description of the team.
 * @apiParam {String=secret,closed} [privacy=secret]  The level of privacy this team should have.
 * @apiExample {js} ex:
github.orgs.editTeam({ ... });
 */

/**
 * @api {get} /orgs/:org get
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @api {get} /users/:username/orgs getForUser
 * @apiVersion 7.3.2
 * @apiName getForUser
 * @apiDescription List public organization memberships for the specified user.
 * @apiGroup orgs
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getForUser({ ... });
 */

/**
 * @api {get} /orgs/:org/hooks/:id getHook
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName getMembers
 * @apiDescription Members list
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String=all,2fa_disabled} [filter=all]  Filter members returned in the list.
 * @apiParam {String=all,admin,member} [role=all]  Filter members returned by their role.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getMembers({ ... });
 */

/**
 * @api {get} /orgs/:org/memberships/:username getOrgMembership
 * @apiVersion 7.3.2
 * @apiName getOrgMembership
 * @apiDescription Get organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.getOrgMembership({ ... });
 */

/**
 * @api {get} /orgs/:org/outside_collaborators getOutsideCollaborators
 * @apiVersion 7.3.2
 * @apiName getOutsideCollaborators
 * @apiDescription List all users who are outside collaborators of an organization.
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getOutsideCollaborators({ ... });
 */

/**
 * @api {get} /orgs/:org/invitations getPendingOrgInvites
 * @apiVersion 7.3.2
 * @apiName getPendingOrgInvites
 * @apiDescription List pending organization invites.
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiExample {js} ex:
github.orgs.getPendingOrgInvites({ ... });
 */

/**
 * @api {get} /teams/:id/invitations getPendingTeamInvites
 * @apiVersion 7.3.2
 * @apiName getPendingTeamInvites
 * @apiDescription List pending team invitations.
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getPendingTeamInvites({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members getPublicMembers
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName getTeamMembers
 * @apiDescription List team members
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String=member,maintainer,all} [role=all]  Filters members returned by their role in the team.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getTeamMembers({ ... });
 */

/**
 * @api {get} /teams/:id/memberships/:username getTeamMembership
 * @apiVersion 7.3.2
 * @apiName getTeamMembership
 * @apiDescription Get team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.getTeamMembership({ ... });
 */

/**
 * @api {get} /teams/:id/repos getTeamRepos
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @api {put} /orgs/:org/public_members/:username publicizeMembership
 * @apiVersion 7.3.2
 * @apiName publicizeMembership
 * @apiDescription Publicize a user's membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.publicizeMembership({ ... });
 */

/**
 * @api {delete} /orgs/:org/members/:username removeMember
 * @apiVersion 7.3.2
 * @apiName removeMember
 * @apiDescription Remove a member
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.removeMember({ ... });
 */

/**
 * @api {delete} /orgs/:org/memberships/:username removeOrgMembership
 * @apiVersion 7.3.2
 * @apiName removeOrgMembership
 * @apiDescription Remove organization membership
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.removeOrgMembership({ ... });
 */

/**
 * @api {delete} /orgs/:org/outside_collaborator/:username removeOutsideCollaborator
 * @apiVersion 7.3.2
 * @apiName removeOutsideCollaborator
 * @apiDescription Remove outside collaborator.
 * @apiGroup orgs
 *
 * @apiParam {String} org  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.removeOutsideCollaborator({ ... });
 */

/**
 * @api {delete} /teams/:id/memberships/:username removeTeamMembership
 * @apiVersion 7.3.2
 * @apiName removeTeamMembership
 * @apiDescription Remove team membership
 * @apiGroup orgs
 *
 * @apiParam {String} id  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.orgs.removeTeamMembership({ ... });
 */

/**
 * @api {patch} /orgs/:org update
 * @apiVersion 7.3.2
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
 * @apiParam {String=read,write,admin,none} [default_repository_permission=read]  Default permission level members have for organization repositories.
 * @apiParam {Boolean} [members_can_create_repositories=true]  Toggles ability of non-admin organization members to create repositories.
 * @apiExample {js} ex:
github.orgs.update({ ... });
 */

/**
 * @api {post} /orgs/:org/projects createOrgProject
 * @apiVersion 7.3.2
 * @apiName createOrgProject
 * @apiDescription Create an organization project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} org  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.projects.createOrgProject({ ... });
 */

/**
 * @api {post} /projects/columns/:column_id/cards createProjectCard
 * @apiVersion 7.3.2
 * @apiName createProjectCard
 * @apiDescription Create a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} column_id  
 * @apiParam {String} [note]  The note of the card.
 * @apiParam {String} [content_id]  The id of the Issue or Pull Request to associate with this card.
 * @apiParam {String} [content_type]  The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'.
 * @apiExample {js} ex:
github.projects.createProjectCard({ ... });
 */

/**
 * @api {post} /projects/:project_id/columns createProjectColumn
 * @apiVersion 7.3.2
 * @apiName createProjectColumn
 * @apiDescription Create a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} project_id  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.projects.createProjectColumn({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/projects createRepoProject
 * @apiVersion 7.3.2
 * @apiName createRepoProject
 * @apiDescription Create a repository project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.projects.createRepoProject({ ... });
 */

/**
 * @api {delete} /projects/:id deleteProject
 * @apiVersion 7.3.2
 * @apiName deleteProject
 * @apiDescription Delete a project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.deleteProject({ ... });
 */

/**
 * @api {delete} /projects/columns/cards/:id deleteProjectCard
 * @apiVersion 7.3.2
 * @apiName deleteProjectCard
 * @apiDescription Delete a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.deleteProjectCard({ ... });
 */

/**
 * @api {delete} /projects/columns/:id deleteProjectColumn
 * @apiVersion 7.3.2
 * @apiName deleteProjectColumn
 * @apiDescription Delete a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.deleteProjectColumn({ ... });
 */

/**
 * @api {get} /orgs/:org/projects getOrgProjects
 * @apiVersion 7.3.2
 * @apiName getOrgProjects
 * @apiDescription List organization projects. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} org  
 * @apiExample {js} ex:
github.projects.getOrgProjects({ ... });
 */

/**
 * @api {get} /projects/:id getProject
 * @apiVersion 7.3.2
 * @apiName getProject
 * @apiDescription Get a project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.getProject({ ... });
 */

/**
 * @api {get} /projects/columns/cards/:id getProjectCard
 * @apiVersion 7.3.2
 * @apiName getProjectCard
 * @apiDescription Get project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.getProjectCard({ ... });
 */

/**
 * @api {get} /projects/columns/:column_id/cards getProjectCards
 * @apiVersion 7.3.2
 * @apiName getProjectCards
 * @apiDescription List project cards. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} column_id  
 * @apiExample {js} ex:
github.projects.getProjectCards({ ... });
 */

/**
 * @api {get} /projects/columns/:id getProjectColumn
 * @apiVersion 7.3.2
 * @apiName getProjectColumn
 * @apiDescription Get a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.projects.getProjectColumn({ ... });
 */

/**
 * @api {get} /projects/:project_id/columns getProjectColumns
 * @apiVersion 7.3.2
 * @apiName getProjectColumns
 * @apiDescription List project columns. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} project_id  
 * @apiExample {js} ex:
github.projects.getProjectColumns({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/projects getRepoProjects
 * @apiVersion 7.3.2
 * @apiName getRepoProjects
 * @apiDescription List repository projects. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.projects.getRepoProjects({ ... });
 */

/**
 * @api {post} /projects/columns/cards/:id/moves moveProjectCard
 * @apiVersion 7.3.2
 * @apiName moveProjectCard
 * @apiDescription Move a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of top, bottom, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiParam {String} [column_id]  The id value of a column in the same project.
 * @apiExample {js} ex:
github.projects.moveProjectCard({ ... });
 */

/**
 * @api {post} /projects/columns/:id/moves moveProjectColumn
 * @apiVersion 7.3.2
 * @apiName moveProjectColumn
 * @apiDescription Move a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} position  Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.
 * @apiExample {js} ex:
github.projects.moveProjectColumn({ ... });
 */

/**
 * @api {patch} /projects/:id updateProject
 * @apiVersion 7.3.2
 * @apiName updateProject
 * @apiDescription Update a project. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.projects.updateProject({ ... });
 */

/**
 * @api {patch} /projects/columns/cards/:id updateProjectCard
 * @apiVersion 7.3.2
 * @apiName updateProjectCard
 * @apiDescription Update a project card. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} [note]  The note of the card.
 * @apiExample {js} ex:
github.projects.updateProjectCard({ ... });
 */

/**
 * @api {patch} /projects/columns/:id updateProjectColumn
 * @apiVersion 7.3.2
 * @apiName updateProjectColumn
 * @apiDescription Update a project column. (In preview period. See README.)
 * @apiGroup projects
 *
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiExample {js} ex:
github.projects.updateProjectColumn({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/merge checkMerged
 * @apiVersion 7.3.2
 * @apiName checkMerged
 * @apiDescription Get if a pull request has been merged
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.checkMerged({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls create
 * @apiVersion 7.3.2
 * @apiName create
 * @apiDescription Create a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  The title of the pull request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiExample {js} ex:
github.pullRequests.create({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/:number/comments createComment
 * @apiVersion 7.3.2
 * @apiName createComment
 * @apiDescription Create a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/pulls/:number/comments createCommentReply
 * @apiVersion 7.3.2
 * @apiName createCommentReply
 * @apiDescription Reply to existing pull request comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} body  
 * @apiParam {Number} in_reply_to  The comment id to reply to.
 * @apiExample {js} ex:
github.pullRequests.createCommentReply({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls createFromIssue
 * @apiVersion 7.3.2
 * @apiName createFromIssue
 * @apiDescription Create a pull request from an existing issue
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} issue  The issue number in this repository to turn into a Pull Request.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiExample {js} ex:
github.pullRequests.createFromIssue({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/:number/reviews createReview
 * @apiVersion 7.3.2
 * @apiName createReview
 * @apiDescription Create a pull request review.
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [body]  The body text of the pull request review.
 * @apiParam {String=APPROVE,REQUEST_CHANGES,COMMENT,PENDING} [event=PENDING]  The event to perform on the review upon submission, can be one of APPROVE, REQUEST_CHANGES, or COMMENT. If left blank, the review will be in the PENDING state.
 * @apiParam {Array} [comments]  An array of comments part of the review.
 * @apiParam {String} [path]  The path to the file being commented on.
 * @apiParam {Number} [position]  The position in the file to be commented on.
 * @apiExample {js} ex:
github.pullRequests.createReview({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/:number/requested_reviewers createReviewRequest
 * @apiVersion 7.3.2
 * @apiName createReviewRequest
 * @apiDescription Create a review request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} [reviewers]  An array of user logins that will be requested.
 * @apiExample {js} ex:
github.pullRequests.createReviewRequest({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/pulls/comments/:id deleteComment
 * @apiVersion 7.3.2
 * @apiName deleteComment
 * @apiDescription Delete a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.pullRequests.deleteComment({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/pulls/:number/requested_reviewers deleteReviewRequest
 * @apiVersion 7.3.2
 * @apiName deleteReviewRequest
 * @apiDescription Delete a review request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Array} [reviewers]  An array of user logins that will be requested.
 * @apiExample {js} ex:
github.pullRequests.deleteReviewRequest({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/reviews/:id/dismissals dismissReview
 * @apiVersion 7.3.2
 * @apiName dismissReview
 * @apiDescription Dismiss a pull request review.
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} id  
 * @apiParam {String} [message]  The message for the pull request review dismissal.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.dismissReview({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/pulls/comments/:id editComment
 * @apiVersion 7.3.2
 * @apiName editComment
 * @apiDescription Edit a comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.pullRequests.editComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number get
 * @apiVersion 7.3.2
 * @apiName get
 * @apiDescription Get a single pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiExample {js} ex:
github.pullRequests.get({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls getAll
 * @apiVersion 7.3.2
 * @apiName getAll
 * @apiDescription List pull requests
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=open,closed,all} [state=open]  open, closed, or all
 * @apiParam {String} [head]  Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format.
 * @apiParam {String} [base]  Filter pulls by base branch name. Example: gh-pages.
 * @apiParam {String=created,updated,popularity,long-running} [sort=created]  Possible values are: `created`, `updated`, `popularity`, `long-running`, Default: `created`
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getAll({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments/:id getComment
 * @apiVersion 7.3.2
 * @apiName getComment
 * @apiDescription Get a single comment
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.pullRequests.getComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/comments getComments
 * @apiVersion 7.3.2
 * @apiName getComments
 * @apiDescription List comments on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments getCommentsForRepo
 * @apiVersion 7.3.2
 * @apiName getCommentsForRepo
 * @apiDescription List comments in a repository
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=created,updated} [sort=created]  Possible values are: `created`, `updated`, Default: `created`
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Date} [since]  Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getCommentsForRepo({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/commits getCommits
 * @apiVersion 7.3.2
 * @apiName getCommits
 * @apiDescription List commits on a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getCommits({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/files getFiles
 * @apiVersion 7.3.2
 * @apiName getFiles
 * @apiDescription List pull requests files
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getFiles({ ... });
 */

/**
 * @api {get} /repos/:owner/pulls/:number/reviews/:id getReview
 * @apiVersion 7.3.2
 * @apiName getReview
 * @apiDescription Get a single pull request review.
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {Number} number  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.pullRequests.getReview({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/requested_reviewers getReviewRequests
 * @apiVersion 7.3.2
 * @apiName getReviewRequests
 * @apiDescription List review requests
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getReviewRequests({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/:number/reviews getReviews
 * @apiVersion 7.3.2
 * @apiName getReviews
 * @apiDescription List reviews on a pull request.
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getReviews({ ... });
 */

/**
 * @api {get} /repos/:owner/pulls/:number/reviews/:id/comments getReviewsComments
 * @apiVersion 7.3.2
 * @apiName getReviewsComments
 * @apiDescription Get a single pull request reviews comments.
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {Number} number  
 * @apiParam {String} id  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getReviewsComments({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/pulls/:number/merge merge
 * @apiVersion 7.3.2
 * @apiName merge
 * @apiDescription Merge a pull request (Merge Button)
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [commit_title]  Title for the automatic commit message. (In preview period. See README.)
 * @apiParam {String} [commit_message]  Extra detail to append to automatic commit message.
 * @apiParam {String} [sha]  SHA that pull request head must match to allow merge
 * @apiParam {String=merge,squash,rebase} [merge_method=merge]  Merge method to use. Possible values are `merge`, `squash`, or `rebase`. (In preview period. See README.)
 * @apiExample {js} ex:
github.pullRequests.merge({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/:number/reviews/:id/events submitReview
 * @apiVersion 7.3.2
 * @apiName submitReview
 * @apiDescription Submit a pull request review.
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} id  
 * @apiParam {String} [body]  The body text of the pull request review.
 * @apiParam {String=APPROVE,REQUEST_CHANGES,COMMENT,PENDING} [event=PENDING]  The event to perform on the review upon submission, can be one of APPROVE, REQUEST_CHANGES, or COMMENT. If left blank, the review will be in the PENDING state.
 * @apiExample {js} ex:
github.pullRequests.submitReview({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/pulls/:number update
 * @apiVersion 7.3.2
 * @apiName update
 * @apiDescription Update a pull request
 * @apiGroup pullRequests
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String} [title]  The title of the pull request.
 * @apiParam {String} [body]  The contents of the pull request.
 * @apiParam {String=open,closed,all} [state=open]  
 * @apiParam {String} [base]  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiExample {js} ex:
github.pullRequests.update({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/comments/:id/reactions createForCommitComment
 * @apiVersion 7.3.2
 * @apiName createForCommitComment
 * @apiDescription Create reaction for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForCommitComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/:number/reactions createForIssue
 * @apiVersion 7.3.2
 * @apiName createForIssue
 * @apiDescription Create reaction for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssue({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/issues/comments/:id/reactions createForIssueComment
 * @apiVersion 7.3.2
 * @apiName createForIssueComment
 * @apiDescription Create reaction for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForIssueComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pulls/comments/:id/reactions createForPullRequestReviewComment
 * @apiVersion 7.3.2
 * @apiName createForPullRequestReviewComment
 * @apiDescription Create reaction for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} content  The reaction type.
 * @apiExample {js} ex:
github.reactions.createForPullRequestReviewComment({ ... });
 */

/**
 * @api {delete} /reactions/:id delete
 * @apiVersion 7.3.2
 * @apiName delete
 * @apiDescription Delete a reaction. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.reactions.delete({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments/:id/reactions getForCommitComment
 * @apiVersion 7.3.2
 * @apiName getForCommitComment
 * @apiDescription List reactions for a commit comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForCommitComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/:number/reactions getForIssue
 * @apiVersion 7.3.2
 * @apiName getForIssue
 * @apiDescription List reactions for an issue. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} number  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssue({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/issues/comments/:id/reactions getForIssueComment
 * @apiVersion 7.3.2
 * @apiName getForIssueComment
 * @apiDescription List reactions for an issue comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForIssueComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pulls/comments/:id/reactions getForPullRequestReviewComment
 * @apiVersion 7.3.2
 * @apiName getForPullRequestReviewComment
 * @apiDescription List reactions for a pull request review comment. (In preview period. See README.)
 * @apiGroup reactions
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String=+1,-1,laugh,confused,heart,hooray} [content]  Indicates which type of reaction to return.
 * @apiExample {js} ex:
github.reactions.getForPullRequestReviewComment({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/collaborators/:username addCollaborator
 * @apiVersion 7.3.2
 * @apiName addCollaborator
 * @apiDescription Add user as a collaborator
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} username  
 * @apiParam {String=pull,push,admin} [permission=push]  `pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository.
 * @apiExample {js} ex:
github.repos.addCollaborator({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts addProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 7.3.2
 * @apiName addProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Add required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} ex:
github.repos.addProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams addProtectedBranchTeamRestrictions
 * @apiVersion 7.3.2
 * @apiName addProtectedBranchTeamRestrictions
 * @apiDescription Add team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.addProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/branches/:branch/protection/restrictions/users addProtectedBranchUserRestrictions
 * @apiVersion 7.3.2
 * @apiName addProtectedBranchUserRestrictions
 * @apiDescription Add user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.addProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/collaborators/:username checkCollaborator
 * @apiVersion 7.3.2
 * @apiName checkCollaborator
 * @apiDescription Check if user is a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.repos.checkCollaborator({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/compare/:base...:head compareCommits
 * @apiVersion 7.3.2
 * @apiName compareCommits
 * @apiDescription Compare two commits.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiExample {js} ex:
github.repos.compareCommits({ ... });
 */

/**
 * @api {post} /user/repos create
 * @apiVersion 7.3.2
 * @apiName create
 * @apiDescription Create a new repository for the authenticated user.
 * @apiGroup repos
 *
 * @apiParam {String} name  
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {String} [description]  
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Number} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
 * @apiExample {js} ex:
github.repos.create({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/commits/:sha/comments createCommitComment
 * @apiVersion 7.3.2
 * @apiName createCommitComment
 * @apiDescription Create a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/deployments createDeployment
 * @apiVersion 7.3.2
 * @apiName createDeployment
 * @apiDescription Create a deployment. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/deployments/:id/statuses createDeploymentStatus
 * @apiVersion 7.3.2
 * @apiName createDeploymentStatus
 * @apiDescription Create a deployment status. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {put} /repos/:owner/:repo/contents/:path createFile
 * @apiVersion 7.3.2
 * @apiName createFile
 * @apiDescription Create a new file in the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 7.3.2
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
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {Number} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
 * @apiParam {Boolean} [auto_init=false]  True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {String} [license_template]  Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.createForOrg({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks createHook
 * @apiVersion 7.3.2
 * @apiName createHook
 * @apiDescription Create a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} name  
 * @apiParam {Json} config  A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {Array} [events=["push"]]  Determines what events the hook is triggered for. Default: `['push']`.
 * @apiParam {Boolean} [active]  Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} ex:
github.repos.createHook({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/keys createKey
 * @apiVersion 7.3.2
 * @apiName createKey
 * @apiDescription Add a new deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} title  
 * @apiParam {String} key  
 * @apiParam {Boolean} [read_only]  If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
 * @apiExample {js} ex:
github.repos.createKey({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases createRelease
 * @apiVersion 7.3.2
 * @apiName createRelease
 * @apiDescription Create a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/statuses/:sha createStatus
 * @apiVersion 7.3.2
 * @apiName createStatus
 * @apiDescription Create a status.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiParam {String=pending,success,error,failure} state  State of the status - can be one of pending, success, error, or failure.
 * @apiParam {String} [target_url]  Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status.
 * @apiParam {String} [description]  Short description of the status.
 * @apiParam {String} [context]  A string label to differentiate this status from the status of other systems.
 * @apiExample {js} ex:
github.repos.createStatus({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo delete
 * @apiVersion 7.3.2
 * @apiName delete
 * @apiDescription Delete a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.delete({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/assets/:id deleteAsset
 * @apiVersion 7.3.2
 * @apiName deleteAsset
 * @apiDescription Delete a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteAsset({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/comments/:id deleteCommitComment
 * @apiVersion 7.3.2
 * @apiName deleteCommitComment
 * @apiDescription Delete a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteCommitComment({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/downloads/:id deleteDownload
 * @apiVersion 7.3.2
 * @apiName deleteDownload
 * @apiDescription Delete a download.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteDownload({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/contents/:path deleteFile
 * @apiVersion 7.3.2
 * @apiName deleteFile
 * @apiDescription Delete a file.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {delete} /repos/:owner/:repo/hooks/:id deleteHook
 * @apiVersion 7.3.2
 * @apiName deleteHook
 * @apiDescription Deleate a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteHook({ ... });
 */

/**
 * @api {delete} /repositories/:repo_id/invitations/:invitation_id deleteInvite
 * @apiVersion 7.3.2
 * @apiName deleteInvite
 * @apiDescription Delete a repository invitation. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo_id  
 * @apiParam {String} invitation_id  
 * @apiExample {js} ex:
github.repos.deleteInvite({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/keys/:id deleteKey
 * @apiVersion 7.3.2
 * @apiName deleteKey
 * @apiDescription Remove a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteKey({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/:id deleteRelease
 * @apiVersion 7.3.2
 * @apiName deleteRelease
 * @apiDescription Delete a release
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.deleteRelease({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo edit
 * @apiVersion 7.3.2
 * @apiName edit
 * @apiDescription Update a repo.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} name  
 * @apiParam {String} repo  
 * @apiParam {String} [description]  
 * @apiParam {String} [homepage]  
 * @apiParam {Boolean} [private=false]  True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [allow_rebase_merge=true]  Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_wiki=true]  True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads=true]  True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {String} [default_branch]  Updates the default branch for this repository.
 * @apiParam {Boolean} [allow_squash_merge=true]  Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [allow_merge_commit=true]  Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
 * @apiParam {Boolean} [has_issues=true]  True to enable issues for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.edit({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/releases/assets/:id editAsset
 * @apiVersion 7.3.2
 * @apiName editAsset
 * @apiDescription Edit a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} name  
 * @apiParam {String} [label]  An alternate short description of the asset. Used in place of the filename.
 * @apiExample {js} ex:
github.repos.editAsset({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/hooks/:id editHook
 * @apiVersion 7.3.2
 * @apiName editHook
 * @apiDescription Edit a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repos/:owner/:repo/releases/:id editRelease
 * @apiVersion 7.3.2
 * @apiName editRelease
 * @apiDescription Edit a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {post} /repos/:owner/:repo/forks fork
 * @apiVersion 7.3.2
 * @apiName fork
 * @apiDescription Create a fork.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [organization]  Optional parameter to specify the organization name if forking into an organization.
 * @apiExample {js} ex:
github.repos.fork({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo get
 * @apiVersion 7.3.2
 * @apiName get
 * @apiDescription Get a repo for a user.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.get({ ... });
 */

/**
 * @api {get} /user/repos getAll
 * @apiVersion 7.3.2
 * @apiName getAll
 * @apiDescription List your repositories
 * @apiGroup repos
 *
 * @apiParam {String=all,public,private} [visibility=all]  Can be one of `all`, `public`, or `private`. Default: `all`.
 * @apiParam {String} [affiliation=owner,collaborator,organization_member]  Comma-separated list of values. Can include: `owner`, `collaborator`, `organization_member`.
 * @apiParam {String=all,owner,public,private,member} [type=all]  Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`.
 * @apiParam {String=created,updated,pushed,full_name} [sort=full_name]  Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getAll({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments getAllCommitComments
 * @apiVersion 7.3.2
 * @apiName getAllCommitComments
 * @apiDescription List commit comments for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getAllCommitComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/:archive_format/:ref getArchiveLink
 * @apiVersion 7.3.2
 * @apiName getArchiveLink
 * @apiDescription Get archive link.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=tarball,zipball} archive_format=tarball  Either tarball or zipball, Deafult: tarball.
 * @apiParam {String} [ref]  A valid Git reference. Default: the repository’s default branch (usually master).
 * @apiExample {js} ex:
github.repos.getArchiveLink({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/assets/:id getAsset
 * @apiVersion 7.3.2
 * @apiName getAsset
 * @apiDescription Get a single release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getAsset({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id/assets getAssets
 * @apiVersion 7.3.2
 * @apiName getAssets
 * @apiDescription List assets for a release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getAssets({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch getBranch
 * @apiVersion 7.3.2
 * @apiName getBranch
 * @apiDescription Get branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranch({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection getBranchProtection
 * @apiVersion 7.3.2
 * @apiName getBranchProtection
 * @apiDescription Get branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranchProtection({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches getBranches
 * @apiVersion 7.3.2
 * @apiName getBranches
 * @apiDescription List branches. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [protected]  Set to true to only return protected branches
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranches({ ... });
 */

/**
 * @api {get} /repositories/:id getById
 * @apiVersion 7.3.2
 * @apiName getById
 * @apiDescription Get a single repo by id.
 * @apiGroup repos
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getById({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/clones getClones
 * @apiVersion 7.3.2
 * @apiName getClones
 * @apiDescription Get the total number of clones and breakdown per day or week for the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getClones({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/collaborators getCollaborators
 * @apiVersion 7.3.2
 * @apiName getCollaborators
 * @apiDescription List collaborators
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=outside,all} [affiliation=all]  Filter collaborators returned by their affiliation.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCollaborators({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref/status getCombinedStatus
 * @apiVersion 7.3.2
 * @apiName getCombinedStatus
 * @apiDescription Get the combined status for a specific ref.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  Ref to fetch the status for. It can be a SHA, a branch name, or a tag name.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCombinedStatus({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:sha getCommit
 * @apiVersion 7.3.2
 * @apiName getCommit
 * @apiDescription Get a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} sha  
 * @apiExample {js} ex:
github.repos.getCommit({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/comments/:id getCommitComment
 * @apiVersion 7.3.2
 * @apiName getCommitComment
 * @apiDescription Get a single commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getCommitComment({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref/comments getCommitComments
 * @apiVersion 7.3.2
 * @apiName getCommitComments
 * @apiDescription List comments for a single commit.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCommitComments({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits getCommits
 * @apiVersion 7.3.2
 * @apiName getCommits
 * @apiDescription List commits on a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/contents/:path getContent
 * @apiVersion 7.3.2
 * @apiName getContent
 * @apiDescription Get the contents of a file or directory in a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} path  The content path.
 * @apiParam {String} [ref]  The String name of the Commit/Branch/Tag. Defaults to master.
 * @apiExample {js} ex:
github.repos.getContent({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/contributors getContributors
 * @apiVersion 7.3.2
 * @apiName getContributors
 * @apiDescription Get contributors for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Boolean} [anon]  Set to 1 or true to include anonymous contributors in results.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getContributors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/deployments/:id/statuses getDeploymentStatuses
 * @apiVersion 7.3.2
 * @apiName getDeploymentStatuses
 * @apiDescription List deployment statuses. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDeploymentStatuses({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/deployments getDeployments
 * @apiVersion 7.3.2
 * @apiName getDeployments
 * @apiDescription List deployments. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {get} /repos/:owner/:repo/downloads/:id getDownload
 * @apiVersion 7.3.2
 * @apiName getDownload
 * @apiDescription Get a single download.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getDownload({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/downloads getDownloads
 * @apiVersion 7.3.2
 * @apiName getDownloads
 * @apiDescription List downloads for repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getDownloads({ ... });
 */

/**
 * @api {get} /orgs/:org/repos getForOrg
 * @apiVersion 7.3.2
 * @apiName getForOrg
 * @apiDescription List repositories for the specified org.
 * @apiGroup repos
 *
 * @apiParam {String} org  
 * @apiParam {String=all,public,private,forks,sources,member} [type=all]  Possible values: `all`, `public`, `private`, `forks`, `sources`, `member`. Default: `all`.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForOrg({ ... });
 */

/**
 * @api {get} /users/:username/repos getForUser
 * @apiVersion 7.3.2
 * @apiName getForUser
 * @apiDescription List public repositories for the specified user.
 * @apiGroup repos
 *
 * @apiParam {String} username  
 * @apiParam {String=all,owner,member} [type=owner]  Possible values: `all`, `owner`, `member`. Default: `owner`.
 * @apiParam {String=created,updated,pushed,full_name} [sort=full_name]  Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {String=asc,desc} [direction=desc]  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForUser({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/forks getForks
 * @apiVersion 7.3.2
 * @apiName getForks
 * @apiDescription List forks.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String=newest,oldest,stargazers} [sort=newest]  Possible values: `newest`, `oldest`, `stargazers`, default: `newest`.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForks({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/hooks/:id getHook
 * @apiVersion 7.3.2
 * @apiName getHook
 * @apiDescription Get single hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getHook({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/hooks getHooks
 * @apiVersion 7.3.2
 * @apiName getHooks
 * @apiDescription List hooks.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getHooks({ ... });
 */

/**
 * @api {get} /repositories/:repo_id/invitations getInvites
 * @apiVersion 7.3.2
 * @apiName getInvites
 * @apiDescription List invitations for a repository. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo_id  
 * @apiExample {js} ex:
github.repos.getInvites({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/keys/:id getKey
 * @apiVersion 7.3.2
 * @apiName getKey
 * @apiDescription Get a deploy key.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getKey({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/keys getKeys
 * @apiVersion 7.3.2
 * @apiName getKeys
 * @apiDescription List deploy keys.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getKeys({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/languages getLanguages
 * @apiVersion 7.3.2
 * @apiName getLanguages
 * @apiDescription Get languages for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getLanguages({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds/latest getLatestPagesBuild
 * @apiVersion 7.3.2
 * @apiName getLatestPagesBuild
 * @apiDescription Get latest Pages build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/latest getLatestRelease
 * @apiVersion 7.3.2
 * @apiName getLatestRelease
 * @apiDescription Get the latest release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getLatestRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages getPages
 * @apiVersion 7.3.2
 * @apiName getPages
 * @apiDescription Get information about a Pages site. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPages({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds/:id getPagesBuild
 * @apiVersion 7.3.2
 * @apiName getPagesBuild
 * @apiDescription Get a specific Pages build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getPagesBuild({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/pages/builds getPagesBuilds
 * @apiVersion 7.3.2
 * @apiName getPagesBuilds
 * @apiDescription List Pages builds. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPagesBuilds({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/popular/paths getPaths
 * @apiVersion 7.3.2
 * @apiName getPaths
 * @apiDescription Get the top 10 popular contents over the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getPaths({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews getProtectedBranchPullRequestReviewEnforcement
 * @apiVersion 7.3.2
 * @apiName getProtectedBranchPullRequestReviewEnforcement
 * @apiDescription Get pull request review enforcement of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchPullRequestReviewEnforcement({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/required_status_checks getProtectedBranchRequiredStatusChecks
 * @apiVersion 7.3.2
 * @apiName getProtectedBranchRequiredStatusChecks
 * @apiDescription Get required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts getProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 7.3.2
 * @apiName getProtectedBranchRequiredStatusChecksContexts
 * @apiDescription List required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions getProtectedBranchRestrictions
 * @apiVersion 7.3.2
 * @apiName getProtectedBranchRestrictions
 * @apiDescription Get restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams getProtectedBranchTeamRestrictions
 * @apiVersion 7.3.2
 * @apiName getProtectedBranchTeamRestrictions
 * @apiDescription List team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/branches/:branch/protection/restrictions/users getProtectedBranchUserRestrictions
 * @apiVersion 7.3.2
 * @apiName getProtectedBranchUserRestrictions
 * @apiDescription List user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {get} /repositories getPublic
 * @apiVersion 7.3.2
 * @apiName getPublic
 * @apiDescription List all public repositories
 * @apiGroup repos
 *
 * @apiParam {String} [since]  The integer ID of the last Repository that you've seen.
 * @apiExample {js} ex:
github.repos.getPublic({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/readme getReadme
 * @apiVersion 7.3.2
 * @apiName getReadme
 * @apiDescription Get the README for the given repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} [ref]  The name of the commit/branch/tag. Default: the repository’s default branch (usually master)
 * @apiExample {js} ex:
github.repos.getReadme({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/popular/referrers getReferrers
 * @apiVersion 7.3.2
 * @apiName getReferrers
 * @apiDescription Get the top 10 referrers over the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReferrers({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id getRelease
 * @apiVersion 7.3.2
 * @apiName getRelease
 * @apiDescription Get a single release.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.getRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/tags/:tag getReleaseByTag
 * @apiVersion 7.3.2
 * @apiName getReleaseByTag
 * @apiDescription Get a release by tag name.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} tag  String of the tag
 * @apiExample {js} ex:
github.repos.getReleaseByTag({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases getReleases
 * @apiVersion 7.3.2
 * @apiName getReleases
 * @apiDescription List releases for a repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getReleases({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref getShaOfCommitRef
 * @apiVersion 7.3.2
 * @apiName getShaOfCommitRef
 * @apiDescription Get the SHA-1 of a commit reference.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.repos.getShaOfCommitRef({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/code_frequency getStatsCodeFrequency
 * @apiVersion 7.3.2
 * @apiName getStatsCodeFrequency
 * @apiDescription Get the number of additions and deletions per week.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCodeFrequency({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/commit_activity getStatsCommitActivity
 * @apiVersion 7.3.2
 * @apiName getStatsCommitActivity
 * @apiDescription Get the last year of commit activity data.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsCommitActivity({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/contributors getStatsContributors
 * @apiVersion 7.3.2
 * @apiName getStatsContributors
 * @apiDescription Get contributors list with additions, deletions, and commit counts.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsContributors({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/participation getStatsParticipation
 * @apiVersion 7.3.2
 * @apiName getStatsParticipation
 * @apiDescription Get the weekly commit count for the repository owner and everyone else.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsParticipation({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/stats/punch_card getStatsPunchCard
 * @apiVersion 7.3.2
 * @apiName getStatsPunchCard
 * @apiDescription Get the number of commits per hour in each day.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.getStatsPunchCard({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/commits/:ref/statuses getStatuses
 * @apiVersion 7.3.2
 * @apiName getStatuses
 * @apiDescription List statuses for a specfic ref.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} ref  Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getStatuses({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/tags getTags
 * @apiVersion 7.3.2
 * @apiName getTags
 * @apiDescription Get tags for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTags({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/teams getTeams
 * @apiVersion 7.3.2
 * @apiName getTeams
 * @apiDescription Get teams for the specified repository.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTeams({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/traffic/views getViews
 * @apiVersion 7.3.2
 * @apiName getViews
 * @apiDescription Get the total number of views and breakdown per day or week for the last 14 days.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getViews({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/merges merge
 * @apiVersion 7.3.2
 * @apiName merge
 * @apiDescription Perform a merge.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} base  The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head  The branch (or git ref) where your changes are implemented.
 * @apiParam {String} [commit_message]  Commit message to use for the merge commit. If omitted, a default message will be used.
 * @apiExample {js} ex:
github.repos.merge({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks/:id/pings pingHook
 * @apiVersion 7.3.2
 * @apiName pingHook
 * @apiDescription Ping a hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.pingHook({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection removeBranchProtection
 * @apiVersion 7.3.2
 * @apiName removeBranchProtection
 * @apiDescription Remove branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeBranchProtection({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/collaborators/:username removeCollaborator
 * @apiVersion 7.3.2
 * @apiName removeCollaborator
 * @apiDescription Remove user as a collaborator.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.repos.removeCollaborator({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews removeProtectedBranchPullRequestReviewEnforcement
 * @apiVersion 7.3.2
 * @apiName removeProtectedBranchPullRequestReviewEnforcement
 * @apiDescription Remove pull request review enforcement of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiExample {js} ex:
github.repos.removeProtectedBranchPullRequestReviewEnforcement({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/required_status_checks removeProtectedBranchRequiredStatusChecks
 * @apiVersion 7.3.2
 * @apiName removeProtectedBranchRequiredStatusChecks
 * @apiDescription Remove required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts removeProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 7.3.2
 * @apiName removeProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Remove required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions removeProtectedBranchRestrictions
 * @apiVersion 7.3.2
 * @apiName removeProtectedBranchRestrictions
 * @apiDescription Remove restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiExample {js} ex:
github.repos.removeProtectedBranchRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams removeProtectedBranchTeamRestrictions
 * @apiVersion 7.3.2
 * @apiName removeProtectedBranchTeamRestrictions
 * @apiDescription Remove team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.removeProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/branches/:branch/protection/restrictions/users removeProtectedBranchUserRestrictions
 * @apiVersion 7.3.2
 * @apiName removeProtectedBranchUserRestrictions
 * @apiDescription Remove user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.removeProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts replaceProtectedBranchRequiredStatusChecksContexts
 * @apiVersion 7.3.2
 * @apiName replaceProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Replace required status checks contexts of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchRequiredStatusChecksContexts({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams replaceProtectedBranchTeamRestrictions
 * @apiVersion 7.3.2
 * @apiName replaceProtectedBranchTeamRestrictions
 * @apiDescription Replace team restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchTeamRestrictions({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection/restrictions/users replaceProtectedBranchUserRestrictions
 * @apiVersion 7.3.2
 * @apiName replaceProtectedBranchUserRestrictions
 * @apiDescription Replace user restrictions of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Array} body  An array of team slugs (e.g. justice-league).
 * @apiExample {js} ex:
github.repos.replaceProtectedBranchUserRestrictions({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/pages/builds requestPageBuild
 * @apiVersion 7.3.2
 * @apiName requestPageBuild
 * @apiDescription Request a page build. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiExample {js} ex:
github.repos.requestPageBuild({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/collaborators/:username/permission reviewUserPermissionLevel
 * @apiVersion 7.3.2
 * @apiName reviewUserPermissionLevel
 * @apiDescription Review a user's permission level.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.repos.reviewUserPermissionLevel({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/hooks/:id/tests testHook
 * @apiVersion 7.3.2
 * @apiName testHook
 * @apiDescription Test a [push] hook.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.repos.testHook({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/branches/:branch/protection updateBranchProtection
 * @apiVersion 7.3.2
 * @apiName updateBranchProtection
 * @apiDescription Update branch protection. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Json} required_status_checks  JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch. This object can have the value of `null` for disabled.
 * @apiParam {Json} required_pull_request_reviews  JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators.
 * @apiParam {Json} restrictions  JSON object that contains the following keys: `users` - The list of user logins with push access, `teams` - The list of team slugs with push access. This object can have the value of `null` for disabled.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.updateBranchProtection({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/comments/:id updateCommitComment
 * @apiVersion 7.3.2
 * @apiName updateCommitComment
 * @apiDescription Update a commit comment.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} id  
 * @apiParam {String} body  
 * @apiExample {js} ex:
github.repos.updateCommitComment({ ... });
 */

/**
 * @api {put} /repos/:owner/:repo/contents/:path updateFile
 * @apiVersion 7.3.2
 * @apiName updateFile
 * @apiDescription Update a file.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @api {patch} /repositories/:repo_id/invitations/:invitation_id updateInvite
 * @apiVersion 7.3.2
 * @apiName updateInvite
 * @apiDescription Update a repository invitation. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} repo_id  
 * @apiParam {String} invitation_id  
 * @apiParam {String=read,write,admin} [permission]  The permissions that the associated user will have on the repository.
 * @apiExample {js} ex:
github.repos.updateInvite({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews updateProtectedBranchPullRequestReviewEnforcement
 * @apiVersion 7.3.2
 * @apiName updateProtectedBranchPullRequestReviewEnforcement
 * @apiDescription Update pull request review enforcement of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Boolean} [include_admins]  Enforce required status checks for repository administrators.
 * @apiExample {js} ex:
github.repos.updateProtectedBranchPullRequestReviewEnforcement({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/branches/:branch/protection/required_status_checks updateProtectedBranchRequiredStatusChecks
 * @apiVersion 7.3.2
 * @apiName updateProtectedBranchRequiredStatusChecks
 * @apiDescription Update required status checks of protected branch. (In preview period. See README.)
 * @apiGroup repos
 *
 * @apiParam {String} owner  
 * @apiParam {String} repo  
 * @apiParam {String} branch  
 * @apiParam {Boolean} [include_admins]  Enforce required status checks for repository administrators.
 * @apiParam {Boolean} [strict]  Require branches to be up to date before merging.
 * @apiParam {Array} [contexts]  The list of status checks to require in order to merge into this branch.
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.updateProtectedBranchRequiredStatusChecks({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases/:id/assets uploadAsset
 * @apiVersion 7.3.2
 * @apiName uploadAsset
 * @apiDescription Upload a release asset.
 * @apiGroup repos
 *
 * @apiParam {String} owner  
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
 * @apiVersion 7.3.2
 * @apiName code
 * @apiDescription Search code.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String=indexed} [sort]  The sort field. Can only be indexed, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: results are sorted by best match.
 * @apiParam {String=asc,desc} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.code({ ... });
 */

/**
 * @api {get} /search/commits commits
 * @apiVersion 7.3.2
 * @apiName commits
 * @apiDescription Search commits. (In preview period. See README.)
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String=author-date,committer-date} [sort]  The sort field. Can be author-date or committer-date. Default: best match.
 * @apiParam {String=asc,desc} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.commits({ ... });
 */

/**
 * @api {get} /legacy/user/email/:email email
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName issues
 * @apiDescription Search issues.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String=comments,created,updated} [sort]  The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
 * @apiParam {String=asc,desc} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.issues({ ... });
 */

/**
 * @api {get} /search/repositories repos
 * @apiVersion 7.3.2
 * @apiName repos
 * @apiDescription Search repositories.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String=stars,forks,updated} [sort]  stars, forks, or updated
 * @apiParam {String=asc,desc} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.repos({ ... });
 */

/**
 * @api {get} /search/users users
 * @apiVersion 7.3.2
 * @apiName users
 * @apiDescription Search users.
 * @apiGroup search
 *
 * @apiParam {String} q  Search Term
 * @apiParam {String=followers,repositories,joined} [sort]  The sort field. Can be followers, repositories, or joined. Default: results are sorted by best match.
 * @apiParam {String=asc,desc} [order=desc]  asc or desc
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.users({ ... });
 */

/**
 * @api {patch} /user/repository_invitations/:invitation_id acceptRepoInvite
 * @apiVersion 7.3.2
 * @apiName acceptRepoInvite
 * @apiDescription Accept a repository invitation. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {String} invitation_id  
 * @apiExample {js} ex:
github.users.acceptRepoInvite({ ... });
 */

/**
 * @api {post} /user/emails addEmails
 * @apiVersion 7.3.2
 * @apiName addEmails
 * @apiDescription Add email address(es)
 * @apiGroup users
 *
 * @apiParam {Array} body  You can post a single email address or an array of addresses.
 * @apiExample {js} ex:
github.users.addEmails({ ... });
 */

/**
 * @api {get} /user/following/:username checkFollowing
 * @apiVersion 7.3.2
 * @apiName checkFollowing
 * @apiDescription Check if you are following a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.checkFollowing({ ... });
 */

/**
 * @api {get} /users/:username/following/:target_user checkIfOneFollowersOther
 * @apiVersion 7.3.2
 * @apiName checkIfOneFollowersOther
 * @apiDescription Check if one user follows another
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {String} target_user  
 * @apiExample {js} ex:
github.users.checkIfOneFollowersOther({ ... });
 */

/**
 * @api {post} /user/gpg_keys createGpgKey
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @api {delete} /user/repository_invitations/:invitation_id declineRepoInvite
 * @apiVersion 7.3.2
 * @apiName declineRepoInvite
 * @apiDescription Decline a repository invitation. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiParam {String} invitation_id  
 * @apiExample {js} ex:
github.users.declineRepoInvite({ ... });
 */

/**
 * @api {delete} /user/emails deleteEmails
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName deleteKey
 * @apiDescription Delete a public key
 * @apiGroup users
 *
 * @apiParam {String} id  
 * @apiExample {js} ex:
github.users.deleteKey({ ... });
 */

/**
 * @api {delete} /users/:username/site_admin demote
 * @apiVersion 7.3.2
 * @apiName demote
 * @apiDescription Demote a site administrator to an ordinary user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.demote({ ... });
 */

/**
 * @api {patch} /user/memberships/orgs/:org editOrgMembership
 * @apiVersion 7.3.2
 * @apiName editOrgMembership
 * @apiDescription Edit your organization membership
 * @apiGroup users
 *
 * @apiParam {String} org  
 * @apiParam {String=active} state  The state that the membership should be in. Only "active" will be accepted.
 * @apiExample {js} ex:
github.users.editOrgMembership({ ... });
 */

/**
 * @api {put} /user/following/:username followUser
 * @apiVersion 7.3.2
 * @apiName followUser
 * @apiDescription Follow a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.followUser({ ... });
 */

/**
 * @api {get} /user get
 * @apiVersion 7.3.2
 * @apiName get
 * @apiDescription Get the authenticated user
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.get({ ... });
 */

/**
 * @api {get} /users getAll
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @api {get} /user/followers getFollowers
 * @apiVersion 7.3.2
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
 * @api {get} /users/:username/followers getFollowersForUser
 * @apiVersion 7.3.2
 * @apiName getFollowersForUser
 * @apiDescription List a user's followers
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getFollowersForUser({ ... });
 */

/**
 * @api {get} /user/following getFollowing
 * @apiVersion 7.3.2
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
 * @api {get} /users/:username/following getFollowingForUser
 * @apiVersion 7.3.2
 * @apiName getFollowingForUser
 * @apiDescription List who a user is following
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getFollowingForUser({ ... });
 */

/**
 * @api {get} /users/:username getForUser
 * @apiVersion 7.3.2
 * @apiName getForUser
 * @apiDescription Get a single user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.getForUser({ ... });
 */

/**
 * @api {get} /user/gpg_keys/:id getGpgKey
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
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
 * @api {get} /users/:username/keys getKeysForUser
 * @apiVersion 7.3.2
 * @apiName getKeysForUser
 * @apiDescription List public keys for a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiParam {Number} [page]  Page number of the results to fetch.
 * @apiParam {Number} [per_page=30]  A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.users.getKeysForUser({ ... });
 */

/**
 * @api {get} /user/memberships/orgs/:org getOrgMembership
 * @apiVersion 7.3.2
 * @apiName getOrgMembership
 * @apiDescription Get your organization membership
 * @apiGroup users
 *
 * @apiParam {String} org  
 * @apiExample {js} ex:
github.users.getOrgMembership({ ... });
 */

/**
 * @api {get} /user/memberships/orgs getOrgMemberships
 * @apiVersion 7.3.2
 * @apiName getOrgMemberships
 * @apiDescription List your organization memberships
 * @apiGroup users
 *
 * @apiParam {String=active,pending} [state]  Indicates the state of the memberships to return. Can be either active or pending. If not specified, both active and pending memberships are returned.
 * @apiExample {js} ex:
github.users.getOrgMemberships({ ... });
 */

/**
 * @api {get} /user/orgs getOrgs
 * @apiVersion 7.3.2
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
 * @apiVersion 7.3.2
 * @apiName getRepoInvites
 * @apiDescription List a user's repository invitations. (In preview period. See README.)
 * @apiGroup users
 *
 * @apiExample {js} ex:
github.users.getRepoInvites({ ... });
 */

/**
 * @api {get} /user/teams getTeams
 * @apiVersion 7.3.2
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
 * @api {put} /users/:username/site_admin promote
 * @apiVersion 7.3.2
 * @apiName promote
 * @apiDescription Promote an ordinary user to a site administrator
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.promote({ ... });
 */

/**
 * @api {put} /users/:username/suspended suspend
 * @apiVersion 7.3.2
 * @apiName suspend
 * @apiDescription Suspend a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.suspend({ ... });
 */

/**
 * @api {delete} /user/following/:username unfollowUser
 * @apiVersion 7.3.2
 * @apiName unfollowUser
 * @apiDescription Unfollow a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.unfollowUser({ ... });
 */

/**
 * @api {delete} /users/:username/suspended unsuspend
 * @apiVersion 7.3.2
 * @apiName unsuspend
 * @apiDescription Unsuspend a user
 * @apiGroup users
 *
 * @apiParam {String} username  
 * @apiExample {js} ex:
github.users.unsuspend({ ... });
 */

/**
 * @api {patch} /user update
 * @apiVersion 7.3.2
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

