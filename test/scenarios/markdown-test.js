const {getInstance} = require('../util')

describe('api.github.com', () => {
  beforeEach(function () {
    return getInstance('markdown')

    .then(github => {
      this.github = github

      github.plugin(require('../../lib/plugins/endpoint-methods'))
    })
  })

  it('github.misc.renderMarkdown() & .renderMarkdownRaw()', function () {
    return this.github.misc.renderMarkdown({
      text: `### Hello

b597b5d`,
      context: 'octokit-fixture-org/hello-world',
      mode: 'gfm',
      headers: {
        accept: 'text/html'
      }
    })

    .then((response) => {
      expect(response.data).to.match(/<h3>Hello<\/h3>/)
      expect(response.data).to.match(/\/octokit-fixture-org\/hello-world\/commit\/b597b5d6eead8f1a9e9d3243cd70a890a6155ca8/)
      expect(response.data).to.match(/<tt>b597b5d<\/tt>/)

      return this.github.misc.renderMarkdownRaw({
        data: `### Hello

b597b5d`,
        headers: {
          accept: 'text/html',
          'content-type': 'text/plain; charset=utf-8'
        }
      })
    })
  })
})
