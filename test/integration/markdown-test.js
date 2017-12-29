const chai = require('chai')
const fixtures = require('@octokit/fixtures')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('api.github.com', () => {
  it('github.misc.renderMarkdown() & .renderMarkdownRaw()', () => {
    const GitHubMock = fixtures.mock('api.github.com/markdown')

    const github = new GitHub()

    return github.misc.renderMarkdown({
      text: `### Hello

b597b5d`,
      context: 'octokit-fixture-org/hello-world',
      mode: 'gfm',
      headers: {
        accept: 'text/html'
      }
    })

    .then((response) => {
      response.data.should.equal(`<h3>Hello</h3>
<p><a href="https://github.com/octokit-fixture-org/hello-world/commit/b597b5d6eead8f1a9e9d3243cd70a890a6155ca8" class="commit-link"><tt>b597b5d</tt></a></p>`)

      return github.misc.renderMarkdownRaw({
        data: `### Hello

b597b5d`,
        headers: {
          accept: 'text/html',
          'content-type': 'text/plain; charset=utf-8'
        }
      })
    })

    .catch(GitHubMock.explain)
  })
})
