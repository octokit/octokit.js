#!/bin/sh -l

# install docs dependencies
npm --prefix ./docs install ./docs

# install @octokit/routes with version defined in root package.json
VERSION=`node -pe 'require("./package.json").devDependencies["@octokit/routes"]'`
npm --prefix ./docs install @octokit/routes@$VERSION ./docs

# build static HTML/CSS
npm run build --prefix ./docs -- --prefix-paths
