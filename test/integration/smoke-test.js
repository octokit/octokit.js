const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('constructor', () => {
  it('called as function', () => {
    GitHub()
  })

  it('host & pathPrefix options', () => {
    nock('https://myhost.com')
      .get('/my/api/orgs/myorg')
      .reply(200, {})

    const github = new GitHub({
      host: 'myhost.com',
      pathPrefix: '/my/api/'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('has .getReposApi() method', () => {
    const github = new GitHub()
    const api = github.getReposApi()
    api.getAll.should.be.a('function')
  })
})
