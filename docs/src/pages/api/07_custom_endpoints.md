---
title: "Custom endpoint methods"
---

**Note**: `octokit.registerEndpoints()` has been deprecated.

Instead of

```js
await octokit.registerEndpoints({
  misc: {
    getRoot: {
      method: "GET",
      url: "/",
    },
  },
});
```

do

```js
Object.assign(octokit.misc, {
  getRoot: octokit.request.defaults({
    method: "GET",
    url: "/",
  }),
});
```

If you use `octokit.registerEndpoints()` in a plugin, return an object instead:

```js
function myPlugin(octokit, options) {
  return {
    misc: {
      octokit.request.defaults({ method: "GET", url: "/" })
    }
  }
}
```

---

You can register custom endpoint methods such as `octokit.rest.repos.get()` using the `octokit.registerEndpoints(routes)` method

```js
octokit.registerEndpoints({
  foo: {
    bar: {
      method: "PATCH",
      url: "/repos/{owner}/{repo}/foo",
      headers: {
        accept: "application/vnd.github.foo-bar-preview+json",
      },
      params: {
        owner: {
          required: true,
          type: "string",
        },
        repo: {
          required: true,
          type: "string",
        },
        baz: {
          required: true,
          type: "string",
          enum: ["qux", "quux", "quuz"],
        },
      },
    },
  },
});

octokit.foo.bar({
  owner: "octokit",
  repo: "rest.js",
  baz: "quz",
});
```

This is useful when you participate in private beta features and prefer the convenience of methods for the new endpoints instead of using [`octokit.request()`](#custom-requests).
