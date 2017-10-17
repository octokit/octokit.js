const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('api.github.com', () => {
  it('github.repos.getContent({owner: "octokit-fixture-org", repo: "hello-world", path: ""})', () => {
    const GitHubMock = fixtures.mock('api.github.com/get-content')

    const github = new GitHub()

    return github.repos.getContent({owner: 'octokit-fixture-org', repo: 'hello-world', path: ''})

    .then((response) => {
      response.data.length.should.equal(1)
      GitHubMock.pending().should.deep.equal([])
    })

    .catch(GitHubMock.explain)
  })
})
