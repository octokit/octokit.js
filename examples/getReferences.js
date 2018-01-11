const octokit = require('@octokit/rest')({
  debug: true
})

octokit.gitdata.getReferences({
  owner: 'octokit',
  repo: 'rest.js'
})
