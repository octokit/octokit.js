const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.issues.lock({
  owner: 'octokit',
  repo: 'rest.js',
  number: 3
})
