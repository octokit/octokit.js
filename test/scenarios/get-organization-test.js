const chai = require('chai')

const GitHub = require('../../')

chai.should()

describe('api.github.com', () => {
  it('github.orgs.get({owner: "octokit-fixture-org"})', () => {
    const github = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })
    github.plugin(require('../../lib/plugins/endpoint-methods'))

    return github.orgs.get({org: 'octokit-fixture-org'})

    .then((response) => {
      response.data.login.should.equal('octokit-fixture-org')
    })
  })
})
