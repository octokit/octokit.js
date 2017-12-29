const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.repos.getReleases({
  owner: 'octokit',
  repo: 'node-github'
})

.then(result => {
  if (result.data.length === 0) {
    console.log('Repository has no releases')
    return
  }

  // get id of first release
  const firstRelease = result.data.pop()
  return github.repos.getAssets({
    owner: 'octokit',
    repo: 'node-github',
    id: firstRelease.id
  })
})

.then(result => {
  if (result.data.length === 0) {
    console.log('First release has no assets attached')
    return
  }

  // get id of first asset
  const assetId = result.data[0].id
  return github.repos.getAsset({
    owner: 'octokit',
    repo: 'node-github',
    id: assetId
  })
})

.then(result => {
  // result.data has asset properties
})
