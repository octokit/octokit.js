---
title: "Debug"
---

The simplest way to receive debug information is to set the [`log` client option](client-options) to `console`.

```js
const octokit = require("@octokit/rest")({
  log: console
});

octokit.request("/");
```

This will log

```
request { method: 'GET',
  baseUrl: 'https://api.github.com',
  headers:
   { accept: 'application/vnd.github.v3+json',
     'user-agent':
      'octokit.js/0.0.0-development Node.js/10.15.0 (macOS Mojave; x64)' },
  request: {},
  url: '/' }
GET / - 200 in 514ms
```

If you like to support a configurable log level, we recommend using the [console-log-level](https://github.com/watson/console-log-level) module

```js
const octokit = require("@octokit/rest")({
  log: require("console-log-level")({ level: "info" })
});

octokit.request("/");
```

This will only log

```
GET / - 200 in 514ms
```
