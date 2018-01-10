const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.repos.getContent({
  owner: 'octokit',
  repo: 'rest.js',
  path: ''
})
