---
title: "Authentication"
---

Most GitHub API calls don't require authentication. Rules of thumb:

1. If you can see the information by visiting the site without being logged in, you don't have to be authenticated to retrieve the same information through the API.
2. If you want to change data, you have to be authenticated.

To enable authenticated requests, pass an `auth` option to the Octokit constructor:

```js
const clientWithAuth = new Octokit({
  auth: 'token secret123'
})
```

The `auth` option can be

1. A string

   The value will be passed as value for the `Authorization` header,
   see [authentication](https://developer.github.com/v3/#authentication).

   ```js
   new Octokit({
     auth: 'token secret123'
   })
   ```

   Use this for

   - personal access tokens
   - OAuth access tokens
   - GitHub App bearer tokens
   - GitHub App installation tokens

2. As object with the properties `username`, `password`, `on2fa`.

   `on2fa` is an asynchronous function that must resolve with two-factor
   authentication code sent to the user.

   ```js
   new Octokit({
     auth: {
       username: 'octocat',
       password: 'secret',
       async on2fa () {
         // example: ask the user
         return prompt('Two-factor authentication Code:')
       }
     }
   })
   ```

3. An object with the properties `clientId` and `clientSecret`

   OAuth applications can authenticate using their `clientId` and `clientSecret`
   in order to [increase the unauthenticated rate limit](https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications).

4. A function

   Must resolve with a string which then will be passed as value for the
   `Authorization` header. The function will be called before each request and
   can be asynchronous.

   ```js
   new Octokit({
     auth () {
       return 'token secret123'
     }
   })
   ```

   This is useful for GitHub apps, as installations need to renew their tokens each hour.
   Here is an example on how to implement authentication for GitHub Apps

   ```js
   const App = require('@octokit/app')
   const Octokit = require('@octokit/rest')

   const app = new App({ id: process.env.APP_ID, privateKey: process.env.PRIVATE_KEY })
   const octokit = new Octokit({
     async auth () {
       const installationAccessToken = await app.getInstallationAccessToken({ 
         installationId: process.env.INSTALLATION_ID 
       });
       return `token ${installationAccessToken}`;
     }
   })
   ```

   See also: https://github.com/octokit/app.js#authenticating-as-an-installation.