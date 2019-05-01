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