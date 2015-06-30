"use strict";

var Promise = global.Promise || null;

if (isFunction(Promise)) {
    new Promise(function(resolver) {
        if (!isFunction(resolver)) {
            Promise = null;
        }
    });
}

module.exports = Promise;

function isFunction(x) {
    return typeof x === "function";
}
