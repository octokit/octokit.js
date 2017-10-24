'use strict'

var Client = require('./../lib/index')
var testAuth = require('./../testAuth.json')

var github = new Client({})

github.authenticate({
  type: 'oauth',
  token: testAuth['token']
})

github.repos.getAll({
  'affiliation': 'owner,organization_member'
}, function (err, res) {
  if (err) throw err
  if (github.hasNextPage(res)) {
    console.log(res.data.length)
    github.getNextPage(res, nextFunc)
  }
})

function nextFunc (err, res) {
  if (err) throw err
  console.log(res.data.length)
}
