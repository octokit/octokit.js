'use strict'

module.exports = validate

const set = require('lodash/set')
const HttpError = require('../../request/http-error')

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
      throw new HttpError(`Empty value for parameter '${parameterName}': ${value}`, 400)
    }

    if (parameter.enum) {
      if (parameter.enum.indexOf(value) === -1) {
        throw new HttpError(`Invalid value for parameter '${parameterName}': ${value}`, 400)
      }
    }

    if (parameter.validation) {
      const regex = new RegExp(parameter.validation)
      if (!regex.test(value)) {
        throw new HttpError(`Invalid value for parameter '${parameterName}': ${value}`, 400)
      }
    }

    if (expectedType === 'number') {
      value = parseInt(value, 10)
      if (isNaN(value)) {
        throw new HttpError(`Invalid value for parameter '${parameterName}': ${options[parameterName]} is NaN`, 400)
      }
    }

    if (expectedType === 'json' && typeof value === 'string') {
      try {
        value = JSON.parse(value)
      } catch (exception) {
        throw new HttpError(`JSON parse error of value for parameter '${parameterName}': ${value}`, 400)
      }
    }

    set(options, parameter.mapTo || parameterName, value)
  })

  return options
}
