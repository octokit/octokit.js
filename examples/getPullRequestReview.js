const octokit = require('@octokit/rest')({
  debug: true
})

octokit.pullRequests.getReviews({
  owner: 'octokit',
  repo: 'rest.js',
  number: 640
})

.then(result => {
  const firstReviewId = result.data[0].id

  return octokit.pullRequests.getReview({
    owner: 'octokit',
    repo: 'rest.js',
    number: 640,
    id: firstReviewId
  })
})

.then(result => {
  // result.data has review properties
})
