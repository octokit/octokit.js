module.exports = generateTypes;
const { readFileSync, writeFileSync } = require("fs");
const { join: pathJoin } = require("path");

const Mustache = require("mustache");
const upperFirst = require("lodash.upperfirst");
const camelCase = require("lodash.camelcase");
const set = require("lodash.set");
const TypeWriter = require("@gimenete/type-writer");
const prettier = require("prettier");
const { stringToJsdocComment } = require("string-to-jsdoc-comment");
const sortKeys = require("sort-keys");

const ENDPOINTS = require("./generated/endpoints.json");
const WORKAROUNDS = require("./workarounds");

const typeMap = {
  integer: "number",
  "integer[]": "number[]"
};

function parameterize(definition) {
  if (definition === null) {
    return {};
  }

  const key = definition.name;
  const type = typeMap[definition.type] || definition.type;
  const enums = definition.enum
    ? definition.enum.map(JSON.stringify).join("|")
    : null;

  return {
    name: pascalcase(key),
    key: key,
    required: definition.required,
    type: enums || type,
    alias: definition.alias,
    deprecated: definition.deprecated,
    allowNull: definition.allowNull,
    jsdoc: stringToJsdocComment(definition.description)
  };
}

function pascalcase(string) {
  return upperFirst(camelCase(string));
}

function toCombineParams(params, param) {
  return params.concat(parameterize(param));
}

function toParamAlias(param, i, params) {
  if (!param.alias) {
    return param;
  }

  const actualParam = params.find(({ key }) => key === param.alias);
  param.required = !param.deprecated && actualParam.required;
  param.type = actualParam.type;
  return param;
}

function toDeprecated(params, deprecated) {
  const deprecatedParam = Object.assign({}, deprecated.newParam, {
    key: deprecated.name,
    name: pascalcase(deprecated.name),
    jsdoc: deprecated.jsdoc
  });

  return params
    .filter(param => param.key !== deprecated.newParam.name)
    .concat(deprecatedParam)
    .sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      }
      if (a.key < b.key) {
        return -1;
      }
      return 0;
    });
}

generateTypes("TypeScript", "index.d.ts.tpl", "index.d.ts");

async function generateTypes(languageName, templateFile, outputFile) {
  const templatePath = pathJoin(__dirname, "templates", templateFile);
  const template = readFileSync(templatePath, "utf8");
  const typeWriter = new TypeWriter();

  console.log(`Generating ${languageName} types...`);

  const ROUTES = await getRoutes();

  const childParams = {};
  const namespaces = Object.keys(ROUTES).reduce((namespaces, namespace) => {
    const methods = Object.keys(ROUTES[namespace]).reduce(
      (methods, methodName) => {
        const entry = ROUTES[namespace][methodName];
        const namespacedParamsName = pascalcase(
          `${namespace}.${methodName}.Params`
        );
        let responseType = "Octokit.AnyResponse";
        if (entry.responses) {
          const typeName =
            "Octokit." +
            typeWriter.add(entry.responses, {
              rootTypeName: pascalcase(`${namespace}.${methodName}.Response`)
            });
          responseType = "Octokit.Response<" + typeName + ">";
        }

        // find aliased required parameters
        const deprecatedParameters = Object.keys(entry.params)
          .map(name => {
            const param = entry.params[name];
            if (!param.deprecated) {
              return;
            }

            const newParamName = entry.params[name].alias;
            const newParam = Object.assign(
              {
                type: entry.params[name].type
              },
              entry.params[newParamName],
              {
                name: newParamName
              }
            );

            const description = [
              param.description,
              newParamName
                ? `@deprecated "${name}" parameter renamed to "${newParamName}"`
                : `@deprecated "${name}" parameter has been deprecated and will be removed in future`
            ]
              .filter(Boolean)
              .join("\n");

            return {
              newParam:
                newParam &&
                Object.assign({}, newParam, {
                  type: typeMap[newParam.type] || newParam.type
                }),
              name,
              jsdoc: stringToJsdocComment(description)
            };
          })
          .filter(Boolean);

        const params = Object.keys(entry.params)
          .map(name => Object.assign({ name }, entry.params[name]))
          .reduce(toCombineParams, [])
          .map(toParamAlias)
          // handle "object" & "object[]" types
          .map(param => {
            if (param.deprecated) {
              return;
            }

            if (param.type === "object" || param.type === "object[]") {
              const childParamsName = pascalcase(
                `${namespacedParamsName}.${param.key}`
              );
              param.type = param.type.replace("object", childParamsName);

              if (!childParams[childParamsName]) {
                childParams[childParamsName] = {};
              }
            }

            if (!/\./.test(param.key)) {
              return param;
            }

            const childKey = param.key.split(".").pop();
            const parentKey = param.key.replace(/\.[^.]+$/, "");

            param.key = childKey;

            const childParamsName = pascalcase(
              `${namespacedParamsName}.${parentKey}`
            );
            set(childParams, `${childParamsName}.${childKey}`, param);
          })
          .filter(Boolean);

        // prepare functions to accept multiple parameter types in order to support deprecations
        // https://github.com/octokit/rest.js/issues/1317
        const hasParams = params.length > 0;
        const paramTypes = [
          {
            type: hasParams ? namespacedParamsName : "EmptyParams",
            params,
            hasParams
          }
        ];

        deprecatedParameters.forEach(param => {
          paramTypes.unshift({
            type: pascalcase(
              `${namespacedParamsName}.deprecated.${param.name}`
            ),
            params: toDeprecated(params, param),
            hasParams: true
          });
        });

        const description = [
          entry.description,
          entry.deprecated && `@deprecated ${entry.deprecated}`
        ]
          .filter(Boolean)
          .join("\n");

        return methods.concat({
          method: methodName,
          responseType,
          jsdoc: stringToJsdocComment(description),
          paramTypes
        });
      },
      []
    );

    return namespaces.concat({
      namespace: camelCase(namespace),
      methods
    });
  }, []);

  const body = Mustache.render(template, {
    responseTypes: typeWriter.generate("typescript"),
    namespaces,
    childParams: Object.keys(childParams).map(key => {
      return {
        paramTypeName: key,
        params: Object.values(childParams[key])
      };
    })
  });

  const comment = `/**
 * This file is generated based on https://github.com/octokit/routes/ & "npm run build:ts".
 *
 * DO NOT EDIT MANUALLY.
 */

`;

  const source = prettier.format(comment + body, {
    parser: languageName.toLowerCase()
  });

  const definitionFilePath = pathJoin(__dirname, "..", "..", outputFile);

  writeFileSync(definitionFilePath, source, "utf8");
  console.log(`${languageName} declarations written to ${definitionFilePath}`);
}

async function getRoutes() {
  const newRoutes = {};

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
      url,
      description: endpoint.description,
      headers: endpoint.headers.reduce((result, header) => {
        if (!result) {
          result = {};
        }
        result[header.name] = header.value;
        return result;
      }, undefined),
      deprecated: newRoutes[scope][idName]
        ? newRoutes[scope][idName].deprecated
        : undefined,
      params: endpoint.parameters.reduce((result, param) => {
        result[param.name] = {
          type: param.type,
          description:
            param.description === `${param.name} parameter`
              ? ""
              : param.description
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
        if (
          typeof param.description === "string" &&
          param.description.match(/deprecated/i)
        ) {
          result[param.name].deprecated = true;
        }

        return result;
      }, {}),
      responses:
        endpoint.responses.length && endpoint.responses[0].examples
          ? endpoint.responses[0].examples.map(example =>
              JSON.parse(example.data)
            )
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
    description:
      "**Note:** To access this endpoint, you must provide a custom [media type](https://developer.github.com/v3/media) in the `Accept` header:\n```\napplication/vnd.github.VERSION.sha\n```\nReturns the SHA-1 of the commit reference. You must have `read` access for the repository to get the SHA-1 of a commit reference. You can use this endpoint to check if a remote reference's SHA-1 is the same as your local reference's SHA-1 by providing the local SHA-1 reference as the ETag.",
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
    description:
      "Returns an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`. If there are no references to list, a `404` is returned.",
    params: {
      namespace: {
        type: "string",
        description:
          "Filter by sub-namespace (reference prefix). Most commen examples would be `'heads/'` and `'tags/'` to retrieve branches or tags"
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
    description: "",
    params: {
      color: {
        type: "string",
        description:
          "The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`."
      },
      current_name: {
        required: true,
        type: "string"
      },
      description: {
        type: "string",
        description: "A short description of the label."
      },
      name: {
        type: "string",
        description:
          'The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).'
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
    url: "/repos/:owner/:repo/labels/:current_name",
    responses: [
      {
        id: 208045946,
        node_id: "MDU6TGFiZWwyMDgwNDU5NDY=",
        url:
          "https://api.github.com/repos/octocat/Hello-World/labels/bug%20:bug:",
        name: "bug :bug:",
        description: "Small bug fix required",
        color: "b01f26",
        default: true
      }
    ]
  };

  newRoutes.pulls.createFromIssue = {
    isDeprecated: true,
    method: "POST",
    description: "",
    params: {
      base: { required: true, type: "string" },
      draft: { type: "boolean" },
      head: { required: true, type: "string" },
      issue: { required: true, type: "integer" },
      maintainer_can_modify: { type: "boolean" },
      owner: { required: true, type: "string" },
      repo: { required: true, type: "string" }
    },
    url: "/repos/:owner/:repo/pulls",
    responses: newRoutes.pulls.create.responses
  };

  // workaround to bring back the simpler `octokit.repos.uploadReleaseAsset()` method
  newRoutes.repos.uploadReleaseAsset = {
    method: "POST",
    description: `This endpoint makes use of [a Hypermedia relation](https://developer.github.com/v3/#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the \`upload_url\` returned in the response of the [Create a release endpoint](https://developer.github.com/v3/repos/releases/#create-a-release) to upload a release asset.

You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

Most libraries will set the required \`Content-Length\` header automatically. Use the required \`Content-Type\` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:

\`application/zip\`

GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example, you'll still need to pass your authentication to be able to upload an asset.`,
    params: {
      data: {
        mapTo: "data",
        required: true,
        type: "string | object"
      },
      file: {
        mapTo: "data",
        deprecated: true,
        type: "string | object",
        alias: "data"
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
        type: "string",
        description: `An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter.`
      },
      name: {
        required: true,
        type: "string",
        description: `The file name of the asset. This should be set in a URI query parameter.`
      },
      url: {
        required: true,
        type: "string",
        description:
          "The `upload_url` key returned from creating or getting a release"
      }
    },
    url: ":url",
    responses: [
      {
        value: {
          url:
            "https://api.github.com/repos/octocat/Hello-World/releases/assets/1",
          browser_download_url:
            "https://github.com/octocat/Hello-World/releases/download/v1.0.0/example.zip",
          id: 1,
          node_id: "MDEyOlJlbGVhc2VBc3NldDE=",
          name: "example.zip",
          label: "short description",
          state: "uploaded",
          content_type: "application/zip",
          size: 1024,
          download_count: 42,
          created_at: "2013-02-27T19:35:32Z",
          updated_at: "2013-02-27T19:35:32Z",
          uploader: {
            login: "octocat",
            id: 1,
            node_id: "MDQ6VXNlcjE=",
            avatar_url: "https://github.com/images/error/octocat_happy.gif",
            gravatar_id: "",
            url: "https://api.github.com/users/octocat",
            html_url: "https://github.com/octocat",
            followers_url: "https://api.github.com/users/octocat/followers",
            following_url:
              "https://api.github.com/users/octocat/following{/other_user}",
            gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/octocat/subscriptions",
            organizations_url: "https://api.github.com/users/octocat/orgs",
            repos_url: "https://api.github.com/users/octocat/repos",
            events_url: "https://api.github.com/users/octocat/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/octocat/received_events",
            type: "User",
            site_admin: false
          }
        }
      }
    ]
  };

  return sortKeys(newRoutes, { deep: true });
}
