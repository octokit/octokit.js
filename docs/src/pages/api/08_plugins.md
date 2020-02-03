---
title: "Plugins"
---

You can customize and extend Octokit’s functionality using plugins

```js
// index.js
const Octokit = require("@octokit/rest");
const MyOctokit = Octokit.plugin([
  require("./lib/my-plugin"),
  require("octokit-plugin-example")
]);

// lib/my-plugin.js
module.exports = (octokit, options = { greeting: "Hello" }) => {
  // add a custom method
  octokit.helloWorld = () => console.log(`${options.greeting}, world!`);

  // hook into the request lifecycle
  octokit.hook.wrap("request", async (request, options) => {
    const time = Date.now();
    const response = await request(options);
    octokit.log.info(
      `${options.method} ${options.url} – ${response.status} in ${Date.now() -
        time}ms`
    );
    return response;
  });
};
```

`.plugin` accepts a function or an array of functions.

We recommend using [Octokit’s log methods](#logging) to help users of your plugin with debugging.

You can add new methods to the `octokit` instance passed as the first argument to
the plugin function. The 2nd argument is the options object passed to the
constructor when instantiating the `octokit` client.

```js
const octokit = new MyOctokit({ greeting: "Hola" });
octokit.helloWorld();
// Hola, world!
```
