const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.issues.getEventsTimeline({
  owner: 'octokit',
  repo: 'node-github',
  issue_number: '447'
})
