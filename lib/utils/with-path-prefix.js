module.exports = withPathPrefix

function withPathPrefix (prefix, path) {
  if (!prefix) {
    return path
  }

  return prefix + path
}
