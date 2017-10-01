const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('api.github.com', () => {
  it('github.orgs.get({owner: "octokit-fixture-org"})', () => {
    const GitHubMock = fixtures.mock('api.github.com/get-organization')

    const github = new GitHub()

    return github.orgs.get({org: 'octokit-fixture-org'})

    .then((response) => {
      response.data.login.should.equal('octokit-fixture-org')
      GitHubMock.pending().should.deep.equal([])
    })

    .catch(GitHubMock.explain)
  })
})
