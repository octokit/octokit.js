---
title: "Create a pull request"
---

In this guide you will learn how to create a pull request which includes multiple file changes. There are three main steps:

1. Create a new branch
2. Make file changes
3. Create pull request

## Create a new branch

Related:

- REST API documentation for [Get a branch](https://developer.github.com/v3/repos/branches/#get-branch), [Create a fork](https://developer.github.com/v3/repos/forks/#create-a-fork), [Create a reference](https://developer.github.com/v3/git/refs/#create-a-reference)

Creating a branch involves a few sub steps

1. Find the commit sha you want to branch off from
2. Fork the repository if you don’t have write access
3. Create the branch using the commit sha and the repository owner/name

### Find the commit sha

Related:

- REST API documentation for [Get a branch](https://developer.github.com/v3/repos/branches/#get-branch)

You can retrieve the last commit which includes the commit sha you need to branch off.

```js
const response = await octokit.repos.listCommits({
  owner,
  repo,
  per_page: 1
})
const sha = response.data[0].sha
```

By default, the returned commits start from the repository’s default branch in descending chronological order. If you want to branch off from another branch, tag, or commit sha, then you can pass that reference as the `sha` parameter

```js
await octokit.repos.listCommits({
  owner,
  repo,
  sha: 'other-branch',
  per_page: 1
})
const sha = response.data[0].sha
```

### Fork the repository

Related:

- REST API documentation for [creating a fork](https://developer.github.com/v3/repos/forks/#create-a-fork)

If you have write access to the repository then you can skip this part.

The code to create a fork is fairly straight forward.

```js
await octokit.repos.createFork({owner, repo})
```

Note that it might take a moment until the fork becomes usable, ideally work for a short amount of time, depending of the size of the original repository. If you get a `Not Found` error in subsequent requests than retry the request as the reason is most likely the replication lag.
