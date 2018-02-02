const chai = require('chai')

const GitHub = require('../../')

chai.should()

describe('api.github.com', () => {
  it('github.issues.{lock,unlock}()', () => {
    const github = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })

    github.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return github.issues.lock({
      owner: 'octokit-fixture-org',
      repo: 'lock-issue',
      number: 1
    })

    .then(() => {
      return github.issues.unlock({
        owner: 'octokit-fixture-org',
        repo: 'lock-issue',
        number: 1
      })
    })
  })
})
