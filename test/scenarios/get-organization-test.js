const {getInstance} = require('../util')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('get-organization')

    .then(instance => {
      github = instance
    })
  })

  it('github.orgs.get({owner: "octokit-fixture-org"})', () => {
    return github.orgs.get({org: 'octokit-fixture-org'})

    .then((response) => {
      expect(response.data.login).to.equal('octokit-fixture-org')
    })
  })
})
