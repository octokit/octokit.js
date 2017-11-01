const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.users.getById({ id: '429706' })
