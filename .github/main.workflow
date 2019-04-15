workflow "Deploy documentation to GitHub Pages on push" {
  on = "push"
  resolves = ["deploy"]
}

# Filter for master branch
action "master branch only" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "prepare" {
  needs = "master branch only"
  uses = "./docs/prepare-deploy-action"
}

action "deploy" {
  needs = "prepare"
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "docs/public/"
  }
  secrets = ["GH_PAT"]
}
