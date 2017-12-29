const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.repos.getContent({
  owner: 'octokit',
  repo: 'node-github',
  path: ''
})
