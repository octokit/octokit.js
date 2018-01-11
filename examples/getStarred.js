const octokit = require('@octokit/rest')({
  debug: true
})

octokit.activity.getStarredRepos({per_page: 100})
