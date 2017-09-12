const chai = require('chai')
const fixtures = require('octokit-fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('smoke test', () => {
  it('github.repos.get({owner: "octokit", repo: "node-github"})', () => {
    const GitHubMock = fixtures.mock('api.github.com/get-repository')

    const github = new GitHub()

    return github.repos.get({owner: 'octocat', repo: 'hello-world'})

    .then((response) => {
      response.data.full_name.should.equal('octocat/hello-world')
      GitHubMock.pendingMocks().should.deep.equal([])
    })
  })
})
