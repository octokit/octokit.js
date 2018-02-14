const {getInstance} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return getInstance('get-organization')

    .then(github => {
      this.github = github
      this.github.plugin(require('../../lib/plugins/endpoint-methods'))
    })
  })

  it('github.orgs.get({owner: "octokit-fixture-org"})', function () {
    return this.github.orgs.get({org: 'octokit-fixture-org'})

    .then((response) => {
      expect(response.data.login).to.equal('octokit-fixture-org')
    })
  })
})
