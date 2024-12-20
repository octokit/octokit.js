# octokit.js

> The all-batteries-included GitHub SDK for Browsers, Node.js, and Deno.

The `octokit` package integrates the three main Octokit libraries

1. **API client** (REST API requests, GraphQL API queries, Authentication)
2. **App client** (GitHub App & installations, Webhooks, OAuth)
3. **Action client** (Pre-authenticated API client for single repository)

## Table of contents <!-- omit in toc -->

<!-- toc -->

- [octokit.js](#octokitjs)
  - [Features](#features)
  - [Usage](#usage)
  - [`Octokit` API Client](#octokit-api-client)
    - [Constructor options](#constructor-options)
    - [Authentication](#authentication)
    - [Proxy Servers (Node.js only)](#proxy-servers-nodejs-only)
      - [Fetch missing](#fetch-missing)
    - [REST API](#rest-api)
      - [`octokit.rest` endpoint methods](#octokitrest-endpoint-methods)
      - [`octokit.request()`](#octokitrequest)
      - [Pagination](#pagination)
      - [Media Type formats](#media-type-formats)
      - [Request error handling](#request-error-handling)
    - [GraphQL API queries](#graphql-api-queries)
      - [Pagination](#pagination-1)
      - [Schema previews](#schema-previews)
  - [App client](#app-client)
    - [GitHub App](#github-app)
    - [Webhooks](#webhooks)
    - [OAuth](#oauth)
    - [App Server](#app-server)
    - [OAuth for browser apps](#oauth-for-browser-apps)
  - [Action client](#action-client)
  - [LICENSE](#license)

<!-- tocstop -->

## Features

- **Complete**. All features of GitHub's platform APIs are covered.
- **Prescriptive**. All recommended best practices are implemented.
- **Universal**. Works in all modern browsers, [Node.js](https://nodejs.org/), and [Deno](https://deno.land/).
- **Tested**. All libraries have a 100% test coverage.
- **Typed**. All libraries have extensive TypeScript declarations.
- **Decomposable**. Use only the code you need. You can build your own Octokit in only a few lines of code or use the underlying static methods. Make your own tradeoff between functionality and bundle size.
- **Extendable**. A feature missing? Add functionalities with plugins, hook into the request or webhook lifecycle or implement your own authentication strategy.

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>
Load <code>octokit</code> directly from <a href="https://esm.sh">esm.sh</a>
        
```html
<script type="module">
import { Octokit, App } from "https://esm.sh/octokit";
</script>
```

</td></tr>
<tr><th>
Deno
</th><td width=100%>
Load <code>octokit</code> directly from <a href="https://esm.sh">esm.sh</a>
        
```ts
import { Octokit, App } from "https://esm.sh/octokit?dts";
```

</td></tr>
<tr><th>
Node
</th><td>

Install with <code>npm/pnpm install octokit</code>, or <code>yarn add octokit</code>

```js
import { Octokit, App } from "octokit";
```

</td></tr>
</tbody>
</table>

> [!IMPORTANT]
> As we use [conditional exports](https://nodejs.org/api/packages.html#conditional-exports), you will need to adapt your `tsconfig.json` by setting `"moduleResolution": "node16", "module": "node16"`.
>
> See the TypeScript docs on [package.json "exports"](https://www.typescriptlang.org/docs/handbook/modules/reference.html#packagejson-exports).<br>
> See this [helpful guide on transitioning to ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) from [@sindresorhus](https://github.com/sindresorhus)

## `Octokit` API Client

**standalone minimal Octokit**: [`@octokit/core`](https://github.com/octokit/core.js/#readme).

The `Octokit` client can be used to send requests to [GitHub's REST API](https://docs.github.com/rest/) and queries to [GitHub's GraphQL API](https://docs.github.com/graphql).

**Example**: Get the username for the authenticated user.

```js
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `personal-access-token123` });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s", login);
```

### Constructor options

The most commonly used options are

<table>
  <thead align=left>
    <tr>
      <th>
        name
      </th>
      <th>
        type
      </th>
      <th width=100%>
        description
      </th>
    </tr>
  </thead>
  <tbody align=left valign=top>
    <tr>
      <th>
        <code>userAgent</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

Setting a user agent is required for all requests sent to GitHub's Platform APIs. The user agent defaults to something like this: `octokit.js/v1.2.3 Node.js/v8.9.4 (macOS High Sierra; x64)`. It is recommend to set your own user agent, which will prepend the default one.

```js
const octokit = new Octokit({
  userAgent: "my-app/v1.2.3",
});
```

</td>
    </tr>
    <tr>
      <th>
        <code>authStrategy</code>
      </th>
      <td>
        <code>Function</code>
      </td>
      <td>

Defaults to [`@octokit/auth-token`](https://github.com/octokit/auth-token.js#readme).

See [Authentication](#authentication) below.

</td>
    </tr>
    <tr>
      <th>
        <code>auth</code>
      </th>
      <td>
        <code>String</code> or <code>Object</code>
      </td>
      <td>

Set to a [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) unless you changed the `authStrategy` option.

See [Authentication](#authentication) below.

</td>
    </tr>
    <tr>
      <th>
        <code>baseUrl</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

When using with GitHub Enterprise Server, set `options.baseUrl` to the root URL of the API. For example, if your GitHub Enterprise Server's hostname is `github.acme-inc.com`, then set `options.baseUrl` to `https://github.acme-inc.com/api/v3`. Example

```js
const octokit = new Octokit({
  baseUrl: "https://github.acme-inc.com/api/v3",
});
```

</td>
    </tr>
  </tbody>
</table>

Advanced options

<table>
  <thead align=left>
    <tr>
      <th>
        name
      </th>
      <th>
        type
      </th>
      <th width=100%>
        description
      </th>
    </tr>
  </thead>
  <tbody align=left valign=top>
    <tr>
      <th>
        <code>request</code>
      </th>
      <td>
        <code>Object</code>
      </td>
      <td>

- `request.signal`: Use an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) instance to cancel a request. [`abort-controller`](https://www.npmjs.com/package/abort-controller) is an implementation for Node.
- `request.fetch`: Replacement for [built-in fetch method](<https://nodejs.org/en/blog/announcements/v18-release-announce#fetch-(experimental)>).

Node only

- `request.timeout` sets a request timeout, defaults to 0

The `request` option can also be set on a per-request basis.

</td></tr>
    <tr>
      <th>
        <code>timeZone</code>
      </th>
      <td>
        <code>String</code>
      </td>
      <td>

Sets the `Time-Zone` header which defines a timezone according to the [list of names from the Olson database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```js
const octokit = new Octokit({
  timeZone: "America/Los_Angeles",
});
```

The time zone header will determine the timezone used for generating the timestamp when creating commits. See [GitHub's Timezones documentation](https://developer.github.com/v3/#timezones).

</td>
    </tr>
    <tr>
      <th>
        <code>throttle</code>
      </th>
      <td>
        <code>Object</code>
      </td>
      <td>

`Octokit` implements request throttling using [`@octokit/plugin-throttling`](https://github.com/octokit/plugin-throttling.js/#readme)

By default, requests are retried once and warnings are logged in case of hitting a rate or secondary rate limit.

```js
{
  onRateLimit: (retryAfter, options, octokit) => {
    octokit.log.warn(
      `Request quota exhausted for request ${options.method} ${options.url}`
    );

    if (options.request.retryCount === 0) {
      // only retries once
      octokit.log.info(`Retrying after ${retryAfter} seconds!`);
      return true;
    }
  },
  onSecondaryRateLimit: (retryAfter, options, octokit) => {
    octokit.log.warn(
      `SecondaryRateLimit detected for request ${options.method} ${options.url}`
    );

    if (options.request.retryCount === 0) {
      // only retries once
      octokit.log.info(`Retrying after ${retryAfter} seconds!`);
      return true;
    }
  },
};
```

To opt-out of this feature:

```js
new Octokit({ throttle: { enabled: false } });
```

Throttling in a cluster is supported using a Redis backend. See [`@octokit/plugin-throttling` Clustering](https://github.com/octokit/plugin-throttling.js/#clustering)

</td>
  </tr>
   <tr>
      <th>
        <code>retry</code>
      </th>
      <td>
        <code>Object</code>
      </td>
      <td>

`Octokit` implements request retries using [`@octokit/plugin-retry`](https://github.com/octokit/plugin-retry.js/#readme)

To opt-out of this feature:

```js
new Octokit({ retry: { enabled: false } });
```

</td>
    </tr>
  </tbody>
</table>

### Authentication

By default, the `Octokit` API client supports authentication using a static token.

There are different means of authentication that are supported by GitHub, that are described in detail at [octokit/authentication-strategies.js](https://github.com/octokit/authentication-strategies.js/#readme). You can set each of them as the `authStrategy` constructor option, and pass the strategy options as the `auth` constructor option.

For example, in order to authenticate as a GitHub App Installation:

```js
import { createAppAuth } from "@octokit/auth-app";
const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: 1,
    privateKey: "-----BEGIN PRIVATE KEY-----\n...",
    installationId: 123,
  },
});

// authenticates as app based on request URLs
const {
  data: { slug },
} = await octokit.rest.apps.getAuthenticated();

// creates an installation access token as needed
// assumes that installationId 123 belongs to @octocat, otherwise the request will fail
await octokit.rest.issues.create({
  owner: "octocat",
  repo: "hello-world",
  title: "Hello world from " + slug,
});
```

You can use the [`App`](#github-app) or [`OAuthApp`](#oauth-app) SDKs which provide APIs and internal wiring to cover most use cases.

For example, to implement the above using `App`

```js
const app = new App({ appId, privateKey });
const { data: slug } = await app.octokit.rest.apps.getAuthenticated();
const octokit = await app.getInstallationOctokit(123);
await octokit.rest.issues.create({
  owner: "octocat",
  repo: "hello-world",
  title: "Hello world from " + slug,
});
```

Learn more about [how authentication strategies work](https://github.com/octokit/authentication-strategies.js/#how-authentication-strategies-work) or how to [create your own](https://github.com/octokit/authentication-strategies.js/#create-your-own-octokit-authentication-strategy-module).

### Proxy Servers (Node.js only)

By default, the `Octokit` API client does not make use of the standard proxy server environment variables. To add support for proxy servers you will need to provide an https client that supports them such as [`undici.ProxyAgent()`](https://undici.nodejs.org/#/docs/api/ProxyAgent).

For example, this would use a `ProxyAgent` to make requests through a proxy server:

```js
import { fetch as undiciFetch, ProxyAgent } from 'undici';

const myFetch = (url, options) => {
  return undiciFetch(url, {
    ...options,
    dispatcher: new ProxyAgent(<your_proxy_url>)
  })
}

const octokit = new Octokit({
  request: {
     fetch: myFetch
  },
});
```

If you are writing a module that uses `Octokit` and is designed to be used by other people, you should ensure that consumers can provide an alternative agent for your `Octokit` or as a parameter to specific calls such as:

```js
import { fetch as undiciFetch, ProxyAgent } from 'undici';

const myFetch = (url, options) => {
  return undiciFetch(url, {
    ...options,
    dispatcher: new ProxyAgent(<your_proxy_url>)
  })
}

octokit.rest.repos.get({
  owner,
  repo,
  request: {
    fetch: myFetch
  },
});
```

#### Fetch missing

If you get the following error:

> fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}).

It probably means you are trying to run Octokit with an unsupported version of NodeJS. Octokit requires Node 18 or higher, [which includes a native fetch API](<https://nodejs.org/en/blog/announcements/v18-release-announce#fetch-(experimental)>).

To bypass this problem you can provide your own `fetch` implementation (or a built-in version like `node-fetch`) like this:

```js
import fetch from "node-fetch";

const octokit = new Octokit({
  request: {
    fetch: fetch,
  },
});
```

### REST API

There are two ways of using the GitHub REST API, the [`octokit.rest.*` endpoint methods](#octokitrest-endpoint-methods) and [`octokit.request`](#octokitrequest). Both act the same way, the `octokit.rest.*` methods are just added for convenience, they use `octokit.request` internally.

For example

```js
await octokit.rest.issues.create({
  owner: "octocat",
  repo: "hello-world",
  title: "Hello, world!",
  body: "I created this issue using Octokit!",
});
```

Is the same as

```js
await octokit.request("POST /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "hello-world",
  title: "Hello, world!",
  body: "I created this issue using Octokit!",
});
```

In both cases a given request is authenticated, retried, and throttled transparently by the `octokit` instance which also manages the `accept` and `user-agent` headers as needed.

`octokit.request` can be used to send requests to other domains by passing a full URL and to send requests to endpoints that are not (yet) documented in [GitHub's REST API documentation](https://docs.github.com/rest).

#### `octokit.rest` endpoint methods

Every GitHub REST API endpoint has an associated `octokit.rest` endpoint method for better code readability and developer convenience. See [`@octokit/plugin-rest-endpoint-methods`](https://github.com/octokit/plugin-rest-endpoint-methods.js/#readme) for full details.

Example: [Create an issue](https://docs.github.com/en/rest/reference/issues#create-an-issue)

```js
await octokit.rest.issues.create({
  owner: "octocat",
  repo: "hello-world",
  title: "Hello, world!",
  body: "I created this issue using Octokit!",
});
```

The `octokit.rest` endpoint methods are generated automatically from [GitHub's OpenAPI specification](https://github.com/github/rest-api-description/). We track operation ID and parameter name changes in order to implement deprecation warnings and reduce the frequency of breaking changes.

Under the covers, every endpoint method is just `octokit.request` with defaults set, so it supports the same parameters as well as the `.endpoint()` API.

#### `octokit.request()`

You can call the GitHub REST API directly using `octokit.request`. The `request` API matches GitHub's REST API documentation 1:1 so anything you see there, you can call using `request`. See [`@octokit/request`](https://github.com/octokit/request.js#readme) for all the details.

Example: [Create an issue](https://docs.github.com/en/rest/reference/issues#create-an-issue)

[![Screenshot of REST API reference documentation for Create an issue](assets/create-an-issue-reference.png)](https://docs.github.com/en/rest/reference/issues#create-an-issue)

The `octokit.request` API call corresponding to that issue creation documentation looks like this:

```js
// https://docs.github.com/en/rest/reference/issues#create-an-issue
await octokit.request("POST /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "hello-world",
  title: "Hello, world!",
  body: "I created this issue using Octokit!",
});
```

The 1st argument is the REST API route as listed in GitHub's API documentation. The 2nd argument is an object with all parameters, independent of whether they are used in the path, query, or body.

#### Pagination

All REST API endpoints that paginate return the first 30 items by default. If you want to retrieve all items, you can use the pagination API. The pagination API expects the REST API route as first argument, but you can also pass any of the `octokit.rest.*.list*` methods for convenience and better code readability.

Example: iterate through all issues in a repository

```js
const iterator = octokit.paginate.iterator(octokit.rest.issues.listForRepo, {
  owner: "octocat",
  repo: "hello-world",
  per_page: 100,
});

// iterate through each response
for await (const { data: issues } of iterator) {
  for (const issue of issues) {
    console.log("Issue #%d: %s", issue.number, issue.title);
  }
}
```

Using the [async iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) is the most memory efficient way to iterate through all items. But you can also retrieve all items in a single call

```js
const issues = await octokit.paginate(octokit.rest.issues.listForRepo, {
  owner: "octocat",
  repo: "hello-world",
  per_page: 100,
});
```

#### Media Type formats

Media type formats can be set using `mediaType: { format }` on every request.

Example: retrieve the raw content of a `package.json` file

```js
const { data } = await octokit.rest.repos.getContent({
  mediaType: {
    format: "raw",
  },
  owner: "octocat",
  repo: "hello-world",
  path: "package.json",
});
console.log("package name: %s", JSON.parse(data).name);
```

Learn more about [Media type formats](https://docs.github.com/en/rest/overview/media-types).

#### Request error handling

**Standalone module:** [`@octokit/request-error`](https://github.com/octokit/request-error.js/#readme)

For request error handling, import `RequestError` and use `try...catch` statement.

```typescript
import { RequestError } from "octokit";
```

```typescript
try {
  // your code here that sends at least one Octokit request
  await octokit.request("GET /");
} catch (error) {
  // Octokit errors are instances of RequestError, so they always have an `error.status` property containing the HTTP response code.
  if (error instanceof RequestError) {
    // handle Octokit error
    // error.message; // Oops
    // error.status; // 500
    // error.request; // { method, url, headers, body }
    // error.response; // { url, status, headers, data }
  } else {
    // handle all other errors
    throw error;
  }
}
```

### GraphQL API queries

Octokit also supports GitHub's GraphQL API directly -- you can use the same queries shown in the documentation and available in the GraphQL explorer in your calls with `octokit.graphql`.

Example: get the login of the authenticated user

```js
const {
  viewer: { login },
} = await octokit.graphql(`{
  viewer {
    login
  }
}`);
```

Variables can be passed as 2nd argument

```js
const { lastIssues } = await octokit.graphql(
  `
    query lastIssues($owner: String!, $repo: String!, $num: Int = 3) {
      repository(owner: $owner, name: $repo) {
        issues(last: $num) {
          edges {
            node {
              title
            }
          }
        }
      }
    }
  `,
  {
    owner: "octokit",
    repo: "graphql.js",
  },
);
```

#### Pagination

GitHub's GraphQL API returns a maximum of 100 items. If you want to retrieve all items, you can use the pagination API.

Example: get all issues

```js
const { allIssues } = await octokit.graphql.paginate(
  `
    query allIssues($owner: String!, $repo: String!, $num: Int = 10, $cursor: String) {
      repository(owner: $owner, name: $repo) {
        issues(first: $num, after: $cursor) {
          edges {
            node {
              title
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  `,
  {
    owner: "octokit",
    repo: "graphql.js",
  },
);
```

Learn more about [GitHub's GraphQL Pagination](https://github.com/octokit/plugin-paginate-graphql.js#readme) usage.

#### Schema previews

Previews can be enabled using the `{mediaType: previews: [] }` option.

Example: create a label

```js
await octokit.graphql(
  `mutation createLabel($repositoryId:ID!,name:String!,color:String!) {
  createLabel(input:{repositoryId:$repositoryId,name:$name}) {
    label: {
      id
    }
  }
}`,
  {
    repositoryId: 1,
    name: "important",
    color: "cc0000",
    mediaType: {
      previews: ["bane"],
    },
  },
);
```

Learn more about [GitHub's GraphQL schema previews](https://docs.github.com/en/graphql/overview/schema-previews)

## App client

The `App` client combines features for GitHub Apps, Webhooks, and OAuth

### GitHub App

**Standalone module**: [`@octokit/app`](https://github.com/octokit/app.js/#readme)

For integrators, GitHub Apps are a means of authentication and authorization. A GitHub app can be registered on a GitHub user or organization account. A GitHub App registration defines a set of permissions and webhooks events it wants to receive and provides a set of credentials in return. Users can grant access to repositories by installing them.

Some API endpoints require the GitHub app to authenticate as itself using a JSON Web Token (JWT). For requests affecting an installation, an installation access token has to be created using the app's credentials and the installation ID.

The `App` client takes care of all that for you.

Example: Dispatch a repository event in every repository the app is installed on

```js
import { App } from "octokit";

const app = new App({ appId, privateKey });

for await (const { octokit, repository } of app.eachRepository.iterator()) {
  // https://docs.github.com/en/rest/reference/repos#create-a-repository-dispatch-event
  await octokit.rest.repos.createDispatchEvent({
    owner: repository.owner.login,
    repo: repository.name,
    event_type: "my_event",
    client_payload: {
      foo: "bar",
    },
  });
  console.log("Event dispatched for %s", repository.full_name);
}
```

Example: Get an `octokit` instance authenticated as an installation

```js
const octokit = await app.getInstallationOctokit(123);
```

Learn more about [apps](https://docs.github.com/apps).

### Webhooks

**Standalone module**: [`@octokit/webhooks`](https://github.com/octokit/webhooks.js/#readme)

When installing an app, events that the app registration requests will be sent as requests to the webhook URL set in the app's registration.

Webhook event requests are signed using the webhook secret, which is also part of the app's registration. You must verify that secret before handling the request payload.

The `app.webhooks.*` APIs provide methods to receiving, verifying, and handling webhook events.

Example: create a comment on new issues

```js
import { createServer } from "node:http";
import { App, createNodeMiddleware } from "octokit";

const app = new App({
  appId,
  privateKey,
  webhooks: { secret },
});

app.webhooks.on("issues.opened", ({ octokit, payload }) => {
  return octokit.rest.issues.createComment({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: payload.issue.number,
    body: "Hello, World!",
  });
});

// Your app can now receive webhook events at `/api/github/webhooks`
createServer(createNodeMiddleware(app)).listen(3000);
```

For serverless environments, you can explicitly verify and receive an event

```js
await app.webhooks.verifyAndReceive({
  id: request.headers["x-github-delivery"],
  name: request.headers["x-github-event"],
  signature: request.headers["x-hub-signature-256"],
  payload: request.body,
});
```

Learn more about [GitHub webhooks](https://docs.github.com/webhooks).

### OAuth

**Standalone module:** [`@octokit/oauth-app`](https://github.com/octokit/oauth-app.js/#readme)

Both OAuth Apps and GitHub Apps support authenticating GitHub users using OAuth, see [Authorizing OAuth Apps](https://docs.github.com/en/developers/apps/authorizing-oauth-apps) and [Identifying and authorizing users for GitHub Apps](https://docs.github.com/en/developers/apps/identifying-and-authorizing-users-for-github-apps).

There are some differences:

- Only OAuth Apps support scopes. GitHub apps have permissions, and access is granted via installations of the app on repositories.
- Only GitHub Apps support expiring user tokens
- Only GitHub Apps support creating a scoped token to reduce the permissions and repository access

`App` is for GitHub Apps. If you need OAuth App-specific functionality, use [`OAuthApp` instead](https://github.com/octokit/oauth-app.js/).

Example: Watch a repository when a user logs in using the OAuth web flow

```js
import { createServer } from "node:http";
import { App, createNodeMiddleware } from "octokit";

const app = new App({
  oauth: { clientId, clientSecret },
});

app.oauth.on("token.created", async ({ token, octokit }) => {
  await octokit.rest.activity.setRepoSubscription({
    owner: "octocat",
    repo: "hello-world",
    subscribed: true,
  });
});

// Your app can receive the OAuth redirect at /api/github/oauth/callback
// Users can initiate the OAuth web flow by opening /api/github/oauth/login
createServer(createNodeMiddleware(app)).listen(3000);
```

For serverless environments, you can explicitly exchange the `code` from the OAuth web flow redirect for an access token.
`app.oauth.createToken()` returns an authentication object and emits the "token.created" event.

```js
const { token } = await app.oauth.createToken({
  code: request.query.code,
});
```

Example: create a token using the device flow.

```js
const { token } = await app.oauth.createToken({
  async onVerification(verification) {
    await sendMessageToUser(
      request.body.phoneNumber,
      `Your code is ${verification.user_code}. Enter it at ${verification.verification_uri}`,
    );
  },
});
```

Example: Create an OAuth App Server with default scopes

```js
import { createServer } from "node:http";
import { OAuthApp, createNodeMiddleware } from "octokit";

const app = new OAuthApp({
  clientId,
  clientSecret,
  defaultScopes: ["repo", "gist"],
});

app.oauth.on("token", async ({ token, octokit }) => {
  await octokit.rest.gists.create({
    description: "I created this gist using Octokit!",
    public: true,
    files: {
      "example.js": `/* some code here */`,
    },
  });
});

// Your app can receive the OAuth redirect at /api/github/oauth/callback
// Users can initiate the OAuth web flow by opening /api/oauth/login
createServer(createNodeMiddleware(app)).listen(3000);
```

### App Server

After registering your GitHub app, you need to create and deploy a server which can retrieve the webhook event requests from GitHub as well as accept redirects from the OAuth user web flow.

The simplest way to create such a server is to use `createNodeMiddleware()`, it works with both, Node's [`http.createServer()`](https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener) method as well as an [Express middleware](https://expressjs.com/en/guide/using-middleware.html).

The default routes that the middleware exposes are

| Route                                   | Route Description                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `POST /api/github/webhooks`             | Endpoint to receive GitHub Webhook Event requests                                                                                                                                                                                                                                                                                                                             |
| `GET /api/github/oauth/login`           | Redirects to GitHub's authorization endpoint. Accepts optional `?state` and `?scopes` query parameters. `?scopes` is a comma-separated list of [supported OAuth scope names](https://docs.github.com/en/developers/apps/scopes-for-oauth-apps#available-scopes)                                                                                                               |
| `GET /api/github/oauth/callback`        | The client's redirect endpoint. This is where the `token` event gets triggered                                                                                                                                                                                                                                                                                                |
| `POST /api/github/oauth/token`          | Exchange an authorization code for an OAuth Access token. If successful, the `token` event gets triggered.                                                                                                                                                                                                                                                                    |
| `GET /api/github/oauth/token`           | Check if token is valid. Must authenticate using token in `Authorization` header. Uses GitHub's [`POST /applications/{client_id}/token`](https://docs.github.com/en/rest/reference/apps#check-a-token) endpoint                                                                                                                                                               |
| `PATCH /api/github/oauth/token`         | Resets a token (invalidates current one, returns new token). Must authenticate using token in `Authorization` header. Uses GitHub's [`PATCH /applications/{client_id}/token`](https://docs.github.com/en/rest/reference/apps#reset-a-token) endpoint.                                                                                                                         |
| `PATCH /api/github/oauth/refresh-token` | Refreshes an expiring token (invalidates current one, returns new access token and refresh token). Must authenticate using token in `Authorization` header. Uses GitHub's [`POST https://github.com/login/oauth/access_token`](https://docs.github.com/en/developers/apps/refreshing-user-to-server-access-tokens#renewing-a-user-token-with-a-refresh-token) OAuth endpoint. |
| `POST /api/github/oauth/token/scoped`   | Creates a scoped token (does not invalidate the current one). Must authenticate using token in `Authorization` header. Uses GitHub's [`POST /applications/{client_id}/token/scoped`](https://docs.github.com/en/rest/reference/apps#create-a-scoped-access-token) endpoint.                                                                                                   |
| `DELETE /api/github/oauth/token`        | Invalidates current token, basically the equivalent of a logout. Must authenticate using token in `Authorization` header.                                                                                                                                                                                                                                                     |
| `DELETE /api/github/oauth/grant`        | Revokes the user's grant, basically the equivalent of an uninstall. must authenticate using token in `Authorization` header.                                                                                                                                                                                                                                                  |

Example: create a GitHub server with express

```js
import express from "express";
import { App, createNodeMiddleware } from "octokit";

const expressApp = express();
const octokitApp = new App({
  appId,
  privateKey,
  webhooks: { secret },
  oauth: { clientId, clientSecret },
});

expressApp.use(createNodeMiddleware(app));

expressApp.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
```

### OAuth for browser apps

You must not expose your app's client secret to the user, so you cannot use the `App` constructor. Instead, you have to create a server using the `App` constructor which exposes the `/api/github/oauth/*` routes, through which you can safely implement an OAuth login for apps running in a web browser.

If you set `(User) Authorization callback URL` to your own app, than you need to read out the `?code=...&state=...` query parameters, compare the `state` parameter to the value returned by `app.oauthLoginUrl()` earlier to protect against forgery attacks, then exchange the `code` for an OAuth Authorization token.

If you run an [app server](#app-server) as described above, the default route to do that is `POST /api/github/oauth/token`.

Once you successfully retrieved the token, it is also recommended to remove the `?code=...&state=...` query parameters from the browser's URL

```js
const code = new URL(location.href).searchParams.get("code");
if (code) {
  // remove ?code=... from URL
  const path =
    location.pathname +
    location.search.replace(/\b(code|state)=\w+/g, "").replace(/[?&]+$/, "");
  history.replaceState({}, "", path);

  // exchange the code for a token with your backend.
  // If you use https://github.com/octokit/oauth-app.js
  // the exchange would look something like this
  const response = await fetch("/api/github/oauth/token", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ code }),
  });
  const { token } = await response.json();
  // `token` is the OAuth Access Token that can be use

  const { Octokit } = await import("https://esm.sh/@octokit/core");
  const octokit = new Octokit({ auth: token });

  const {
    data: { login },
  } = await octokit.request("GET /user");
  alert("Hi there, " + login);
}
```

🚧 We are working on [`@octokit/auth-oauth-user-client`](https://github.com/octokit/auth-oauth-user-client.js#readme) to provide a simple API for all methods related to OAuth user tokens.

The plan is to add an new `GET /api/github/oauth/octokit.js` route to the node middleware which will return a JavaScript file that can be imported into an HTML file. It will make a pre-authenticated `octokit` Instance available.

## Action client

**standalone module:** [`@octokit/action`](https://github.com/octokit/action.js#readme)

🚧 A fully fledged `Action` client is pending. You can use [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github) for the time being

## LICENSE

[MIT](LICENSE)
