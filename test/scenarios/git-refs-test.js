const {getInstance} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return getInstance('git-refs')

    .then(github => {
      this.github = github

      github.authenticate({
        type: 'token',
        token: '0000000000000000000000000000000000000001'
      })
    })
  })

  it('github.gitdata.*', function () {
    return this.github.gitdata.getReferences({
      owner: 'octokit-fixture-org',
      repo: 'git-refs'
    })

    .then(() => {
      return this.github.gitdata.createReference({
        owner: 'octokit-fixture-org',
        repo: 'git-refs',
        ref: 'refs/heads/test',
        sha: '0000000000000000000000000000000000000002'
      })
    })

    .then(() => {
      return this.github.gitdata.updateReference({
        owner: 'octokit-fixture-org',
        repo: 'git-refs',
        ref: 'heads/test',
        sha: '0000000000000000000000000000000000000001'
      })
    })

    .then(() => {
      return this.github.gitdata.getReferences({
        owner: 'octokit-fixture-org',
        repo: 'git-refs'
      })
    })

    .then(() => {
      return this.github.gitdata.deleteReference({
        owner: 'octokit-fixture-org',
        repo: 'git-refs',
        ref: 'heads/test'
      })
    })
  })
})
