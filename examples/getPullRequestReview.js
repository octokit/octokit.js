const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: true
})

github.pullRequests.getReviews({
  owner: 'octokit',
  repo: 'rest.js',
  number: 640
})

.then(result => {
  const firstReviewId = result.data[0].id

  return github.pullRequests.getReview({
    owner: 'octokit',
    repo: 'rest.js',
    number: 640,
    id: firstReviewId
  })
})

.then(result => {
  // result.data has review properties
})
