const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.activity.getStarredRepos({per_page: 100})
