const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.gitdata.getReferences({
  owner: 'octokit',
  repo: 'node-github'
})
