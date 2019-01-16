const Octokit = require('../../')

const Mocktokit = Octokit
  .plugin((octokit) => {
    octokit.hook.wrap('request', () => null)
  })

describe('deprecations', () => {
  beforeEach(() => {
    cy.stub(console, 'warn')
  })

  it('octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)', () => {
    const octokit = new Mocktokit()

    return octokit.search.issues({ q: 'foo' })
      .then(() => {
        expect(console.warn.callCount).to.equal(1)
      })
  })
})
