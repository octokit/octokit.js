const GitHub = require('../../')

describe('api.github.com', () => {
  it('github.gitdata.*', () => {
    const github = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })

    github.plugin(require('../../lib/plugins/authentication'))
    github.plugin(require('../../lib/plugins/endpoint-methods'))

    github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

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
