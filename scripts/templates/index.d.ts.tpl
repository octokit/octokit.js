/**
 * This declaration file requires TypeScript 2.1 or above.
 */

import * as http from 'http'

declare namespace Github {
  type json = any
  type date = string

  export interface Response<T> {
    /** This is the data you would see in https://developer.github.com/v3/ */
    data: T

    /** Response status number */
    status: number

    /** Response headers */
    headers:{
      date: string,
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

  export type AnyResponse = Response<any>

  export interface EmptyParams {
  }

  export interface Options {
    baseUrl?: string;
    timeout?: number;
    headers?: {[header: string]: any};
    agent?: http.Agent;
  }

  export type RequestMethod =
    | 'DELETE'
    | 'GET'
    | 'HEAD'
    | 'PATCH'
    | 'POST'
    | 'PUT'

  export interface EndpointOptions {
    baseUrl?: string
    method?: RequestMethod
    url?: string
    headers?: { [header: string]: any }
    data?:  any
    request?: { [option: string]: any }
    [parameter: string]: any
  }

  export interface RequestOptions {
    method?: RequestMethod
    url?: string
    headers?: { [header: string]: any }
    body?:  any
    request?: { [option: string]: any }
  }

  export interface Request {
    (Route: string, EndpointOptions?: Github.EndpointOptions): Promise<
      Github.AnyResponse
    >;
    (EndpointOptions: Github.EndpointOptions): Promise<Github.AnyResponse>;
    endpoint(
      Route: string,
      EndpointOptions?: Github.EndpointOptions
    ): Github.RequestOptions;
    endpoint(EndpointOptions: Github.EndpointOptions): Github.RequestOptions;
  };

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

  export interface AuthJWT  {
    type: "app";
    token: string;
  }

  export type Link =
    | { link: string; }
    | { headers: { link: string; }; }
    | string;

  export interface Callback<T> {
    (error: Error | null, result: T): any;
  }

  export type Plugin = (octikit: Github, options: Github.Options) => void

  // See https://github.com/octokit/request.js#octokitrequest
  export type HookOptions = {
    baseUrl: string
    headers: { [header: string]: string }
    method: string
    url: string
    data: any
    // See https://github.com/bitinn/node-fetch#options
    request: {
      follow?: number
      timeout?: number
      compress?: boolean
      size?: number
      agent?: string | null
    }
    [index: string]: any
  }

  export type HookError = Error & {
    status: number
    headers: { [header: string]: string }
    documentation_url?: string
    errors?: [{
      resource: string
      field: string
      code: string
    }]
  }

  export interface Paginate {
    (
      Route: string,
      EndpointOptions?: Github.EndpointOptions,
      callback?: (response: Github.AnyResponse) => any
    ): Promise<any[]>;
    (
      EndpointOptions: Github.EndpointOptions,
      callback?: (response: Github.AnyResponse) => any
    ): Promise<any[]>;
    iterator: (
      EndpointOptions: Github.EndpointOptions
    ) => AsyncIterableIterator<Github.AnyResponse>;
  }

  {{&responseTypes}}

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
      {{&jsdoc}}
      "{{key}}"{{^required}}?{{/required}}: {{{type}}}{{#allowNull}} | null{{/allowNull}};
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
  authenticate(auth: Github.AuthBasic): void;
  authenticate(auth: Github.AuthOAuthToken): void;
  authenticate(auth: Github.AuthOAuthSecret): void;
  authenticate(auth: Github.AuthUserToken): void;
  authenticate(auth: Github.AuthJWT): void;

  hook: {
    before(name: string, callback: (options: Github.HookOptions) => void): void
    after(name: string, callback: (response: Github.Response<any>, options: Github.HookOptions) => void): void
    error(name: string, callback: (error: Github.HookError, options: Github.HookOptions) => void): void
    wrap(name: string, callback: (request: (options: Github.HookOptions) => Promise<Github.Response<any>>, options: Github.HookOptions) => void): void
  }

  static plugin(plugin: Github.Plugin | [Github.Plugin]): Github

  registerEndpoints(routes: any): void;

  request: Github.Request;

  paginate: Github.Paginate;

  {{#namespaces}}
  {{namespace}}: {
    {{#methods}}
    {{&jsdoc}}
    {{method}}: {
      ({{#paramTypeName}}params?: Github.{{.}}{{/paramTypeName}}): Promise<{{&responseType}}>;

      endpoint: any
    };
    {{/methods}}
  };
  {{/namespaces}}
}

export = Github;
