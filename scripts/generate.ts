import routes from '@octokit/routes'
import fs from 'fs'
import { camelCase, upperFirst } from 'lodash'
import { ml } from 'multilines'
import moustache from 'mustache'
import { OpenAPIV3 } from 'openapi-types'
import path from 'path'
import prettier from 'prettier'
import { parse } from 'swagger-parser'
import { isNullOrUndefined } from 'util'

/**
 * Configurations
 */

const OUTPUT = path.resolve(__dirname, '../index.d.ts')

const TEMPLATE_PATH = path.resolve(__dirname, './templates/index.d.ts.tpl')
const TEMPLATE = fs.readFileSync(TEMPLATE_PATH, { encoding: 'utf-8' })

const PRETTIER: prettier.Options = {
  parser: 'typescript',
  /* Options */
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
}

/* MAIN SCRIPT */

/* istanbul ignore next */
if (process.env.NODE_END !== 'test') {
  generate(TEMPLATE, PRETTIER)
    .then(file => fs.writeFileSync(OUTPUT, file, { encoding: 'utf-8' }))
    .then(() => console.log(`Generated files to ${OUTPUT}`))
}

/**
 * Template types represents models used in template.
 *
 * Prefixed with T-.
 */

type TTypes = {
  paramTypes: TParamType[]
  reponseTypes: TResponseType[]
  namespaces: TNamespace[]
}

type TParamType = {
  name: string
  fields: TParamTypeField[]
}

type TParamTypeField = {
  key: string
  type: string
  jsdoc?: string
  nullable: boolean
  required: boolean
}

type TResponseType = {
  name: string
  fields: TResponseTypeField[]
  list: boolean
}

type TResponseTypeField = {
  name: string
  type: string
}

type TNamespace = {
  namespace: string
  methods: TNamespaceMethod[]
}

type TNamespaceMethod = {
  method: string
  responseType: string
  jsdoc?: string
  paramTypes: TNamespaceMethodParamType[]
}

type TNamespaceMethodParamType = {
  type: string
}

type XChanges = {
  type: string
  date: string
  note: string
  before: {
    name: string
  }
  after: {
    name: string
  }
}

type XGithub = {
  legacy: boolean
  enabledForApps: boolean
  githubCloudOnly: boolean
  previews: string[]
}

type Endpoint = {
  method: 'post' | 'get' | 'delete' | 'patch' | 'put'
  /* Meta */
  /**
   * Represents the path in the method.
   */
  path: string
  /**
   * Github URL
   */
  url: string
  /**
   * Documentation references.
   */
  summary: string
  description: string
  docs: string
  /* Deprecation */
  deprecated: boolean
  /* Types */
  parameters: Array<OpenAPIV3.ParameterObject>
  responses: OpenAPIV3.ResponsesObject
  requestBody: OpenAPIV3.RequestBodyObject
  /* Github */
  apps: boolean
  previews: string[]
  changes: XChanges[]
}

/**
 * Generates index.d.ts from `@octokit/routes`.
 */
async function generate(
  template: string,
  prettierConfig: prettier.Options,
): Promise<string> {
  const { paths } = (await parse(
    routes['api.github.com'],
  )) as OpenAPIV3.Document

  /**
   * Constructs generator readable specification of the API.
   */
  const patterns = Object.keys(paths)
  const endpoints = patterns.reduce<Endpoint[]>((acc, pattern) => {
    const url = pattern
    const path = paths[pattern]

    /**
     * Check available methods in the definition.
     */
    const methods: Endpoint[] = [
      'get' as const,
      'patch' as const,
      'delete' as const,
      'put' as const,
      'post' as const,
    ]
      .map<Endpoint | null>(method => {
        const endpoint: OpenAPIV3.OperationObject & {
          'x-github': XGithub
          'x-changes': XChanges[]
        } = path[method] as any // TODO

        if (isNullOrUndefined(endpoint)) return null

        return {
          method: method,
          /* Meta */
          path: endpoint.operationId!,
          url: url,
          /* Documentation */
          summary: endpoint.summary!,
          description: endpoint.description!,
          docs: endpoint.externalDocs!.url!,
          /* Deprecation */
          deprecated: withDefault(false, endpoint.deprecated),
          /* Types */
          parameters: (endpoint.parameters as OpenAPIV3.ParameterObject[])!,
          responses: endpoint.responses!,
          requestBody: withDefault(
            { content: {} },
            endpoint.requestBody as OpenAPIV3.RequestBodyObject,
          ),
          /* Github */
          apps: endpoint['x-github'].enabledForApps,
          previews: endpoint['x-github'].previews,
          changes: endpoint['x-changes'],
        }
      })
      .filter(isDefined)

    return acc.concat(methods)
  }, [])

  debugger

  /**
   * READ!!!
   *
   * Naming conventions used:
   *  - we derive all types using pascalCase method and `operationId` property of
   *    each endpoint.
   *  - response types are suffixed with Response
   *  - param types are suffixed with Params
   *
   * There are helper functions at the bottom of the file that help with the conventions.
   */

  /* Generate param types */

  const paramTypes = endpoints.reduce<TParamType[]>((acc, endpoint) => {
    /**
     * Each endpoint might resolve in multiple types because of object subtypes.
     */

    const fields = endpoint.parameters.map<TParamTypeField>(param => {
      const schema = param.schema as OpenAPIV3.NonArraySchemaObject

      return {
        key: param.name,
        type: schema.type,
        jsdoc: param.description && jsDocComment(param.description),
        nullable: false,
        required: Boolean(param.required && !schema.default),
      }
    })

    const typeName = paramTypeName(endpoint)

    const params: TParamType = {
      name: typeName,
      fields: fields,
    }

    return acc.concat(params)
  }, [])

  debugger

  /* Generate response types */

  const responseTypes = endpoints.map<TResponseType>(endpoint => {
    const fields = Object.keys(endpoint.responses).reduce<TResponseTypeField[]>(
      (acc, code) => {
        const { content } = endpoint.responses[code] as OpenAPIV3.ResponseObject // TODO: We could use code here to differentiate between responses.
        // const { schema } = content!['application/json']!
        // return acc.concat()
        return acc
      },
      [],
    )

    return {
      name: pascalCase(endpoint.path),
      list: false,
      fields: fields,
    }
  })

  /* Generate namespaces */

  /* Figure out the hierarchy of namespace methods. */
  const namespaceTree = endpoints.reduce<Dict<Dict<Endpoint>>>(
    (tree, endpoint) => {
      const [namespace, method] = endpoint.path.split('/').map(camelCase)

      if (!tree.hasOwnProperty(namespace)) {
        tree[namespace] = {}
      }

      tree[namespace][method] = endpoint

      return tree
    },
    {},
  )

  /* Generate namespace declarations. */
  const namespaces: TNamespace[] = Object.keys(namespaceTree).map<TNamespace>(
    namespace => {
      const methods: TNamespaceMethod[] = Object.keys(
        namespaceTree[namespace],
      ).map<TNamespaceMethod>(method => {
        const endpoint = namespaceTree[namespace][method]

        const jsdoc = jsDocComment(ml`
          | ${endpoint.summary}
          | 
          | Github App compatible: ${endpoint.apps}
          `)

        // const paramTypes = (endpoint.parameters as OpenAPIV3.ParameterObject[])
        //   .filter(param => !param.deprecated)
        //   .map<TNamespaceMethodParamType>(parameter => {
        //     return {
        //       type: `Octokit.${pascalCase(endpoint.path)}Params`,
        //       params: {},
        //       hasParams: true,
        //     }
        //   })

        return {
          method: method,
          jsdoc: jsdoc,
          // TODO: Why is this a list?
          paramTypes: [
            {
              type: paramTypeName(endpoint),
            },
          ],
          responseType: `${pascalCase(endpoint.path)}Response`,
        }
      })

      return {
        namespace: namespace,
        methods: methods,
      }
    },
  )

  debugger

  const data: TTypes = {
    paramTypes: paramTypes,
    reponseTypes: responseTypes,
    namespaces: namespaces,
  }

  /**
   * Compiles the definition file using mustache.
   */
  const definitions = moustache.render(template, data)

  const unformatted = ml`
  | /**
  | * This file is generated based on https://github.com/octokit/routes/.
  | *
  | * DO NOT EDIT MANUALLY.
  | */
  |
  | ${definitions}
  `
  const formatted = prettier.format(unformatted, prettierConfig)

  debugger

  return formatted
}

/* Helper functions */

/**
 * Finds the parameter type name of an endpoint.
 * @param endpoint
 */
function paramTypeName(endpoint: Endpoint): string {
  return `${pascalCase(endpoint.path)}Params`
}

/**
 * Finds the response type name of an endpoint.
 * @param endpoint
 */
function responseTypeName(endpoint: Endpoint): string {
  return `${pascalCase(endpoint.path)}Response`
}

/**
 * Abstract TypeScript type representations.
 */

type Type<T> = T & { required: boolean; docs?: string }

type AST =
  | Type<{ type: 'number' }>
  | Type<{ type: 'string' }>
  | Type<{ type: 'boolean' }>
  | Type<{ type: 'union'; options: string[] }>
  | Type<{ type: 'list'; item: AST }>
  | Type<{ type: 'object'; fields: Dict<AST> }>

/**
 * Parses json schema into an AST.
 *
 * @param spec
 */
function parseJSONSchema(
  spec:
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.ArraySchemaObject
    | OpenAPIV3.NonArraySchemaObject,
): AST {
  const schema = spec as
    | OpenAPIV3.ArraySchemaObject
    | OpenAPIV3.NonArraySchemaObject

  switch (schema.type) {
    case 'array': {
      return {
        type: 'list',
        required: true,
        docs: schema.description,
        item: parseJSONSchema(schema.items),
      }
    }
    case 'object': {
      return {
        type: 'object',
        required: true,
        docs: schema.description,
        fields: mapEntries(schema.properties, parseJSONSchema),
      }
    }
    case 'boolean': {
      return {
        type: 'boolean',
        docs: schema.description,
        required: true,
      }
    }
    case 'integer':
    case 'number': {
      return {
        type: 'number',
        docs: schema.description,
        required: true,
      }
    }
    case 'string': {
      /* Handle enum cases. */
      if (schema.enum) {
        return {
          type: 'union',
          options: schema.enum,
          docs: schema.description,
          required: true,
        }
      } else {
        return {
          type: 'string',
          docs: schema.description,
          required: true,
        }
      }
    }
    case 'null': {
      throw new Error()
    }
  }
}

/**
 * Creates new types out of objects and returns them as a dictionary of references.
 *
 * @param ast
 */
function flattenAST(ast: AST): Dict<AST> {
  switch (ast.type) {
    /* Ignore scalars. */
    case 'number':
    case 'string':
    case 'list':
    case 'boolean': {
      return {}
    }
    case 'object': {
      const refs = mapEntries(ast.fields, flattenAST)
      const nestedRefs = mapKeys(refs, key => nest(key, ''))
    }
    case 'union': {
    }
  }

  function nest(path: string, parent: string): string {
    return [parent, ...path.split('.')].join('.')
  }
}

/**
 * Converts AST representation of JSON schema into TypeScript-representable types.
 *
 * @param ast
 */
function printJSONSchemaAST(ast: AST) {}

/**
 * Determines whether a value is defined.
 * @param t
 */
function isDefined<T>(t: T | undefined | null): t is T {
  return !isNullOrUndefined(t)
}

/**
 * Creates a JSDocComment from string.
 * @param description
 */
function jsDocComment(description: string): string {
  return (
    description &&
    '/**\n' +
      description
        .trim()
        .split('\n')
        .map(str => ' * ' + str)
        .join('\n') +
      '\n */'
  )
}

/**
 * Creates a pascal case.
 * @param str
 */
function pascalCase(str: string): string {
  return upperFirst(camelCase(str))
}

/**
 * Creates a fallback value.
 */
function withDefault<T>(fallback: T, val: T | undefined | null): T {
  if (isNullOrUndefined(val)) return fallback
  return val
}

type Dict<T> = { [key: string]: T }

/**
 * Maps entries of a map using a function.
 * @param m
 * @param fn
 */
function mapEntries<T, V>(m: Dict<T>, fn: (v: T, key: string) => V): Dict<V> {
  return Object.keys(m).reduce<Dict<V>>((acc, key) => {
    return { ...acc, [key]: fn(m[key], key) }
  }, {})
}

/**
 * Maps keys of an object leaving values untouched.
 *
 * @param m
 * @param fn
 */
function mapKeys<T>(m: Dict<T>, fn: (key: string, v: T) => string): Dict<T> {
  return Object.keys(m).reduce<Dict<T>>((acc, key) => {
    return { ...acc, [fn(key, m[key])]: m[key] }
  }, {})
}
