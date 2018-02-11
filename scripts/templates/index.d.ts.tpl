/**
 * This declaration file requires TypeScript 2.1 or above.
 */

declare namespace Github {
  type json = any
  type date = string

  export interface AnyResponse<T> {
    /** This is the data you would see in https://developer.github.com/v3/ */
    data: T

    /** Request metadata */
    meta:{
      'x-ratelimit-limit': string,
      'x-ratelimit-remaining': string,
      'x-ratelimit-reset': string,
      'x-github-request-id': string,
      'x-github-media-type': string,
      link: string,
      'last-modified': string,
      etag: string,
      status: string
    }

    [Symbol.iterator](): Iterator<T>
  }

  export interface EmptyParams {
  }

  export interface Options {
    timeout?: number;
    host?: string;
    pathPrefix?: string;
    protocol?: string;
    port?: number;
    proxy?: string;
    ca?: string;
    headers?: {[header: string]: any};
    requestMedia?: string;
    rejectUnauthorized?: boolean;
    family?: number;
  }

  export interface AuthBasic  {
    type: "basic";
    username: string;
    password: string;
  }

  export interface AuthOAuthToken  {
    type: "oauth";
    token: string;
  }

  export interface AuthOAuthSecret  {
    type: "oauth";
    key: string;
    secret: string;
  }

  export interface AuthUserToken  {
    type: "token";
    token: string;
  }

  export interface AuthJWT  {
    type: "integration";
    token: string;
  }

  export type Auth =
    | AuthBasic
    | AuthOAuthToken
    | AuthOAuthSecret
    | AuthUserToken
    | AuthJWT;

  export type Link =
    | { link: string; }
    | { meta: { link: string; }; }
    | string;

  export interface Callback<T> {
    (error: Error | null, result: T): any;
  }

  {{#params}}
  export interface {{name}} { {{key}}{{^required}}?{{/required}}: {{{type}}}; }
  {{/params}}

  {{#namespaces}}
  {{#methods}}
  {{#if paramTypeName}}
  {{^exclude}}
  export type {{paramTypeName}} =
    {{#unionTypeNames}}
    & {{.}}
    {{/unionTypeNames}}
    {{#ownParams}}
    & {
    {{#params}}
      {{key}}{{^required}}?{{/required}}: {{{type}}};
    {{/params}}
    };
    {{/ownParams}}
    {{^ownParams}}
    ;
    {{/ownParams}}
  {{/exclude}}
  {{/if}}
  {{/methods}}
  {{/namespaces}}

  // Response Types
  namespace Response {
    export type FilesMap = {
      [key: string]: any // TODO: Figure out this specific type
    }
  {{#each responseTypes}}
    export type {{@key}} = {
      {{#each .}}
        {{@key}}{{^required}}?{{/required}}: {{#if type_enum}}{{#each type_enum}}{{#if @index}},{{/if}}'{{this}}'{{/each}}{{else}}{{#if isArray}}Array<{{{type}}}>{{else}}{{{type}}}{{/if}}{{/if}};
      {{/each}}
    };
  {{/each}}
  }
}

declare class Github {
  constructor(options?: Github.Options);
  authenticate(auth: Github.Auth): void;
  hasNextPage(link: Github.Link): string | undefined;
  hasPreviousPage(link: Github.Link): string | undefined;
  hasLastPage(link: Github.Link): string | undefined;
  hasFirstPage(link: Github.Link): string | undefined;

  getNextPage(link: Github.Link, callback?: Github.Callback<any>): Promise<Github.AnyResponse<any>>;
  getNextPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback<any>): Promise<Github.AnyResponse<any>>;

  getPreviousPage(link: Github.Link, callback?: Github.Callback<any>): Promise<Github.AnyResponse<any>>;
  getPreviousPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback<any>): Promise<Github.AnyResponse<any>>;

  getLastPage(link: Github.Link, callback?: Github.Callback<any>): Promise<Github.AnyResponse<any>>;
  getLastPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback<any>): Promise<Github.AnyResponse<any>>;

  getFirstPage(link: Github.Link, callback?: Github.Callback<any>): Promise<Github.AnyResponse<any>>;
  getFirstPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback<any>): Promise<Github.AnyResponse<any>>;

  {{#namespaces}}
  {{namespace}}: {
    {{#methods}}
    {{method}}({{#paramTypeName}}params: Github.{{.}}, {{/paramTypeName}}callback?: Github.Callback<{{#if yields}}{{#if yieldsArray}}Array<{{/if}}Github.Response.{{yields}}{{#if yieldsArray}}>{{/if}}{{else}}any{{/if}}>): Promise<Github.AnyResponse<{{#yields}}Github.Response.{{& this}}{{/yields}}{{^yields}}any{{/yields}}>>;
    {{/methods}}
  };
  {{/namespaces}}
}

export = Github;
