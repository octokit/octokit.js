const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')
const restEndpoint = require('../../lib/endpoint')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('authentication plugin', () => {
  it('OAuth authentication with URL containing ?', () => {
    nock('https://authentication-plugin-test-host.com')
      .get('/')
      .query({foo: 'bar', client_id: 'oauthkey', client_secret: 'oauthsecret'})
      .reply(200, {})

    const github = new GitHub({
      host: 'authentication-plugin-test-host.com'
    })

    github.authenticate({
      type: 'oauth',
      key: 'oauthkey',
      secret: 'oauthsecret'
    })

    return github.request({
      url: '/?foo=bar'
    })
  })
})

describe('github.endpoint()', () => {
  it('missing parameter', () => {
    try {
      restEndpoint({
        url: '/orgs/:org/repos'
      })
      throw new Error('should throw error')
    } catch (error) {
      error.message.should.equal('Missing parameters: org')
    }
  })
})
