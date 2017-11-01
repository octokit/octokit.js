const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.repos.updateBranchProtection({
  owner: 'octokit',
  repo: 'node-github',
  branch: 'a',
  required_status_checks: null,
  restrictions: null,
  required_pull_request_reviews: null,
  enforce_admins: false
})
