const _ = require("lodash");
const ENDPOINTS = require("../../../scripts/update-endpoints/generated/endpoints.json");
const WORKAROUNDS = require("../../../scripts/update-endpoints/workarounds");

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  const methodsByScope = {};

  ENDPOINTS.concat(WORKAROUNDS).forEach(endpoint => {
    const scopeId = `octokit-routes-${endpoint.scope}`;
    if (!methodsByScope[endpoint.scope]) {
      methodsByScope[endpoint.scope] = [];
    }

    const endpointId = `${scopeId}-${_.kebabCase(endpoint.id)}`;
    const paramNames = endpoint.parameters
      .filter(param => param.required)
      .filter(param => !/\./.test(param.name))
      .map(param => param.name);
    const paramsString = paramNames.length
      ? `{
  ${paramNames.join(",\n  ")}
}`
      : "";
    const example = `octokit.${endpoint.scope}.${_.camelCase(
      endpoint.id
    )}(${paramsString})`;
    let renamedId;

    if (endpoint.renamed) {
      renamedId = `octokit-routes-${endpoint.scope}-${_.kebabCase(
        endpoint.renamed.after.id
      )}`;
    }
    const method = {
      ...endpoint,
      id: endpointId,
      example,
      renamed: endpoint.renamed
        ? { ...endpoint.renamed, afterId: renamedId }
        : undefined
    };

    createNode({
      ...endpoint,
      parent: scopeId,
      children: [],
      id: endpointId,
      example,
      renamed: endpoint.renamed
        ? { ...endpoint.renamed, afterId: renamedId }
        : undefined,
      internal: {
        description: `${endpoint.name} Method`,
        contentDigest: endpointId,
        type: "OctokitApiMethod"
      }
    });
    methodsByScope[endpoint.scope].push(method);
  });

  Object.keys(methodsByScope)
    .sort()
    .forEach(scope => {
      const scopeId = `octokit-routes-${scope}`;
      const methods = methodsByScope[scope];

      createNode({
        id: scopeId,
        parent: null,
        children: methods.map(method => method.id),
        methods: methods,
        name: scope,
        internal: {
          description: `${scope} Scope`,
          contentDigest: scope,
          type: "OctokitApiGroup"
        }
      });
    });
};
