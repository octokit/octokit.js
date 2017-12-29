const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.issues.edit({
  owner: 'octokit',
  repo: 'node-github',
  number: 2,
  state: 'open'
})
