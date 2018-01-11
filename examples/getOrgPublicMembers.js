const octokit = require('@octokit/rest')({
  debug: true
})

octokit.orgs.getPublicMembers({
  org: 'octokit'
})
