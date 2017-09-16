const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('smoke test', () => {
  it('github.repos.get({owner: "octocat", repo: "hello-world"})', () => {
    const GitHubMock = fixtures.mock('api.github.com/get-organization')

    const github = new GitHub()

    return github.orgs.get({org: 'octokit-fixture-org'})

    .then((response) => {
      response.data.login.should.equal('octokit-fixture-org')
      GitHubMock.pendingMocks().should.deep.equal([])
    })
  })
})
