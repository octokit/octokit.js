const assert = require('assert')
const octokit = require('@octokit/rest')({
  debug: true
})

octokit.orgs.get({
  org: 'octokit'
}).then(result => {
  // result.data looks like https://developer.github.com/v3/orgs/#response-3
  assert.equal(result.data.login, 'octokit')
})
