const https = require('https')
const {readFileSync} = require('fs')
const {resolve} = require('path')

const Octokit = require('../../..')
const ca = readFileSync(resolve(__dirname, './ca.crt'))

require('../../mocha-node-setup')

describe('custom client certificate', () => {
  let server
  before((done) => {
    server = https.createServer({
      key: readFileSync(resolve(__dirname, './localhost.key')),
      cert: readFileSync(resolve(__dirname, './localhost.crt'))
    }, function (request, response) {
      expect(request.method).to.equal('GET')
      expect(request.url).to.equal('/repos/octokit/rest.js')

      response.writeHead(200)
      response.write('ok')
      response.end()
    })

    server.listen(0, done)
  })

  it('options.ca', () => {
    const octokit = new Octokit({
      protocol: 'https',
      host: 'localhost',
      port: server.address().port,
      ca
    })

    return octokit.repos.get({
      owner: 'octokit',
      repo: 'rest.js'
    })
  })

  it('https.Agent({ca})', () => {
    const agent = new https.Agent({ca})
    const octokit = new Octokit({
      protocol: 'https',
      host: 'localhost',
      port: server.address().port,
      agent
    })

    return octokit.repos.get({
      owner: 'octokit',
      repo: 'rest.js'
    })
  })

  after(done => server.close(done))
})
