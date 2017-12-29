const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.issues.removeAssigneesFromIssue({
  owner: 'octokit',
  repo: 'node-github',
  number: '4',
  body: { 'assignees': ['first9890'] }
})
