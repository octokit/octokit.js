const octokit = require('@octokit/rest')({
  debug: true
})

octokit.orgs.getOutsideCollaborators({
  org: 'octokit'
})
