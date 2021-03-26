---
title: "Previews"
---

To enable any of [GitHub’s API Previews](https://docs.github.com/en/rest/overview/api-previews/),
pass the `previews` option to the GitHub constructor

```js
const octokit = new Octokit({
  previews: ["mercy-preview"],
});
```

Previews can also be enabled for a single request by passing the `mediaType.preview` option

```js
const {
  data: { topics },
} = await octokit.rest.repos.get({
  owner: "octokit",
  repo: "rest.js",
  mediaType: {
    previews: ["symmetra"],
  },
});
```
