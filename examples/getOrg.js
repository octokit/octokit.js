const assert = require('assert')
const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.orgs.get({
  org: 'octokit'
}).then(result => {
  // result.data looks like https://developer.github.com/v3/orgs/#response-3
  assert.equal(result.data.login, 'octokit')
})
