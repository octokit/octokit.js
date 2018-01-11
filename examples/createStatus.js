const octokit = require('@octokit/rest')({
  debug: true
})

octokit.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

octokit.repos.createStatus({
  owner: 'octokit',
  repo: 'rest.js',
  sha: '81c559e2e8551982235bc86594cd86ffb135b053',
  state: 'success'
})
