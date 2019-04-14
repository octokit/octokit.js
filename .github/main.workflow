workflow "Deploy documentation to GitHub Pages on push" {
  on = "push"
  resolves = ["deploy"]
}

# Filter for master branch
action "master branch only" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "npm ci" {
  needs = "master branch only"
  uses = "docker://node:alpine"
  runs = "npm ci && cd docs/ && npm ci"
}

action "npm run build" {
  needs = "npm ci"
  uses = "docker://node:alpine"
  runs = "cd docs/ && npm run build -- --prefix-paths"
}

action "deploy" {
  needs = "npm run build"
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "public/"
  }
  secrets = ["GH_PAT"]
}
