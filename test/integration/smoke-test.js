const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

// https://www.npmjs.com/package/nock#enabledisable-real-http-request
nock.disableNetConnect()

describe('smoke test', () => {
  it('github.repos.get({owner: "octokit", repo: "node-github"})', () => {
    const GitHubMock = nock('https://api.github.com', {encodedQueryParams: true})
      .get('/repos/octokit/node-github')
      .reply(200, {
        full_name: 'octokit/node-github'
      })

    const github = new GitHub()

    return github.repos.get({owner: 'octokit', repo: 'node-github'})

    .then((response) => {
      response.data.full_name.should.equal('octokit/node-github')
      GitHubMock.pendingMocks().should.deep.equal([])
    })
  })
})
