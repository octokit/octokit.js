const octokit = require('@octokit/rest')({
  debug: true
})

octokit.search.issues({
  q: 'bazinga'
})
