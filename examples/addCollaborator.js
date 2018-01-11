const octokit = require('@octokit/rest')({
  debug: true
})

octokit.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

octokit.repos.addCollaborator({
  owner: 'octokit',
  repo: 'rest.js',
  username: 'defunkt'
})
