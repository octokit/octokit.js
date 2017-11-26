const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('api.github.com', () => {
  it('github.search.issues({q: "sesame repo:octokit-fixture-org/search-issues"})', () => {
    const GitHubMock = fixtures.mock('api.github.com/search-issues')

    const githubUserA = new GitHub()

    githubUserA.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return githubUserA.search.issues({q: 'sesame repo:octokit-fixture-org/search-issues'})

    .then((response) => {
      response.data.total_count.should.equal(2)
      GitHubMock.pending().should.deep.equal([])
    })

    .catch(GitHubMock.explain)
  })
})
