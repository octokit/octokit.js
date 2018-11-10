const { getInstance } = require('../util')

require('../mocha-node-setup')

describe('api.github.com', () => {
  let github

  beforeEach(() => {
    return getInstance('markdown')

      .then(instance => {
        github = instance
      })
  })

  it('github.markdown.render() & .renderMarkdownRaw()', () => {
    return github.markdown.render({
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

        return github.markdown.renderRaw({
          data: `### Hello

b597b5d`,
          headers: {
            accept: 'text/html',
            'content-type': 'text/plain; charset=utf-8'
          }
        })
      })
  })

  it('github.markdown.render() with capitalized headers.Accept', () => {
    return github.markdown.render({
      text: `### Hello

b597b5d`,
      context: 'octokit-fixture-org/hello-world',
      mode: 'gfm',
      headers: {
        Accept: 'text/html'
      }
    })

      .then((response) => {
        expect(response.data).to.match(/<h3>Hello<\/h3>/)
        expect(response.data).to.match(/\/octokit-fixture-org\/hello-world\/commit\/b597b5d6eead8f1a9e9d3243cd70a890a6155ca8/)
        expect(response.data).to.match(/<tt>b597b5d<\/tt>/)
      })
  })
})
