module.exports = parseMethodOptions

const errors = require('./utils/errors')

function parseMethodOptions (state, options, paramsStruct) {
  var params = Object.keys(paramsStruct)
  var paramName, def, value, type
  for (var i = 0, l = params.length; i < l; ++i) {
    paramName = params[i]
    if (paramName.charAt(0) === '$') {
      paramName = paramName.substr(1)
      if (!state.params[paramName]) {
        throw new errors.BadRequest("Invalid variable parameter name substitution; param '" +
                      paramName + "' not found in definitions.json")
      } else {
        def = paramsStruct[paramName] = state.params[paramName]
        delete paramsStruct['$' + paramName]
      }
    } else {
      def = paramsStruct[paramName]
    }

    value = options[paramName]
    if (typeof value !== 'boolean' && !value) {
              // we don't need validation for undefined parameter values
              // that are not required.
      if (!def.required ||
                  (def['allow-empty'] && value === '') ||
                  (def['allow-null'] && value === null)) {
        continue
      }
      throw new errors.BadRequest("Empty value for parameter '" +
                  paramName + "': " + value)
    }

          // validate the value and type of parameter:
    if (def.validation) {
      if (!new RegExp(def.validation).test(value)) {
        throw new errors.BadRequest("Invalid value for parameter '" +
                      paramName + "': " + value)
      }
    }

    type = def.type.toLowerCase()

    if (type === 'number') {
      value = parseInt(value, 10)

      if (isNaN(value)) {
        throw new errors.BadRequest("Invalid value for parameter '" +
                        paramName + "': " + options[paramName] + ' is NaN')
      }
    } else if (type === 'json') {
      if (typeof value === 'string') {
        try {
          value = JSON.parse(value)
        } catch (ex) {
          throw new errors.BadRequest("JSON parse error of value for parameter '" +
                            paramName + "': " + value)
        }
      }
    } else if (type === 'date') {
      value = new Date(value)
    }

    options[paramName] = value
  }

  return options
}
