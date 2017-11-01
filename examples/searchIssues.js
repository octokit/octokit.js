const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.search.issues({
  q: 'bazinga'
})
