const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.reactions.getForIssue({
  owner: 'octokit',
  repo: 'rest.js',
  number: '365'
})
