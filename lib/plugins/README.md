# `@octokit/plugins/*`

---

# ⚠️ Plugins are currently experimental. APIs can change at any time.

---

## Usage

```js
const RestClient = require('@octokit/rest')
const github = new RestClient()

function myPlugin (github) {
  github.myMethod = function () {
    // ...
  }
  github.hook.before('request', (options) => {
    // change options or cancel request.
    // return promise for async methods
  })
  github.hook.after('request', (result, options) => {
    // ...
  })
}

github.plugin(myPlugin)

github.myMethod()
github.request({url: '/'}) // runs before/after hooks defined above
```
