require('../mocha-node-setup')

const endpoint = require('../../lib/endpoint')

describe('endpoint(options)', () => {
  it('options.headers.Accept (capital A)', () => {
    const options = endpoint({
      // request options
      method: 'GET',
      url: '/',
      headers: {
        Accept: 'foo/bar'
      }
    })

    expect(options.headers.accept).to.equal('foo/bar')
  })
})
