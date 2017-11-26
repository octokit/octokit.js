const chai = require('chai')
const nock = require('nock')
const simple = require('simple-mock')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('deprecations', () => {
  it('github.integrations.*', () => {
    simple.mock(console, 'warn', () => {})
    nock('https://deprecations-test.com')
      .get('/app/installations')
      .reply(200, [])

    const github = new GitHub({
      host: 'deprecations-test.com'
    })
    return github.integrations.getInstallations({})

    .then(() => {
      simple.restore()
    })
  })

  it('deprecated followRedirects option', () => {
    simple.mock(console, 'warn', (msg) => {})
    GitHub({
      followRedirects: false
    })
    simple.restore()
  })

  it('deprecated Promise option', () => {
    simple.mock(console, 'warn', (msg) => {})
    GitHub({
      Promise: {}
    })
    simple.restore()
  })
})
