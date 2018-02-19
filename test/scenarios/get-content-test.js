const {getInstance} = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('get-content')

      .then(instance => {
        github = instance
      })
  })

  it('github.repos.getContent({owner: "octokit-fixture-org", repo: "hello-world", path: ""})', () => {
    return github.repos.getContent({owner: 'octokit-fixture-org', repo: 'hello-world', path: ''})

      .then((response) => {
        expect(response.data.length).to.equal(1)
      })
  })
})
