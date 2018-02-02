const chai = require('chai')

const GitHub = require('../../')

chai.should()

describe('api.github.com', () => {
  it('github.gitdata.*', () => {
    const githubUserA = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })

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
  })
})
