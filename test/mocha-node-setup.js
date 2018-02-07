// non-Cypresss environment (plain Mocha)
// simulate Cypress built-in tools, like sinon-chai

const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
global.expect = chai.expect

let sandbox
beforeEach(() => {
  sandbox = sinon.createSandbox()
  global.cy = {
    stub: function () {
      return sandbox.stub.apply(sandbox, arguments)
    }
  }
})

afterEach(() => {
  sandbox.restore()
})
