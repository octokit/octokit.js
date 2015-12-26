/**
 * @api {post} /authorizations create
 * @apiName create
 * @apiGroup authorization
 *
 * @apiParam {Array} [scopes]  Optional A list of scopes that this authorization is in.
 * @apiParam {String} [note]  Optional A note to remind you what the OAuth token is for.
 * @apiParam {String} [note_url]  Optional A URL to remind you what app the OAuth token is for.
 */

/**
 * @api {delete} /authorizations/:id delete
 * @apiName delete
 * @apiGroup authorization
 *
 * @apiParam {String} id   
 */

/**
 * @api {get} /authorizations/:id get
 * @apiName get
 * @apiGroup authorization
 *
 * @apiParam {String} id   
 */

/**
 * @api {get} /authorizations getAll
 * @apiName getAll
 * @apiGroup authorization
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {patch} /authorizations/:id update
 * @apiName update
 * @apiGroup authorization
 *
 * @apiParam {String} id   
 * @apiParam {Array} [scopes]  Optional A list of scopes that this authorization is in.
 * @apiParam {Array} [add_scopes]  Optional A list of scopes to add to this authorization.
 * @apiParam {Array} [remove_scopes]  Optional A list of scopes to remove from this authorization.
 * @apiParam {String} [note]  Optional A note to remind you what the OAuth token is for.
 * @apiParam {String} [note_url]  Optional A URL to remind you what app the OAuth token is for.
 */

/**
 * @api {get} /events get
 * @apiName get
 * @apiGroup events
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /orgs/:org/events getFromOrg
 * @apiName getFromOrg
 * @apiGroup events
 *
 * @apiParam {String} org   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/events getFromRepo
 * @apiName getFromRepo
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/issues/events getFromRepoIssues
 * @apiName getFromRepoIssues
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /networks/:user/:repo/events getFromRepoNetwork
 * @apiName getFromRepoNetwork
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/events getFromUser
 * @apiName getFromUser
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/events/orgs/:org getFromUserOrg
 * @apiName getFromUserOrg
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {String} org   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/events/public getFromUserPublic
 * @apiName getFromUserPublic
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/received_events getReceived
 * @apiName getReceived
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/received_events/public getReceivedPublic
 * @apiName getReceivedPublic
 * @apiGroup events
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /gists/:id/star checkStar
 * @apiName checkStar
 * @apiGroup gists
 *
 * @apiParam {String} id   
 */

/**
 * @api {post} /gists create
 * @apiName create
 * @apiGroup gists
 *
 * @apiParam {Boolean} public   
 * @apiParam {Json} files   Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {String} [description]  Optional 
 */

/**
 * @api {post} /gists/:gist_id/comments createComment
 * @apiName createComment
 * @apiGroup gists
 *
 * @apiParam {String} gist_id   Id (SHA1 hash) of the gist.
 * @apiParam {String} body   
 */

/**
 * @api {delete} /gists/:id delete
 * @apiName delete
 * @apiGroup gists
 *
 * @apiParam {String} id   
 */

/**
 * @api {delete} /gists/:gist_id/comments/:id deleteComment
 * @apiName deleteComment
 * @apiGroup gists
 *
 * @apiParam {String} gist_id   Id (SHA1 hash) of the gist.
 * @apiParam {String} id   
 */

/**
 * @api {delete} /gists/:id/star deleteStar
 * @apiName deleteStar
 * @apiGroup gists
 *
 * @apiParam {String} id   
 */

/**
 * @api {patch} /gists/:id edit
 * @apiName edit
 * @apiGroup gists
 *
 * @apiParam {String} id   
 * @apiParam {Json} files   Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 * @apiParam {String} [description]  Optional 
 */

/**
 * @api {patch} /gists/:gist_id/comments/:id editComment
 * @apiName editComment
 * @apiGroup gists
 *
 * @apiParam {String} gist_id   Id (SHA1 hash) of the gist.
 * @apiParam {String} id   
 * @apiParam {String} body   
 */

/**
 * @api {post} /gists/:id/fork fork
 * @apiName fork
 * @apiGroup gists
 *
 * @apiParam {String} id   
 */

/**
 * @api {get} /gists/:id get
 * @apiName get
 * @apiGroup gists
 *
 * @apiParam {String} id   
 */

/**
 * @api {get} /gists getAll
 * @apiName getAll
 * @apiGroup gists
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 */

/**
 * @api {get} /gists/:gist_id/comments/:id getComment
 * @apiName getComment
 * @apiGroup gists
 *
 * @apiParam {String} gist_id   Id (SHA1 hash) of the gist.
 * @apiParam {String} id   
 */

/**
 * @api {get} /gists/:gist_id/comments getComments
 * @apiName getComments
 * @apiGroup gists
 *
 * @apiParam {String} gist_id   Id (SHA1 hash) of the gist.
 */

/**
 * @api {get} /users/:user/gists getFromUser
 * @apiName getFromUser
 * @apiGroup gists
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 */

/**
 * @api {get} /gists/public public
 * @apiName public
 * @apiGroup gists
 *
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 */

/**
 * @api {put} /gists/:id/star star
 * @apiName star
 * @apiGroup gists
 *
 * @apiParam {String} id   
 */

/**
 * @api {get} /gists/starred starred
 * @apiName starred
 * @apiGroup gists
 *
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 */

/**
 * @api {post} /repos/:user/:repo/git/blobs createBlob
 * @apiName createBlob
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} content   
 * @apiParam {String} encoding   
 */

/**
 * @api {post} /repos/:user/:repo/git/commits createCommit
 * @apiName createCommit
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} message   String of the commit message
 * @apiParam {String} tree   String of the SHA of the tree object this commit points to
 * @apiParam {Array} parents   Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided.
 * @apiParam {Json} [author]  Optional 
 * @apiParam {Json} [committer]  Optional 
 */

/**
 * @api {post} /repos/:user/:repo/git/refs createReference
 * @apiName createReference
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} ref   String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha   
 */

/**
 * @api {post} /repos/:user/:repo/git/tags createTag
 * @apiName createTag
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} tag   String of the tag
 * @apiParam {String} message   String of the tag message
 * @apiParam {String} object   String of the SHA of the git object this is tagging
 * @apiParam {String} type   String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
 * @apiParam {Json} tagger   JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged
 */

/**
 * @api {post} /repos/:user/:repo/git/trees createTree
 * @apiName createTree
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Json} tree   Array of Hash objects (of path, mode, type and sha) specifying a tree structure
 * @apiParam {String} [base_tree]  Optional String of the SHA1 of the tree you want to update with new data
 */

/**
 * @api {delete} /repos/:user/:repo/git/refs/:ref deleteReference
 * @apiName deleteReference
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} ref   String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 */

/**
 * @api {get} /repos/:user/:repo/git/refs getAllReferences
 * @apiName getAllReferences
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/git/blobs/:sha getBlob
 * @apiName getBlob
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/git/commits/:sha getCommit
 * @apiName getCommit
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 */

/**
 * @api {get} /repos/:user/:repo/git/refs/:ref getReference
 * @apiName getReference
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} ref   String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 */

/**
 * @api {get} /repos/:user/:repo/git/tags/:sha getTag
 * @apiName getTag
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 */

/**
 * @api {get} /repos/:user/:repo/git/trees/:sha getTree
 * @apiName getTree
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiParam {Boolean} [recursive]  Optional 
 */

/**
 * @api {patch} /repos/:user/:repo/git/refs/:ref updateReference
 * @apiName updateReference
 * @apiGroup gitdata
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} ref   String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 * @apiParam {String} sha   
 * @apiParam {Boolean} [force]  Optional Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
 */

/**
 * @api {get} /gitignore/templates/:name template
 * @apiName template
 * @apiGroup gitignore
 *
 * @apiParam {String} name   The name of the .gitignore template to get
 */

/**
 * @api {get} /gitignore/templates templates
 * @apiName templates
 * @apiGroup gitignore
 *
 */

/**
 * @api {post} /repos/:user/:repo/issues create
 * @apiName create
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} title   
 * @apiParam {String} [body]  Optional 
 * @apiParam {String} [assignee]  Optional Login for the user that this issue should be assigned to.
 * @apiParam {Number} [milestone]  Optional Milestone to associate this issue with.
 * @apiParam {Json} [labels]  Optional Array of strings - Labels to associate with this issue.
 */

/**
 * @api {post} /repos/:user/:repo/issues/:number/comments createComment
 * @apiName createComment
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} body   
 */

/**
 * @api {post} /repos/:user/:repo/labels createLabel
 * @apiName createLabel
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} name   
 * @apiParam {String} color   6 character hex code, without a leading #.
 */

/**
 * @api {post} /repos/:user/:repo/milestones createMilestone
 * @apiName createMilestone
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} title   
 * @apiParam {String} [state]  Optional 
 * @apiParam {String} [description]  Optional 
 * @apiParam {Date} [due_on]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 */

/**
 * @api {delete} /repos/:user/:repo/issues/comments/:id deleteComment
 * @apiName deleteComment
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {delete} /repos/:user/:repo/labels/:name deleteLabel
 * @apiName deleteLabel
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} name   
 */

/**
 * @api {delete} /repos/:user/:repo/milestones/:number deleteMilestone
 * @apiName deleteMilestone
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 */

/**
 * @api {patch} /repos/:user/:repo/issues/:number edit
 * @apiName edit
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
 */

/**
 * @api {patch} /repos/:user/:repo/issues/comments/:id editComment
 * @apiName editComment
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 * @apiParam {String} body   
 */

/**
 * @api {get} /issues getAll
 * @apiName getAll
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
 */

/**
 * @api {get} /repos/:user/:repo/milestones getAllMilestones
 * @apiName getAllMilestones
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [state]  Optional 
 * @apiParam {String} [sort]  Optional due_date, completeness, default: due_date
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/issues/comments/:id getComment
 * @apiName getComment
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number/comments getComments
 * @apiName getComments
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/issues/events/:id getEvent
 * @apiName getEvent
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number/events getEvents
 * @apiName getEvents
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number/labels getIssueLabels
 * @apiName getIssueLabels
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 */

/**
 * @api {get} /repos/:user/:repo/labels/:name getLabel
 * @apiName getLabel
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} name   
 */

/**
 * @api {get} /repos/:user/:repo/labels getLabels
 * @apiName getLabels
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/milestones/:number getMilestone
 * @apiName getMilestone
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 */

/**
 * @api {get} /repos/:user/:repo/issues/events getRepoEvents
 * @apiName getRepoEvents
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/issues/:number getRepoIssue
 * @apiName getRepoIssue
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 */

/**
 * @api {get} /repos/:user/:repo/issues/comments repoComments
 * @apiName repoComments
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [sort]  Optional 
 * @apiParam {String} [direction]  Optional 
 * @apiParam {Date} [since]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/issues repoIssues
 * @apiName repoIssues
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
 */

/**
 * @api {post} /repos/:user/:repo/labels/:name updateLabel
 * @apiName updateLabel
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} name   
 * @apiParam {String} color   6 character hex code, without a leading #.
 */

/**
 * @api {patch} /repos/:user/:repo/milestones/:number updateMilestone
 * @apiName updateMilestone
 * @apiGroup issues
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} title   
 * @apiParam {String} [state]  Optional 
 * @apiParam {String} [description]  Optional 
 * @apiParam {Date} [due_on]  Optional Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 */

/**
 * @api {post} /markdown render
 * @apiName render
 * @apiGroup markdown
 *
 * @apiParam {String} text   The Markdown text to render
 * @apiParam {String} [mode]  Optional The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly.
 * @apiParam {String} [context]  Optional The repository context, only taken into account when rendering as `gfm`
 */

/**
 * @api {post} /markdown/raw renderRaw
 * @apiName renderRaw
 * @apiGroup markdown
 *
 * @apiParam {String} data   Raw data to send as the body of the request
 */

/**
 * @api {get} /emojis emojis
 * @apiName emojis
 * @apiGroup misc
 *
 */

/**
 * @api {get} /meta meta
 * @apiName meta
 * @apiGroup misc
 *
 */

/**
 * @api {get} /rate_limit rateLimit
 * @apiName rateLimit
 * @apiGroup misc
 *
 */

/**
 * @api {put} /orgs/:org/memberships/:user addOrganizationMembership
 * @apiName addOrganizationMembership
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 */

/**
 * @api {put} /teams/:id/members/:user addTeamMember
 * @apiName addTeamMember
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 */

/**
 * @api {put} /teams/:id/memberships/:user addTeamMembership
 * @apiName addTeamMembership
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 */

/**
 * @api {put} /teams/:id/repos/:user/:repo addTeamRepo
 * @apiName addTeamRepo
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {delete} /orgs/:org/public_members/:user concealMembership
 * @apiName concealMembership
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 */

/**
 * @api {post} /orgs/:org/teams createTeam
 * @apiName createTeam
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} name   
 * @apiParam {Array} [repo_names]  Optional Array of strings
 * @apiParam {String} [permission]  Optional `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories.
 */

/**
 * @api {delete} /teams/:id deleteTeam
 * @apiName deleteTeam
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 */

/**
 * @api {delete} /teams/:id/members/:user deleteTeamMember
 * @apiName deleteTeamMember
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 */

/**
 * @api {delete} /teams/:id/repos/:user/:repo deleteTeamRepo
 * @apiName deleteTeamRepo
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /orgs/:org get
 * @apiName get
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/orgs getFromUser
 * @apiName getFromUser
 * @apiGroup orgs
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /orgs/:org/members/:user getMember
 * @apiName getMember
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 */

/**
 * @api {get} /orgs/:org/members getMembers
 * @apiName getMembers
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 * @apiParam {String} [filter]  Optional 
 */

/**
 * @api {get} /orgs/:org/public_members/:user getPublicMember
 * @apiName getPublicMember
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 */

/**
 * @api {get} /orgs/:org/public_members getPublicMembers
 * @apiName getPublicMembers
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 */

/**
 * @api {get} /teams/:id getTeam
 * @apiName getTeam
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 */

/**
 * @api {get} /teams/:id/members/:user getTeamMember
 * @apiName getTeamMember
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 */

/**
 * @api {get} /teams/:id/members getTeamMembers
 * @apiName getTeamMembers
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /teams/:id/memberships/:user getTeamMembership
 * @apiName getTeamMembership
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 */

/**
 * @api {get} /teams/:id/repos/:user/:repo getTeamRepo
 * @apiName getTeamRepo
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /teams/:id/repos getTeamRepos
 * @apiName getTeamRepos
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /orgs/:org/teams getTeams
 * @apiName getTeams
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {put} /orgs/:org/public_members/:user publicizeMembership
 * @apiName publicizeMembership
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 */

/**
 * @api {delete} /orgs/:org/members/:user removeMember
 * @apiName removeMember
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 */

/**
 * @api {delete} /orgs/:org/memberships/:user removeOrganizationMembership
 * @apiName removeOrganizationMembership
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} user   
 */

/**
 * @api {patch} /orgs/:org update
 * @apiName update
 * @apiGroup orgs
 *
 * @apiParam {String} org   
 * @apiParam {String} [billing_email]  Optional Billing email address. This address is not publicized.
 * @apiParam {String} [company]  Optional 
 * @apiParam {String} [email]  Optional Publicly visible email address.
 * @apiParam {String} [location]  Optional 
 * @apiParam {String} [name]  Optional 
 */

/**
 * @api {patch} /teams/:id updateTeam
 * @apiName updateTeam
 * @apiGroup orgs
 *
 * @apiParam {String} id   
 * @apiParam {String} name   
 * @apiParam {String} [permission]  Optional `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories.
 */

/**
 * @api {post} /repos/:user/:repo/pulls create
 * @apiName create
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} title   
 * @apiParam {String} base   The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head   The branch (or git ref) where your changes are implemented.
 * @apiParam {String} [body]  Optional 
 */

/**
 * @api {post} /repos/:user/:repo/pulls/:number/comments createComment
 * @apiName createComment
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} body   
 * @apiParam {String} commit_id   Sha of the commit to comment on.
 * @apiParam {String} path   Relative path of the file to comment on.
 * @apiParam {Number} position   Column index in the diff to comment on.
 */

/**
 * @api {post} /repos/:user/:repo/pulls/:number/comments createCommentReply
 * @apiName createCommentReply
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} body   
 * @apiParam {Number} in_reply_to   
 */

/**
 * @api {post} /repos/:user/:repo/pulls createFromIssue
 * @apiName createFromIssue
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} issue   
 * @apiParam {String} base   The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head   The branch (or git ref) where your changes are implemented.
 */

/**
 * @api {delete} /repos/:user/:repo/pulls/comments/:number deleteComment
 * @apiName deleteComment
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number get
 * @apiName get
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 */

/**
 * @api {get} /repos/:user/:repo/pulls getAll
 * @apiName getAll
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
 */

/**
 * @api {get} /repos/:user/:repo/pulls/comments/:number getComment
 * @apiName getComment
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number/comments getComments
 * @apiName getComments
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number/commits getCommits
 * @apiName getCommits
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number/files getFiles
 * @apiName getFiles
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/pulls/:number/merge getMerged
 * @apiName getMerged
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {put} /repos/:user/:repo/pulls/:number/merge merge
 * @apiName merge
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} [commit_message]  Optional The message that will be used for the merge commit
 */

/**
 * @api {patch} /repos/:user/:repo/pulls/:number update
 * @apiName update
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} [state]  Optional 
 * @apiParam {String} [title]  Optional 
 * @apiParam {String} [body]  Optional 
 */

/**
 * @api {patch} /repos/:user/:repo/pulls/comments/:number updateComment
 * @apiName updateComment
 * @apiGroup pullRequests
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} number   
 * @apiParam {String} body   
 */

/**
 * @api {post} /repos/:owner/:repo/releases createRelease
 * @apiName createRelease
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
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/assets/:id deleteAsset
 * @apiName deleteAsset
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 */

/**
 * @api {delete} /repos/:owner/:repo/releases/:id deleteRelease
 * @apiName deleteRelease
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 */

/**
 * @api {patch} /repos/:owner/:repo/releases/assets/:id editAsset
 * @apiName editAsset
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 * @apiParam {String} name   
 * @apiParam {String} [label]  Optional An alternate short description of the asset. Used in place of the filename.
 */

/**
 * @api {patch} /repos/:owner/:repo/releases/:id editRelease
 * @apiName editRelease
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
 */

/**
 * @api {get} /repos/:owner/:repo/releases/assets/:id getAsset
 * @apiName getAsset
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /repos/:owner/:repo/releases/latest getLatestRelease
 * @apiName getLatestRelease
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id getRelease
 * @apiName getRelease
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /repos/:owner/:repo/releases/:id/assets listAssets
 * @apiName listAssets
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /repos/:owner/:repo/releases listReleases
 * @apiName listReleases
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {post} /repos/:owner/:repo/releases/:id/assets uploadAsset
 * @apiName uploadAsset
 * @apiGroup releases
 *
 * @apiParam {String} owner   
 * @apiParam {Number} id   
 * @apiParam {String} repo   
 * @apiParam {String} name   the file name of the asset
 */

/**
 * @api {put} /repos/:user/:repo/collaborators/:collabuser addCollaborator
 * @apiName addCollaborator
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} collabuser   
 */

/**
 * @api {get} /repos/:user/:repo/compare/:base...:head compareCommits
 * @apiName compareCommits
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} base   The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head   The branch (or git ref) where your changes are implemented.
 */

/**
 * @api {post} /user/repos create
 * @apiName create
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
 */

/**
 * @api {post} /repos/:user/:repo/commits/:sha/comments createCommitComment
 * @apiName createCommitComment
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
 */

/**
 * @api {put} /repos/:user/:repo/contents/:path createContent
 * @apiName createContent
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [content]  Optional 
 * @apiParam {String} [message]  Optional 
 * @apiParam {String} [path]  Optional The content path.
 * @apiParam {String} [ref]  Optional The String name of the Commit/Branch/Tag. Defaults to master.
 */

/**
 * @api {post} /repos/:user/:repo/deployments createDeployment
 * @apiName createDeployment
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
 */

/**
 * @api {post} /repos/:user/:repo/deployments/:id/statuses createDeploymentStatus
 * @apiName createDeploymentStatus
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 * @apiParam {String} [state]  Optional The state of the status. Can be one of pending, success, error, or failure.
 * @apiParam {String} [target_url]  Optional The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. Default: ''
 * @apiParam {String} [description]  Optional A short description of the status. Default: ''
 */

/**
 * @api {put} /repos/:user/:repo/contents/:path createFile
 * @apiName createFile
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
 */

/**
 * @api {post} /orgs/:org/repos createFromOrg
 * @apiName createFromOrg
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
 */

/**
 * @api {post} /repos/:user/:repo/hooks createHook
 * @apiName createHook
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} name   
 * @apiParam {Json} config   A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 * @apiParam {Array} [events]  Optional Determines what events the hook is triggered for. Default: `['push']`.
 * @apiParam {Boolean} [active]  Optional Determines whether the hook is actually triggered on pushes.
 */

/**
 * @api {post} /repos/:user/:repo/keys createKey
 * @apiName createKey
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} title   
 * @apiParam {String} key   
 */

/**
 * @api {delete} /repos/:user/:repo delete
 * @apiName delete
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {delete} /repos/:user/:repo/comments/:id deleteCommitComment
 * @apiName deleteCommitComment
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {delete} /repos/:user/:repo/downloads/:id deleteDownload
 * @apiName deleteDownload
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {delete} /repos/:user/:repo/contents/:path deleteFile
 * @apiName deleteFile
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
 */

/**
 * @api {delete} /repos/:user/:repo/hooks/:id deleteHook
 * @apiName deleteHook
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {delete} /repos/:user/:repo/keys/:id deleteKey
 * @apiName deleteKey
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {post} /repos/:user/:repo/forks fork
 * @apiName fork
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [organization]  Optional Organization login. The repository will be forked into this organization.
 */

/**
 * @api {get} /repos/:user/:repo get
 * @apiName get
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /user/repos getAll
 * @apiName getAll
 * @apiGroup repos
 *
 * @apiParam {String} [type]  Optional Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`.
 * @apiParam {String} [sort]  Optional Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {String} [direction]  Optional 
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/comments getAllCommitComments
 * @apiName getAllCommitComments
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/:archive_format/:ref getArchiveLink
 * @apiName getArchiveLink
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} archive_format   Either tarball or zipball
 * @apiParam {String} [ref]  Optional String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 */

/**
 * @api {get} /repos/:user/:repo/branches/:branch getBranch
 * @apiName getBranch
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} branch   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/branches getBranches
 * @apiName getBranches
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/collaborators/:collabuser getCollaborator
 * @apiName getCollaborator
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} collabuser   
 */

/**
 * @api {get} /repos/:user/:repo/collaborators getCollaborators
 * @apiName getCollaborators
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/commits/:sha getCommit
 * @apiName getCommit
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 */

/**
 * @api {get} /repos/:user/:repo/comments/:id getCommitComment
 * @apiName getCommitComment
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {get} /repos/:user/:repo/commits/:sha/comments getCommitComments
 * @apiName getCommitComments
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/commits getCommits
 * @apiName getCommits
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
 */

/**
 * @api {get} /repos/:user/:repo/contents/:path getContent
 * @apiName getContent
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [path]  Optional The content path.
 * @apiParam {String} [ref]  Optional The String name of the Commit/Branch/Tag. Defaults to master.
 */

/**
 * @api {get} /repos/:user/:repo/contributors getContributors
 * @apiName getContributors
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Boolean} [anon]  Optional Set to 1 or true to include anonymous contributors in results.
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/deployments/:id/statuses getDeploymentStatuses
 * @apiName getDeploymentStatuses
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {get} /repos/:user/:repo/deployments getDeployments
 * @apiName getDeployments
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
 */

/**
 * @api {get} /repos/:user/:repo/downloads/:id getDownload
 * @apiName getDownload
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {get} /repos/:user/:repo/downloads getDownloads
 * @apiName getDownloads
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/forks getForks
 * @apiName getForks
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [sort]  Optional Possible values: `newest`, `oldest`, `watchers`, default: `newest`.
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /orgs/:org/repos getFromOrg
 * @apiName getFromOrg
 * @apiGroup repos
 *
 * @apiParam {String} org   
 * @apiParam {String} [type]  Optional Possible values: `all`, `public`, `private`, `forks`, `sources`, `member`. Default: `all`.
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/repos getFromUser
 * @apiName getFromUser
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} [type]  Optional Possible values: `all`, `owner`, `member`. Default: `owner`.
 * @apiParam {String} [sort]  Optional Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
 * @apiParam {String} [direction]  Optional 
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/hooks/:id getHook
 * @apiName getHook
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {get} /repos/:user/:repo/hooks getHooks
 * @apiName getHooks
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/keys/:id getKey
 * @apiName getKey
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {get} /repos/:user/:repo/keys getKeys
 * @apiName getKeys
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/languages getLanguages
 * @apiName getLanguages
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/readme getReadme
 * @apiName getReadme
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} [ref]  Optional The String name of the Commit/Branch/Tag. Defaults to master.
 */

/**
 * @api {get} /repos/:user/:repo/stargazers getStargazers
 * @apiName getStargazers
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /user/starred getStarred
 * @apiName getStarred
 * @apiGroup repos
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/starred getStarredFromUser
 * @apiName getStarredFromUser
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /user/starred/:user/:repo getStarring
 * @apiName getStarring
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/stats/code_frequency getStatsCodeFrequency
 * @apiName getStatsCodeFrequency
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /repos/:user/:repo/stats/commit_activity getStatsCommitActivity
 * @apiName getStatsCommitActivity
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /repos/:user/:repo/stats/contributors getStatsContributors
 * @apiName getStatsContributors
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /repos/:user/:repo/stats/participation getStatsParticipation
 * @apiName getStatsParticipation
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /repos/:user/:repo/stats/punch_card getStatsPunchCard
 * @apiName getStatsPunchCard
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /repos/:user/:repo/tags getTags
 * @apiName getTags
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/teams getTeams
 * @apiName getTeams
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /user/watched getWatched
 * @apiName getWatched
 * @apiGroup repos
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/watched getWatchedFromUser
 * @apiName getWatchedFromUser
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /repos/:user/:repo/watchers getWatchers
 * @apiName getWatchers
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /user/watched/:user/:repo getWatching
 * @apiName getWatching
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {post} /repos/:user/:repo/merges merge
 * @apiName merge
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} base   The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 * @apiParam {String} head   The branch (or git ref) where your changes are implemented.
 * @apiParam {String} [commit_message]  Optional Commit message to use for the merge commit. If omitted, a default message will be used.
 */

/**
 * @api {get} /repositories/:id one
 * @apiName one
 * @apiGroup repos
 *
 * @apiParam {String} id   
 */

/**
 * @api {delete} /repos/:user/:repo/collaborators/:collabuser removeCollaborator
 * @apiName removeCollaborator
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} collabuser   
 */

/**
 * @api {put} /user/starred/:user/:repo star
 * @apiName star
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {post} /repos/:user/:repo/hooks/:id/test testHook
 * @apiName testHook
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 */

/**
 * @api {delete} /user/starred/:user/:repo unStar
 * @apiName unStar
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {delete} /user/watched/:user/:repo unWatch
 * @apiName unWatch
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {patch} /repos/:user/:repo update
 * @apiName update
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
 */

/**
 * @api {patch} /repos/:user/:repo/comments/:id updateCommitComment
 * @apiName updateCommitComment
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 * @apiParam {String} body   
 */

/**
 * @api {put} /repos/:user/:repo/contents/:path updateFile
 * @apiName updateFile
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
 */

/**
 * @api {patch} /repos/:user/:repo/hooks/:id updateHook
 * @apiName updateHook
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
 */

/**
 * @api {put} /repos/:user/:repo/keys/:id updateKey
 * @apiName updateKey
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} id   
 * @apiParam {String} title   
 * @apiParam {String} key   
 */

/**
 * @api {put} /user/watched/:user/:repo watch
 * @apiName watch
 * @apiGroup repos
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 */

/**
 * @api {get} /search/code code
 * @apiName code
 * @apiGroup search
 *
 * @apiParam {String} q   Search Term
 * @apiParam {String} [sort]  Optional indexed only
 * @apiParam {String} [order]  Optional asc or desc
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /legacy/user/email/:email email
 * @apiName email
 * @apiGroup search
 *
 * @apiParam {String} email   Email address
 */

/**
 * @api {get} /search/issues issues
 * @apiName issues
 * @apiGroup search
 *
 * @apiParam {String} q   Search Term
 * @apiParam {String} [sort]  Optional comments, created, or updated
 * @apiParam {String} [order]  Optional asc or desc
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /search/repositories repos
 * @apiName repos
 * @apiGroup search
 *
 * @apiParam {String} q   Search Term
 * @apiParam {String} [sort]  Optional stars, forks, or updated
 * @apiParam {String} [order]  Optional asc or desc
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /search/users users
 * @apiName users
 * @apiGroup search
 *
 * @apiParam {String} q   Search Term
 * @apiParam {String} [sort]  Optional followers, repositories, or joined
 * @apiParam {String} [order]  Optional asc or desc
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {post} /repos/:user/:repo/statuses/:sha create
 * @apiName create
 * @apiGroup statuses
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 * @apiParam {String} state   State of the status - can be one of pending, success, error, or failure.
 * @apiParam {String} [target_url]  Optional Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status.
 * @apiParam {String} [description]  Optional Short description of the status.
 * @apiParam {String} [context]  Optional A string label to differentiate this status from the status of other systems.
 */

/**
 * @api {get} /repos/:user/:repo/commits/:sha/statuses get
 * @apiName get
 * @apiGroup statuses
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 */

/**
 * @api {get} /repos/:user/:repo/commits/:sha/status getCombined
 * @apiName getCombined
 * @apiGroup statuses
 *
 * @apiParam {String} user   
 * @apiParam {String} repo   
 * @apiParam {String} sha   
 */

/**
 * @api {post} /user/emails addEmails
 * @apiName addEmails
 * @apiGroup user
 *
 */

/**
 * @api {post} /user/keys createKey
 * @apiName createKey
 * @apiGroup user
 *
 * @apiParam {String} title   
 * @apiParam {String} key   
 */

/**
 * @api {delete} /user/emails deleteEmails
 * @apiName deleteEmails
 * @apiGroup user
 *
 */

/**
 * @api {delete} /user/keys/:id deleteKey
 * @apiName deleteKey
 * @apiGroup user
 *
 * @apiParam {String} id   
 */

/**
 * @api {patch} /user/memberships/orgs/:org editOrganizationMembership
 * @apiName editOrganizationMembership
 * @apiGroup user
 *
 * @apiParam {String} org   
 * @apiParam {String} state   
 */

/**
 * @api {put} /user/following/:user followUser
 * @apiName followUser
 * @apiGroup user
 *
 * @apiParam {String} user   
 */

/**
 * @api {get} /user get
 * @apiName get
 * @apiGroup user
 *
 */

/**
 * @api {get} /users getAll
 * @apiName getAll
 * @apiGroup user
 *
 * @apiParam {Number} [since]  Optional The integer ID of the last User that you’ve seen.
 */

/**
 * @api {get} /user/emails getEmails
 * @apiName getEmails
 * @apiGroup user
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /user/following/:user getFollowUser
 * @apiName getFollowUser
 * @apiGroup user
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/followers getFollowers
 * @apiName getFollowers
 * @apiGroup user
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /user/following getFollowing
 * @apiName getFollowing
 * @apiGroup user
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/following getFollowingFromUser
 * @apiName getFollowingFromUser
 * @apiGroup user
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user getFrom
 * @apiName getFrom
 * @apiGroup user
 *
 * @apiParam {String} user   
 */

/**
 * @api {get} /user/keys/:id getKey
 * @apiName getKey
 * @apiGroup user
 *
 * @apiParam {String} id   
 */

/**
 * @api {get} /user/keys getKeys
 * @apiName getKeys
 * @apiGroup user
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /users/:user/keys getKeysFromUser
 * @apiName getKeysFromUser
 * @apiGroup user
 *
 * @apiParam {String} user   
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /user/orgs getOrgs
 * @apiName getOrgs
 * @apiGroup user
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {get} /user/teams getTeams
 * @apiName getTeams
 * @apiGroup user
 *
 * @apiParam {Number} [page]  Optional Page number of the results to fetch.
 * @apiParam {Number} [per_page]  Optional A custom page size up to 100. Default is 30.
 */

/**
 * @api {delete} /user/following/:user unFollowUser
 * @apiName unFollowUser
 * @apiGroup user
 *
 * @apiParam {String} user   
 */

/**
 * @api {patch} /user update
 * @apiName update
 * @apiGroup user
 *
 * @apiParam {String} [name]  Optional 
 * @apiParam {String} [email]  Optional 
 * @apiParam {String} [blog]  Optional 
 * @apiParam {String} [company]  Optional 
 * @apiParam {String} [location]  Optional 
 * @apiParam {Boolean} [hireable]  Optional 
 * @apiParam {String} [bio]  Optional 
 */

/**
 * @api {patch} /user/keys/:id updateKey
 * @apiName updateKey
 * @apiGroup user
 *
 * @apiParam {String} id   
 * @apiParam {String} title   
 * @apiParam {String} key   
 */

