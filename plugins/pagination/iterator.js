module.exports = iterator

function iterator (octokit, options) {
  const state = {
    page: options.page
  }

  return {
    [Symbol.asyncIterator]: () => ({
      next () {
        state.page = (state.page || 0) + 1

        if (state.done) {
          return Promise.resolve({ done: true })
        }

        return octokit.request(Object.assign(options, { page: state.page }))

          .then((response) => {
            if (!hasNextPage(response)) {
              state.done = true
            }

            return {
              value: response
            }
          })
      }
    })
  }
}

function hasNextPage (response) {
  const link = response.headers.link || ''
  const links = {}

  // link format:
  // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
  link.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (m, uri, type) => {
    links[type] = uri
  })

  return !!links.next
}
