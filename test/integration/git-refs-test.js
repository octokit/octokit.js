const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('api.github.com', () => {
  it('github.gitdata.*', () => {
    const GitHubMock = fixtures.mock('api.github.com/git-refs')
    const githubUserA = new GitHub()

    githubUserA.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return githubUserA.gitdata.getReferences({
      owner: 'octokit-fixture-org',
      repo: 'git-refs'
    })

    .then(() => {
      return githubUserA.gitdata.createReference({
        owner: 'octokit-fixture-org',
        repo: 'git-refs',
        ref: 'refs/heads/test',
        sha: '0000000000000000000000000000000000000002'
      })
    })

    .then(() => {
      return githubUserA.gitdata.updateReference({
        owner: 'octokit-fixture-org',
        repo: 'git-refs',
        ref: 'heads/test',
        sha: '0000000000000000000000000000000000000001'
      })
    })

    .then(() => {
      return githubUserA.gitdata.getReferences({
        owner: 'octokit-fixture-org',
        repo: 'git-refs'
      })
    })

    .then(() => {
      return githubUserA.gitdata.deleteReference({
        owner: 'octokit-fixture-org',
        repo: 'git-refs',
        ref: 'heads/test'
      })
    })

    .then(() => {
      GitHubMock.pending().should.deep.equal([])
    })

    .catch(GitHubMock.explain)
  })
})
