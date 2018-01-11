const octokit = require('@octokit/rest')({
  debug: true
})

octokit.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

octokit.repos.updateBranchProtection({
  owner: 'octokit',
  repo: 'rest.js',
  branch: 'a',
  required_status_checks: null,
  restrictions: null,
  required_pull_request_reviews: null,
  enforce_admins: false
})
