const {loadFixture, fixtureToInstace} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return loadFixture('add-and-remove-repository-collaborator')

    .then((fixture) => {
      this.githubUserA = fixtureToInstace(fixture)
      this.githubUserB = fixtureToInstace(fixture)
    })
  })
  it('add-and-remove-repository-collaborator-test', function () {
    this.githubUserA.plugin(require('../../lib/plugins/authentication'))
    this.githubUserA.plugin(require('../../lib/plugins/endpoint-methods'))
    this.githubUserB.plugin(require('../../lib/plugins/authentication'))
    this.githubUserB.plugin(require('../../lib/plugins/endpoint-methods'))

    this.githubUserA.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    this.githubUserB.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000002'
    })

    return this.githubUserA.repos.addCollaborator({
      owner: 'octokit-fixture-org',
      repo: 'add-and-remove-repository-collaborator',
      username: 'octokit-fixture-user-b'
    })

    .then(() => {
      return this.githubUserA.repos.getInvites({
        owner: 'octokit-fixture-org',
        repo: 'add-and-remove-repository-collaborator'
      })
    })

    .then((response) => {
      expect(response.data.length).to.equal(1)

      return this.githubUserB.users.acceptRepoInvite({
        invitation_id: response.data[0].id
      })
    })

    .then(() => {
      return this.githubUserA.repos.getCollaborators({
        owner: 'octokit-fixture-org',
        repo: 'add-and-remove-repository-collaborator'
      })
    })

    .then((response) => {
      expect(response.data.length).to.equal(2)

      return this.githubUserA.repos.removeCollaborator({
        owner: 'octokit-fixture-org',
        repo: 'add-and-remove-repository-collaborator',
        username: 'octokit-fixture-user-b'
      })
    })

    .then(() => {
      return this.githubUserA.repos.getCollaborators({
        owner: 'octokit-fixture-org',
        repo: 'add-and-remove-repository-collaborator'
      })
    })

    .then((response) => {
      expect(response.data.length).to.equal(1)
    })
  })
})
