const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.issues.removeAssigneesFromIssue({
  owner: 'octokit',
  repo: 'rest.js',
  number: '4',
  body: { 'assignees': ['first9890'] }
})
