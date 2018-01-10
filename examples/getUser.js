const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.users.get({})
