---
title: "Pagination"
---

All endpoint methods starting with `.list*` do not return all results at once but instead return the first 30 items by default, see also [GitHub’s REST API pagination documentation](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#pagination).

To automatically receive all results across all pages, you can use the `octokit.paginate()` method:

```js
octokit
  .paginate("GET /repos/{owner}/{repo}/issues", {
    owner: "octokit",
    repo: "rest.js",
  })
  .then((issues) => {
    // issues is an array of all issue objects. It is not wrapped in a { data, headers, status, url } object
    // like results from `octokit.request()` or any of the endpoint methods such as `octokit.rest.issues.listForRepo()`
  });
```

`octokit.paginate()` accepts the same options as [`octokit.request()`](#custom-requests). You can optionally pass an additional function to map the results from each response. The map must return a new value, usually an array with mapped data.

**Note:** the map function is called with the `{ data, headers, status, url }` response object. The `data` property is guaranteed to be an array of the result items, even for list endpoints that respond with an object instead of an array, such as the [search endpoints](https://docs.github.com/en/rest/reference/search/#example).

```js
octokit
  .paginate(
    "GET /repos/{owner}/{repo}/issues",
    { owner: "octokit", repo: "rest.js" },
    (response) => response.data.map((issue) => issue.title)
  )
  .then((issueTitles) => {
    // issueTitles is now an array with the titles only
  });
```

To stop paginating early, you can call the `done()` function passed as 2nd argument to the response map function. Note that you still have to return the value you want to map the response to, otherwise the last response will be mapped to undefined.

```js
octokit.paginate("GET /organizations", (response, done) => {
  if (response.data.find((issues) => issue.body.includes("something"))) {
    done();
  }
  return response.data;
});
```

To paginate responses for one of the registered endpoint methods such as `octokit.rest.issues.listForRepo()` you can pass the method directly as first argument to `octokit.paginate`:

```js
octokit
  .paginate(octokit.rest.issues.listForRepo, {
    owner: "octokit",
    repo: "rest.js",
  })
  .then((issues) => {
    // issues is an array of all issue objects
  });
```

If your runtime environment supports async iterators (such as most modern browsers and Node 10+), you can iterate through each response

```js
for await (const response of octokit.paginate.iterator(
  octokit.rest.issues.listForRepo,
  {
    owner: "octokit",
    repo: "rest.js",
  }
)) {
  // do whatever you want with each response, break out of the loop, etc.
}
```

`octokit.paginate.iterator()` accepts the same options as `octokit.paginate()`.
