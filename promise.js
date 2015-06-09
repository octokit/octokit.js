/*jslint browser: true, node: true, maxlen: 128 */
/*global self */

"use strict";

var globalObject, hasPromiseSupport;

function isFunction(x) {
    return typeof x === "function";
}

// Seek the global object
if (global !== undefined) {
    globalObject = global;
} else if (window !== undefined && window.document) {
    globalObject = window;
} else {
    globalObject = self;
}

hasPromiseSupport =

    globalObject.hasOwnProperty("Promise") &&

    // Some of these methods are missing from
    // Firefox/Chrome experimental implementations
    globalObject.Promise.hasOwnProperty("resolve") &&
    globalObject.Promise.hasOwnProperty("reject") &&
    globalObject.Promise.hasOwnProperty("all") &&
    globalObject.Promise.hasOwnProperty("race") &&

    // Older version of the spec had a resolver object
    // as the arg rather than a function
    (function () {
        /*jslint unparam: true */
        var resolve, p;
        p = new globalObject.Promise(function (r) { resolve = r; });
        return isFunction(resolve);
    }());

// Export the native Promise implementation if it looks like it matches
// the specificiation. Otherwise, return the es6-promise implementation
// by @jaffathecake.
if (hasPromiseSupport) {
    module.exports = globalObject.Promise;
} else {
    module.exports = require("es6-promise").Promise;
}