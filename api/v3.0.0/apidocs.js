/** section: github
 * mixin gists
 **/
/** section: github
 *  gists#getAll(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  gists#getFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  gists#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - description (String): Optional.
 *  - public (Boolean): Required.
 *  - files (Json): Required. Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 **/
/** section: github
 *  gists#edit(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - description (String): Optional.
 *  - files (Json): Required. Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
 **/
/** section: github
 *  gists#public(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  gists#starred(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  gists#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  gists#star(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  gists#deleteStar(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  gists#checkStar(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  gists#fork(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  gists#delete(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 * mixin gitdata
 **/
/** section: github
 *  gitdata#getBlob(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  gitdata#createBlob(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - content (String): Required.
 *  - encoding (String): Required.
 **/
/** section: github
 *  gitdata#getCommit(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 **/
/** section: github
 *  gitdata#createCommit(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - message (String): Required. String of the commit message
 *  - tree (String): Required. String of the SHA of the tree object this commit points to
 *  - parents (Array): Required. Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided.
 *  - author (Json): Optional.
 *  - committer (Json): Optional.
 **/
/** section: github
 *  gitdata#getReference(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 **/
/** section: github
 *  gitdata#getAllReferences(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  gitdata#createReference(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 *  - sha (String): Required.
 **/
/** section: github
 *  gitdata#updateReference(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 *  - sha (String): Required.
 *  - force (Boolean): Optional. Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
 **/
/** section: github
 *  gitdata#deleteReference(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 **/
/** section: github
 *  gitdata#getTag(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 **/
/** section: github
 *  gitdata#createTag(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - tag (String): Required. String of the tag
 *  - message (String): Required. String of the tag message
 *  - object (String): Required. String of the SHA of the git object this is tagging
 *  - type (String): Required. String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
 *  - tagger (Json): Required. JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged
 **/
/** section: github
 *  gitdata#getTree(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 *  - recursive (Boolean): Optional.
 **/
/** section: github
 *  gitdata#createTree(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - tree (Json): Required. Array of Hash objects (of path, mode, type and sha) specifying a tree structure
 *  - base_tree (String): Optional. String of the SHA1 of the tree you want to update with new data
 **/
/** section: github
 * mixin issues
 **/
/** section: github
 *  issues#getAll(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - filter (String): Optional. Validation rule: ` ^(all|assigned|created|mentioned|subscribed)$ `.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - labels (String): Optional. String list of comma separated Label names. Example: bug,ui,@high
 *  - sort (String): Optional. Validation rule: ` ^(created|updated|comments)$ `.
 *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  issues#repoIssues(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - milestone (String): Optional. Validation rule: ` ^([0-9]+|none|\*)$ `.
 *  - state (String): Optional. open or closed Validation rule: ` ^(open|closed)$ `.
 *  - assignee (String): Optional. String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User.
 *  - mentioned (String): Optional. String User login.
 *  - labels (String): Optional. String list of comma separated Label names. Example: bug,ui,@high
 *  - sort (String): Optional. Validation rule: ` ^(created|updated|comments)$ `.
 *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  issues#getRepoIssue(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  issues#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - title (String): Required.
 *  - body (String): Optional.
 *  - assignee (String): Optional. Optional string - Login for the user that this issue should be assigned to.
 *  - milestone (Number): Optional. Optional number - Milestone to associate this issue with. Validation rule: ` ^[0-9]+$ `.
 *  - labels (Json): Required. Optional array of strings - Labels to associate with this issue.
 **/
/** section: github
 *  issues#edit(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - title (String): Optional.
 *  - body (String): Optional.
 *  - assignee (String): Optional. Optional string - Login for the user that this issue should be assigned to.
 *  - milestone (Number): Optional. Optional number - Milestone to associate this issue with. Validation rule: ` ^[0-9]+$ `.
 *  - labels (Json): Optional. Optional array of strings - Labels to associate with this issue.
 *  - state (String): Optional. open or closed Validation rule: ` ^(open|closed)$ `.
 **/
/** section: github
 *  issues#repoComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sort (String): Optional. Validation rule: ` ^(created|updated)$ `.
 *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  issues#getComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  issues#getComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  issues#createComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - body (String): Required.
 **/
/** section: github
 *  issues#editComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 *  - body (String): Required.
 **/
/** section: github
 *  issues#deleteComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  issues#getEvents(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  issues#getRepoEvents(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  issues#getEvent(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  issues#getLabels(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  issues#getLabel(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - name (String): Required.
 **/
/** section: github
 *  issues#createLabel(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - name (String): Required.
 *  - color (String): Required. Required string - 6 character hex code, without a leading #.
 **/
/** section: github
 *  issues#updateLabel(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - name (String): Required.
 *  - color (String): Required. Required string - 6 character hex code, without a leading #.
 **/
/** section: github
 *  issues#deleteLabel(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - name (String): Required.
 **/
/** section: github
 *  issues#getAllMilestones(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - sort (String): Optional. due_date, completeness, default: due_date Validation rule: ` ^(due_date|completeness)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  issues#getMilestone(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  issues#createMilestone(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - title (String): Required.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - description (String): Optional.
 *  - due_on (Date): Optional. Optional string - ISO 8601 time.
 **/
/** section: github
 *  issues#updateMilestone(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - title (String): Required.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - description (String): Optional.
 *  - due_on (Date): Optional. Optional string - ISO 8601 time.
 **/
/** section: github
 *  issues#deleteMilestone(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 * mixin authorization
 **/
/** section: github
 *  authorization#getAll(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  authorization#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  authorization#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - scopes (Array): Optional. Optional array - A list of scopes that this authorization is in.
 *  - note (String): Optional. Optional string - A note to remind you what the OAuth token is for.
 *  - note_url (String): Optional. Optional string - A URL to remind you what app the OAuth token is for.
 **/
/** section: github
 *  authorization#update(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - scopes (Array): Optional. Optional array - A list of scopes that this authorization is in.
 *  - add_scopes (Array): Optional. Optional array - A list of scopes to add to this authorization.
 *  - remove_scopes (Array): Optional. Optional array - A list of scopes to remove from this authorization.
 *  - note (String): Optional. Optional string - A note to remind you what the OAuth token is for.
 *  - note_url (String): Optional. Optional string - A URL to remind you what app the OAuth token is for.
 **/
/** section: github
 *  authorization#delete(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 * mixin orgs
 **/
/** section: github
 *  orgs#getFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  orgs#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  orgs#update(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - billing_email (String): Optional. Optional string - Billing email address. This address is not publicized.
 *  - company (String): Optional.
 *  - email (String): Optional. Optional string - Publicly visible email address.
 *  - location (String): Optional.
 *  - name (String): Optional.
 **/
/** section: github
 *  orgs#getMembers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  orgs#getMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  orgs#removeMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  orgs#getPublicMembers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 **/
/** section: github
 *  orgs#getPublicMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  orgs#publicizeMembership(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  orgs#concealMembership(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  orgs#getTeams(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 **/
/** section: github
 *  orgs#getTeam(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  orgs#createTeam(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - name (String): Required.
 *  - repo_names (Array): Optional. Optional array of strings
 *  - permission (String): Optional. `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories. Validation rule: ` ^(pull|push|admin)$ `.
 **/
/** section: github
 *  orgs#updateTeam(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - name (String): Required.
 *  - permission (String): Optional. `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories. Validation rule: ` ^(pull|push|admin)$ `.
 **/
/** section: github
 *  orgs#deleteTeam(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  orgs#getTeamMembers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  orgs#getTeamMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  orgs#addTeamMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  orgs#deleteTeamMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 **/
/** section: github
 *  orgs#getTeamRepos(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  orgs#getTeamRepo(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  orgs#addTeamRepo(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  orgs#deleteTeamRepo(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 * mixin statuses
 **/
/** section: github
 *  statuses#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 **/
/** section: github
 *  statuses#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 *  - state (String): Required. State of the status - can be one of pending, success, error, or failure. Validation rule: ` ^(pending|success|error|failure)$ `.
 *  - target_url (String): Optional. Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status.
 *  - description (String): Optional. Short description of the status.
 **/
/** section: github
 * mixin pullRequests
 **/
/** section: github
 *  pullRequests#getAll(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  pullRequests#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  pullRequests#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - title (String): Required.
 *  - body (String): Optional.
 *  - base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 *  - head (String): Required. Required string - The branch (or git ref) where your changes are implemented.
 **/
/** section: github
 *  pullRequests#createFromIssue(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - issue (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 *  - head (String): Required. Required string - The branch (or git ref) where your changes are implemented.
 **/
/** section: github
 *  pullRequests#update(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - state (String): Optional. Validation rule: ` ^(open|closed)$ `.
 *  - title (String): Required.
 *  - body (String): Optional.
 **/
/** section: github
 *  pullRequests#getCommits(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  pullRequests#getFiles(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  pullRequests#getMerged(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  pullRequests#merge(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - commit_message (String): Optional. Optional string - The message that will be used for the merge commit
 **/
/** section: github
 *  pullRequests#getComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  pullRequests#getComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  pullRequests#createComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - body (String): Required.
 *  - commit_id (String): Required. Required string - Sha of the commit to comment on.
 *  - path (String): Required. Required string - Relative path of the file to comment on.
 *  - position (Number): Required. Required number - Column index in the diff to comment on.
 **/
/** section: github
 *  pullRequests#createCommentReply(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - body (String): Required.
 *  - in_reply_to (Number): Required.
 **/
/** section: github
 *  pullRequests#updateComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 *  - body (String): Required.
 **/
/** section: github
 *  pullRequests#deleteComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - number (Number): Required. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 * mixin repos
 **/
/** section: github
 *  repos#getAll(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - type (String): Optional. Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`. Validation rule: ` ^(all|owner|public|private|member)$ `.
 *  - sort (String): Optional. Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
 *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - type (String): Optional. Possible values: `all`, `owner`, `member`. Default: `public`. Validation rule: ` ^(all|owner|member)$ `.
 *  - sort (String): Optional. Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
 *  - direction (String): Optional. Validation rule: ` ^(asc|desc)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getFromOrg(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - type (String): Optional. Possible values: `all`, `public`, `member`. Default: `all`. Validation rule: ` ^(all|public|member)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#create(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - name (String): Required.
 *  - description (String): Optional.
 *  - homepage (String): Optional.
 *  - private (Boolean): Optional. Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 *  - has_issues (Boolean): Optional. Optional boolean - true to enable issues for this repository, false to disable them. Default is true.
 *  - has_wiki (Boolean): Optional. Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true.
 *  - has_downloads (Boolean): Optional. Optional boolean - true to enable downloads for this repository, false to disable them. Default is true.
 *  - auto_init (Boolean): Optional. Optional boolean - true to create an initial commit with empty README. Default is false
 *  - gitignore_template (String): Optional. Optional string - Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 **/
/** section: github
 *  repos#createFromOrg(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - name (String): Required.
 *  - description (String): Optional.
 *  - homepage (String): Optional.
 *  - private (Boolean): Optional. Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 *  - has_issues (Boolean): Optional. Optional boolean - true to enable issues for this repository, false to disable them. Default is true.
 *  - has_wiki (Boolean): Optional. Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true.
 *  - has_downloads (Boolean): Optional. Optional boolean - true to enable downloads for this repository, false to disable them. Default is true.
 *  - auto_init (Boolean): Optional. Optional boolean - true to create an initial commit with empty README. Default is false
 *  - gitignore_template (String): Optional. Optional string - Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
 *  - team_id (Number): Optional. Optional number - The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  repos#update(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - name (String): Required.
 *  - description (String): Optional.
 *  - homepage (String): Optional.
 *  - private (Boolean): Optional. Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
 *  - has_issues (Boolean): Optional. Optional boolean - true to enable issues for this repository, false to disable them. Default is true.
 *  - has_wiki (Boolean): Optional. Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true.
 *  - has_downloads (Boolean): Optional. Optional boolean - true to enable downloads for this repository, false to disable them. Default is true.
 **/
/** section: github
 *  repos#delete(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  repos#merge(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 *  - head (String): Required. Required string - The branch (or git ref) where your changes are implemented.
 *  - commit_message (String): Optional. Optional string - Commit message to use for the merge commit. If omitted, a default message will be used.
 **/
/** section: github
 *  repos#getContributors(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - anon (Boolean): Optional. Optional flag. Set to 1 or true to include anonymous contributors in results.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getLanguages(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getTeams(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getTags(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getBranches(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getBranch(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - branch (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getCollaborators(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getCollaborator(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - collabuser (String): Required.
 **/
/** section: github
 *  repos#addCollaborator(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - collabuser (String): Required.
 **/
/** section: github
 *  repos#removeCollaborator(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - collabuser (String): Required.
 **/
/** section: github
 *  repos#getCommits(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Optional. Optional string - Sha or branch to start listing commits from.
 *  - path (String): Optional. Optional string - Only commits containing this file path will be returned.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 *  - since (Date): Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  repos#getCommit(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 **/
/** section: github
 *  repos#getAllCommitComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getCommitComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#createCommitComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sha (String): Required.
 *  - body (String): Required.
 *  - commit_id (String): Required. Required string - Sha of the commit to comment on.
 *  - path (String): Optional. Optional string - Relative path of the file to comment on.
 *  - position (Number): Optional. Optional number - Line index in the diff to comment on.
 *  - line (Number): Optional. Optional number - Line number in the file to comment on. Defaults to 1.
 **/
/** section: github
 *  repos#getCommitComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  repos#updateCommitComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 *  - body (String): Required.
 **/
/** section: github
 *  repos#compareCommits(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - base (String): Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
 *  - head (String): Required. Required string - The branch (or git ref) where your changes are implemented.
 **/
/** section: github
 *  repos#deleteCommitComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  repos#getReadme(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Optional. The String name of the Commit/Branch/Tag. Defaults to master.
 **/
/** section: github
 *  repos#getContent(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - path (String): Optional. The content path.
 *  - ref (String): Optional. The String name of the Commit/Branch/Tag. Defaults to master.
 **/
/** section: github
 *  repos#createFile(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - path (String): Required. The content path.
 *  - message (String): Required. The commit message.
 *  - content (String): Required. The new file content, Base64 encoded.
 *  - branch (String): Optional. The branch name. If not provided, uses the repository’s default branch (usually master).
 *  - author (Json): Optional.
 *  - committer (Json): Optional.
 **/
/** section: github
 *  repos#updateFile(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - path (String): Required. The content path.
 *  - message (String): Required. The commit message.
 *  - content (String): Required. The updated file content, Base64 encoded.
 *  - sha (String): Required. The blob SHA of the file being replaced.
 *  - branch (String): Optional. The branch name. If not provided, uses the repository’s default branch (usually master).
 *  - author (Json): Optional.
 *  - committer (Json): Optional.
 **/
/** section: github
 *  repos#deleteFile(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - path (String): Required. The content path.
 *  - message (String): Required. The commit message.
 *  - sha (String): Required. The blob SHA of the file being removed.
 *  - branch (String): Optional. The branch name. If not provided, uses the repository’s default branch (usually master).
 *  - author (Json): Optional.
 *  - committer (Json): Optional.
 **/
/** section: github
 *  repos#getArchiveLink(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - ref (String): Optional. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
 *  - archive_format (String): Required. Either tarball or zipball Validation rule: ` ^(tarball|zipball)$ `.
 **/
/** section: github
 *  repos#getDownloads(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getDownload(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  repos#deleteDownload(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  repos#getForks(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - sort (String): Optional. Possible values: `newest`, `oldest`, `watchers`, default: `newest`. Validation rule: ` ^(newest|oldest|watchers)$ `.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#fork(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - org (String): Optional. Optional String - Organization login. The repository will be forked into this organization.
 **/
/** section: github
 *  repos#getKeys(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  repos#createKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - title (String): Required.
 *  - key (String): Required.
 **/
/** section: github
 *  repos#updateKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 *  - title (String): Required.
 *  - key (String): Required.
 **/
/** section: github
 *  repos#deleteKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  repos#getStargazers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getStarred(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getStarredFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getStarring(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#star(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  repos#unStar(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  repos#getWatchers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getWatched(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getWatchedFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getWatching(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#watch(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  repos#unWatch(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 **/
/** section: github
 *  repos#getHooks(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  repos#getHook(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  repos#createHook(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - name (String): Required.
 *  - config (Json): Required. Required hash - A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 *  - events (Array): Optional. Optional array - Determines what events the hook is triggered for. Default: `['push']`.
 *  - active (Boolean): Optional. Optional boolean - Determines whether the hook is actually triggered on pushes.
 **/
/** section: github
 *  repos#updateHook(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 *  - name (String): Required.
 *  - config (Json): Required. Required hash - A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
 *  - events (Array): Optional. Optional array - Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`.
 *  - add_events (Array): Optional. Optional array - Determines a list of events to be added to the list of events that the Hook triggers for.
 *  - remove_events (Array): Optional. Optional array - Determines a list of events to be removed from the list of events that the Hook triggers for.
 *  - active (Boolean): Optional. Optional boolean - Determines whether the hook is actually triggered on pushes.
 **/
/** section: github
 *  repos#testHook(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 *  repos#deleteHook(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - id (String): Required.
 **/
/** section: github
 * mixin user
 **/
/** section: github
 *  user#getFrom(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 **/
/** section: github
 *  user#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/
/** section: github
 *  user#update(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - name (String): Optional.
 *  - email (String): Optional.
 *  - blog (String): Optional.
 *  - company (String): Optional.
 *  - location (String): Optional.
 *  - hireable (Boolean): Optional.
 *  - bio (String): Optional.
 **/
/** section: github
 *  user#getOrgs(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  user#getEmails(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  user#addEmails(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/
/** section: github
 *  user#deleteEmails(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/
/** section: github
 *  user#getFollowers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  user#getFollowingFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  user#getFollowing(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  user#getFollowUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  user#followUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 **/
/** section: github
 *  user#unFollowUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 **/
/** section: github
 *  user#getKeys(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  user#getKeysFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  user#getKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  user#createKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - title (String): Required.
 *  - key (String): Required.
 **/
/** section: github
 *  user#updateKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 *  - title (String): Required.
 *  - key (String): Required.
 **/
/** section: github
 *  user#deleteKey(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 * mixin events
 **/
/** section: github
 *  events#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  events#getFromRepo(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  events#getFromRepoIssues(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  events#getFromRepoNetwork(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  events#getFromOrg(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - org (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  events#getReceived(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  events#getReceivedPublic(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  events#getFromUser(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  events#getFromUserPublic(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  events#getFromUserOrg(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - org (String): Required.
 *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
 *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 * mixin search
 **/
/** section: github
 *  search#issues(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - user (String): Required.
 *  - repo (String): Required.
 *  - state (String): Required. open or closed Validation rule: ` ^(open|closed)$ `.
 *  - keyword (String): Required. Search term
 **/
/** section: github
 *  search#repos(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - keyword (String): Required. Search term
 *  - language (String): Optional. Filter results by language, see https://github.com/languages
 *  - start_page (Number): Optional. Page number to fetch Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  search#users(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - keyword (String): Required. Keyword search parameters
 *  - start_page (Number): Optional. Page number to fetch Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  search#email(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - email (String): Required. Email address
 **/
/** section: github
 * mixin markdown
 **/
/** section: github
 *  markdown#render(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-GitHub-OTP'.
 *  - text (String): Required. The Markdown text to render
 *  - mode (String): Optional. The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly. Validation rule: ` ^(markdown|gfm)$ `.
 *  - context (String): Optional. The repository context, only taken into account when rendering as `gfm`
 **/
