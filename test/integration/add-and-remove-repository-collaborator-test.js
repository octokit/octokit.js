const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('smoke test', () => {
  it('github.orgs.get({owner: "octokit-fixture-org"})', () => {
    const GitHubMock = fixtures.mock('api.github.com/add-and-remove-repository-collaborator')
    const githubUserA = new GitHub()
    const githubUserB = new GitHub()

    githubUserA.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000000'
    })

    githubUserB.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000000'
    })

    return githubUserA.repos.addCollaborator({
      owner: 'octokit-fixture-org',
      repo: 'hello-world',
      username: 'octokit-fixture-user-b'
    })

    .then(() => {
      return githubUserA.repos.getInvites({
        owner: 'octokit-fixture-org',
        repo: 'hello-world'
      })
    })

    .then((response) => {
      response.data.length.should.equal(1)

      return githubUserB.users.acceptRepoInvite({
        invitation_id: response.data[0].id
      })
    })

    .then(() => {
      return githubUserA.repos.getCollaborators({
        owner: 'octokit-fixture-org',
        repo: 'hello-world'
      })
    })

    .then((response) => {
      response.data.length.should.equal(2)

      return githubUserA.repos.removeCollaborator({
        owner: 'octokit-fixture-org',
        repo: 'hello-world',
        username: 'octokit-fixture-user-b'
      })
    })

    .then(() => {
      return githubUserA.repos.getCollaborators({
        owner: 'octokit-fixture-org',
        repo: 'hello-world'
      })
    })

    .then((response) => {
      response.data.length.should.equal(1)
      GitHubMock.pendingMocks().should.deep.equal([])
    })
  })
})
