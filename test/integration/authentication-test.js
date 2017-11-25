const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
const should = chai.should()

describe('authentication', () => {
  it('basic', () => {
    nock('https://api.github.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    const github = new GitHub()

    github.authenticate({
      type: 'basic',
      username: 'username',
      password: 'password'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('token', () => {
    nock('https://api.github.com', {
      reqheaders: {
        authorization: 'token abc4567'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    const github = new GitHub()

    github.authenticate({
      type: 'token',
      token: 'abc4567'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('oauth token', () => {
    nock('https://api.github.com')
      .get('/orgs/myorg')
      .query({access_token: 'abc4567'})
      .reply(200, {})

    const github = new GitHub()

    github.authenticate({
      type: 'oauth',
      token: 'abc4567'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('oauth key & secret', () => {
    nock('https://api.github.com')
      .get('/orgs/myorg')
      .query({client_id: 'oauthkey', client_secret: 'oauthsecret'})
      .reply(200, {})

    const github = new GitHub()

    github.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('integration', () => {
    nock('https://api.github.com', {
      reqheaders: {
        authorization: 'Bearer abc4567'
      }
    })
      .get('/orgs/myorg')
      .reply(200, {})

    const github = new GitHub()

    github.authenticate({
      type: 'integration',
      token: 'abc4567'
    })

    return github.orgs.get({org: 'myorg'})
  })

  it('authenticate without options', () => {
    const github = new GitHub()
    github.authenticate()
  })

  it('authenticate errors', () => {
    const github = new GitHub()

    ;(() => {
      github.authenticate({})
    }).should.throw(Error)

    ;(() => {
      github.authenticate({type: 'basic'})
    }).should.throw(Error)

    ;(() => {
      github.authenticate({type: 'oauth'})
    }).should.throw(Error)

    ;(() => {
      github.authenticate({type: 'token'})
    }).should.throw(Error)
  })
})
