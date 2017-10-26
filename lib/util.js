/** section: github
 * class Util
 *
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <mike@c9.io>
 **/

var Util = require('util')

var levels = {
  'info': ['\u001b[90m', '\u001b[39m'], // grey
  'error': ['\u001b[31m', '\u001b[39m'], // red
  'fatal': ['\u001b[35m', '\u001b[39m'], // magenta
  'exit': ['\u001b[36m', '\u001b[39m']  // cyan
}
var _slice = Array.prototype.slice

/**
 *  Util#log(arg1, [arg2], [type]) -> null
 *      - arg1 (mixed): messages to be printed to the standard output
 *      - type (String): type denotation of the message. Possible values:
 *          'info', 'error', 'fatal', 'exit'. Optional, defaults to 'info'.
 *
 *  Unified logging to the console; arguments passed to this function will put logged
 *  to the standard output of the current process and properly formatted.
 *  Any non-String object will be inspected by the NodeJS util#inspect utility
 *  function.
 *  Messages will be prefixed with its type (with corresponding font color), like so:
 *
 *      [info] informational message
 *      [error] error message
 *      [fatal] fatal error message
 *      [exit] program exit message (not an error)
 *
 * The type of message can be defined by passing it to this function as the last/
 * final argument. If the type can not be found, this last/ final argument will be
 * regarded as yet another message.
 **/
exports.log = function () {
  var args = _slice.call(arguments)
  var lastArg = args[args.length - 1]

  var level = levels[lastArg] ? args.pop() : 'info'
  if (!args.length) {
    return
  }

  var msg = args.map(function (arg) {
    return typeof arg !== 'string' ? Util.inspect(arg) : arg
  }).join(' ')
  var pfx = levels[level][0] + '[' + level + ']' + levels[level][1]

  msg.split('\n').forEach(function (line) {
    console.log(pfx + ' ' + line)
  })
}
