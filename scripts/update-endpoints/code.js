const { writeFileSync } = require("fs");
const { join } = require("path");

const prettier = require("prettier");
const sortKeys = require("sort-keys");

const ENDPOINTS = require("./generated/endpoints.json");

const ROUTES_PATH = join(
  __dirname,
  "..",
  "..",
  "plugins",
  "rest-api-endpoints",
  "routes.json"
);

const newRoutes = {};

generateRoutes();

async function generateRoutes() {
  ENDPOINTS.forEach(endpoint => {
    const scope = endpoint.scope;

    if (!newRoutes[scope]) {
      newRoutes[scope] = {};
    }

    const idName = endpoint.id;
    const url = endpoint.url.toLowerCase().replace(/\{(\w+)\}/g, ":$1");

    // new route
    newRoutes[scope][idName] = {
      method: endpoint.method,
      headers: endpoint.headers.reduce((result, header) => {
        if (!result) {
          result = {};
        }
        result[header.name] = header.value;
        return result;
      }, undefined),
      params: endpoint.parameters.reduce((result, param) => {
        result[param.name] = {
          type: param.type
        };
        if (param.allowNull) {
          result[param.name].allowNull = true;
        }
        if (param.required) {
          result[param.name].required = true;
        }
        if (param.mapToData) {
          result[param.name].mapTo = "data";
        }
        if (param.enum) {
          result[param.name].enum = param.enum;
        }
        if (param.validation) {
          result[param.name].validation = param.validation;
        }
        if (param.deprecated) {
          result[param.name].deprecated = true;

          if (param.alias) {
            result[param.name].alias = param.alias;
            result[param.name].type = result[param.alias].type;
          } else {
            result[param.name].type = param.type;
            result[param.name].description = param.description;
          }
        }

        return result;
      }, {}),
      url
    };

    const previewHeaders = endpoint.previews
      .map(preview => `application/vnd.github.${preview.name}-preview+json`)
      .join(",");

    if (previewHeaders) {
      newRoutes[scope][idName].headers = {
        accept: previewHeaders
      };
    }

    if (endpoint.renamed) {
      newRoutes[scope][
        idName
      ].deprecated = `octokit.${scope}.${endpoint.renamed.before}() has been renamed to octokit.${scope}.${endpoint.renamed.after}() (${endpoint.renamed.date})`;
    }

    if (endpoint.isDeprecated) {
      newRoutes[scope][
        idName
      ].deprecated = `octokit.${scope}.${idName}() is deprecated, see ${endpoint.documentationUrl}`;
    }
  });

  // temporary workaround to bring back obsolete `octokit.repos.getCommitRefSha()` method
  newRoutes.repos.getCommitRefSha = {
    deprecated:
      '"Get the SHA-1 of a commit reference" will be removed. Use "Get a single commit" instead with media type format set to "sha" instead.',
    method: "GET",
    params: {
      owner: {
        required: true,
        type: "string"
      },
      ref: {
        required: true,
        type: "string"
      },
      repo: {
        required: true,
        type: "string"
      }
    },
    url: "/repos/:owner/:repo/commits/:ref"
  };

  // Temporary workarounds to bring back endpoints that got lost due to transition to OpenAPI spec of octokit/routes
  // New API endpoints that will replace these are in the works, so that workaround can be removed soon
  newRoutes.git.listRefs = {
    method: "GET",
    params: {
      namespace: {
        type: "string"
      },
      owner: {
        required: true,
        type: "string"
      },
      page: {
        type: "integer"
      },
      per_page: {
        type: "integer"
      },
      repo: {
        required: true,
        type: "string"
      }
    },
    url: "/repos/:owner/:repo/git/refs/:namespace"
  };
  newRoutes.issues.updateLabel = {
    method: "PATCH",
    params: {
      color: {
        type: "string"
      },
      current_name: {
        required: true,
        type: "string"
      },
      description: {
        type: "string"
      },
      name: {
        type: "string"
      },
      owner: {
        required: true,
        type: "string"
      },
      repo: {
        required: true,
        type: "string"
      }
    },
    url: "/repos/:owner/:repo/labels/:current_name"
  };
  newRoutes.pulls.createFromIssue = {
    deprecated:
      "octokit.pulls.createFromIssue() has been deprecated. Use octokit.pulls.create() instead.",
    method: "POST",
    params: {
      base: { required: true, type: "string" },
      draft: { type: "boolean" },
      head: { required: true, type: "string" },
      issue: { required: true, type: "integer" },
      maintainer_can_modify: { type: "boolean" },
      owner: { required: true, type: "string" },
      repo: { required: true, type: "string" }
    },
    url: "/repos/:owner/:repo/pulls"
  };

  // workaround to bring back the simpler `octokit.repos.uploadReleaseAsset()` method
  newRoutes.repos.uploadReleaseAsset = {
    method: "POST",
    params: {
      file: {
        mapTo: "data",
        required: true,
        type: "string | object"
      },
      headers: {
        required: true,
        type: "object"
      },
      "headers.content-length": {
        required: true,
        type: "integer"
      },
      "headers.content-type": {
        required: true,
        type: "string"
      },
      label: {
        type: "string"
      },
      name: {
        required: true,
        type: "string"
      },
      url: {
        required: true,
        type: "string"
      }
    },
    url: ":url"
  };

  writeFileSync(
    ROUTES_PATH,
    prettier.format(JSON.stringify(sortKeys(newRoutes, { deep: true })), {
      parser: "json"
    })
  );
  console.log(`${ROUTES_PATH} written.`);
}
