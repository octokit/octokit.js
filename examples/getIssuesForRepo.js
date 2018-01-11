const octokit = require('@octokit/rest')({
  debug: false
})

octokit.issues.getForRepo({
  owner: 'octokit',
  repo: 'rest.js'
})
