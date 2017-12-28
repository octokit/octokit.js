module.exports = getRequestFormat

function getRequestFormat (state, hasBody, apiDefinitions) {
  if (hasBody) {
    return apiDefinitions.requestFormat || 'json'
  }

  return 'query'
}
