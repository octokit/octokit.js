const octokit = require('@octokit/rest')({
  debug: true
})

octokit.orgs.getForUser({
  username: 'defunkt'
})
