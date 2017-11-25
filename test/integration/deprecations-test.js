const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('deprecations', () => {
  it('github.integrations.*', () => {
    nock('https://api.github.com')
      .get('/app/installations')
      .reply(200, [])

    const github = new GitHub()
    return github.integrations.getInstallations({})
  })
})
