const GitHub = require('../../')

describe('api.github.com', () => {
  it('github.orgs.get({owner: "octokit-fixture-org"})', () => {
    const github = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })
    github.plugin(require('../../lib/plugins/endpoint-methods'))

    return github.orgs.get({org: 'octokit-fixture-org'})

    .then((response) => {
      expect(response.data.login).to.equal('octokit-fixture-org')
    })
  })
})
