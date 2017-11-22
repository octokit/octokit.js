const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('api.github.com', () => {
  it('github.repos.*Assets', () => {
    const GitHubMock = fixtures.mock('api.github.com/release-assets')
    const githubUserA = new GitHub()

    var releaseId
    var assetId

    githubUserA.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return githubUserA.repos.getReleaseByTag({
      owner: 'octokit-fixture-org',
      repo: 'release-assets',
      tag: 'v1.0.0'
    })

    .then(result => {
      releaseId = result.data.id

      return githubUserA.repos.uploadAsset({
        url: result.data.upload_url,
        file: 'Hello, world!\n',
        contentType: 'text/plain',
        contentLength: 14,
        name: 'test-upload.txt',
        label: 'test'
      })
    })

    .then(result => {
      assetId = releaseId

      return githubUserA.repos.getAssets({
        owner: 'octokit-fixture-org',
        repo: 'release-assets',
        id: releaseId
      })
    })

    .then(result => {
      return githubUserA.repos.getAsset({
        owner: 'octokit-fixture-org',
        repo: 'release-assets',
        id: assetId
      })
    })

    .then(result => {
      return githubUserA.repos.editAsset({
        owner: 'octokit-fixture-org',
        repo: 'release-assets',
        id: assetId,
        name: 'new-filename.txt',
        label: 'new label'
      })
    })

    .then(result => {
      return githubUserA.repos.deleteAsset({
        owner: 'octokit-fixture-org',
        repo: 'release-assets',
        id: assetId
      })
    })

    .then((result) => {
      GitHubMock.pending().should.deep.equal([])
    })

    .catch(GitHubMock.explain)
  })
})
