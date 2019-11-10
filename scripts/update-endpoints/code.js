const { writeFileSync } = require("fs");
const { join } = require("path");

const prettier = require("prettier");
const sortKeys = require("sort-keys");

const ENDPOINTS = require("./generated/endpoints.json");
const WORKAROUNDS = require("./workarounds");

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
  ENDPOINTS.concat(WORKAROUNDS).forEach(endpoint => {
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
      url,
      deprecated: newRoutes[scope][idName]
        ? newRoutes[scope][idName].deprecated
        : undefined
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
      const { before, after } = endpoint.renamed;
      if (!newRoutes[before.scope]) {
        newRoutes[before.scope] = {};
      }

      if (!newRoutes[before.scope][before.id]) {
        newRoutes[before.scope][before.id] = newRoutes[scope][idName];
      }

      newRoutes[before.scope][
        before.id
      ].deprecated = `octokit.${before.scope}.${before.id}() has been renamed to octokit.${after.scope}.${after.id}() (${endpoint.renamed.date})`;
    }

    if (endpoint.isDeprecated && !newRoutes[scope][idName].deprecated) {
      newRoutes[scope][
        idName
      ].deprecated = `octokit.${scope}.${idName}() is deprecated, see ${endpoint.documentationUrl}`;
    }
  });

  writeFileSync(
    ROUTES_PATH,
    prettier.format(JSON.stringify(sortKeys(newRoutes, { deep: true })), {
      parser: "json"
    })
  );
  console.log(`${ROUTES_PATH} written.`);
}
