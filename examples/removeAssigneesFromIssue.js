const octokit = require('@octokit/rest')({
  debug: true
})

octokit.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

octokit.issues.removeAssigneesFromIssue({
  owner: 'octokit',
  repo: 'rest.js',
  number: '4',
  assignees: ['first9890']
})
