workflow "Deploy documentation to GitHub Pages on push" {
  on = "push"
  resolves = ["deploy docs"]
}

# Filter for master branch
action "master branch only" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

# only install @octokit/routes with the version defined in package.json
# shout out to https://twitter.com/b0neskull/status/1117860388828106752
action "install routes" {
  needs = "master branch only"
  uses = "docker://node:alpine"
  runs = "npm install @octokit/routes --no-package-lock"
}

# Install dependencies defined in docs/package.json into docs/node_modules
action "install docs dependencies" {
  needs = "master branch only"
  uses = "docker://node:alpine"
  runs = "npm --prefix ./docs install ./docs"
}

## run "build" script from docs/package.json and pass "--prefix-path" to "gatsby build"
action "build docs" {
  needs = ["install routes", "install docs dependencies"]
  uses = "docker://node:alpine"
  runs = "npm run build --prefix ./docs -- --prefix-paths"
}

action "deploy docs" {
  needs = "build docs"
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "docs/public/"
  }
  secrets = ["GH_PAT"]
}
