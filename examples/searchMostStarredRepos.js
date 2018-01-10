const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.search.repos({
  q: 'stars:>=20000',
  sort: 'stars',
  order: 'desc'
})
