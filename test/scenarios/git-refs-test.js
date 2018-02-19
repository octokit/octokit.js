const {getInstance} = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('git-refs')

      .then(instance => {
        github = instance

        github.authenticate({
          type: 'token',
          token: '0000000000000000000000000000000000000001'
        })
      })
  })

  it('github.gitdata.*', () => {
    return github.gitdata.getReferences({
      owner: 'octokit-fixture-org',
      repo: 'git-refs'
    })

      .then(() => {
        return github.gitdata.createReference({
          owner: 'octokit-fixture-org',
          repo: 'git-refs',
          ref: 'refs/heads/test',
          sha: '0000000000000000000000000000000000000002'
        })
      })

      .then(() => {
        return github.gitdata.updateReference({
          owner: 'octokit-fixture-org',
          repo: 'git-refs',
          ref: 'heads/test',
          sha: '0000000000000000000000000000000000000001'
        })
      })

      .then(() => {
        return github.gitdata.getReferences({
          owner: 'octokit-fixture-org',
          repo: 'git-refs'
        })
      })

      .then(() => {
        return github.gitdata.deleteReference({
          owner: 'octokit-fixture-org',
          repo: 'git-refs',
          ref: 'heads/test'
        })
      })
  })
})
