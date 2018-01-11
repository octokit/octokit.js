const octokit = require('@octokit/rest')({
  debug: true
})

octokit.issues.getEventsTimeline({
  owner: 'octokit',
  repo: 'rest.js',
  issue_number: '447'
})
