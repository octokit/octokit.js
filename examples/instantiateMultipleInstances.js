const GithubApi = require('./../lib/index')

const github1 = new GithubApi()
const github2 = new GithubApi()

github1.authenticate({
  type: 'oauth',
  token: 'add-a-real-token-here'
})

github2.authenticate({
  type: 'oauth',
  token: 'add-a-different-token-here'
})
