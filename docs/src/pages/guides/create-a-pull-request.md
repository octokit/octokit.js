---
title: "Create a pull request"
---

In this guide you will learn how to create a pull request which includes multiple file changes. There are three main steps:

1. Get the base branch name & commit sha
2. Make file changes
3. Create pull request

## Get the base branch name & commit sha

1. Get the repository’s default branch name
2. Get the commit sha you want to branch off from
3. Fork the repository if you don’t have write access

### Get the repository’s default branch name

Related:

- REST API documentation for [Get a repository](https://developer.github.com/v3/repos/#get)

Unless you know the name of the base branch you want to send the pull request against, you have to retrieve the the `default_branch` for the repository first

```js
const response = await octokit.repos.get({
  owner,
  repo
})
const baseBranch = response.default_branch
```

### Find the commit sha

Related:

- REST API documentation for [List commits](https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository)

You can retrieve the last commit which includes the commit sha and the tree sha that you will need later.

```js
const response = await octokit.repos.listCommits({
  owner,
  repo,
  sha: baseBranch
  per_page: 1
})
const latestCommitSha = response.data[0].sha
const treeSha = response.data[0].commit.tree.sha
```

### Fork the repository

Related:

- REST API documentation for [creating a fork](https://developer.github.com/v3/repos/forks/#create-a-fork)

You can skip this part if you have write access to the repository.

The code to create a fork is fairly straight forward.

```js
await octokit.repos.createFork({
  owner,
  repo
})
```

Note that it might take a moment until the fork becomes usable, ideally work for a short amount of time, depending of the size of the original repository. If you get a `Not Found` error in subsequent requests then retry the request as the reason is most likely the replication lag.

If you created a fork you need to send the next requests to that new repository. The final request to create a pull requests is sent against the upstream repository, the `head` parameter needs to be prefixed by `<your username>:` or `<organization>:` if you forked to an organization instead.

### Create a reference

Related:

- REST API documentation for [creating a reference](https://developer.github.com/v3/git/refs/#create-a-reference)

With the repository name , owner name, and the commit sha from the previous steps, you can now create a new git reference for the branch. The branch name has to be prefixed with `refs/heads/`

```js
await octokit.git.createRef({
  owner,
  repo,
  sha: latestCommitSha,
  ref: 'refs/heads/your-branch-name'
})
```

## Make file changes

In order to make all file changes in a single commit, we use the "Create a tree" and "Create a commit" APIs.

### Create a git tree

Related:

- REST API documentation for [Create a tree](https://developer.github.com/v3/git/trees/#create-a-tree)

```js
const response = await octokit.git.createTree({
  owner,
  repo,
  base_tree: treeSha,
  tree: [
    { path: 'path/to/file.txt', content: 'file content here' },
    { path: 'path/to/other-file.txt', content: 'other file content here' }
  ]
})
const newTreeSha = response.sha
```

### Create a commit

Related:

- REST API documentation for [Create a commit](https://developer.github.com/v3/git/commits/#create-a-commit)

```js
const response = await octokit.git.createCommit({
  owner,
  repo,
  message: 'Your commit message',
  tree: newTreeSha,
  parents: [latestCommitSha],
  author: 'Your name <your@email.com>'
})
const newCommitSha = response.sha
```

## Create pull request

Related

- REST API documentation to [Create a pull request](https://developer.github.com/v3/pulls/#create-a-pull-request)

In order create the pull request you need to know the branch you want to merge into. If you want to merge into the repository’s default branch then you can get it from the repository’s `default_branch`

```js
const response = await octokit.repos.get({
  owner,
  repo
})
const baseBranch = response.default_branch
```

Now you can create the pull request

```js
octokit.pulls.create({
  owner,
  repo,
  head: 'your-branch-name',
  base: baseBranch,
  title: 'Pull request title',
  body: 'Pull request description'
})
```
