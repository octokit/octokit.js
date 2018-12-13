const nock = require('nock')
const Octokit = require('../../')

require('../mocha-node-setup')

describe('https://github.com/octokit/rest.js/issues/1127', () => {
  it('octokit.issues.addLabels({owner, repo, number, labels: ["foo", "bar"]})', () => {
    nock('https://github.acme-inc.com')
      .post('/repos/dominykas/example/issues/123/labels', (body) => {
        expect(body).to.deep.equal(['foo', 'bar'])
        return true
      })
      .reply(200, [])

    const client = new Octokit({
      baseUrl: 'https://github.acme-inc.com'
    })

    return client.issues.addLabels({
      owner: 'dominykas',
      repo: 'example',
      number: 123,
      head_sha: 'SHA',
      labels: ['foo', 'bar']
    })
  })
})
