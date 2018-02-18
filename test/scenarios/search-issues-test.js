const {getInstance} = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('search-issues')

    .then(instance => {
      github = instance

      github.authenticate({
        type: 'token',
        token: '0000000000000000000000000000000000000001'
      })
    })
  })

  it('github.search.issues({q: "sesame repo:octokit-fixture-org/search-issues"})', () => {
    return github.search.issues({q: 'sesame repo:octokit-fixture-org/search-issues'})

    .then((response) => {
      expect(response.data.total_count).to.equal(2)
    })
  })
})
