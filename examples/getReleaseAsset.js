const octokit = require('@octokit/rest')({
  debug: true
})

octokit.repos.getReleases({
  owner: 'octokit',
  repo: 'rest.js'
})

.then(result => {
  if (result.data.length === 0) {
    console.log('Repository has no releases')
    return
  }

  // get id of first release
  const firstRelease = result.data.pop()
  return octokit.repos.getAssets({
    owner: 'octokit',
    repo: 'rest.js',
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
  return octokit.repos.getAsset({
    owner: 'octokit',
    repo: 'rest.js',
    id: assetId
  })
})

.then(result => {
  // result.data has asset properties
})
