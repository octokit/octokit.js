const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('api.github.com', () => {
  it('github.issues.*', () => {
    const GitHubMock = fixtures.mock('api.github.com/labels')
    const githubUserA = new GitHub()

    githubUserA.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return githubUserA.issues.getLabels({
      owner: 'octokit-fixture-org',
      repo: 'labels'
    })

    .then((result) => {
      result.data.should.be.an('array')

      return githubUserA.issues.createLabel({
        owner: 'octokit-fixture-org',
        repo: 'labels',
        name: 'test-label',
        color: '663399'
      })
    })

    .then((result) => {
      result.data.name.should.equal('test-label')

      return githubUserA.issues.getLabel({
        owner: 'octokit-fixture-org',
        repo: 'labels',
        name: 'test-label'
      })
    })

    .then(() => {
      return githubUserA.issues.updateLabel({
        owner: 'octokit-fixture-org',
        repo: 'labels',
        oldname: 'test-label',
        name: 'test-label-updated',
        color: 'BADA55'
      })
    })

    .then((result) => {
      result.data.name.should.equal('test-label-updated')

      return githubUserA.issues.deleteLabel({
        owner: 'octokit-fixture-org',
        repo: 'labels',
        name: 'test-label-updated'
      })
    })

    .then((result) => {
      result.data.should.equal('')

      GitHubMock.pending().should.deep.equal([])
    })

    .catch(GitHubMock.explain)
  })
})
