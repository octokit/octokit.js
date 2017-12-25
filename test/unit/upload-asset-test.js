const fs = require('fs')

const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
chai.should()

describe('github.repos.uploadAsset', () => {
  it('accepts file stream (#675)', () => {
    const github = new GitHub()
    const size = fs.statSync(__filename).size

    nock('https://upload.test')
      .post('/', function (data) {
        return fs.readFileSync(__filename, 'utf8') === data
      })
      .reply(200)

    return github.repos.uploadAsset({
      url: 'https://upload.test',
      file: fs.createReadStream(__filename),
      contentType: 'text/json',
      contentLength: size,
      name: 'package.json'
    })
  })
})
