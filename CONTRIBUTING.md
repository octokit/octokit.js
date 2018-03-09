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
* Please include links to the corresponding github documentation.

## Making Changes

Here is an overview of [how `@octokit/rest` works](HOW_IT_WORKS.md).

* Create a topic branch from the master branch.
* Check for unnecessary whitespace / changes with `git diff --check` before committing.
* Keep git commit messages clear and appropriate. Ideally follow commit conventions described below.

## Submitting the Pull Request

* Push your changes to your topic branch on your fork of the repo.
* Submit a pull request from your topic branch to the master branch on the `rest.js` repository.
* Be sure to tag any issues your pull request is taking care of / contributing to.
	* Adding "Closes #123" to a pull request description will auto close the issue once the pull request is merged in.

## Merging the Pull Request & releasing a new version

Releases are automated using [semantic-release](https://github.com/semantic-release/semantic-release).
The following commit message conventions determine which version is released:

1. `fix: ...` or `fix(scope name): ...` prefix in subject: bumps fix version, e.g. `1.2.3` → `1.2.4`
2. `feat: ...` or `feat(scope name): ...` prefix in subject: bumps feature version, e.g. `1.2.3` → `1.3.0`
3. `BREAKING CHANGE: ` in body: bumps breaking version, e.g. `1.2.3` → `2.0.0`

Only one version number is bumped at a time, the highest version change trumps the others.
Besides publishing a new version to npm, semantic-release also creates a git tag and release
on GitHub, generates changelogs from the commit messages and puts them into the release notes.

Before the publish it runs the `npm run build` script which generates type definitions for Flow & Typescript based on the [templates](scripts/templates/).
The script also generates the API docs. After the publish, the API docs are automatically pushed to the `gh-pages` branch which updates the documentation at  [octokit.github.io/rest.js](https://octokit.github.io/rest.js).

If the pull request looks good but does not follow the commit conventions, use the "Squash & merge" button.
