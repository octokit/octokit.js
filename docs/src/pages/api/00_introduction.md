---
title: "Introduction"
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
const octokit = require('@octokit/rest')({
  timeout: 0, // 0 means no request timeout
  headers: {
    accept: 'application/vnd.github.v3+json',
    'user-agent': 'octokit/rest.js v1.2.3' // v1.2.3 will be current version
  },

  // custom GitHub Enterprise URL
  baseUrl: 'https://api.github.com',

  // Node only: advanced request options can be passed as http(s) agent
  agent: undefined
})
```

`@octokit/rest` API docs: https://octokit.github.io/rest.js/  
GitHub v3 REST API docs: https://developer.github.com/v3/

### API Previews

To take advantage of [GitHub’s API Previews](https://developer.github.com/v3/previews/),
pass a custom `accept` header, which you can do with any endpoint method documented
in the [API docs](https://octokit.github.io/rest.js/), e.g.

```js
const { data: { topics } } = octokit.repos.get({
  owner: 'octokit',
  repo: 'rest.js',
  headers: {
    accept: 'application/vnd.github.mercy-preview+json'
  }
})
```

Multiple preview headers can be combined by separating them with commas

```js
const { data: { topics, codeOfConduct } } = octokit.repos.get({
  owner: 'octokit',
  repo: 'rest.js',
  headers: {
    accept: 'application/vnd.github.mercy-preview+json,application/vnd.github.scarlet-witch-preview+json'
  }
})
```
