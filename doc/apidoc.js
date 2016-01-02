/**
 * @api {post} /authorizations create
 * @apiName create
 * @apiDescription undefined
 * @apiGroup authorization
 *
 * @apiParam {Array} [scopes]  Optional A list of scopes that this authorization is in.
 * @apiParam {String} [note]  Optional A note to remind you what the OAuth token is for.
 * @apiParam {String} [note_url]  Optional A URL to remind you what app the OAuth token is for.
 * @apiExample {js} ex:
github.authorization.create({ ... });
 */

/**
 * @api {delete} /authorizations/:id delete
 * @apiName delete
 * @apiDescription undefined
 * @apiGroup authorization
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.authorization.delete({ ... });
 */

/**
 * @api {get} /authorizations/:id get
 * @apiName get
 * @apiDescription undefined
 * @apiGroup authorization
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.authorization.get({ ... });
 */

/**
 * @api {get} /authorizations getAll
 * @apiName getAll
 * @apiDescription undefined
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.authorization.getAll({ ... });
 */

/**
 * @api {patch} /authorizations/:id update
 * @apiName update
 * @apiDescription undefined
 * @apiGroup authorization
 *
 * @apiParam {String} id   
 * @apiParam {Array} [scopes]  Optional A list of scopes that this authorization is in.
 * @apiParam {Array} [add_scopes]  Optional A list of scopes to add to this authorization.
 * @apiParam {Array} [remove_scopes]  Optional A list of scopes to remove from this authorization.
 * @apiParam {String} [note]  Optional A note to remind you what the OAuth token is for.
 * @apiParam {String} [note_url]  Optional A URL to remind you what app the OAuth token is for.
 * @apiExample {js} ex:
github.authorization.update({ ... });
 */

/**
 * @api {get} /events get
 * @apiName get
 * @apiDescription List public events
 * @apiGroup events
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.events.get({ ... });
 */

/**
 * @api {get} /orgs/:org/events getFromOrg
 * @apiName getFromOrg
 * @apiDescription List public events for an organization
 * @apiGroup events
 *
 * @apiParam {String} org   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.events.getFromOrg({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/events getFromRepo
 * @apiName getFromRepo
 * @apiDescription List repository events
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.events.getFromRepo({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/events getFromRepoIssues
 * @apiName getFromRepoIssues
 * @apiDescription List issue events for a repository
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.events.getFromRepoIssues({ ... });
 */

/**
 * @api {get} /networks/:user/:repo/events getFromRepoNetwork
 * @apiName getFromRepoNetwork
 * @apiDescription List public events for a network of repositories
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.events.getFromRepoNetwork({ ... });
 */

/**
 * @api {get} /users/:user/events getFromUser
 * @apiName getFromUser
 * @apiDescription List events performed by a user
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.events.getFromUser({ ... });
 */

/**
 * @api {get} /users/:user/events/orgs/:org getFromUserOrg
 * @apiName getFromUserOrg
 * @apiDescription List events for an organization
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {String} org   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.events.getFromUserOrg({ ... });
 */

/**
 * @api {get} /users/:user/events/public getFromUserPublic
 * @apiName getFromUserPublic
 * @apiDescription List public events performed by a user
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.events.getFromUserPublic({ ... });
 */

/**
 * @api {get} /users/:user/received_events getReceived
 * @apiName getReceived
 * @apiDescription List events that a user has received
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.events.getReceived({ ... });
 */

/**
 * @api {get} /users/:user/received_events/public getReceivedPublic
 * @apiName getReceivedPublic
 * @apiDescription List public events that a user has received
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.events.getReceivedPublic({ ... });
 */

/**
 * @api {get} /gists/:id/star checkStar
 * @apiName checkStar
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.gists.checkStar({ ... });
 */

/**
 * @api {post} /gists create
 * @apiName create
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {Boolean} public   
 * @apiParam {Json} files   Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {String} [description]  Optional 
 * @apiExample {js} ex:
github.gists.create({ ... });
 */

/**
 * @api {post} /gists/:gist_id/comments createComment
 * @apiName createComment
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} gist_id   Id (SHA1 hash) of the gist.
 * @apiParam {String} body   
 * @apiExample {js} ex:
github.gists.createComment({ ... });
 */

/**
 * @api {delete} /gists/:id delete
 * @apiName delete
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.gists.delete({ ... });
 */

/**
 * @api {delete} /gists/:gist_id/comments/:id deleteComment
 * @apiName deleteComment
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} gist_id   Id (SHA1 hash) of the gist.
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.gists.deleteComment({ ... });
 */

/**
 * @api {delete} /gists/:id/star deleteStar
 * @apiName deleteStar
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.gists.deleteStar({ ... });
 */

/**
 * @api {patch} /gists/:id edit
 * @apiName edit
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} id   
 * @apiParam {Json} files   Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {String} [description]  Optional 
 * @apiExample {js} ex:
github.gists.edit({ ... });
 */

/**
 * @api {patch} /gists/:gist_id/comments/:id editComment
 * @apiName editComment
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} gist_id   Id (SHA1 hash) of the gist.
 * @apiParam {String} id   
 * @apiParam {String} body   
 * @apiExample {js} ex:
github.gists.editComment({ ... });
 */

/**
 * @api {post} /gists/:id/fork fork
 * @apiName fork
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.gists.fork({ ... });
 */

/**
 * @api {get} /gists/:id get
 * @apiName get
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.gists.get({ ... });
 */

/**
 * @api {get} /gists getAll
 * @apiName getAll
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.gists.getAll({ ... });
 */

/**
 * @api {get} /gists/:gist_id/comments/:id getComment
 * @apiName getComment
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} gist_id   Id (SHA1 hash) of the gist.
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.gists.getComment({ ... });
 */

/**
 * @api {get} /gists/:gist_id/comments getComments
 * @apiName getComments
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} gist_id   Id (SHA1 hash) of the gist.
 * @apiExample {js} ex:
github.gists.getComments({ ... });
 */

/**
 * @api {get} /users/:user/gists getFromUser
 * @apiName getFromUser
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.gists.getFromUser({ ... });
 */

/**
 * @api {get} /gists/public public
 * @apiName public
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.gists.public({ ... });
 */

/**
 * @api {put} /gists/:id/star star
 * @apiName star
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.gists.star({ ... });
 */

/**
 * @api {get} /gists/starred starred
 * @apiName starred
 * @apiDescription undefined
 * @apiGroup gists
 *
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.gists.starred({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/git/blobs createBlob
 * @apiName createBlob
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} message   String of the commit message
 * @apiParam {String} tree   String of the SHA of the tree object this commit points to
 * @apiParam {Array} parents   Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided.
 * @apiParam {Json} [author]  Optional 
 * @apiParam {Json} [committer]  Optional 
 * @apiExample {js} ex:
github.gitdata.createCommit({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/git/refs createReference
 * @apiName createReference
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} ref   String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha   
 * @apiExample {js} ex:
github.gitdata.createReference({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/git/tags createTag
 * @apiName createTag
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} tag   String of the tag
 * @apiParam {String} message   String of the tag message
 * @apiParam {String} object   String of the SHA of the git object this is tagging
 * @apiParam {String} type   String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
 * @apiParam {Json} tagger   JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged
 * @apiExample {js} ex:
github.gitdata.createTag({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/git/trees createTree
 * @apiName createTree
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Json} tree   Array of Hash objects (of path, mode, type and sha) specifying a tree structure
 * @apiParam {String} [base_tree]  Optional String of the SHA1 of the tree you want to update with new data
 * @apiExample {js} ex:
github.gitdata.createTree({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/git/refs/:ref deleteReference
 * @apiName deleteReference
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} ref   String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.deleteReference({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/refs getAllReferences
 * @apiName getAllReferences
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getAllReferences({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/blobs/:sha getBlob
 * @apiName getBlob
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.gitdata.getBlob({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/commits/:sha getCommit
 * @apiName getCommit
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiExample {js} ex:
github.gitdata.getCommit({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/refs/:ref getReference
 * @apiName getReference
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} ref   String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.gitdata.getReference({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/tags/:sha getTag
 * @apiName getTag
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiExample {js} ex:
github.gitdata.getTag({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/git/trees/:sha getTree
 * @apiName getTree
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiParam {Boolean} [recursive]  Optional 
 * @apiExample {js} ex:
github.gitdata.getTree({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/git/refs/:ref updateReference
 * @apiName updateReference
 * @apiDescription undefined
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} ref   String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha   
 * @apiParam {Boolean} [force]  Optional Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
 * @apiExample {js} ex:
github.gitdata.updateReference({ ... });
 */

/**
 * @api {get} /gitignore/templates/:name template
 * @apiName template
 * @apiDescription undefined
 * @apiGroup gitignore
 *
 * @apiParam {String} name   The name of the .gitignore template to get
 * @apiExample {js} ex:
github.gitignore.template({ ... });
 */

/**
 * @api {get} /gitignore/templates templates
 * @apiName templates
 * @apiDescription undefined
 * @apiGroup gitignore
 *
 * @apiExample {js} ex:
github.gitignore.templates({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/issues create
 * @apiName create
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} title   
 * @apiParam {String} [body]  Optional 
 * @apiParam {String} [assignee]  Optional Login for the user that this issue should be assigned to.
 * @apiParam {Number} [milestone]  Optional Milestone to associate this issue with.
 * @apiParam {Json} [labels]  Optional Array of strings - Labels to associate with this issue.
 * @apiExample {js} ex:
github.issues.create({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/issues/:number/comments createComment
 * @apiName createComment
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} name   
 * @apiParam {String} color   6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.createLabel({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/milestones createMilestone
 * @apiName createMilestone
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} title   
 * @apiParam {String} [state]  Optional 
 * @apiParam {String} [description]  Optional 
 * @apiParam {Date} [due_on]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.issues.createMilestone({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/issues/comments/:id deleteComment
 * @apiName deleteComment
 * @apiDescription undefined
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
 * @apiDescription undefined
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
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} [title]  Optional 
 * @apiParam {String} [body]  Optional 
 * @apiParam {String} [assignee]  Optional Login for the user that this issue should be assigned to.
 * @apiParam {Number} [milestone]  Optional Milestone to associate this issue with.
 * @apiParam {Json} [labels]  Optional Array of strings - Labels to associate with this issue.
 * @apiParam {String} [state]  Optional open or closed
 * @apiExample {js} ex:
github.issues.edit({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/issues/comments/:id editComment
 * @apiName editComment
 * @apiDescription undefined
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
 * @api {get} /issues getAll
 * @apiName getAll
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} [filter]  Optional 
 * @apiParam {String} [state]  Optional open, closed, or all
 * @apiParam {String} [labels]  Optional String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String} [sort]  Optional 
 * @apiParam {String} [direction]  Optional 
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getAll({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/milestones getAllMilestones
 * @apiName getAllMilestones
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [state]  Optional 
 * @apiParam {String} [sort]  Optional due_date, completeness, default: due_date
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getAllMilestones({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/comments/:id getComment
 * @apiName getComment
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getComments({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/events/:id getEvent
 * @apiName getEvent
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getEvents({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number/labels getIssueLabels
 * @apiName getIssueLabels
 * @apiDescription undefined
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
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getLabels({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/milestones/:number getMilestone
 * @apiName getMilestone
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiExample {js} ex:
github.issues.getMilestone({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/events getRepoEvents
 * @apiName getRepoEvents
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.getRepoEvents({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number getRepoIssue
 * @apiName getRepoIssue
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiExample {js} ex:
github.issues.getRepoIssue({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues/comments repoComments
 * @apiName repoComments
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [sort]  Optional 
 * @apiParam {String} [direction]  Optional 
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.issues.repoComments({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/issues repoIssues
 * @apiName repoIssues
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [milestone]  Optional 
 * @apiParam {String} [state]  Optional open, closed, or all
 * @apiParam {String} [assignee]  Optional String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User.
 * @apiParam {String} [creator]  Optional The user that created the issue.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiParam {String} [labels]  Optional String list of comma separated Label names. Example: bug,ui,@high
 * @apiParam {String} [sort]  Optional 
 * @apiParam {String} [direction]  Optional 
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {String} [mentioned]  Optional String User login.
 * @apiExample {js} ex:
github.issues.repoIssues({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/labels/:name updateLabel
 * @apiName updateLabel
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} name   
 * @apiParam {String} color   6 character hex code, without a leading #.
 * @apiExample {js} ex:
github.issues.updateLabel({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/milestones/:number updateMilestone
 * @apiName updateMilestone
 * @apiDescription undefined
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} title   
 * @apiParam {String} [state]  Optional 
 * @apiParam {String} [description]  Optional 
 * @apiParam {Date} [due_on]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.issues.updateMilestone({ ... });
 */

/**
 * @api {post} /markdown render
 * @apiName render
 * @apiDescription undefined
 * @apiGroup markdown
 *
 * @apiParam {String} text   The Markdown text to render
 * @apiParam {String} [mode]  Optional The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly.
 * @apiParam {String} [context]  Optional The repository context, only taken into account when rendering as `gfm`
 * @apiExample {js} ex:
github.markdown.render({ ... });
 */

/**
 * @api {post} /markdown/raw renderRaw
 * @apiName renderRaw
 * @apiDescription undefined
 * @apiGroup markdown
 *
 * @apiParam {String} data   Raw data to send as the body of the request
 * @apiExample {js} ex:
github.markdown.renderRaw({ ... });
 */

/**
 * @api {get} /emojis emojis
 * @apiName emojis
 * @apiDescription undefined
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.emojis({ ... });
 */

/**
 * @api {get} /meta meta
 * @apiName meta
 * @apiDescription undefined
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.meta({ ... });
 */

/**
 * @api {get} /rate_limit rateLimit
 * @apiName rateLimit
 * @apiDescription undefined
 * @apiGroup misc
 *
 * @apiExample {js} ex:
github.misc.rateLimit({ ... });
 */

/**
 * @api {put} /orgs/:org/memberships/:user addOrganizationMembership
 * @apiName addOrganizationMembership
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.orgs.addOrganizationMembership({ ... });
 */

/**
 * @api {put} /teams/:id/members/:user addTeamMember
 * @apiName addTeamMember
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.orgs.addTeamMember({ ... });
 */

/**
 * @api {put} /teams/:id/memberships/:user addTeamMembership
 * @apiName addTeamMembership
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.orgs.addTeamMembership({ ... });
 */

/**
 * @api {put} /teams/:id/repos/:user/:repo addTeamRepo
 * @apiName addTeamRepo
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.orgs.addTeamRepo({ ... });
 */

/**
 * @api {delete} /orgs/:org/public_members/:user concealMembership
 * @apiName concealMembership
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.orgs.concealMembership({ ... });
 */

/**
 * @api {post} /orgs/:org/teams createTeam
 * @apiName createTeam
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} name   
 * @apiParam {Array} [repo_names]  Optional Array of strings
 * @apiParam {String} [permission]  Optional `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories.
 * @apiExample {js} ex:
github.orgs.createTeam({ ... });
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
 * @api {delete} /teams/:id/members/:user deleteTeamMember
 * @apiName deleteTeamMember
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.orgs.deleteTeamMember({ ... });
 */

/**
 * @api {delete} /teams/:id/repos/:user/:repo deleteTeamRepo
 * @apiName deleteTeamRepo
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.orgs.deleteTeamRepo({ ... });
 */

/**
 * @api {get} /orgs/:org get
 * @apiName get
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.get({ ... });
 */

/**
 * @api {get} /users/:user/orgs getFromUser
 * @apiName getFromUser
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getFromUser({ ... });
 */

/**
 * @api {get} /orgs/:org/members/:user getMember
 * @apiName getMember
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.orgs.getMember({ ... });
 */

/**
 * @api {get} /orgs/:org/members getMembers
 * @apiName getMembers
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiParam {String} [filter]  Optional 
 * @apiExample {js} ex:
github.orgs.getMembers({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members/:user getPublicMember
 * @apiName getPublicMember
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.orgs.getPublicMember({ ... });
 */

/**
 * @api {get} /orgs/:org/public_members getPublicMembers
 * @apiName getPublicMembers
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiExample {js} ex:
github.orgs.getPublicMembers({ ... });
 */

/**
 * @api {get} /teams/:id getTeam
 * @apiName getTeam
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.orgs.getTeam({ ... });
 */

/**
 * @api {get} /teams/:id/members/:user getTeamMember
 * @apiName getTeamMember
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.orgs.getTeamMember({ ... });
 */

/**
 * @api {get} /teams/:id/members getTeamMembers
 * @apiName getTeamMembers
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getTeamMembers({ ... });
 */

/**
 * @api {get} /teams/:id/memberships/:user getTeamMembership
 * @apiName getTeamMembership
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.orgs.getTeamMembership({ ... });
 */

/**
 * @api {get} /teams/:id/repos/:user/:repo getTeamRepo
 * @apiName getTeamRepo
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.orgs.getTeamRepo({ ... });
 */

/**
 * @api {get} /teams/:id/repos getTeamRepos
 * @apiName getTeamRepos
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getTeamRepos({ ... });
 */

/**
 * @api {get} /orgs/:org/teams getTeams
 * @apiName getTeams
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.orgs.getTeams({ ... });
 */

/**
 * @api {put} /orgs/:org/public_members/:user publicizeMembership
 * @apiName publicizeMembership
 * @apiDescription undefined
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
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.orgs.removeOrganizationMembership({ ... });
 */

/**
 * @api {patch} /orgs/:org update
 * @apiName update
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} [billing_email]  Optional Billing email address. This address is not publicized.
 * @apiParam {String} [company]  Optional 
 * @apiParam {String} [email]  Optional Publicly visible email address.
 * @apiParam {String} [location]  Optional 
 * @apiParam {String} [name]  Optional 
 * @apiExample {js} ex:
github.orgs.update({ ... });
 */

/**
 * @api {patch} /teams/:id updateTeam
 * @apiName updateTeam
 * @apiDescription undefined
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} name   
 * @apiParam {String} [permission]  Optional `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories.
 * @apiExample {js} ex:
github.orgs.updateTeam({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/pulls create
 * @apiName create
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} title   
 * @apiParam {String} base   The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head   The branch (or git ref) where your changes are implemented.
 * @apiParam {String} [body]  Optional 
 * @apiExample {js} ex:
github.pullRequests.create({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/pulls/:number/comments createComment
 * @apiName createComment
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} body   
 * @apiParam {String} commit_id   Sha of the commit to comment on.
 * @apiParam {String} path   Relative path of the file to comment on.
 * @apiParam {Number} position   Column index in the diff to comment on.
 * @apiExample {js} ex:
github.pullRequests.createComment({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/pulls/:number/comments createCommentReply
 * @apiName createCommentReply
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} body   
 * @apiParam {Number} in_reply_to   
 * @apiExample {js} ex:
github.pullRequests.createCommentReply({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/pulls createFromIssue
 * @apiName createFromIssue
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} issue   
 * @apiParam {String} base   The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head   The branch (or git ref) where your changes are implemented.
 * @apiExample {js} ex:
github.pullRequests.createFromIssue({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/pulls/comments/:number deleteComment
 * @apiName deleteComment
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiExample {js} ex:
github.pullRequests.deleteComment({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number get
 * @apiName get
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [state]  Optional open, closed, or all
 * @apiParam {String} [head]  Optional 
 * @apiParam {String} [base]  Optional 
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiParam {String} [sort]  Optional Possible values are: `created`, `updated`, `popularity`, `long-running`, Default: `created`
 * @apiParam {String} [direction]  Optional 
 * @apiExample {js} ex:
github.pullRequests.getAll({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/comments/:number getComment
 * @apiName getComment
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getComments({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number/commits getCommits
 * @apiName getCommits
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getCommits({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number/files getFiles
 * @apiName getFiles
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getFiles({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number/merge getMerged
 * @apiName getMerged
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.pullRequests.getMerged({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/pulls/:number/merge merge
 * @apiName merge
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} [commit_message]  Optional The message that will be used for the merge commit
 * @apiExample {js} ex:
github.pullRequests.merge({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/pulls/:number update
 * @apiName update
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} [state]  Optional 
 * @apiParam {String} [title]  Optional 
 * @apiParam {String} [body]  Optional 
 * @apiExample {js} ex:
github.pullRequests.update({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/pulls/comments/:number updateComment
 * @apiName updateComment
 * @apiDescription undefined
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} body   
 * @apiExample {js} ex:
github.pullRequests.updateComment({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases createRelease
 * @apiName createRelease
 * @apiDescription undefined
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {String} repo   
 * @apiParam {String} tag_name   String of the tag
 * @apiParam {String} [target_commitish]  Optional Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master).
 * @apiParam {String} [name]  Optional 
 * @apiParam {String} [body]  Optional 
 * @apiParam {Boolean} [draft]  Optional true to create a draft (unpublished) release, false to create a published one. Default: false
 * @apiParam {Boolean} [prerelease]  Optional true to identify the release as a prerelease. false to identify the release as a full release. Default: false
 * @apiExample {js} ex:
github.releases.createRelease({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/assets/:id deleteAsset
 * @apiName deleteAsset
 * @apiDescription undefined
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.releases.deleteAsset({ ... });
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/:id deleteRelease
 * @apiName deleteRelease
 * @apiDescription undefined
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.releases.deleteRelease({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/releases/assets/:id editAsset
 * @apiName editAsset
 * @apiDescription undefined
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 * @apiParam {String} name   
 * @apiParam {String} [label]  Optional An alternate short description of the asset. Used in place of the filename.
 * @apiExample {js} ex:
github.releases.editAsset({ ... });
 */

/**
 * @api {patch} /repos/:owner/:repo/releases/:id editRelease
 * @apiName editRelease
 * @apiDescription undefined
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 * @apiParam {String} tag_name   String of the tag
 * @apiParam {String} [target_commitish]  Optional Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master).
 * @apiParam {String} [name]  Optional 
 * @apiParam {String} [body]  Optional 
 * @apiParam {Boolean} [draft]  Optional true to create a draft (unpublished) release, false to create a published one. Default: false
 * @apiParam {Boolean} [prerelease]  Optional true to identify the release as a prerelease. false to identify the release as a full release. Default: false
 * @apiExample {js} ex:
github.releases.editRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/assets/:id getAsset
 * @apiName getAsset
 * @apiDescription undefined
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.releases.getAsset({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/latest getLatestRelease
 * @apiName getLatestRelease
 * @apiDescription undefined
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.releases.getLatestRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id getRelease
 * @apiName getRelease
 * @apiDescription undefined
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.releases.getRelease({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id/assets listAssets
 * @apiName listAssets
 * @apiDescription undefined
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.releases.listAssets({ ... });
 */

/**
 * @api {get} /repos/:owner/:repo/releases listReleases
 * @apiName listReleases
 * @apiDescription undefined
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.releases.listReleases({ ... });
 */

/**
 * @api {post} /repos/:owner/:repo/releases/:id/assets uploadAsset
 * @apiName uploadAsset
 * @apiDescription undefined
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 * @apiParam {String} name   the file name of the asset
 * @apiExample {js} ex:
github.releases.uploadAsset({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/collaborators/:collabuser addCollaborator
 * @apiName addCollaborator
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} collabuser   
 * @apiExample {js} ex:
github.repos.addCollaborator({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/compare/:base...:head compareCommits
 * @apiName compareCommits
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} base   The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head   The branch (or git ref) where your changes are implemented.
 * @apiExample {js} ex:
github.repos.compareCommits({ ... });
 */

/**
 * @api {post} /user/repos create
 * @apiName create
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} name   
 * @apiParam {String} [description]  Optional 
 * @apiParam {String} [homepage]  Optional 
 * @apiParam {Boolean} [private]  Optional True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [has_issues]  Optional True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [has_wiki]  Optional True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads]  Optional True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [auto_init]  Optional True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Optional Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiExample {js} ex:
github.repos.create({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/commits/:sha/comments createCommitComment
 * @apiName createCommitComment
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiParam {String} body   
 * @apiParam {String} commit_id   Sha of the commit to comment on.
 * @apiParam {String} [path]  Optional Relative path of the file to comment on.
 * @apiParam {Number} [position]  Optional Line index in the diff to comment on.
 * @apiParam {Number} [line]  Optional Line number in the file to comment on. Defaults to 1.
 * @apiExample {js} ex:
github.repos.createCommitComment({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/contents/:path createContent
 * @apiName createContent
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [content]  Optional 
 * @apiParam {String} [message]  Optional 
 * @apiParam {String} [path]  Optional The content path.
 * @apiParam {String} [ref]  Optional The String name of the Commit/Branch/Tag. Defaults to master.
 * @apiExample {js} ex:
github.repos.createContent({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/deployments createDeployment
 * @apiName createDeployment
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} ref   The ref to deploy. This can be a branch, tag, or sha.
 * @apiParam {String} task   The named task to execute. e.g. deploy or deploy:migrations. Default: deploy
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Boolean} [auto_merge]  Optional Optional parameter to merge the default branch into the requested ref if it is behind the default branch. Default: true
 * @apiParam {Array} [required_contexts]  Optional Optional array of status contexts verified against commit status checks. If this parameter is omitted from the parameters then all unique contexts will be verified before a deployment is created. To bypass checking entirely pass an empty array. Defaults to all unique contexts.
 * @apiParam {String} [payload]  Optional Optional JSON payload with extra information about the deployment. Default: ''
 * @apiParam {String} [environment]  Optional The name of the environment that was deployed to. e.g. staging or production. Default: none.
 * @apiParam {String} [description]  Optional Optional short description. Default: ''
 * @apiExample {js} ex:
github.repos.createDeployment({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/deployments/:id/statuses createDeploymentStatus
 * @apiName createDeploymentStatus
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 * @apiParam {String} [state]  Optional The state of the status. Can be one of pending, success, error, or failure.
 * @apiParam {String} [target_url]  Optional The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. Default: ''
 * @apiParam {String} [description]  Optional A short description of the status. Default: ''
 * @apiExample {js} ex:
github.repos.createDeploymentStatus({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/contents/:path createFile
 * @apiName createFile
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} path   The content path.
 * @apiParam {String} message   The commit message.
 * @apiParam {String} content   The new file content, Base64 encoded.
 * @apiParam {String} [branch]  Optional The branch name. If not provided, uses the repository’s default branch (usually master).
 * @apiParam {Json} [author]  Optional 
 * @apiParam {Json} [committer]  Optional 
 * @apiExample {js} ex:
github.repos.createFile({ ... });
 */

/**
 * @api {post} /orgs/:org/repos createFromOrg
 * @apiName createFromOrg
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} org   
 * @apiParam {String} name   
 * @apiParam {String} [description]  Optional 
 * @apiParam {String} [homepage]  Optional 
 * @apiParam {Boolean} [private]  Optional True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Number} [team_id]  Optional The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
 * @apiParam {Boolean} [has_wiki]  Optional True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads]  Optional True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [auto_init]  Optional True to create an initial commit with empty README. Default is false
 * @apiParam {String} [gitignore_template]  Optional Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 * @apiParam {Boolean} [has_issues]  Optional True to enable issues for this repository, false to disable them. Default is true.
 * @apiExample {js} ex:
github.repos.createFromOrg({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/hooks createHook
 * @apiName createHook
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} name   
 * @apiParam {Json} config   A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {Array} [events]  Optional Determines what events the hook is triggered for. Default: `['push']`.
 * @apiParam {Boolean} [active]  Optional Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} ex:
github.repos.createHook({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/keys createKey
 * @apiName createKey
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} title   
 * @apiParam {String} key   
 * @apiExample {js} ex:
github.repos.createKey({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo delete
 * @apiName delete
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.repos.delete({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/comments/:id deleteCommitComment
 * @apiName deleteCommitComment
 * @apiDescription undefined
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
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} path   The content path.
 * @apiParam {String} message   The commit message.
 * @apiParam {String} sha   The blob SHA of the file being removed.
 * @apiParam {String} [branch]  Optional The branch name. If not provided, uses the repository’s default branch (usually master).
 * @apiParam {Json} [author]  Optional 
 * @apiParam {Json} [committer]  Optional 
 * @apiExample {js} ex:
github.repos.deleteFile({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/hooks/:id deleteHook
 * @apiName deleteHook
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.repos.deleteHook({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/keys/:id deleteKey
 * @apiName deleteKey
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.repos.deleteKey({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/forks fork
 * @apiName fork
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [organization]  Optional Organization login. The repository will be forked into this organization.
 * @apiExample {js} ex:
github.repos.fork({ ... });
 */

/**
 * @api {get} /repos/:user/:repo get
 * @apiName get
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} [type]  Optional Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`.
 * @apiParam {String} [sort]  Optional Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {String} [direction]  Optional 
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getAll({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/comments getAllCommitComments
 * @apiName getAllCommitComments
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getAllCommitComments({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/:archive_format/:ref getArchiveLink
 * @apiName getArchiveLink
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} archive_format   Either tarball or zipball
 * @apiParam {String} [ref]  Optional String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiExample {js} ex:
github.repos.getArchiveLink({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/branches/:branch getBranch
 * @apiName getBranch
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} branch   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranch({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/branches getBranches
 * @apiName getBranches
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getBranches({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/collaborators/:collabuser getCollaborator
 * @apiName getCollaborator
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} collabuser   
 * @apiExample {js} ex:
github.repos.getCollaborator({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/collaborators getCollaborators
 * @apiName getCollaborators
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCollaborators({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/commits/:sha getCommit
 * @apiName getCommit
 * @apiDescription undefined
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
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getCommitComments({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/commits getCommits
 * @apiName getCommits
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [sha]  Optional Sha or branch to start listing commits from.
 * @apiParam {String} [path]  Optional Only commits containing this file path will be returned.
 * @apiParam {String} [author]  Optional GitHub login or email address by which to filter by commit author.
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Date} [until]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiExample {js} ex:
github.repos.getCommits({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/contents/:path getContent
 * @apiName getContent
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [path]  Optional The content path.
 * @apiParam {String} [ref]  Optional The String name of the Commit/Branch/Tag. Defaults to master.
 * @apiExample {js} ex:
github.repos.getContent({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/contributors getContributors
 * @apiName getContributors
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Boolean} [anon]  Optional Set to 1 or true to include anonymous contributors in results.
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getContributors({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/deployments/:id/statuses getDeploymentStatuses
 * @apiName getDeploymentStatuses
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [sha]  Optional The short or long sha that was recorded at creation time. Default: none.
 * @apiParam {String} [ref]  Optional The name of the ref. This can be a branch, tag, or sha. Default: none.
 * @apiParam {String} [task]  Optional The name of the task for the deployment. e.g. deploy or deploy:migrations. Default: none.
 * @apiParam {String} [environment]  Optional The name of the environment that was deployed to. e.g. staging or production. Default: none.
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getDeployments({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/downloads/:id getDownload
 * @apiName getDownload
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getDownloads({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/forks getForks
 * @apiName getForks
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [sort]  Optional Possible values: `newest`, `oldest`, `watchers`, default: `newest`.
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getForks({ ... });
 */

/**
 * @api {get} /orgs/:org/repos getFromOrg
 * @apiName getFromOrg
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} org   
 * @apiParam {String} [type]  Optional Possible values: `all`, `public`, `private`, `forks`, `sources`, `member`. Default: `all`.
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getFromOrg({ ... });
 */

/**
 * @api {get} /users/:user/repos getFromUser
 * @apiName getFromUser
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} [type]  Optional Possible values: `all`, `owner`, `member`. Default: `owner`.
 * @apiParam {String} [sort]  Optional Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {String} [direction]  Optional 
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getFromUser({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/hooks/:id getHook
 * @apiName getHook
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getHooks({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/keys/:id getKey
 * @apiName getKey
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getKeys({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/languages getLanguages
 * @apiName getLanguages
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getLanguages({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/readme getReadme
 * @apiName getReadme
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [ref]  Optional The String name of the Commit/Branch/Tag. Defaults to master.
 * @apiExample {js} ex:
github.repos.getReadme({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/stargazers getStargazers
 * @apiName getStargazers
 * @apiDescription List Stargazers
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getStargazers({ ... });
 */

/**
 * @api {get} /user/starred getStarred
 * @apiName getStarred
 * @apiDescription List repositories being starred by the authenticated user
 * @apiGroup repos
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getStarred({ ... });
 */

/**
 * @api {get} /users/:user/starred getStarredFromUser
 * @apiName getStarredFromUser
 * @apiDescription List repositories being starred by a user
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getStarredFromUser({ ... });
 */

/**
 * @api {get} /user/starred/:user/:repo getStarring
 * @apiName getStarring
 * @apiDescription Check if you are starring a repository
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getStarring({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/stats/code_frequency getStatsCodeFrequency
 * @apiName getStatsCodeFrequency
 * @apiDescription undefined
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
 * @apiDescription undefined
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
 * @apiDescription undefined
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
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.repos.getStatsPunchCard({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/tags getTags
 * @apiName getTags
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTags({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/teams getTeams
 * @apiName getTeams
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getTeams({ ... });
 */

/**
 * @api {get} /user/watched getWatched
 * @apiName getWatched
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getWatched({ ... });
 */

/**
 * @api {get} /users/:user/watched getWatchedFromUser
 * @apiName getWatchedFromUser
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getWatchedFromUser({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/watchers getWatchers
 * @apiName getWatchers
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getWatchers({ ... });
 */

/**
 * @api {get} /user/watched/:user/:repo getWatching
 * @apiName getWatching
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.repos.getWatching({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/merges merge
 * @apiName merge
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} base   The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head   The branch (or git ref) where your changes are implemented.
 * @apiParam {String} [commit_message]  Optional Commit message to use for the merge commit. If omitted, a default message will be used.
 * @apiExample {js} ex:
github.repos.merge({ ... });
 */

/**
 * @api {get} /repositories/:id one
 * @apiName one
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.repos.one({ ... });
 */

/**
 * @api {delete} /repos/:user/:repo/collaborators/:collabuser removeCollaborator
 * @apiName removeCollaborator
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} collabuser   
 * @apiExample {js} ex:
github.repos.removeCollaborator({ ... });
 */

/**
 * @api {put} /user/starred/:user/:repo star
 * @apiName star
 * @apiDescription Star a repository
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.repos.star({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/hooks/:id/test testHook
 * @apiName testHook
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.repos.testHook({ ... });
 */

/**
 * @api {delete} /user/starred/:user/:repo unStar
 * @apiName unStar
 * @apiDescription Unstar a repository
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.repos.unStar({ ... });
 */

/**
 * @api {delete} /user/watched/:user/:repo unWatch
 * @apiName unWatch
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.repos.unWatch({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo update
 * @apiName update
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} name   
 * @apiParam {String} [description]  Optional 
 * @apiParam {String} [homepage]  Optional 
 * @apiParam {Boolean} [private]  Optional True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 * @apiParam {Boolean} [has_issues]  Optional True to enable issues for this repository, false to disable them. Default is true.
 * @apiParam {Boolean} [has_wiki]  Optional True to enable the wiki for this repository, false to disable it. Default is true.
 * @apiParam {Boolean} [has_downloads]  Optional True to enable downloads for this repository, false to disable them. Default is true.
 * @apiParam {String} [default_branch]  Optional Updates the default branch for this repository.
 * @apiExample {js} ex:
github.repos.update({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/comments/:id updateCommitComment
 * @apiName updateCommitComment
 * @apiDescription undefined
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
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} path   The content path.
 * @apiParam {String} message   The commit message.
 * @apiParam {String} content   The updated file content, Base64 encoded.
 * @apiParam {String} sha   The blob SHA of the file being replaced.
 * @apiParam {String} [branch]  Optional The branch name. If not provided, uses the repository’s default branch (usually master).
 * @apiParam {Json} [author]  Optional 
 * @apiParam {Json} [committer]  Optional 
 * @apiExample {js} ex:
github.repos.updateFile({ ... });
 */

/**
 * @api {patch} /repos/:user/:repo/hooks/:id updateHook
 * @apiName updateHook
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 * @apiParam {String} name   
 * @apiParam {Json} config   A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {Array} [events]  Optional Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`.
 * @apiParam {Array} [add_events]  Optional Determines a list of events to be added to the list of events that the Hook triggers for.
 * @apiParam {Array} [remove_events]  Optional Determines a list of events to be removed from the list of events that the Hook triggers for.
 * @apiParam {Boolean} [active]  Optional Determines whether the hook is actually triggered on pushes.
 * @apiExample {js} ex:
github.repos.updateHook({ ... });
 */

/**
 * @api {put} /repos/:user/:repo/keys/:id updateKey
 * @apiName updateKey
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 * @apiParam {String} title   
 * @apiParam {String} key   
 * @apiExample {js} ex:
github.repos.updateKey({ ... });
 */

/**
 * @api {put} /user/watched/:user/:repo watch
 * @apiName watch2
 * @apiDescription undefined
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiExample {js} ex:
github.repos.watch({ ... });
 */

/**
 * @api {get} /search/code code
 * @apiName code
 * @apiDescription undefined
 * @apiGroup search
 *
 * @apiParam {String} q   Search Term
 * @apiParam {String} [sort]  Optional indexed only
 * @apiParam {String} [order]  Optional asc or desc
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.code({ ... });
 */

/**
 * @api {get} /legacy/user/email/:email email
 * @apiName email
 * @apiDescription undefined
 * @apiGroup search
 *
 * @apiParam {String} email   Email address
 * @apiExample {js} ex:
github.search.email({ ... });
 */

/**
 * @api {get} /search/issues issues
 * @apiName issues
 * @apiDescription undefined
 * @apiGroup search
 *
 * @apiParam {String} q   Search Term
 * @apiParam {String} [sort]  Optional comments, created, or updated
 * @apiParam {String} [order]  Optional asc or desc
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.issues({ ... });
 */

/**
 * @api {get} /search/repositories repos
 * @apiName repos
 * @apiDescription undefined
 * @apiGroup search
 *
 * @apiParam {String} q   Search Term
 * @apiParam {String} [sort]  Optional stars, forks, or updated
 * @apiParam {String} [order]  Optional asc or desc
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.repos({ ... });
 */

/**
 * @api {get} /search/users users
 * @apiName users
 * @apiDescription undefined
 * @apiGroup search
 *
 * @apiParam {String} q   Search Term
 * @apiParam {String} [sort]  Optional followers, repositories, or joined
 * @apiParam {String} [order]  Optional asc or desc
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.search.users({ ... });
 */

/**
 * @api {post} /repos/:user/:repo/statuses/:sha create
 * @apiName create
 * @apiDescription undefined
 * @apiGroup statuses
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiParam {String} state   State of the status - can be one of pending, success, error, or failure.
 * @apiParam {String} [target_url]  Optional Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status.
 * @apiParam {String} [description]  Optional Short description of the status.
 * @apiParam {String} [context]  Optional A string label to differentiate this status from the status of other systems.
 * @apiExample {js} ex:
github.statuses.create({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/commits/:sha/statuses get
 * @apiName get
 * @apiDescription undefined
 * @apiGroup statuses
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiExample {js} ex:
github.statuses.get({ ... });
 */

/**
 * @api {get} /repos/:user/:repo/commits/:sha/status getCombined
 * @apiName getCombined
 * @apiDescription undefined
 * @apiGroup statuses
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiExample {js} ex:
github.statuses.getCombined({ ... });
 */

/**
 * @api {post} /user/emails addEmails
 * @apiName addEmails
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiExample {js} ex:
github.user.addEmails({ ... });
 */

/**
 * @api {post} /user/keys createKey
 * @apiName createKey
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} title   
 * @apiParam {String} key   
 * @apiExample {js} ex:
github.user.createKey({ ... });
 */

/**
 * @api {delete} /user/emails deleteEmails
 * @apiName deleteEmails
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiExample {js} ex:
github.user.deleteEmails({ ... });
 */

/**
 * @api {delete} /user/keys/:id deleteKey
 * @apiName deleteKey
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.user.deleteKey({ ... });
 */

/**
 * @api {patch} /user/memberships/orgs/:org editOrganizationMembership
 * @apiName editOrganizationMembership
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} org   
 * @apiParam {String} state   
 * @apiExample {js} ex:
github.user.editOrganizationMembership({ ... });
 */

/**
 * @api {put} /user/following/:user followUser
 * @apiName followUser
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.user.followUser({ ... });
 */

/**
 * @api {get} /user get
 * @apiName get
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiExample {js} ex:
github.user.get({ ... });
 */

/**
 * @api {get} /users getAll
 * @apiName getAll
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {Number} [since]  Optional The integer ID of the last User that you’ve seen.
 * @apiExample {js} ex:
github.user.getAll({ ... });
 */

/**
 * @api {get} /user/emails getEmails
 * @apiName getEmails
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.user.getEmails({ ... });
 */

/**
 * @api {get} /user/following/:user getFollowUser
 * @apiName getFollowUser
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.user.getFollowUser({ ... });
 */

/**
 * @api {get} /users/:user/followers getFollowers
 * @apiName getFollowers
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.user.getFollowers({ ... });
 */

/**
 * @api {get} /user/following getFollowing
 * @apiName getFollowing
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.user.getFollowing({ ... });
 */

/**
 * @api {get} /users/:user/following getFollowingFromUser
 * @apiName getFollowingFromUser
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.user.getFollowingFromUser({ ... });
 */

/**
 * @api {get} /users/:user getFrom
 * @apiName getFrom
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.user.getFrom({ ... });
 */

/**
 * @api {get} /user/keys/:id getKey
 * @apiName getKey
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} id   
 * @apiExample {js} ex:
github.user.getKey({ ... });
 */

/**
 * @api {get} /user/keys getKeys
 * @apiName getKeys
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.user.getKeys({ ... });
 */

/**
 * @api {get} /users/:user/keys getKeysFromUser
 * @apiName getKeysFromUser
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.user.getKeysFromUser({ ... });
 */

/**
 * @api {get} /user/orgs getOrgs
 * @apiName getOrgs
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.user.getOrgs({ ... });
 */

/**
 * @api {get} /user/teams getTeams
 * @apiName getTeams
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiExample {js} ex:
github.user.getTeams({ ... });
 */

/**
 * @api {delete} /user/following/:user unFollowUser
 * @apiName unFollowUser
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} user   
 * @apiExample {js} ex:
github.user.unFollowUser({ ... });
 */

/**
 * @api {patch} /user update
 * @apiName update
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} [name]  Optional 
 * @apiParam {String} [email]  Optional 
 * @apiParam {String} [blog]  Optional 
 * @apiParam {String} [company]  Optional 
 * @apiParam {String} [location]  Optional 
 * @apiParam {Boolean} [hireable]  Optional 
 * @apiParam {String} [bio]  Optional 
 * @apiExample {js} ex:
github.user.update({ ... });
 */

/**
 * @api {patch} /user/keys/:id updateKey
 * @apiName updateKey
 * @apiDescription undefined
 * @apiGroup user
 *
 * @apiParam {String} id   
 * @apiParam {String} title   
 * @apiParam {String} key   
 * @apiExample {js} ex:
github.user.updateKey({ ... });
 */

