'use strict'

module.exports = parseLinks

function parseLinks (octokit) {
  return response => {
    response.links = {};
    (response.headers.link || '')
      .split(/,\s*/)
      .map(value => value.match(/^<([^>]+)>;\s*rel="([^"]+)"$/))
      .forEach(value => {
        if (value) {
          response.links[value[2]] = {
            href: value[1],
            get: () => octokit.request('GET ' + value[1])
          }
        }
      })
  }
}
