const {getInstance} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return getInstance('search-issues')

    .then(github => {
      this.github = github

      github.authenticate({
        type: 'token',
        token: '0000000000000000000000000000000000000001'
      })
    })
  })

  it('github.search.issues({q: "sesame repo:octokit-fixture-org/search-issues"})', function () {
    return this.github.search.issues({q: 'sesame repo:octokit-fixture-org/search-issues'})

    .then((response) => {
      expect(response.data.total_count).to.equal(2)
    })
  })
})
