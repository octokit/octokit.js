'use strict'

var Client = require('./../lib/index')
var github = new Client({
  debug: true
})

github.orgs.getForUser({
  username: 'tj',
  per_page: 100
}, function (err, res) {
  console.log(err, res)
})
