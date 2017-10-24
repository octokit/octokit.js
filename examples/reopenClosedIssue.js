'use strict'

var Client = require('./../lib/index')
var testAuth = require('./../testAuth.json')

var github = new Client({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: testAuth['token']
})

github.issues.edit({
  owner: 'kaizensoze',
  repo: 'test2',
  number: 2,
  state: 'open'
}, function (err, res) {
  console.log(err, res)
})
