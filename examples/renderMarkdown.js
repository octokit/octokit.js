const GitHubApi = require('@octokit/rest')
const github = new GitHubApi({
  debug: false
})

github.misc.renderMarkdown({
  'text': 'Hello world github/linguist#1 **cool**, and #1!'
})
