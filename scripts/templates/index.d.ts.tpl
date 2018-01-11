/**
 * This declaration file requires TypeScript 2.1 or above.
 */

declare namespace Github {

  export interface AnyResponse {
    /** This is the data you would see in https://developer.github.com/v3/ */
    data: any

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
  }

  export type WellKnownHeader =
    {{#requestHeaders}}
    | {{{.}}}
    {{/requestHeaders}}
    ;

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
      {{key}}{{^required}}?{{/required}}: {{{type}}};
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
