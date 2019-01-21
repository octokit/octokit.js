const Octokit = require('../../')

require('../mocha-node-setup')

const Mocktokit = Octokit
  .plugin((octokit) => {
    octokit.hook.wrap('request', () => null)
  })

describe('deprecations', () => {
  beforeEach(() => {
    cy.stub(console, 'warn')
  })

  it('octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)', () => {
    const octokit = new Mocktokit()

    return octokit.search.issues({ q: 'foo' })
      .then(() => {
        expect(console.warn.callCount).to.equal(1)
      })
  })

  it('agent option', () => {
    const octokit = new Octokit({
      agent: 'agent'
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.request.agent).to.equal('agent')
      return 'ok'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })

  it('timeout option', () => {
    const octokit = new Octokit({
      timeout: 123
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.request.timeout).to.equal(123)
      return 'ok'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })

  it('headers["User-Agent"] option', () => {
    const octokit = new Octokit({
      baseUrl: 'https://smoke-test.com',
      headers: {
        'User-Agent': 'blah'
      }
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.headers['user-agent']).to.match(/^blah octokit\.js\/0\.0\.0-semantically-released /)
      return 'ok'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })

  it('headers.accept option', () => {
    const octokit = new Octokit({
      headers: {
        accept: 'application/vnd.github.jean-grey-preview+json,application/vnd.github.symmetra-preview+json'
      }
    })

    octokit.hook.wrap('request', (request, options) => {
      expect(options.headers.accept).to.equal('application/vnd.github.jean-grey-preview+json,application/vnd.github.symmetra-preview+json')
      return 'ok'
    })

    expect(console.warn.callCount).to.equal(1)

    return octokit.request('/')

      .then(response => {
        expect(response).to.equal('ok')
      })
  })
})
