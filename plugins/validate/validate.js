'use strict'

module.exports = validate

const Deprecation = require('deprecation')
const HttpError = require('@octokit/request/lib/http-error')
const get = require('lodash.get')
const set = require('lodash.set')

function validate (octokit, options) {
  if (!options.request.validate) {
    return
  }
  const { validate: params } = options.request

  // find aliased parameters
  Object.keys(params).forEach(parameterName => {
    const parameter = get(params, parameterName)

    if (!parameter.alias) {
      return
    }

    if (parameter.alias in options && parameterName in options) {
      throw new HttpError(`Deprecated '${parameterName}' and '${parameter.alias}' cannot both be set`, 400, null, options)
    }

    if (parameter.alias in options) {
      return
    }

    // There is currently no aliased parameter which is not deprecated at the same time
    // if (parameter.deprecated) { }
    octokit.log.warn(new Deprecation(`[@octokit/rest] "${parameterName}" parameter is deprecated for "${options.method} ${options.url}", use "${parameter.alias}" instead`))

    options[parameter.alias] = options[parameterName]
    delete options[parameterName]
  })

  Object.keys(params).forEach(parameterName => {
    let parameter = get(params, parameterName)

    const expectedType = parameter.type
    let parentParameterName
    let parentValue
    let parentParamIsPresent = true
    let parentParameterIsArray = false

    if (/\./.test(parameterName)) {
      parentParameterName = parameterName.replace(/\.[^.]+$/, '')
      parentParameterIsArray = parentParameterName.slice(-2) === '[]'
      if (parentParameterIsArray) {
        parentParameterName = parentParameterName.slice(0, -2)
      }
      parentValue = get(options, parentParameterName)
      parentParamIsPresent = parentParameterName === 'headers' || (typeof parentValue === 'object' && parentValue !== null)
    }

    let values = parentParameterIsArray
      ? (get(options, parentParameterName) || []).map(value => value[parameterName.split(/\./).pop()])
      : [get(options, parameterName)]

    values.forEach((value, i) => {
      const valueIsPresent = typeof value !== 'undefined'
      const valueIsNull = value === null
      const currentParameterName = parentParameterIsArray
        ? parameterName.replace(/\[\]/, `[${i}]`)
        : parameterName

      if (!parameter.required && !valueIsPresent) {
        return
      }

      // if the parent parameter is of type object but allows null
      // then the child parameters can be ignored
      if (!parentParamIsPresent) {
        return
      }

      if (parameter.allowNull && valueIsNull) {
        return
      }

      if (!parameter.allowNull && valueIsNull) {
        throw new HttpError(`'${currentParameterName}' cannot be null`, 400, null, options)
      }

      if (parameter.required && !valueIsPresent) {
        throw new HttpError(`Empty value for parameter '${currentParameterName}': ${JSON.stringify(value)}`, 400, null, options)
      }

      // parse to integer before checking for enum
      // so that string "1" will match enum with number 1
      if (expectedType === 'integer') {
        const unparsedValue = value
        value = parseInt(value, 10)
        if (isNaN(value)) {
          throw new HttpError(`Invalid value for parameter '${currentParameterName}': ${JSON.stringify(unparsedValue)} is NaN`, 400, null, options)
        }
      }

      if (parameter.enum && parameter.enum.indexOf(value) === -1) {
        throw new HttpError(`Invalid value for parameter '${currentParameterName}': ${JSON.stringify(value)}`, 400, null, options)
      }

      if (parameter.validation) {
        const regex = new RegExp(parameter.validation)
        if (!regex.test(value)) {
          throw new HttpError(`Invalid value for parameter '${currentParameterName}': ${JSON.stringify(value)}`, 400, null, options)
        }
      }

      if (expectedType === 'object' && typeof value === 'string') {
        try {
          value = JSON.parse(value)
        } catch (exception) {
          throw new HttpError(`JSON parse error of value for parameter '${currentParameterName}': ${JSON.stringify(value)}`, 400, null, options)
        }
      }

      set(options, parameter.mapTo || currentParameterName, value)
    })
  })

  return options
}
