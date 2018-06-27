/**
 * This declaration file requires TypeScript 2.1 or above.
 */

import * as http from 'http'

declare namespace Github {
  type json = any
  type date = string

  export interface AnyResponse {
    /** This is the data you would see in https://developer.github.com/v3/ */
    data: any

    /** Response status number */
    status: number

    /** Response headers */
    headers:{
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

    [Symbol.iterator](): Iterator<any>
  }

  export interface EmptyParams {
  }

  export interface Options {
    baseUrl?: string;
    timeout?: number;
    headers?: {[header: string]: any};
    agent?: http.Agent;

    /**
     * @deprecated in version 15.0.0
     */
    proxy?: string;
    /**
     * @deprecated in version 15.0.0
     */
    ca?: string;
    /**
     * @deprecated in version 15.0.0
     */
    rejectUnauthorized?: boolean;
    /**
     * @deprecated in version 15.0.0
     */
    family?: number;

    /**
     * @deprecated in version 15.2.0
     */
    host?: string;
    /**
     * @deprecated in version 15.2.0
     */
    pathPrefix?: string;
    /**
     * @deprecated in version 15.2.0
     */
    protocol?: string;
    /**
     * @deprecated in version 15.2.0
     */
    port?: number;
  }

  export interface AuthBasic {
    type: "basic";
    username: string;
    password: string;
  }

  export interface AuthOAuthToken {
    type: "oauth";
    token: string;
  }

  export interface AuthOAuthSecret {
    type: "oauth";
    key: string;
    secret: string;
  }

  export interface AuthUserToken {
    type: "token";
    token: string;
  }

  /* @deprecated Use "app" instead of "integration" */
  export interface DeprecatedAuthJWT {
    type: "integration";
    token: string;
  }

    export interface AuthJWT  {
    type: "app";
    token: string;
  }

  export type Auth =
    | AuthBasic
    | AuthOAuthToken
    | AuthOAuthSecret
    | AuthUserToken
    | AuthJWT
    | DeprecatedAuthJWT;

  export type Link =
    | { link: string; }
    | { meta: { link: string; }; }
    | string;

  export interface Callback {
    (error: Error | null, result: any): any;
  }

  {{#params}}
  export interface {{name}} { {{key}}{{^required}}?{{/required}}: {{{type}}}; }
  {{/params}}

  {{#namespaces}}
  {{#methods}}
  {{#paramTypeName}}
  {{^exclude}}
  export type {{paramTypeName}} =
    {{#unionTypeNames}}
    & {{.}}
    {{/unionTypeNames}}
    {{#ownParams}}
    & {
    {{#params}}
      {{#deprecated}}
      /**
       * @deprecated "{{key}}" has been renamed to "{{alias}}"
       */
       {{/deprecated}}
      "{{key}}"{{^required}}?{{/required}}: {{{type}}};
    {{/params}}
    };
    {{/ownParams}}
    {{^ownParams}}
    ;
    {{/ownParams}}
  {{/exclude}}
  {{/paramTypeName}}
  {{/methods}}
  {{/namespaces}}
  {{#childParams}}
  export type {{paramTypeName}} =
    & {
    {{#params}}
      {{#deprecated}}
      /**
       * @deprecated "{{key}}" has been renamed to "{{alias}}"
       */
       {{/deprecated}}
      "{{key}}"{{^required}}?{{/required}}: {{{type}}};
    {{/params}}
    };
  {{/childParams}}
}

declare class Github {
  constructor(options?: Github.Options);
  authenticate(auth: Github.Auth): void;
  hasNextPage(link: Github.Link): string | undefined;
  hasPreviousPage(link: Github.Link): string | undefined;
  hasLastPage(link: Github.Link): string | undefined;
  hasFirstPage(link: Github.Link): string | undefined;

  getNextPage(link: Github.Link, callback?: Github.Callback): Promise<Github.AnyResponse>;
  getNextPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback): Promise<Github.AnyResponse>;

  getPreviousPage(link: Github.Link, callback?: Github.Callback): Promise<Github.AnyResponse>;
  getPreviousPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback): Promise<Github.AnyResponse>;

  getLastPage(link: Github.Link, callback?: Github.Callback): Promise<Github.AnyResponse>;
  getLastPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback): Promise<Github.AnyResponse>;

  getFirstPage(link: Github.Link, callback?: Github.Callback): Promise<Github.AnyResponse>;
  getFirstPage(link: Github.Link, headers?: {[header: string]: any}, callback?: Github.Callback): Promise<Github.AnyResponse>;

  {{#namespaces}}
  {{namespace}}: {
    {{#methods}}
    {{method}}({{#paramTypeName}}params: Github.{{.}}, {{/paramTypeName}}callback?: Github.Callback): Promise<Github.AnyResponse>;
    {{/methods}}
  };
  {{/namespaces}}
}

export = Github;
