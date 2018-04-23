'use strict'

module.exports = validate

const set = require('lodash/set')
const get = require('lodash/get')
const HttpError = require('../../request/http-error')

function validate (endpointParams, options) {
  // Alias are handled before validation, as validation rules
  // ar set the aliased parameter. The `mapTo` property is the other way
  // around, the final parameter name is the mapTo value, but validation
  // rules are on parameter with the mapTo property
  Object.keys(options).forEach(optionName => {
    if (!endpointParams[optionName] || !endpointParams[optionName].alias) {
      return
    }

    options[endpointParams[optionName].alias] = options[optionName]
    delete options[optionName]

    // right now all parameters with an alias property also have a deprecated
    // property, but that might change in future, so we wrap it in the if block,
    // but ignore if for coverage
    /* istanbul ignore else */
    if (endpointParams[optionName].deprecated) {
      console.warn(`DEPRECATED: ${endpointParams[optionName].deprecated}`)
    }
  })

  Object.keys(endpointParams).forEach(parameterName => {
    const parameter = endpointParams[parameterName]
    const expectedType = parameter.type
    let value = get(options, parameterName)

    const paramIsPresent = typeof value !== 'undefined'
    let parentParamIsPresent = true
    const paramIsNull = value === null

    if (/\./.test(parameterName)) {
      const parentParameterName = parameterName.replace(/\.[^.]+$/, '')
      parentParamIsPresent = typeof get(options, parentParameterName) !== 'object'
    }

    if (!parameter.required && !paramIsPresent) {
      return
    }

    // if the parent parameter is of type object but allows null
    // then the child parameters can be ignored
    if (!parentParamIsPresent) {
      return
    }

    if (parameter.allowNull === true && paramIsNull) {
      return
    }

    if ((parameter.allowNull === false && paramIsNull)) {
      throw new HttpError(`'${parameterName}' cannot be null`, 400)
    }

    if (parameter.required && !paramIsPresent) {
      throw new HttpError(`Empty value for parameter '${parameterName}': ${value}`, 400)
    }

    if (parameter.enum && parameter.enum.indexOf(value) === -1) {
      throw new HttpError(`Invalid value for parameter '${parameterName}': ${value}`, 400)
    }

    if (parameter.validation) {
      const regex = new RegExp(parameter.validation)
      if (!regex.test(value)) {
        throw new HttpError(`Invalid value for parameter '${parameterName}': ${value}`, 400)
      }
    }

    if (expectedType === 'integer') {
      const unparsedValue = value
      value = parseInt(value, 10)
      if (isNaN(value)) {
        throw new HttpError(`Invalid value for parameter '${parameterName}': ${unparsedValue} is NaN`, 400)
      }
    }

    if (expectedType === 'object' && typeof value === 'string') {
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
