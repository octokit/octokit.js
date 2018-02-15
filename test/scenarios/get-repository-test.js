const {getInstance} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return getInstance('get-repository')

    .then(github => {
      this.github = github
    })
  })

  it('github.repos.get({owner: "octokit-fixture-org", repo: "hello-world"})', function () {
    return this.github.repos.get({
      owner: 'octokit-fixture-org',
      repo: 'hello-world',
      // TODO: remove once #587 is resolved
      headers: {
        accept: 'application/vnd.github.v3+json'
      }
    })

    .then((response) => {
      expect(response.data.owner.login).to.equal('octokit-fixture-org')
    })
  })
})
