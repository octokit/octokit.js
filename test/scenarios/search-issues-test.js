const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let octokit

  beforeEach(() => {
    return getInstance('search-issues')

      .then(instance => {
        octokit = instance

        octokit.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('octokit.search.issues({q: "sesame repo:octokit-fixture-org/search-issues"})', () => {
    return octokit.search.issues({ q: 'sesame repo:octokit-fixture-org/search-issues' })

      .then((response) => {
        expect(response.data.total_count).to.equal(2)
      })
  })
})
