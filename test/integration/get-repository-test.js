const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('smoke test', () => {
  it.skip('(#587) github.repos.get({owner: "octokit-fixture-org", repo: "hello-world"})', () => {
    const GitHubMock = fixtures.mock('api.github.com/get-repository')

    const github = new GitHub()

    return github.repos.get({owner: 'octokit-fixture-org', repo: 'hello-world'})

    .then((response) => {
      response.data.login.should.equal('octokit-fixture-org')
      GitHubMock.pendingMocks().should.deep.equal([])
    })
  })
})
