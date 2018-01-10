const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.search.issues({
  q: 'bazinga'
})
