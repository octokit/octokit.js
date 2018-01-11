#!/usr/bin/env node

const generateTypes = require('./generate-types')
module.exports = generateTypes(
  'Flow',
  'index.js.flow.tpl',
  'index.js.flow'
)
