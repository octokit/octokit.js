const fs = require('fs')

const chai = require('chai')
const nock = require('nock')

const GitHub = require('../../')

chai.should()

describe('github.repos.uploadReleaseAsset', () => {
  it('accepts file stream (#675)', () => {
    const github = new GitHub()
    const size = fs.statSync(__filename).size

    nock('https://upload.test')
      .post('/', function (data) {
        return fs.readFileSync(__filename, 'utf8') === data
      })
      .reply(200)

    return github.repos.uploadReleaseAsset({
      url: 'https://upload.test',
      headers: {
        'content-type': 'text/json',
        'content-length': size
      },
      file: fs.createReadStream(__filename),
      name: 'package.json'
    })
  })
})
