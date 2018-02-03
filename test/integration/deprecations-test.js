const chai = require('chai')
const nock = require('nock')
const simple = require('simple-mock')

const GitHub = require('../../')

chai.should()

describe('deprecations', () => {
  let github

  beforeEach(() => {
    github = new GitHub({
      host: 'deprecations-test.com'
    })
    github.plugin(require('../../lib/plugins/endpoint-methods'))
  })

  it('github.integrations.*', () => {
    simple.mock(console, 'warn', () => {})
    nock('https://deprecations-test.com')
      .get('/app/installations')
      .reply(200, [])

    return github.integrations.getInstallations({})

    .then(() => {
      console.warn.callCount.should.equal(2)

      simple.restore()
    })
  })

  it('deprecated followRedirects option', () => {
    simple.mock(console, 'warn', (msg) => {})
    GitHub({
      followRedirects: false
    })
    console.warn.callCount.should.equal(1)
    simple.restore()
  })

  it('deprecated Promise option', () => {
    simple.mock(console, 'warn', (msg) => {})
    GitHub({
      Promise: {}
    })
    console.warn.callCount.should.equal(1)
    simple.restore()
  })
})
