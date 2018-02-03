const chai = require('chai')

const GitHub = require('../../')

chai.should()

describe('api.github.com', () => {
  it('add-and-remove-repository-collaborator-test', () => {
    const githubUserA = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })
    const githubUserB = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })

    githubUserA.plugin(require('../../lib/plugins/authentication'))
    githubUserA.plugin(require('../../lib/plugins/endpoint-methods'))
    githubUserB.plugin(require('../../lib/plugins/authentication'))
    githubUserB.plugin(require('../../lib/plugins/endpoint-methods'))

    githubUserA.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    githubUserB.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000002'
    })

    return githubUserA.repos.addCollaborator({
      owner: 'octokit-fixture-org',
      repo: 'add-and-remove-repository-collaborator',
      username: 'octokit-fixture-user-b'
    })

    .then(() => {
      return githubUserA.repos.getInvites({
        owner: 'octokit-fixture-org',
        repo: 'add-and-remove-repository-collaborator'
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
        repo: 'add-and-remove-repository-collaborator'
      })
    })

    .then((response) => {
      response.data.length.should.equal(2)

      return githubUserA.repos.removeCollaborator({
        owner: 'octokit-fixture-org',
        repo: 'add-and-remove-repository-collaborator',
        username: 'octokit-fixture-user-b'
      })
    })

    .then(() => {
      return githubUserA.repos.getCollaborators({
        owner: 'octokit-fixture-org',
        repo: 'add-and-remove-repository-collaborator'
      })
    })

    .then((response) => {
      // @todo: githubUserA.repos.getCollaborators() returns two items because of the .persist call in octokit-fixtures-server
      // response.data.length.should.equal(1)
    })
  })
})
