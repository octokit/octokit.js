#!/usr/bin/env node

const { compile } = require('json-schema-to-typescript')
const RESPONSE_TYPES_SCHEMA = require('./response-type-defs.json')

const generateTypes = require('./generate-types')

// Generate Response Types
compile(RESPONSE_TYPES_SCHEMA, '_RootSchemaInterfaceToDiscard').then(responseTypesOutput => {
  generateTypes(
    'TypeScript',
    'index.d.ts.tpl',
    'index.d.ts',
    responseTypesOutput
  )
})
