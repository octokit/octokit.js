[back to `@octokit/rest`]('..')

# `@octokit/rest/endpoint`

> Turn REST API endpoint options into generic request options

---

# ⚠️ This is not a public API at this point and can change at any point

---

```js
const restEndpoint = require('@octokit/rest/endpoint')

const options = restEndpoint({
  // request options
  method: 'GET',
  url: '/orgs/:org/repos',
  headers: {
    accept: 'application/vnd.github.mercy-preview+json'
  },
  // parameters
  org: 'octokit',
  type: 'private',
  per_page: 20,
  page: 2,
})
```

`options` would now look something like

```js
{
  method: 'GET',
  url: 'https://api.github.com/orgs/octokit/repos?type=private&per_page=20&page=2',
  headers: {
    'user-agent': 'octokit/rest.js v1.2.3'
    accept: 'application/vnd.github.mercy-preview+json'
  }
}
```
