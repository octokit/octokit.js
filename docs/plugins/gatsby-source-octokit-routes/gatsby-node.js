const _ = require("lodash");
const { graphql } = require("@octokit/graphql");

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  const { endpoints } = await graphql(
    `
      {
        endpoints(filter: { isLegacy: false, isGithubCloudOnly: false }) {
          isDeprecated
          documentationUrl
          scope(format: CAMELCASE)
          id(format: CAMELCASE)
          name
          description
          method
          url
          parameters {
            name
            description
            in
            type
            required
            enum
            allowNull
            mapToData
            validation
            alias
            deprecated
          }
          headers {
            name
            value
          }
          previews(required: true) {
            name
          }
          renamed {
            before(format: CAMELCASE)
            after(format: CAMELCASE)
            date
            note
          }
          responses {
            code
            description
            examples {
              data
            }
          }
        }
      }
    `,
    { url: "https://octokit-routes-graphql-server.now.sh/" }
  );

  const methodsByScope = {};

  endpoints.forEach(endpoint => {
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
    const method = {
      ...endpoint,
      id: endpointId,
      example
    };

    createNode({
      ...endpoint,
      parent: scopeId,
      children: [],
      id: endpointId,
      example,
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
