const nock = require('nock')

const GitHub = require('../../')

describe('deprecations', () => {
  let github

  beforeEach(() => {
    github = new GitHub({
      host: 'deprecations-test.com'
    })
    cy.stub(console, 'warn')
  })

  it('github.integrations.*', () => {
    nock('https://deprecations-test.com')
      .get('/app/installations')
      .reply(200, [])

    return github.integrations.getInstallations({})

    .then(() => {
      expect(console.warn.callCount).to.equal(2)
    })
  })

  it('deprecated followRedirects option', () => {
    GitHub({
      followRedirects: false
    })
    expect(console.warn.callCount).to.equal(1)
  })

  it('deprecated Promise option', () => {
    GitHub({
      Promise: {}
    })
    expect(console.warn.callCount).to.equal(1)
  })
})
