const {getInstance} = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('get-archive')

      .then(instance => {
        github = instance
      })
  })

  it('github.repos.archive({owner: "octokit-fixture-org", repo: "get-archive"})', () => {
    return github.repos.getArchiveLink({
      owner: 'octokit-fixture-org',
      repo: 'get-archive',
      archive_format: 'tarball',
      ref: 'master'
    })

      .then((response) => {
        expect(response.data.length).to.equal(172)
      })
  })
})
