const octokit = require('@octokit/rest')({
  debug: false
})

octokit.misc.renderMarkdown({
  'text': 'Hello world github/linguist#1 **cool**, and #1!'
})
