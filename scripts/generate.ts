import routes from '@octokit/routes'
import fs from 'fs'
import { camelCase, upperFirst } from 'lodash'
import { ml } from 'multilines'
import moustache from 'mustache'
import { OpenAPIV3 } from 'openapi-types'
import path from 'path'
import prettier from 'prettier'
import { parse } from 'swagger-parser'
import { isNull, isNullOrUndefined } from 'util'

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
 * Template types.
 *
 * Prefixed with T-.
 */

type TTypes = {
  reponseTypes: TResposeType[]
  namespaces: TNamespace[]
  childParams: TChildParam[]
}

type TResposeType = string

type TNamespace = {
  namespace: string
  methods: TNamespaceMethod
}

type TChildParam = {
  paramTypeName: string
  params: []
}

type TNamespaceMethod = {}

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
  description: string
  docs: string
  /* Deprecation */
  deprecated: boolean
  /* Types */
  parameters: Array<OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject>
  responses: OpenAPIV3.ResponsesObject
  requestBody?: OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject
  /* Github */
  apps: boolean
  previews: string[]
  changes: XChanges[]
}

/**
 * Scalar mappings.
 */
const Scalars: { [openapi: string]: string } = {
  integer: 'number',
  'integer[]': 'number[]',
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
          description: endpoint.description!,
          docs: endpoint.externalDocs!.url!,
          /* Deprecation */
          deprecated: endpoint.deprecated!,
          /* Types */
          parameters: endpoint.parameters!,
          responses: endpoint.responses!,
          requestBody: endpoint.requestBody,
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

  /* Generate types */

  const types = endpoints.map(endpoint => {})

  /* Generate namespaces */

  const namespaces = patterns.map(pattern => {
    const methods = {}
  })

  const data: TTypes = {
    reponseTypes: [],
    namespaces: [],
    childParams: [],
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

  return formatted
}

/* Helper functions */

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

debugger

/**
 * Creates a pascal case.
 * @param str
 */
function pascalify(str: string): string {
  return upperFirst(camelCase(str))
}
