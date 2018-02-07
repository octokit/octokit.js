const nock = require('nock')

const GitHub = require('../../')

describe('deprecations', () => {
  beforeEach(function () {
    this.github = new GitHub({
      host: 'deprecations-test.com'
    })
    cy.stub(console, 'warn')
    this.github.plugin(require('../../lib/plugins/endpoint-methods'))
  })

  it('github.integrations.*', function () {
    nock('https://deprecations-test.com')
      .get('/app/installations')
      .reply(200, [])

    return this.github.integrations.getInstallations({})

    .then(() => {
      expect(console.warn.callCount).to.equal(2)
    })
  })

  it('deprecated followRedirects option', function () {
    GitHub({
      followRedirects: false
    })
    expect(console.warn.callCount).to.equal(1)
  })

  it('deprecated Promise option', function () {
    GitHub({
      Promise: {}
    })
    expect(console.warn.callCount).to.equal(1)
  })
})
