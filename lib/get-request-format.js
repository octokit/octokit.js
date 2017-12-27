module.exports = getRequestFormat

function getRequestFormat (state, hasBody, apiDefinitions) {
  if (hasBody) {
    return apiDefinitions.requestFormat || state.definitions.constants.requestFormat
  }

  return 'query'
}
