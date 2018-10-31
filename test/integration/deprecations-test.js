const nock = require('nock')

const GitHub = require('../../')

require('../mocha-node-setup')

describe('deprecations', () => {
  let github

  beforeEach(() => {
    github = new GitHub({
      baseUrl: 'https://deprecations-test.com'
    })
    cy.stub(console, 'warn')
  })

  it('github.integrations.*', () => {
    nock('https://deprecations-test.com')
      .get('/app/installations')
      .reply(200, [])

    return github.integrations.getInstallations({})

      .then(() => {
        expect(console.warn.callCount).to.equal(1)
      })
  })

  it('deprecated followRedirects option', () => {
    GitHub({
      followRedirects: false
    })
    expect(console.warn.callCount).to.equal(1)
  })

  it('deprecated protocol, host, port, pathPrefix options', () => {
    GitHub({
      protocol: 'https',
      host: 'deprecations-test.com',
      port: 1234,
      pathPrefix: '/deprecations-test.com/'
    })
    expect(console.warn.callCount).to.equal(4)

    // it logs same messages only once (#871)
    GitHub({
      protocol: 'https',
      host: 'deprecations-test.com',
      port: 1234,
      pathPrefix: '/deprecations-test.com/'
    })
    expect(console.warn.callCount).to.equal(4)
  })

  it('deprecated Promise option', () => {
    GitHub({
      Promise: {}
    })
    expect(console.warn.callCount).to.equal(1)
  })

  it('deprecated ca option', () => {
    GitHub({
      baseUrl: 'https://api.github.com',
      ca: 'certificate123'
    })
    expect(console.warn.callCount).to.equal(1)
  })

  it('deprecated proxy option', () => {
    GitHub({
      baseUrl: 'https://api.github.com',
      proxy: 'http://localhost:1234'
    })
    expect(console.warn.callCount).to.equal(1)
  })

  it('deprecated family option', () => {
    GitHub({
      baseUrl: 'https://api.github.com',
      family: 6
    })
    expect(console.warn.callCount).to.equal(1)
  })

  it('deprecated rejectUnauthorized option', () => {
    GitHub({
      baseUrl: 'https://api.github.com',
      rejectUnauthorized: false
    })
    expect(console.warn.callCount).to.equal(1)
  })

  it('deprecated client.activity.getEventsForRepoIssues()', () => {
    nock('https://deprecations-test.com')
      .get('/repos/foo/bar/issues/events')
      .reply(200, [])

    return github.activity.getEventsForRepoIssues({
      owner: 'foo',
      repo: 'bar'
    })

      .then(() => {
        expect(console.warn.callCount).to.equal(1)
      })
  })

  it('deprecated client.gitdata.getCommitSignatureVerification()', () => {
    nock('https://deprecations-test.com')
      .get('/repos/foo/bar/git/commits/baz')
      .reply(200, [])

    return github.gitdata.getCommitSignatureVerification({
      owner: 'foo',
      repo: 'bar',
      commit_sha: 'baz'
    })

      .then(() => {
        expect(console.warn.callCount).to.equal(1)
      })
  })

  it('deprecated client.gitdata.getTagSignatureVerification()', () => {
    nock('https://deprecations-test.com')
      .get('/repos/foo/bar/git/tags/baz')
      .reply(200, [])

    return github.gitdata.getTagSignatureVerification({
      owner: 'foo',
      repo: 'bar',
      tag_sha: 'baz'
    })

      .then(() => {
        expect(console.warn.callCount).to.equal(1)
      })
  })

  it('deprecated sha parameter for client.gitdata.getCommit({sha})', () => {
    nock('https://deprecations-test.com')
      .get('/repos/foo/bar/git/commits/sha123')
      .reply(200, {})

    return github.gitdata.getCommit({
      owner: 'foo',
      repo: 'bar',
      sha: 'sha123'
    })

      .then(() => {
        expect(console.warn.callCount).to.equal(1)
      })
  })

  it('deprecated authentication type "integration"', () => {
    nock('https://deprecations-test.com')
      .get('/app/installations')
      .reply(200, [])

    github.authenticate({
      type: 'integration',
      token: 'foo'
    })

    return github.apps.getInstallations({})

      .then(() => {
        expect(console.warn.callCount).to.equal(1)
      })
  })
})
