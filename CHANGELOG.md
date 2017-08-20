# CHANGELOG

## 9.3.1

Bug fixes:
  * Fix instantiating multiple instances throwing an error.
  * Add missing config options to README.

## 9.3.0

Features:
  * Update params for create/edit repo.
  * Add Review Requests preview stuff for team reviewers.
  * Update params for create pull request review endpoint.
  * Update params for update pull request endpoint.
  * Add state param to some project endpoints.
  * Add filter param to outside collaborators endpoint.
  * Mark that default role is member for add-org-membership.
  * Add Code of Conduct preview endpoint support.
  * Add endpoint to include issue events triggered by integrations.
  * Add single comment endpoint to include issue comments.
  * Remove extra issue comments endpoint.
  * Add issue-related endpoints to include reactions.
  * Add endpoints to include issues opened by users.
  * Add endpoints to include reactions in responses.
  * Allow to see star creation timestamps.
  * Add revoke grant endpoint.
  * Require routes.json.
  * Add family option.
  * Add proxy param in options interface.
  * Add the required field "enforce_admins".
  * Pull Request Reviews API now official.
  * Repository invitation api now official.
  * Add Protected Branches API Pull Request Review Dismissal Restrictions.
  * Add package lock file.
  * Organization Memberships API is now official.

Bug fixes:
  * Add two missing endpoints for project preview accept header.
  * Updated api urls for convert/remove collaborator.
  * Change content_id type to Number on createProjectCard.
  * Remove node-github deprecation warning.
  * Update api urls for convert/remove collaborator.

## 9.2.0

Features:
  * Org blocks
  * Add direct affiliation option for collaborators preview api.
  * Set accept header on pagination.
  * Add org blocking preview api.
  * Support for operations with empty parameters.

Bug fixes:
  * Fix some examples.

## 9.1.0

Features:
  * Add User Blocking preview api.

## 9.0.0

Breaking changes:
  * Always return a response as an object with data and meta attributes.

Features:
  * Add getReference example.
  * Add note to createReference description.

Bug fixes:
  * Encode hash in ref param.

## 8.2.1

Features:
  * Add community health preview api.

## 8.1.1

Bug fixes:
  * Typescript: only set generated Array body properties to string[].

## 8.1.0

Features:
  * Add `maintainer_can_modify` flag to create pull request.

## 8.0.0

Breaking changes:
  * Changes to pullRequests.getReview, pullRequests.getReviewComments.

Features:
  * Allow pull request comment endpoints to include reactions.
  * Add pull request review examples.

## 7.3.2

Bug fixes:
  * Make base param not required for updating pull request.

## 7.3.1

Features:
  * Add search commits preview api.

## 7.2.1

Bug fixes:
  * Fix typescript bindings.

## 7.2.0

Features:
  * Preview Review Requests API.
  * Preview pull request reviews.
  * Traffic api now official.

Bug fixes:
  * Fix link for accept header example in README.

## 7.1.0

Features:
  * Add a TypeScript generator.
  * Update protected branches api changes.

Bug fixes:
  * Provide correct values for moveProjectsCard "position" parameter.

## 7.0.1

Bug fixes:
  * Fix enterprise uploadAsset edge case.

## 7.0.0

Breaking changes:
  * Rename listAssets() to getAssets() for consistency.

Features:
  * Add support for .netrc authentication.
  * Add netrc auth example.
  * Organization membership API changes.

## 6.1.0

Features:
  * Add X-GitHub-RequestId, Retry-After request headers.
  * Add trailing slash to getReferences url to return all references.
  * Allow the ref param to be the empty string.

Bug fixes:
  * Some example fixes.

## 6.0.4

Bug fixes:
  * Don't trim endpoint params.

## 6.0.3

Features:
  * Generate flow-type type definitions.

Bug fixes:
  * Fix ref params being uri encoded.

## 6.0.2

Bug fixes:
  * Fix validation regex for get-org-membership.

## 6.0.1

Bug fixes:
  * Fix accept header management for updated endpoint urls.

## 6.0.0

Breaking changes:
  * Move projects to its own section.
  * Project endpoint url changes.
  * Several additional breaking endpoint url changes.

Features:
  * Add installation repository endpoints.
  * Add fingerprint param to update-authorization endpoint.

## 5.3.3

Features:
  * Add /installations/repositories endpoint.

## 5.2.3

Bug fixes:
  * Reject promise for missing parameters.

## 5.2.2

Bug fixes:
  * Replace ES6 code so the library runs for versions of node < v4.
  * Make `team_id` required for update ldap endpoints.

## 5.2.1

Bug fixes:
  * Fix enterprise ldap update endpoints by adding `ldap_dn` param.

## 5.2.0

Features:
  * Add pre-receive endpoints.
  * Add params for editGist endpoint.

Bug fixes:
  * Adjust params for updateProtectedBranchRequiredStatusChecks.
  * Use body by default for non head/get/delete requests.
  * Fix mismatched endpoints in acceptTree object.
  * Prevent `accept` and `Accept` mixing in headers.
  * Adjust getFollowers endpoint url.
  * Adjust testHook endpoint url.

## 5.1.0

Features:
  * All pagination-related functions now promisified.

## 5.0.1

Bugfixes:
  * Fix for remove assignees from issue.

## 5.0.0

Breaking changes:
  * Replace user with owner in endpoints

## 4.1.0

Features:
  * Take care of accept headers for preview APIs in the library so there's no need to manually provide it on a per-request basis.

Bugfixes:
  * Change removeAssigneesFromIssue assignees param to body json input.

## 4.0.0

Breaking changes:
  * Merge button squash boolean param has been renamed to merge_method string param.

Features:
  * Add some integration-related endpoints.
  * Add support for integration authentication.
  * Add preview merge params to edit user repo endpoint.
  * Add preview merge params to org repos endpoint.
  * Add preview merge params to user repos endpoint.
  * Add filter to apidoc.
  * Add basic getNextPage example.

## 3.1.1

Bugfixes:
  * Fix permissions param.

## 3.1.0

Features:
  * Add projects api.

## 3.0.0

Breaking changes:
  * Fix issues.updateLabel endpoint. Change first `name` param to `oldname` and add new `name` param.

## 2.6.0

Features:
  * Add X-Poll-Interval header for events API.

## 2.5.2

Bugfixes:
  * Fix reactions validation regex.

## 2.5.1

Features:
  * Add repository traffic api

## 2.4.1

Bugfixes:
  * Allow for passing some required parameters as null

## 2.4.0

Features:
  * Add github pages preview endpoints.
  * Add preview apis section to readme.

Bugfixes:
  * Avoid parsing non json data. (Fixes renderMarkdown, getRawBlob)

## 2.3.0

Features:
  * Remove preview notes for multiple assignees api.
  * Remove preview notes for issue locking/unlocking api.
  * Add protected branch api endpoints.
  * Destroy socket on timeout.

## 2.2.0

Features:
  * Add repos.getShaOfCommitRef.

Bugfixes:
  * Remove repos.getAll affiliation regex validation.

## 2.1.0

Features:
  * Add add-assignees-to-issue, remove-assignees-from-issue endpoints.
  * Add note that licenses api is in preview period.
  * Add get-tag-signature-verification endpoint.
  * Add commit-signature-verification endpoint.
  * Add params for create-deployment-status, create-deployment endpoints.
  * Allow lazy instantiation.
  * Add promise support.

## 2.0.1

Features:
  * Add get raw blob example.

Bugfixes:
  * Make createDeployment task param optional.
  * Add missing org param for issues.getForOrg.

## 2.0.0

Breaking changes:
  * Remove getAllPages utility method.
  * Move migration-related endpoints to its own section.

Features:
  * Add source import endpoints.
  * Add enterprise search indexing endpoint.

## 1.4.0

Features:
  * Add repo invite endpoints.
  * Add permission param to add-collaborator.
  * Add GPG endpoints.

## 1.3.0

Features:
  * Add reaction endpoints.

Bugfixes:
  * Fix custom headers not being used.
  * Fix includePreview config flag not working properly. (Removed and need to use custom headers.)

## 1.2.1

Bugfixes:
  * Allow empty string for path param for getContent.

## 1.2.0

Features:
  * Add support to allow api stuff under preview period.
  * Add assignees preview param for issues endpoints.
  * Add issues#lock/unlock.
  * Add some more examples.
  * Add pull request merge squash preview params.
  * Add list/get/delete grant(s) endpoints.
  * Add params for create authorization.
  * Add get-or-create-authorization-for-app endpoint.
  * Add add get-or-create-authorization-for-app-and-fingerprint.
  * Add check/reset/revoke authorization endpoints.
  * Add get-events-timeline endpoint.

Bugfixes:
  * Fix custom headers not persisting across pages.
  * Make path param required for get-content.
  * If user specifies protocol = http, use port 80 rather than default 443.
