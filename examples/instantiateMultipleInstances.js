const Github = require('./../lib/index')

const github1 = new Github()
const github2 = new Github()

github1.authenticate({
  type: 'oauth',
  token: 'add-a-real-token-here'
})

github2.authenticate({
  type: 'oauth',
  token: 'add-a-different-token-here'
})
