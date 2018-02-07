const GitHub = require('../../')

describe('api.github.com', () => {
  it('github.search.issues({q: "sesame repo:octokit-fixture-org/search-issues"})', () => {
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

    return github.search.issues({q: 'sesame repo:octokit-fixture-org/search-issues'})

    .then((response) => {
      expect(response.data.total_count).to.equal(2)
    })
  })
})
