/**
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <mike@c9.io>
 */

var Util = require("util");

exports.extend = function(dest, src, noOverwrite) {
    for (var prop in src) {
        if (!noOverwrite || typeof dest[prop] == "undefined")
            dest[prop] = src[prop];
    }
    return dest;
};

exports.escapeRegExp = function(str) {
    return str.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1');
};

exports.toCamelCase = function(str, upper) {
    str = str.toLowerCase().replace(/(?:(^.)|(\s+.)|(-.))/g, function(match) {
        return match.charAt(match.length - 1).toUpperCase();
    });
    if (upper)
        return str;
    return str.charAt(0).toLowerCase() + str.substr(1);
};

/**
 * Determines whether a string is true in the html attribute sense.
 * @param {mixed} value the variable to check
 *   Possible values:
 *   true   The function returns true.
 *   'true' The function returns true.
 *   'on'   The function returns true.
 *   1      The function returns true.
 *   '1'    The function returns true.
 * @return {Boolean} whether the string is considered to imply truth.
 */
exports.isTrue = function(c){
    return (c === true || c === "true" || c === "on" || typeof c == "number" && c > 0 || c === "1");
};

/**
 * Determines whether a string is false in the html attribute sense.
 * @param {mixed} value the variable to check
 *   Possible values:
 *   false   The function returns true.
 *   'false' The function returns true.
 *   'off'   The function returns true.
 *   0       The function returns true.
 *   '0'     The function returns true.
 * @return {Boolean} whether the string is considered to imply untruth.
 */
exports.isFalse = function(c){
    return (c === false || c === "false" || c === "off" || c === 0 || c === "0");
};

var levels = {
    "info":  ["\033[90m", "\033[39m"], // grey
    "error": ["\033[31m", "\033[39m"], // red
    "fatal": ["\033[35m", "\033[39m"], // magenta
    "exit":  ["\033[36m", "\033[39m"]  // cyan
};
var _slice = Array.prototype.slice;

/**
 * Unified logging to the console; arguments passed to this function will put logged
 * to the standard output of the current process and properly formatted.
 * Any non-String object will be inspected by the NodeJS util#inspect utility
 * function.
 * Messages will be prefixed with its type (with corresponding font color), like so:
 * <code>
 * [info] informational message
 * [error] error message
 * [fatal] fatal error message
 * [exit] program exit message (not an error)
 * </code>
 * The type of message can be defined by passing it to this function as the last/ 
 * final argument. If the type can not be found, this last/ final argument will be
 * regarded as yet another message.
 * 
 * @param {mixed}  arg-1[, arg-n] messages to be printed to the standard output
 * @param {String} [arg-n]        type denotation of the message. Possible values:
 *                                'info', 'error', 'fatal', 'exit'. Optional, defaults
 *                                to 'info'.
 */
exports.log = function() {
    var args = _slice.call(arguments);
    var lastArg = args[args.length - 1];

    var level = levels[lastArg] ? args.pop() : "info";
    if (!args.length)
        return;

    var msg = args.map(function(arg) {
        return typeof arg != "string" ? Util.inspect(arg) : arg;
    }).join(" ");
    var pfx = levels[level][0] + "[" + level + "]" + levels[level][1];

    msg.split("\n").forEach(function(line) {
        console.log(pfx + " " + line);
    });
};
