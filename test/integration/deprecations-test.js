const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('deprecations', () => {
  it('github.integrations.*', () => {
    nock('https://deprecations-test.com')
      .get('/app/installations')
      .reply(200, [])

    const github = new GitHub({
      host: 'deprecations-test.com'
    })
    return github.integrations.getInstallations({})
  })
})
