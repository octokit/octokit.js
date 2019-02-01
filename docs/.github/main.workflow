workflow "New workflow" {
  on = "pull_request"
  resolves = ["wip/action@master"]
}

action "wip/action@master" {
  uses = "wip/action@master"
  secrets = ["GITHUB_TOKEN"]
}
