/**
 * This declaration file requires TypeScript 3.1 or above.
 */

/// <reference lib="esnext.asynciterable" />

import * as http from 'http'

declare namespace Octokit {
  type json = any
  type date = string

  export interface Static {
    plugin(plugin: Plugin): Static
    new(options?: Octokit.Options): Octokit
  }

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
    authStrategy?: any;
    auth?: string | { username: string; password: string; on2fa: () => Promise<string> } | { clientId: string; clientSecret: string; } | { (): (string | Promise<string>) } | any;
    userAgent?: string;
    previews?: string[];
    baseUrl?: string;
    log?: {
      debug?: (message: string, info?: object) => void
      info?: (message: string, info?: object) => void
      warn?: (message: string, info?: object) => void
      error?: (message: string, info?: object) => void
    };
    request?: {
      agent?: http.Agent;
      timeout?: number
    };
    /**
     * @deprecated Use {request: {timeout}} instead. See https://github.com/octokit/request.js#request
     */
    timeout?: number;
    /**
     * @deprecated Use {userAgent, previews} instead. See https://github.com/octokit/request.js#request
     */
    headers?: {[header: string]: any};
    /**
     * @deprecated Use {request: {agent}} instead. See https://github.com/octokit/request.js#request
     */
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
    headers?: RequestHeaders
    body?:  any
    request?: OctokitRequestOptions
    /**
    * Media type options, see {@link https://developer.github.com/v3/media/|GitHub Developer Guide}
    */
    mediaType?: {
      /**
      * `json` by default. Can be `raw`, `text`, `html`, `full`, `diff`, `patch`, `sha`, `base64`. Depending on endpoint
      */
      format?: string;

      /**
      * Custom media type names of {@link https://developer.github.com/v3/media/|API Previews} without the `-preview` suffix.
      * Example for single preview: `['squirrel-girl']`.
      * Example for multiple previews: `['squirrel-girl', 'mister-fantastic']`.
      */
      previews?: string[];
    };
  }

  export type RequestHeaders = {
    /**
     * Avoid setting `accept`, use `mediaFormat.{format|previews}` instead.
     */
    accept?: string;
    /**
     * Use `authorization` to send authenticated request, remember `token ` / `bearer ` prefixes. Example: `token 1234567890abcdef1234567890abcdef12345678`
     */
    authorization?: string;
    /**
     * `user-agent` is set do a default and can be overwritten as needed.
     */
    "user-agent"?: string;
  
    [header: string]: string | number | undefined;
  };

  export type OctokitRequestOptions = {
    /**
     * Node only. Useful for custom proxy, certificate, or dns lookup.
     */
    agent?: http.Agent;
    /**
     * Custom replacement for built-in fetch method. Useful for testing or request hooks.
     */
    fetch?: any;
    /**
     * Use an `AbortController` instance to cancel a request. In node you can only cancel streamed requests.
     */
    signal?: any;
    /**
     * Node only. Request/response timeout in ms, it resets on redirect. 0 to disable (OS limit applies). `options.request.signal` is recommended instead.
     */
    timeout?: number;
  
    [option: string]: any;
  };

  export interface Log {
    debug: (message: string, additionalInfo?: object) => void
    info: (message: string, additionalInfo?: object) => void
    warn: (message: string, additionalInfo?: object) => void
    error: (message: string, additionalInfo?: object) => void
  };

  export interface Endpoint {
    (
      Route: string,
      EndpointOptions?: Octokit.EndpointOptions
    ): Octokit.RequestOptions;
    (EndpointOptions: Octokit.EndpointOptions): Octokit.RequestOptions;
    /**
     * Current default options
     */
    DEFAULTS: Octokit.EndpointOptions;
    /**
     * Get the defaulted endpoint options, but without parsing them into request options:
     */
    merge(Route: string, EndpointOptions?: Octokit.EndpointOptions): Octokit.RequestOptions;
    merge(EndpointOptions: Octokit.EndpointOptions): Octokit.RequestOptions;
    /**
     * Stateless method to turn endpoint options into request options. Calling endpoint(options) is the same as calling endpoint.parse(endpoint.merge(options)).
     */
    parse(EndpointOptions: Octokit.EndpointOptions): Octokit.RequestOptions;
    /**
     * Merges existing defaults with passed options and returns new endpoint() method with new defaults
     */
    defaults(EndpointOptions: Octokit.EndpointOptions): Octokit.Endpoint
  }

  export interface Request {
    (Route: string, EndpointOptions?: Octokit.EndpointOptions): Promise<
      Octokit.AnyResponse
    >;
    (EndpointOptions: Octokit.EndpointOptions): Promise<Octokit.AnyResponse>;
    endpoint: Octokit.Endpoint
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

  // See https://github.com/octokit/request.js#request
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
      EndpointOptions?: Octokit.EndpointOptions,
      callback?: (response: Octokit.AnyResponse, done: () => void) => any
    ): Promise<any[]>;
    (
      EndpointOptions: Octokit.EndpointOptions,
      callback?: (response: Octokit.AnyResponse, done: () => void) => any
    ): Promise<any[]>;
    iterator: (
      EndpointOptions: Octokit.EndpointOptions
    ) => AsyncIterableIterator<Octokit.AnyResponse>;
  }

  // response types
  {{&responseTypes}}

  // param types
  {{#namespaces}}
  {{#methods}}
  {{#paramTypes}}
  {{#hasParams}}
  export type {{type}} =
    & {
    {{#params}}
      {{&jsdoc}}
      "{{key}}"{{^required}}?{{/required}}: {{{type}}}{{#allowNull}} | null{{/allowNull}};
    {{/params}}
    };
  {{/hasParams}}
  {{/paramTypes}}
  {{/methods}}
  {{/namespaces}}

  // child param types
  {{#childParams}}
  export type {{paramTypeName}} =
    & {
    {{#params}}
      "{{key}}"{{^required}}?{{/required}}: {{{type}}};
    {{/params}}
    };
  {{/childParams}}
}

export class Octokit {
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

  static plugin(plugin: Octokit.Plugin | Octokit.Plugin[]): Octokit.Static;

  registerEndpoints(endpoints: {
    [scope: string]: Octokit.EndpointOptions
  }): void;

  request: Octokit.Request;

  paginate: Octokit.Paginate;

  log: Octokit.Log;

  {{#namespaces}}
  {{namespace}}: {
    {{#methods}}
    {{&jsdoc}}
    {{method}}: {
      {{#paramTypes}}
      (params?: Octokit.RequestOptions & Octokit.{{type}}): Promise<{{&responseType}}>;
      {{/paramTypes}}

      endpoint: Octokit.Endpoint
    };
    {{/methods}}
  };
  {{/namespaces}}
}
