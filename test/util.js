module.exports = {
  loadFixture,
  fixtureToInstace,
  getInstance
}

const parseUrl = require('url').parse
const fetch = require('node-fetch')
const GitHub = require('../')

function loadFixture (scenario) {
  return fetch('http://localhost:3000/fixtures', {
    method: 'post',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({scenario})
  })

  .then(response => response.json())
}

function fixtureToInstace ({url}) {
  url = parseUrl(url)

  return new GitHub({
    host: url.host,
    protocol: url.protocol.replace(/:$/, ''),
    pathPrefix: url.path
  })
}

function getInstance (scenario) {
  return loadFixture(scenario)

  .then(fixtureToInstace)
}
