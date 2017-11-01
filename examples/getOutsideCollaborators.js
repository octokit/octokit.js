const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.orgs.getOutsideCollaborators({
  org: 'octokit'
})
