'use strict'

var Promise = global.Promise || null

/* eslint-disable no-new */
if (isFunction(Promise)) {
  new Promise(function (resolve) {
    if (!isFunction(resolve)) {
      Promise = null
    }
  })
}
/* eslint-enable no-new */

module.exports = Promise

function isFunction (x) {
  return typeof x === 'function'
}
