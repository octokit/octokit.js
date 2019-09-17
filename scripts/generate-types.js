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

const ROUTES = require("./lib/get-routes")();
const MAP = {};
Object.keys(ROUTES).forEach(namespace => {
  MAP[namespace] = {};
  ROUTES[namespace].forEach(method => {
    MAP[namespace][method.idName] = method;
  });
});

const MAP_SORTED = sortKeys(MAP, {
  deep: true
});

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

function normalize(methodName) {
  return camelCase(methodName.replace(/^edit/, "update"));
}

function toDeprecated(params, deprecated) {
  const newParam = params.find(param => param.key === deprecated.newParam.name);
  const deprecatedParam = Object.assign({}, newParam, {
    key: deprecated.name,
    name: pascalcase(deprecated.name),
    jsdoc: deprecated.jsdoc
  });

  return params
    .filter(param => param.key !== deprecated.newParam.name)
    .concat(deprecatedParam);
}

generateTypes("TypeScript", "index.d.ts.tpl", "index.d.ts");

function generateTypes(languageName, templateFile, outputFile) {
  const templatePath = pathJoin(__dirname, "templates", templateFile);
  const template = readFileSync(templatePath, "utf8");
  const typeWriter = new TypeWriter();

  console.log(`Generating ${languageName} types...`);

  const childParams = {};
  const namespaces = Object.keys(MAP_SORTED).reduce((namespaces, namespace) => {
    const methods = Object.keys(MAP_SORTED[namespace]).reduce(
      (methods, idName) => {
        const entry = MAP_SORTED[namespace][idName];
        const methodName = normalize(entry.idName);
        const namespacedParamsName = pascalcase(
          `${namespace}.${methodName}.Params`
        );
        let responseType = "Octokit.AnyResponse";
        if (entry.responses) {
          const typeName =
            "Octokit." +
            typeWriter.add(
              entry.responses.map(response => response.body || {}),
              {
                rootTypeName: pascalcase(
                  `${namespace}.${entry.idName}.Response`
                )
              }
            );
          responseType = "Octokit.Response<" + typeName + ">";
        }

        // find aliased required parameters
        const paramsSorted = entry.params.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        });
        const deprecatedParameters = paramsSorted
          .map(param => {
            if (!param.deprecated) {
              return;
            }

            const newParam = paramsSorted.find(
              p => p.name === param.deprecated.after.name
            );
            const description = [
              param.description,
              `@deprecated ${param.deprecated.message}`
            ]
              .filter(Boolean)
              .join("\n");

            return {
              newParam,
              name: param.name,
              jsdoc: stringToJsdocComment(description)
            };
          })
          .filter(Boolean);

        const params = paramsSorted
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

        return methods.concat({
          method: methodName,
          responseType,
          jsdoc: stringToJsdocComment(entry.description),
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

  const paramTypes = [];
  namespaces.forEach(namespace => {
    namespace.methods.forEach(method => {
      method.paramTypes
        .filter(type => type.hasParams)
        .forEach(({ type, params }) => {
          paramTypes.push({
            type,
            params: params.sort((a, b) => {
              if (a.key > b.key) {
                return 1;
              }
              if (a.key < b.key) {
                return -1;
              }
              return 0;
            })
          });
        });
    });
  });

  const body = Mustache.render(template, {
    responseTypes: typeWriter.generate("typescript"),
    namespaces,
    paramTypes,
    childParams: Object.keys(childParams)
      .sort()
      .map(key => {
        return {
          paramTypeName: key,
          params: Object.values(childParams[key]).sort((a, b) => {
            if (a.key > b.key) {
              return 1;
            }
            if (a.key < b.key) {
              return -1;
            }
            return 0;
          })
        };
      })
  });

  const source = prettier.format(body, { parser: languageName.toLowerCase() });

  const definitionFilePath = pathJoin(__dirname, "..", outputFile);

  writeFileSync(definitionFilePath, source, "utf8");
  console.log(`${languageName} declarations written to ${definitionFilePath}`);
}
