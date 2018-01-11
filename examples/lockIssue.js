const octokit = require('@octokit/rest')({
  debug: true
})

octokit.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

octokit.issues.lock({
  owner: 'octokit',
  repo: 'rest.js',
  number: 3
})
