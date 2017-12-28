module.exports = withPathPrefix

function withPathPrefix (prefix, path) {
  if (!prefix) {
    return path
  }

  if (path.indexOf(prefix) === 0) {
    return path
  }

  return prefix + path
}
