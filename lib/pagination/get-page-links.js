module.exports = getPageLinks

function getPageLinks (link) {
  link = link.link || link.meta.link || ''

  var links = {}

      // link format:
      // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
  link.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, function (m, uri, type) {
    links[type] = uri
  })

  return links
}
