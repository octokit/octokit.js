---
title: "Authentication"
---

While authentication is not strictly required from some API endpoints, GitHub encourages to authenticated all requests to GitHub. Unauthenticated requests are subject to much more aggressive rate limiting.

To enable authenticated requests, pass an `auth` option to the Octokit constructor:

```js
const clientWithAuth = new Octokit({
  auth: "token secret123"
});
```

The `auth` option can be

1. A string

   The value will be passed as value for the `Authorization` header,
   see [authentication](https://developer.github.com/v3/#authentication).

   ```js
   new Octokit({
     auth: "secret123"
   });
   ```

   The string can be one of

   1. Personal access tokens  
      You can [create personal access tokens](https://github.com/settings/tokens) in your account’s developer settings or use the "[Create a new authorization](#octokit-routes-oauthAuthorizations-create-authorization)" endpoint.
   2. OAuth access tokens  
      Retrieved using the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). See also: [octokit/oauth-login-url.js](https://github.com/octokit/oauth-login-url.js).
   3. GitHub App bearer tokens  
      See [octokit/app.js](https://github.com/octokit/app.js) to retrieve a JSON Web Token (JWT) in order to authenticate as a GitHub App.
   4. GitHub App installation tokens  
      See [octokit/app.js](https://github.com/octokit/app.js) to retrieve an installation access token in order to authenticate as a GitHub App installation. Also see `4. A function` below for an example.

2. As object with the properties `username`, `password`, `on2fa`.

   `on2fa` is an asynchronous function that must resolve with two-factor
   authentication code sent to the user.

   ```js
   new Octokit({
     auth: {
       username: "octocat",
       password: "secret",
       async on2fa() {
         // example: ask the user
         return prompt("Two-factor authentication Code:");
       }
     }
   });
   ```

3. An object with the properties `clientId` and `clientSecret`

   OAuth applications can authenticate using their `client_id` and `client_secret`
   in order to [increase the unauthenticated rate limit](https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications). Find the id and secret in your GitHub account’s developer setting, or, if the OAuth app belongs to a GitHub organization, the organization’s developer settings.

4. A function

   Must resolve with a string which then will be passed as value for the
   `Authorization` header. The function will be called before each request and
   can be asynchronous.

   ```js
   new Octokit({
     auth() {
       return "token secret123";
     }
   });
   ```

   This is useful for GitHub apps, as installations need to renew their tokens each hour.
   Here is an example on how to implement authentication for GitHub Apps

   ```js
   const { App } = require("@octokit/app");
   const Octokit = require("@octokit/rest");

   const app = new App({
     id: process.env.APP_ID,
     privateKey: process.env.PRIVATE_KEY
   });
   const octokit = new Octokit({
     async auth() {
       const installationAccessToken = await app.getInstallationAccessToken({
         installationId: process.env.INSTALLATION_ID
       });
       return `token ${installationAccessToken}`;
     }
   });
   ```

   See also: https://github.com/octokit/app.js#authenticating-as-an-installation.
