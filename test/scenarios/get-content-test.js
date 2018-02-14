const {getInstance} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return getInstance('get-content')

    .then(github => {
      this.github = github
      this.github.plugin(require('../../lib/plugins/endpoint-methods'))
      github.plugin(require('../../lib/plugins/authentication'))
    })
  })

  it('github.repos.getContent({owner: "octokit-fixture-org", repo: "hello-world", path: ""})', function () {
    return this.github.repos.getContent({owner: 'octokit-fixture-org', repo: 'hello-world', path: ''})

    .then((response) => {
      expect(response.data.length).to.equal(1)
    })
  })
})
