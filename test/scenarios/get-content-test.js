const chai = require('chai')

const GitHub = require('../../')

chai.should()

describe('api.github.com', () => {
  it('github.repos.getContent({owner: "octokit-fixture-org", repo: "hello-world", path: ""})', () => {
    const github = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })
    github.plugin(require('../../lib/plugins/endpoint-methods'))

    return github.repos.getContent({owner: 'octokit-fixture-org', repo: 'hello-world', path: ''})

    .then((response) => {
      response.data.length.should.equal(1)
    })
  })
})
