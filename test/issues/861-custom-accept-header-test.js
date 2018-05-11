const nock = require('nock')
const Octokit = require('../../')

require('../mocha-node-setup')

describe('https://github.com/octokit/rest.js/issues/861', () => {
  it('custom accept header', () => {
    nock('https://issues-861-test.com', {
      reqheaders: {
        'accept': 'application/vnd.github.antiope-preview+json',
        'authorization': 'token 123'
      }
    })
      .post('/repos/swinton/example/check-runs')
      .reply(201, {})
      .persist()

    const octokit = new Octokit({
      baseUrl: 'https://issues-861-test.com'
    })

    octokit.authenticate({
      type: 'token',
      token: '123'
    })

    const options = {
      owner: 'swinton',
      repo: 'example',
      name: 'feedback',
      head_branch: 'helloworld',
      head_sha: '2e3d00a6f14a667d50ad9ccd6f3dcfded52121e2',
      status: 'in_progress',
      started_at: (new Date()).toISOString(),
      completed_at: (new Date()).toISOString(),
      conclusion: 'status'
    }
    const request1 = octokit.checks.create(Object.assign(options, {
      headers: {
        accept: 'application/vnd.github.antiope-preview+json'
      }
    }))
    const request2 = octokit.checks.create(Object.assign(options, {
      headers: {
        Accept: 'application/vnd.github.antiope-preview+json'
      }
    }))

    return Promise.all([request1, request2])
  })
})
