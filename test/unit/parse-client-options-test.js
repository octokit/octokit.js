require('../mocha-node-setup')

const parseOptions = require('../../lib/parse-client-options')

describe('parseOptions(options)', () => {
  it('options.httpClient)', () => {
    const options = parseOptions({
      httpClient: 'foo',
      url: '/'
    })

    expect(options.request.client).to.equal('foo')
  })
})
