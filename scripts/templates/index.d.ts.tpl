/**
 * This declaration file requires TypeScript 2.1 or above.
 */

import * as http from 'http'

declare namespace Octokit {
  type json = any
  type date = string

  export interface Static {
    plugin(plugin: Plugin): Static
    new(options?: Octokit.Options): Octokit
  }

  export interface Response<T> {
    /** This is the data you would see in https://developer.Octokit.com/v3/ */
    data: T

    /** Response status number */
    status: number

    /** Response headers */
    headers:{
      date: string,
      'x-ratelimit-limit': string,
      'x-ratelimit-remaining': string,
      'x-ratelimit-reset': string,
      'x-Octokit-request-id': string,
      'x-Octokit-media-type': string,
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
    [option: string]: any;
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
    (Route: string, EndpointOptions?: Octokit.EndpointOptions): Promise<
      Octokit.AnyResponse
    >;
    (EndpointOptions: Octokit.EndpointOptions): Promise<Octokit.AnyResponse>;
    endpoint(
      Route: string,
      EndpointOptions?: Octokit.EndpointOptions
    ): Octokit.RequestOptions;
    endpoint(EndpointOptions: Octokit.EndpointOptions): Octokit.RequestOptions;
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

  export type Plugin = (octokit: Octokit, options: Octokit.Options) => void

  // See https://Octokit.com/octokit/request.js#octokitrequest
  export type HookOptions = {
    baseUrl: string
    headers: { [header: string]: string }
    method: string
    url: string
    data: any
    // See https://Octokit.com/bitinn/node-fetch#options
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
      EndpointOptions?: Octokit.EndpointOptions,
      callback?: (response: Octokit.AnyResponse) => any
    ): Promise<any[]>;
    (
      EndpointOptions: Octokit.EndpointOptions,
      callback?: (response: Octokit.AnyResponse) => any
    ): Promise<any[]>;
    iterator: (
      EndpointOptions: Octokit.EndpointOptions
    ) => AsyncIterableIterator<Octokit.AnyResponse>;
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

declare class Octokit {
  constructor(options?: Octokit.Options);
  authenticate(auth: Octokit.AuthBasic): void;
  authenticate(auth: Octokit.AuthOAuthToken): void;
  authenticate(auth: Octokit.AuthOAuthSecret): void;
  authenticate(auth: Octokit.AuthUserToken): void;
  authenticate(auth: Octokit.AuthJWT): void;

  hook: {
    before(name: string, callback: (options: Octokit.HookOptions) => void): void
    after(name: string, callback: (response: Octokit.Response<any>, options: Octokit.HookOptions) => void): void
    error(name: string, callback: (error: Octokit.HookError, options: Octokit.HookOptions) => void): void
    wrap(name: string, callback: (request: (options: Octokit.HookOptions) => Promise<Octokit.Response<any>>, options: Octokit.HookOptions) => void): void
  }

  static plugin(plugin: Octokit.Plugin | [Octokit.Plugin]): Octokit.Static;

  registerEndpoints(endpoints: {
    [scope: string]: Octokit.EndpointOptions
  }): void;

  request: Octokit.Request;

  paginate: Octokit.Paginate;

  {{#namespaces}}
  {{namespace}}: {
    {{#methods}}
    {{&jsdoc}}
    {{method}}: {
      ({{#paramTypeName}}params?: Octokit.{{.}}{{/paramTypeName}}): Promise<{{&responseType}}>;

      endpoint: any
    };
    {{/methods}}
  };
  {{/namespaces}}
}

export = Octokit;
