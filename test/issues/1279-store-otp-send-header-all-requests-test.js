const nock = require('nock')
const Octokit = require('../../')

require('../mocha-node-setup')

describe('https://github.com/octokit/rest.js/issues/1279', () => {
  it('2fa code gets stored and passed as header to listAuthorizations', () => {
    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
      }
    })
      .get('/')
      .reply(401, {}, {
        'x-github-otp': 'required; app'
      })

    nock('https://authentication-test-host.com', {
      reqheaders: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=',
        'x-github-otp': '123456'
      }
    })
      .get('/')
      .reply(200, {})

    nock('https://authentication-test-host.com')
      .get('/authorizations?per_page=100')
      .reply(function () {
        expect(this.req.headers).to.have.property('x-github-otp')
      })

    const octokit = new Octokit({
      baseUrl: 'https://authentication-test-host.com',
      auth: {
        username: 'username',
        password: 'password',
        on2fa () {
          return Promise.resolve(123456)
        }
      }
    })

    return octokit.request('/')
      .then(() => {
        return octokit.authorization.listAuthorizations({ per_page: 100 })
      })
  })
})
