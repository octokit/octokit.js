#!/usr/bin/env node

const generateTypes = require('./generate-types')
module.exports = generateTypes(
  'TypeScript',
  'index.d.ts.tpl',
  'index.d.ts'
)
