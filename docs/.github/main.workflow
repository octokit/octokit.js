workflow "Deploy to GitHub Pages on push" {
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
  runs = "npm ci"
}

action "npm run build" {
  needs = "npm ci"
  uses = "docker://node:alpine"
  runs = "npm run build"
}

action "deploy" {
  needs = "npm run build"
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "public/"
  }
  secrets = ["GH_PAT"]
}
