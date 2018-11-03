const Octokit = require('../../')

require('../mocha-node-setup')

describe('plugins', () => {
  it('gets called in constructor', () => {
    const MyOctokit = Octokit.plugin((octokit) => {
      octokit.foo = 'bar'
    })
    const myClient = new MyOctokit()
    expect(myClient.foo).to.equal('bar')
  })

  it('it does not override plugins of original constructor', () => {
    const MyOctokit = Octokit.plugin((octokit) => {
      octokit.foo = 'bar'
    })
    const myClient = new MyOctokit()
    expect(myClient.foo).to.equal('bar')

    const client = new Octokit()
    expect(client.foo).to.equal(undefined)
  })

  it('receives client options', () => {
    const MyOctokit = Octokit.plugin((octokit, options) => {
      expect(options.foo).to.equal('bar')
    })
    MyOctokit({ foo: 'bar' })
  })
})
