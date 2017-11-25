const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('api.github.com', () => {
  it('github.repos.get({owner: "octokit-fixture-org", repo: "hello-world"})', () => {
    const GitHubMock = fixtures.mock('api.github.com/get-repository')

    const github = new GitHub()

    return github.repos.get({
      owner: 'octokit-fixture-org',
      repo: 'hello-world',
      // TODO: remove once #587 is resolved
      headers: {
        accept: 'application/vnd.github.v3+json'
      }
    })

    .then((response) => {
      response.data.owner.login.should.equal('octokit-fixture-org')
      GitHubMock.pending().should.deep.equal([])
    })

    .catch(GitHubMock.explain)
  })
})
