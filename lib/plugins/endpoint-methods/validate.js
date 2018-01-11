'use strict'

module.exports = validate

const set = require('lodash/set')
const errors = require('../../request/errors')

function validate (endpointParams, options) {
  Object.keys(endpointParams).forEach(parameterName => {
    const parameter = endpointParams[parameterName]
    const expectedType = parameter.type
    let value = options[parameterName]

    const paramIsPresent = parameterName in options
    const paramIsNull = value === null

    if (!parameter.required && !paramIsPresent) {
      return
    }

    if (parameter['allow-null'] === true && paramIsNull) {
      return
    }

    if ((parameter.required && !paramIsPresent) ||
        (parameter['allow-null'] === false && paramIsNull)) {
      throw new errors.BadRequest(`Empty value for parameter '${parameterName}': ${value}`)
    }

    if (parameter.enum) {
      if (parameter.enum.indexOf(value) === -1) {
        throw new errors.BadRequest(`Invalid value for parameter '${parameterName}': ${value}`)
      }
    }

    if (parameter.validation) {
      const regex = new RegExp(parameter.validation)
      if (!regex.test(value)) {
        throw new errors.BadRequest(`Invalid value for parameter '${parameterName}': ${value}`)
      }
    }

    if (expectedType === 'number') {
      value = parseInt(value, 10)
      if (isNaN(value)) {
        throw new errors.BadRequest(`Invalid value for parameter '${parameterName}': ${options[parameterName]} is NaN`)
      }
    }

    if (expectedType === 'json' && typeof value === 'string') {
      try {
        value = JSON.parse(value)
      } catch (exception) {
        throw new errors.BadRequest(`JSON parse error of value for parameter '${parameterName}': ${value}`)
      }
    }

    if (expectedType === 'date') {
      value = new Date(value)
    }

    if (parameter.mapTo) {

    }

    set(options, parameter.mapTo || parameterName, value)
  })

  return options
}
