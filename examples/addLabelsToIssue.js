const octokit = require('@octokit/rest')({
  debug: true
})

octokit.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

octokit.issues.addLabels({
  owner: 'octokit',
  repo: 'rest.js',
  number: '1',
  labels: ['bug', 'help wanted', 'question']
})
