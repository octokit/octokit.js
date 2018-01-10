const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.reactions.getForIssue({
  owner: 'octokit',
  repo: 'rest.js',
  number: '365'
})
