# How to contribute

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.

We appreciate you taking the time to contribute to `octokit` or any of the projects in Octokit's ecosystem. Especially as a new contributor, you have a valuable perspective that we lost a long time ago: you will find things confusing and run into problems that no longer occur to us. Please share them with us, so we can make the experience for future contributors the best it could be.

Thank you 💖

## Creating an Issue

Before you create a new Issue:

1. Please make sure there is no open issue in the **Issues Section** of the repository you are working on yet. i.e. <https://github.com/octokit/octokit.js/issues?utf8=%E2%9C%93&q=is%3Aissue>
2. If it is a bug report, include the steps to reproduce the issue, and please create a reproducible test case on [runkit.com](https://runkit.com/). Example: <https://runkit.com/gr2m/octokit-rest-js-1808>
3. If it is a feature request, please share the motivation for the new feature, what alternatives you tried, and how you would implement it.
4. Please include links to the corresponding GitHub documentation.

## Set up the repository locally

First, fork the repository.

Set up the repository locally. Replace `<your account name>` with the name of the account you forked to and `<repository name>` with the repository name you forked.

```shell
git clone https://github.com/<your account name>/<repository name>.git
cd <repository name>
npm install
```

Run the tests before making changes to make sure the local setup is working as expected

```shell
npm test
```

## Submitting the Pull Request

- Create a new branch locally.
- Make your changes in that branch and push them to your fork
- Submit a pull request from your topic branch to the main branch on the `octokit/<repository name>` repository.
- Be sure to tag any issues your pull request is taking care of / contributing to. Adding "Closes #123" to a pull request description will automatically close the issue once the pull request is merged in.

## Testing a pull request from GitHub repo locally

You can install `@octokit/<repository name>` from each pull request. Replace `[PULL REQUEST NUMBER]`:

```
npm install https://github.pika.dev/octokit/<repository name>/pr/[PULL REQUEST NUMBER]
```

Once you are done testing, you can revert to the default module `@octokit/<repository name>` from npm with `npm install @octokit/<repository name>`

## Maintainers

See [MAINTAINING.md](MAINTAINING.md)
