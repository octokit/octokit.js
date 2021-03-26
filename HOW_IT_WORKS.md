[back to `@octokit/rest`](.)

# How it works

![lifecycle](assets/lifecycle.png)

<!-- ①②③④⑤⑥⑦⑧⑨⑩ -->

1. [Endpoint options ① - ④](#endpoint-options)
2. [Transform endpoint to request options ⑥ - ⑦](#transform)
3. [Sending a request & receiving a response ⑧ & ⑩](#request)
4. [Hooks ⑤ & ⑨](#request)

<a name="endpoint-options"></a>

## Endpoint options (① - ④)

`@octokit/rest` exposes a method for each [REST API endpoint](https://docs.github.com/en/rest/reference/), for example `octokit.rest.repos.listForOrg()` for [`GET /orgs/{org}/repos`](https://docs.github.com/en/rest/reference/repos/#list-organization-repositories). The methods are generated in [`@octokit/plugin-rest-endpoint-methods`](https://github.com/octokit/plugin-rest-endpoint-methods.js/). The [`src/generated/endpoints.ts` file](https://github.com/octokit/plugin-rest-endpoint-methods.js/blob/master/src/generated/endpoints.ts) defines the **② endpoint default options** `method`, `url`, and in some cases `mediaType` and `headers`.

**② endpoint default options** are merged with **① global defaults**, which are based on [@octokit/endpoint/src/defaults.ts](https://github.com/octokit/endpoint.js/blob/master/src/defaults.ts) and the options that were passed into the `new Octokit(options)` constructor.

Both are merged with **③ user options** passed into each method. Altogether they result in **④ endpoint options**.

**Example**: get all public repositories of the the [@octokit](https://github.com/octokit) GitHub organization.

```js
octokit.rest.repos.listForOrg({ org: "octokit", type: "public" });
```

**④ endpoint options** will be

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Value</th>
      <th>Source</th>
    </tr>
  </thead>
  <tr>
    <td><strong>baseUrl</strong></td>
    <td><code>'https://api.github.com'</code></td>
    <td>① global defaults</td>
  </tr>
  <tr>
    <td><strong>user-agent</strong> <em>(header)</em></td>
    <td><code>'octokit/rest.js v1.2.3'</code></td>
    <td>① global defaults</td>
  </tr>
  <tr>
    <td><strong>accept</strong> <em>(header)</em></td>
    <td><code>'application/vnd.github.v3+json'</code></td>
    <td>① global defaults</td>
  </tr>
  <tr>
    <td><strong>method</strong></td>
    <td><code>'GET'</code></td>
    <td>② endpoint defaults</td>
  </tr>
  <tr>
    <td><strong>url</strong></td>
    <td><code>'/orgs/{org}/repos'</code></td>
    <td>② endpoint defaults</td>
  </tr>
  <tr>
    <td><strong>org</strong> <em>(URL variable)</em></td>
    <td><code>'octokit'</code></td>
    <td>③ user options</td>
  </tr>
  <tr>
    <td><strong>type</strong> <em>(endpoint parameter)</em></td>
    <td><code>'public'</code></td>
    <td>③ user options</td>
  </tr>
</table>

<a name="transform"></a>

## Transform endpoint to request options (⑥ - ⑦)

**④ Endpoint options** are **⑥ transformed** into **⑦ request options** using [@octokit/endpoint](https://github.com/octokit/endpoint.js).

For example, the endpoint options shown above would result in

<table>
  <tr>
    <th align=left>method</th>
    <td><code>'GET'</code></td>
  </tr>
  <tr>
    <th align=left>url</th>
    <td> <code>'https://api.github.com/orgs/octokit/repos?type=public'</code></td>
  </tr>
  <tr>
    <th align=left>headers[user-agent]</th>
    <td> <code>'octokit/rest.js v1.0.0'</code></td>
  </tr>
  </tr>
  <tr>
    <th align=left>headers[accept]</th>
    <td> <code>'application/vnd.github.v3+json'</code></td>
  </tr>
</table>

<a name="request"></a>

## Sending a request & receiving a response ⑧ & ⑩

Using **⑦ request options**, a **⑧ request** is sent to the GitHub REST API. The **⑩ response** is returned to the user.

Requests are sent using [`@octokit/request`](https://github.com/octokit/request.js). It's using the native fetch method in the browsers and [node-fetch](https://github.com/bitinn/node-fetch) in other environments.

<a name="hooks"></a>

## Hooks ⑤ & ⑨

Hooks are used to inject functionality like authentication. For example, the [request log plugin](https://github.com/octokit/plugin-request-log.js) is registering a request hook in [src/index.ts](https://github.com/octokit/plugin-request-log.js/blob/e8308e36e049946a0b1813b8b25aa28d4a6c8789/src/index.ts#L9-L35). A debug message is logged before sending the request, and an info message is logged once a response is received.

Hooks can be registered using `octokit.hook.{before|after|error|wrap}`:

```js
octokit.hook.before("request", async (options) => {
  validate(options);
});
octokit.hook.after("request", async (response, options) => {
  console.log(`${options.method} ${options.url}: ${response.status}`);
});
octokit.hook.error("request", async (error, options) => {
  if (error.status === 304) {
    return findInCache(error.headers.etag);
  }

  throw error;
});
octokit.hook.wrap("request", async (request, options) => {});
```

The methods can return a Promise for asynchronous execution. `options` can be changed in the `octokit.hook.before` callback before they are **⑥ transformed**. The **⑩ response** can be changed in the `octokit.hook.after` callback before it is returned to the user. `octokit.hook.wrap` allows to do both, or replace the original request method altogether with a custom request method.

See [before-after-hook](https://github.com/gr2m/before-after-hook) for more details.
