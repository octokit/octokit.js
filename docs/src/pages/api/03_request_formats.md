---
title: "Request formats"
---

Some API endpoints support alternative response formats, see [Media types](https://developer.github.com/v3/media/).

For example, to request a [pull request as diff format](https://developer.github.com/v3/media/#diff), set the `mediaType.format` option

```js
const { data: prDiff } = await octokit.pulls.get({
  owner: 'octokit',
  repo: 'rest.js',
  pull_number: 1278,
  mediaType: {
    format: 'diff'
  }
})
```
### Advanced Requests
The [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) interface can be used to abort one or more requests as and when desired.
When the request is initiated, we can pass in the [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) as an option inside the request's options object.

```js
const controller = new AbortController()
const signal = controller.signal
const { data: prDiff } = await octokit.pulls.get({
  owner: 'octokit',
  repo: 'rest.js',
  pull_number: 1278,
  mediaType: {
    format: 'diff'
  },
  signal
})
```
Use `controller.abort()` to abort the request when desired.