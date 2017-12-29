declare module "github" {
  declare type Header =
    | string;

  declare type EmptyParams = {
  };

  declare type Options = {
    timeout?: number;
    host?: string;
    pathPrefix?: string;
    protocol?: string;
    port?: number;
    proxy?: string;
    ca?: string;
    headers?: {[header: Header]: any};
    requestMedia?: string;
    rejectUnauthorized?: boolean;
    family?: number;
  };

  declare type AuthBasic = {
    type: "basic";
    username: string;
    password: string;
  };

  declare type AuthOAuthToken = {
    type: "oauth";
    token: string;
  };

  declare type AuthOAuthSecret = {
    type: "oauth";
    key: string;
    secret: string;
  };

  declare type AuthUserToken = {
    type: "token";
    token: string;
  };

  declare type AuthJWT = {
    type: "integration";
    token: string;
  };

  declare type Auth =
    | AuthBasic
    | AuthOAuthToken
    | AuthOAuthSecret
    | AuthUserToken
    | AuthJWT;

  declare type Link =
    | { link: string; }
    | { meta: { link: string; }; }
    | string
    | any;

  declare type Callback = (error: ?Error, result: ?any) => any;

  {{#params}}
  declare type {{name}} = { {{key}}{{^required}}?{{/required}}: {{{type}}}; };
  {{/params}}

  {{#namespaces}}
  {{#methods}}
  {{#paramTypeName}}
  {{^exclude}}
  declare type {{paramTypeName}} =
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

  declare class Github {
    constructor(options?: Options): Github;
    authenticate(auth: Auth): void;
    hasNextPage(link: Link): ?string;
    hasPreviousPage(link: Link): ?string;
    hasLastPage(link: Link): ?string;
    hasFirstPage(link: Link): ?string;
    getNextPage(link: Link, headers?: {[header: Header]: any}, callback?: Callback): Promise<any>;
    getPreviousPage(link: Link, headers?: {[header: Header]: any}, callback?: Callback): Promise<any>;
    getLastPage(link: Link, headers?: {[header: Header]: any}, callback?: Callback): Promise<any>;
    getFirstPage(link: Link, headers?: {[header: Header]: any}, callback?: Callback): Promise<any>;
    {{#namespaces}}
    {{namespace}}: {
      {{#methods}}
      {{method}}({{#paramTypeName}}params: {{.}}, {{/paramTypeName}}callback?: Callback): Promise<any>;
      {{/methods}}
    };
    {{/namespaces}}
  }

  declare var exports: Class<Github>;
}
