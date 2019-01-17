module.exports = octokitParseLinks

const parseLinks = require('./parseLinks')

function octokitParseLinks (octokit) {
  octokit.hook.after('request', parseLinks(octokit))
}
