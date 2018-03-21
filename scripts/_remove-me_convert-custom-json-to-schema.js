const fs = require('fs')
const { compile } = require('json-schema-to-typescript')
const responseTypes = require('./_remove-me_response-types.json')

const definitions = {}
const allSchemaObjects = {}

Object.entries(responseTypes).forEach(([key, value]) => {
  // Conver the value Object to a different object
  const valueConverted = {}
  const requiredProps = []
  Object.entries(value).forEach(([propName, propValue]) => {
    if (propValue.required) {
      requiredProps.push(propName)
    }
    const v = { }
    if (propValue.type) {
      switch (propValue.type) {
        case 'string':
        case 'number':
        case 'boolean':
          v['type'] = propValue.type
          break
        case 'json':
        case 'any':
        case 'FilesMap': // For now, just allow any object. TODO fixme to be more specific
          v['type'] = 'object'
          v['$comment'] = `TODO: Fixme to be more specific. Originally was '${propValue.type}'`
          break
        default:
          v['$ref'] = `#/definitions/${propValue.type}`
          break
      }
    } else if (propValue.type_enum) {
      v['enum'] = propValue.type_enum
    } else {
      throw new Error('bug')
    }
    if (propValue.isArray) {
      valueConverted[propName] = {
        type: 'array',
        items: v
      }
    } else {
      valueConverted[propName] = v
    }
  })
  definitions[key] = {
    $id: `#${key}`,
    title: undefined,
    type: 'object',
    additionalProperties: false,
    properties: valueConverted,
    required: requiredProps.length ? requiredProps : undefined
  }
  allSchemaObjects[key] = {$ref: `#/definitions/${key}`}
})

const schema = {
  // $schema: 'http://json-schema.org/draft-06/schema#',
  // $id: 'https://api.github.com/rest-response-types',
  description: 'JSON Schema for GitHub API Response Types',
  $comment: 'See https://developer.github.com/v3/',
  definitions: definitions,
  // A Root object for the json-schema-to-typescript package
  type: 'object',
  properties: allSchemaObjects
}

fs.writeFileSync('scripts/response-type-defs.json', JSON.stringify(schema, null, 2))

compile(schema, 'RootSchemaInterfaceToDiscard').then(ts => console.log(ts))
