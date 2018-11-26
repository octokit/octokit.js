const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let octokit

  beforeEach(() => {
    return getInstance('get-repository')

      .then(instance => {
        octokit = instance
      })
  })

  it('octokit.repos.get({owner: "octokit-fixture-org", repo: "hello-world"})', () => {
    return octokit.repos.get({
      owner: 'octokit-fixture-org',
      repo: 'hello-world'
    })

      .then((response) => {
        expect(response.data.owner.login).to.equal('octokit-fixture-org')
      })
  })
})
