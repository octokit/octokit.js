const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.issues.getEventsTimeline({
  owner: 'octokit',
  repo: 'rest.js',
  issue_number: '447'
})
