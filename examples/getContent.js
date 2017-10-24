'use strict'

var Client = require('./../lib/index')

var github = new Client({
  debug: true
})

github.repos.getContent({
  owner: 'octokit',
  repo: 'node-github',
  path: ''
}, function (err, res) {
  console.log(err, res)
})
