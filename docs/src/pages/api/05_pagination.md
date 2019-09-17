---
title: "Pagination"
---

All endpoint methods starting with `.list*` do not return all responses at once but instead return the first 30 items by default, see also [GitHub’s REST API pagination documentation](https://developer.github.com/v3/#pagination).

To automatically receive all results across all pages, you can use the `octokit.paginate()` method:

```js
octokit
  .paginate("GET /repos/:owner/:repo/issues", {
    owner: "octokit",
    repo: "rest.js"
  })
  .then(issues => {
    // issues is an array of all issue objects
  });
```

`octokit.paginate()` accepts the same options as [`octokit.request()`](#custom-requests). You can optionally pass an additional function to map the results from each response. The map must return a new value, usually an array with mapped data.

```js
octokit
  .paginate(
    "GET /repos/:owner/:repo/issues",
    { owner: "octokit", repo: "rest.js" },
    response => response.data.map(issue => issue.title)
  )
  .then(issueTitles => {
    // issueTitles is now an array with the titles only
  });
```

To stop paginating early, you can call the `done()` function passed as 2nd argument to the response map function. Note that you still have to return the value you want to map the response to, otherwise the last response will be mapped to undefined.

```js
octokit.paginate("GET /organizations", (response, done) => {
  if (response.data.find(issues => issue.body.includes("something"))) {
    done();
  }
  return response.data;
});
```

To paginate responses for one of the registered endpoint methods such as `octokit.issues.listForRepo()` you can use the [`.endpoint.merge()`](https://github.com/octokit/endpoint.js#endpointmerge) method registered for all endpoint methods:

```js
const options = octokit.issues.listForRepo.endpoint.merge({
  owner: "octokit",
  repo: "rest.js"
});
octokit.paginate(options).then(issues => {
  // issues is an array of all issue objects
});
```

If your runtime environment supports async iterators (such as most modern browsers and Node 10+), you can iterate through each response

```js
for await (const response of octokit.paginate.iterator(options)) {
  // do whatever you want with each response, break out of the loop, etc.
}
```

`octokit.paginate.iterator()` accepts the same options as `octokit.paginate()`.
