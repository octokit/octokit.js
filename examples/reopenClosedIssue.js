const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.issues.edit({
  owner: 'octokit',
  repo: 'rest.js',
  number: 2,
  state: 'open'
})
