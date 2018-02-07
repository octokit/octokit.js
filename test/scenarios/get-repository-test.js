const GitHub = require('../../')

describe('api.github.com', () => {
  it('github.repos.get({owner: "octokit-fixture-org", repo: "hello-world"})', () => {
    const github = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })

    github.plugin(require('../../lib/plugins/endpoint-methods'))

    return github.repos.get({
      owner: 'octokit-fixture-org',
      repo: 'hello-world',
      // TODO: remove once #587 is resolved
      headers: {
        accept: 'application/vnd.github.v3+json'
      }
    })

    .then((response) => {
      expect(response.data.owner.login).to.equal('octokit-fixture-org')
    })
  })
})
