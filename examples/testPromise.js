const GithubApi = require('github')

var github = new GithubApi({
  debug: false
})

github.orgs.getAll({
  page: 5,
  per_page: 100
}).then(function (res) {
  return github.users.getById({ id: '429706' })
}).then(function (res) {
})
