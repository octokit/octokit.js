module.exports = getRequestFormat

function getRequestFormat (hasBody, apiDefinitions) {
  if (hasBody) {
    return apiDefinitions.requestFormat || 'json'
  }

  return 'query'
}
