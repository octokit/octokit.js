const routes = require('../lib/routes')

Object.keys(routes).forEach(scope => {
  Object.keys(routes[scope]).forEach(methodName => {
    if (routes[scope][methodName].alias && !routes[scope][methodName].deprecated) {
      console.log(`${scope}.${methodName} has alias, but not deprecated`)
    }
    if (routes[scope][methodName].deprecated) {
      delete routes[scope][methodName]
      return
    }

    Object.keys(routes[scope][methodName].params).forEach(param => {
      if (routes[scope][methodName].params[param].alias && !routes[scope][methodName].params[param].deprecated) {
        console.log(`${scope}.${methodName}#${param} has alias, but not deprecated`)
      }
      if (routes[scope][methodName].params[param].deprecated) {
        delete routes[scope][methodName].params[param]
      }
    })
  })
})

require('fs').writeFileSync(require('path').join(__dirname, '..', 'lib', 'routes.json'), JSON.stringify(routes, null, 2) + '\n')
