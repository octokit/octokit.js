const _ = require("lodash");
const ROUTES = require("@octokit/routes");

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  Object.keys(ROUTES).map(scope => {
    const scopeId = `octokit-routes-${scope}`;
    const methods = [];

    ROUTES[scope].forEach(endpoint => {
      if (/legacy/.test(endpoint.idName)) {
        return;
      }

      const endpointId = `octokit-routes-${scope}-${_.kebabCase(
        endpoint.idName
      )}`;
      const paramNames = endpoint.params
        .filter(param => param.required)
        .filter(param => !/\./.test(param.name))
        .map(param => param.name);
      const paramsString = paramNames.length
        ? `{
  ${paramNames.join(",\n  ")}
}`
        : "";
      const example = `octokit.${scope}.${_.camelCase(
        endpoint.idName
      )}(${paramsString})`;
      const method = {
        id: endpointId,
        scope,
        ...endpoint,
        example
      };
      createNode({
        id: endpointId,
        parent: scopeId,
        children: [],
        scope,
        ...endpoint,
        example,
        internal: {
          description: `${endpoint.name} Method`,
          contentDigest: endpointId,
          type: "OctokitApiMethod"
        }
      });
      methods.push(method);
    });

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
