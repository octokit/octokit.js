const nock = require('nock')

const GitHub = require('../../')

require('../mocha-node-setup')

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

  it('deprecated ca option', () => {
    GitHub({
      ca: 'certificate123'
    })
    expect(console.warn.callCount).to.equal(1)
  })

  it('deprecated proxy option', () => {
    GitHub({
      proxy: 'http://localhost:1234'
    })
    expect(console.warn.callCount).to.equal(1)
  })

  it('deprecated family option', () => {
    GitHub({
      family: 6
    })
    expect(console.warn.callCount).to.equal(1)
  })

  it('deprecated rejectUnauthorized option', () => {
    GitHub({
      rejectUnauthorized: false
    })
    expect(console.warn.callCount).to.equal(1)
  })
})