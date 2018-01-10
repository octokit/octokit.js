const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.users.getById({ id: '429706' })
