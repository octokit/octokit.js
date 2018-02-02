const chai = require('chai')

const GitHub = require('../../')

chai.should()

describe('api.github.com', () => {
  it('github.search.issues({q: "sesame repo:octokit-fixture-org/search-issues"})', () => {
    const githubUserA = new GitHub({
      protocol: 'http',
      host: 'localhost:3000'
    })

    githubUserA.authenticate({
      type: 'token',
      token: '0000000000000000000000000000000000000001'
    })

    return githubUserA.search.issues({q: 'sesame repo:octokit-fixture-org/search-issues'})

    .then((response) => {
      response.data.total_count.should.equal(2)
    })
  })
})
