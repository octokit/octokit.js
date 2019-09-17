---
title: "Custom endpoint methods"
---

You can register custom endpoint methods such as `octokit.repos.get()` using the `octokit.registerEndpoints(routes)` method

```js
octokit.registerEndpoints({
  foo: {
    bar: {
      method: "PATCH",
      url: "/repos/:owner/:repo/foo",
      headers: {
        accept: "application/vnd.github.foo-bar-preview+json"
      },
      params: {
        owner: {
          required: true,
          type: "string"
        },
        repo: {
          required: true,
          type: "string"
        },
        baz: {
          required: true,
          type: "string",
          enum: ["qux", "quux", "quuz"]
        }
      }
    }
  }
});

octokit.foo.bar({
  owner: "octokit",
  repo: "rest.js",
  baz: "quz"
});
```

This is useful when you participate in private beta features and prefer the convenience of methods for the new endpoints instead of using [`octokit.request()`]('#custom-requests').
