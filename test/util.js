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

  .catch(error => {
    if (error.code === 'ECONNREFUSED') {
      throw new Error('Fixtures server could not be reached. Make sure to start it with "npm run start-fixtures-server"')
    }

    throw error
  })
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
