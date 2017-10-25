'use strict'

var Client = require('./../lib/index')

var github = new Client({
  debug: false
})

github.orgs.getAll({
  page: 5,
  per_page: 100
}).then(function (res) {
  console.log(res)
  return github.users.getById({ id: '429706' })
}).then(function (res) {
  console.log(res)
})
