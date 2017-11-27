#!/usr/bin/env node

module.exports = require('./generate-types')('Flow', 'index.js.flow.tpl', 'index.js.flow')
