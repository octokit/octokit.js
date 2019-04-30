---
title: "Usage"
---

### Node

Install with `npm install @octokit/rest`.

```js
const octokit = require('@octokit/rest')()

// Compare: https://developer.github.com/v3/repos/#list-organization-repositories
octokit.repos.getForOrg({
  org: 'octokit',
  type: 'public'
}).then(({ data, headers, status }) => {
  // handle data
})
```

### Browser

1. Download `octokit-rest.min.js` from the latest release: https://github.com/octokit/rest.js/releases

2. Load it as script into your web application:

   ```html
   <script src="octokit-rest.min.js"></script>
   ```

3. Initialize `octokit`

   ```js
   const octokit = new Octokit()

   // Compare: https://developer.github.com/v3/repos/#list-organization-repositories
   octokit.repos.getForOrg({
     org: 'octokit',
     type: 'public'
   }).then(({data, headers, status}) => {
     // handle data
   })
   ```

### Client options

All available client options with default values

<!-- HEADS UP: when changing the options for the constructor, make sure to also
     update the type definition templates in scripts/templates/* -->
```js
const Octokit = require('@octokit/rest')
const octokit = new Octokit({
  // see "Authentication" section below
  auth: undefined,

  // setting a user agent is required: https://developer.github.com/v3/#user-agent-required
  // v1.2.3 will be current @octokit/rest version
  userAgent: 'octokit/rest.js v1.2.3',

  // add list of previews you’d like to enable globally,
  // see https://developer.github.com/v3/previews/.
  // Example: ['jean-grey', 'symmetra']
  previews: [],

  // set custom URL for on-premise GitHub Enterprise installations
  baseUrl: 'https://api.github.com',
  
  // pass custom methods for debug, info, warn and error
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error
  },

  request: {
    // Node.js only: advanced request options can be passed as http(s) agent,
    // such as custom SSL certificate or proxy settings.
    // See https://nodejs.org/api/http.html#http_class_http_agent
    agent: undefined,

    // request timeout in ms. 0 means no timeout
    timeout: 0
  }
})
```