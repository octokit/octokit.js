module.exports = addQueryParameters

function addQueryParameters (url, parameters) {
  const separator = /\?/.test(url) ? '&' : '?'
  const names = Object.keys(parameters)

  if (names.length === 0) {
    return url
  }

  return url + separator + names
    .map(name => {
      if (name === 'q') {
        return 'q=' + escapedSplit(parameters.q, '+')
          .map(encodeURIComponent)
          .join('+')
      }

      return `${name}=${encodeURIComponent(parameters[name])}`
    })
    .join('&')
}

function escapedSplit (s, splitChar) {
  if (!s.includes('\\')) {
    return s.split(splitChar)
  }

  let escaped = false
  let res = ['']
  for (let char of s) {
    if (escaped) {
      res[res.length - 1] += char
      escaped = false
    } else {
      if (char === '\\') {
        escaped = true
      } else if (char === '+') {
        res.push('')
      } else {
        res[res.length - 1] += char
      }
    }
  }

  return res
}
