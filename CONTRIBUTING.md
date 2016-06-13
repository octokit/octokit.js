# How to contribute

Support and contributions from the open source community are essential for keeping
node-github up to date and always improving! There are a few guidelines that we need
contributors to follow to keep the project consistent, as well as allow us to keep
maintaining node-github in a reasonable amount of time.

## Creating an Issue

Before you create a new Issue:
* Check the [Issues](https://github.com/mikedeboer/node-github/issues) on Github to ensure one doesn't already exist.
* Clearly describe the issue, including the steps to reproduce the issue.
* Please include links to the corresponding github documentation.

## Making Changes

* Create a topic branch from the master branch.
* Check for unnecessary whitespace / changes with `git diff --check` before committing.
* Keep git commit messages clear and appropriate
	* Please "squash" your commits down to one commit.
* run `node lib/generate.js` and commit any files that appear. This will generate documentation and corresponding tests.


## Submitting the Pull Request

* Push your changes to your topic branch on your fork of the repo.
* Submit a pull request from your topic branch to the master branch on the node-github repository.
* Be sure to tag any issues your pull request is taking care of / contributing to.
	* Adding "Closes #xyz" to a commit message will auto close the issue once the pull request is merged in.
