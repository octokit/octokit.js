const octokit = require('@octokit/rest')({
  debug: true
})

octokit.orgs.getAll({
  page: 5,
  per_page: 100
}).then(function (res) {
  return octokit.users.getById({ id: '429706' })
}).then(function (res) {
})
