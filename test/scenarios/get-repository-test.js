const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('get-repository')

      .then(instance => {
        github = instance
      })
  })

  it('github.repos.get({owner: "octokit-fixture-org", repo: "hello-world"})', () => {
    return github.repos.get({
      owner: 'octokit-fixture-org',
      repo: 'hello-world'
    })

      .then((response) => {
        expect(response.data.owner.login).to.equal('octokit-fixture-org')
      })
  })
})
