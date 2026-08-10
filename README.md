
      <td>
        <code>Object</code>
      </td>
      <td>

`Octokit` implements  to @octocat, otherwise the request will fail
await octokit.rest.issues.create({
  owner: " => {
  return undiciFetch(url, {
    ...options,
    dispatcher: new ProxyAgent(<your_proxy_url>)
  })
}

const octokit = new Octokit({Example: [Create an issue](https://docs.github.com/en/rest/reference/issues#create-an-issue)

```js
await octokit.rest.issues.create({
  owner: "octocat",
  repo: "hello-world",
  title: "Hello, world!",
  body: "I created this issue using Octokit!",
});
```

The `octokit.rest` endpoint methods are generated automatically from [GitHub's OpenAPI specification](https://github.com/github/rest-api-description/). We track operation ID and parameter name changes in order to implement deprecation warnings and reduce the frequency of breaking changes.

Under the covers, every endpoint method is just `octokit.request` with defaults set, so it supports the same parameters as well as the `.endpoint()` 

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
    owner: "
#### Pagination

GitHub's GraphQL API returns a 
Learn more about [GitHub's GraphQL schema previews](https://docs.github.com/en/graphql/overview/schema-previews)

## App client

The `App` client combines features for GitHub Apps, Webhooks, and 

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
