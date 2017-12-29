const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.issues.addLabels({
  owner: 'octokit',
  repo: 'node-github',
  number: '1',
  labels: ['bug', 'help wanted', 'question']
})
