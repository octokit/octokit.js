const octokit = require('@octokit/rest')({
  debug: true
})

octokit.search.repos({
  q: 'stars:>=20000',
  sort: 'stars',
  order: 'desc'
})
