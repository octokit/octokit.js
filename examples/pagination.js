const octokit = require('@octokit/rest')({
  debug: true
})

// get all issues across all pages
octokit.paginate(octokit.issues.getForRepo.endpoint.merge({ owner: 'octokit', repo: 'rest.js' }))

// find first issue matching a condition
async function findIssue ({ owner, repo, findFn }) {
  for await (const result of octokit.paginate.iterator(octokit.issues.getForRepo.endpoint.merge({ owner, repo }))) {
    const match = findFn(result.data)
    if (match) {
      return match
    }
  }
}

findIssue({
  owner: 'octokit',
  repo: 'rest.js',
  find (issues) {
    return issues.find(issue => /<!-- secret issue marker -->/.test(issue.body))
  }
})

// find all issues and map values
async function mapIssues ({ owner, repo, map }) {
  const results = []
  for await (const result of octokit.paginate.iterator(octokit.issues.getForRepo.endpoint.merge({ owner, repo }))) {
    results.push(...result.data)
  }
  return results.map(map)
}

mapIssues({
  owner: 'octokit',
  repo: 'rest.js',
  map (issues) {
    return issues.map(issue => ({ title: issue.title }))
  }
})
