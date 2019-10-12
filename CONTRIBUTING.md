# How to contribute

Support and contributions from the open source community are essential for keeping
`@octokit/rest.js` up to date and always improving! There are a few guidelines that we need
contributors to follow to keep the project consistent, as well as allow us to keep
maintaining `@octokit/rest.js` in a reasonable amount of time.

Please note that this project is released with a [Contributor Code of Conduct][coc].
By participating in this project you agree to abide by its terms.

[coc]: ./CODE_OF_CONDUCT.md

## Creating an Issue

Before you create a new Issue:

1. Please make sure there is no [open issue](https://github.com/octokit/rest.js/issues?utf8=%E2%9C%93&q=is%3Aissue) yet.
2. If it is a bug report, include the steps to reproduce the issue and please create a reproducible test case on [runkit.com](https://runkit.com/). Example: https://runkit.com/gr2m/5aa034f1440b420012a6eebf
3. If it is a feature request, please share the motivation for the new feature and how you would implement it.
4. Please include links to the corresponding github documentation.

## Tests

If you want to submit a bug fix or new feature, make sure that all tests are passing.

Before running any tests you have to start the [fixtures server](https://github.com/octokit/fixtures-server)

```
$ npm run start-fixtures-server
```

In a second terminal, run the tests

```bash
$ npm test
```

Or run a specific test

```bash
$ ./node_modules/.bin/mocha test/scenarios/get-repository-test.js
```

Run browser tests

```bash
$ npm run test:browser
```

**Note**: In order to run the same [scenario tests](test/scenarios) in both Node
and browser, we simulate the Cypress environment in Node, see [test/mocha-node-setup.js](test/mocha-node-setup.js).

The examples are run as part of the tests. You can set an `EXAMPLES_GITHUB_TOKEN` environment
variable (or set it in a `.env` file) to avoid running against GitHub's rate limit.

## Making Changes

Here is an overview of [how `@octokit/rest` works](HOW_IT_WORKS.md).

- Create a topic branch from the master branch.
- Check for unnecessary whitespace / changes with `git diff --check` before committing.
- Keep git commit messages clear and appropriate. Ideally follow commit conventions described below.

## Submitting the Pull Request

- Push your changes to your topic branch on your fork of the repo.
- Submit a pull request from your topic branch to the master branch on the `rest.js` repository.
- Be sure to tag any issues your pull request is taking care of / contributing to. \* Adding "Closes #123" to a pull request description will auto close the issue once the pull request is merged in.

## Testing a pull request from github repo locally:

- You can install a specific pull request of a module from github using the command
  `npm install octokit/rest.js#branchname`

- For example to test pull request [#792](https://github.com/octokit/rest.js/pull/792) run `npm install octokit/rest.js#791/error-headers` as `791/error-headers` is the branch name.

- After the installation is done, you can double check with `npm ls @octokit/rest` which will show something like

```text
└── @octokit/rest@0.0.0-development  (git+https://github.com/octokit/rest.js.git#505ed1f57671480b625131abb00c277c67cae40a)
```

- Once you are done testing, you can revert back to the default module `@octokit/rest` from npm with `npm install @octokit/rest`

## Merging the Pull Request & releasing a new version

Releases are automated using [semantic-release](https://github.com/semantic-release/semantic-release).
The following commit message conventions determine which version is released:

1. `fix: ...` or `fix(scope name): ...` prefix in subject: bumps fix version, e.g. `1.2.3` → `1.2.4`
2. `feat: ...` or `feat(scope name): ...` prefix in subject: bumps feature version, e.g. `1.2.3` → `1.3.0`
3. `BREAKING CHANGE:` in body: bumps breaking version, e.g. `1.2.3` → `2.0.0`

Only one version number is bumped at a time, the highest version change trumps the others.
Besides publishing a new version to npm, semantic-release also creates a git tag and release
on GitHub, generates changelogs from the commit messages and puts them into the release notes.

Before the publish it runs the `npm run build` script which generates type definitions for Typescript based on the [templates](scripts/templates/).
The script also generates the API docs. After the publish, the API docs are automatically pushed to the `gh-pages` branch which updates the documentation at [octokit.github.io/rest.js](https://octokit.github.io/rest.js).

If the pull request looks good but does not follow the commit conventions, use the "Squash & merge" button.
