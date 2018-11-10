const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('get-content')

      .then(instance => {
        github = instance
      })
  })

  it('github.repos.getContents()', () => {
    return github.repos.getContents({ owner: 'octokit-fixture-org', repo: 'hello-world', path: '' })

      .then((response) => {
        expect(response.data.length).to.equal(1)

        return github.repos.getContents({
          owner: 'octokit-fixture-org',
          repo: 'hello-world',
          path: 'README.md',
          headers: {
            accept: 'application/vnd.github.v3.raw'
          }
        })
      })

      .then((response) => {
        expect(response.data).to.equal('# hello-world')
      })
  })
})
