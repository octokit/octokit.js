const upperFirst = require("lodash/upperFirst");

// map git branch names to version identifiers
// keys other than `current` will be used as page slugs
const versions = {
  current: {
    // the current version will use local files in this repo
    // however the `endpoints` branch still needs to be specified
    // to source contents from https://github.com/octokit/plugin-rest-endpoint-methods.js/pull/33
    endpoints: "master"
  },
  v16: {
    branch: "16.x", // older versions must specify a `branch` for this repo
    endpoints: "2.x" // ...and one for the endpoint methods
  }
};

module.exports = {
  // https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/
  pathPrefix: "/rest.js",
  siteMetadata: {
    title: `Octokit.js`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `api`,
        path: `${__dirname}/src/pages/api`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `name`, `scope`, `route`, `method`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            slug: node => `#${node.fields.idName}`,
            type: node => "API"
          },
          OctokitApiGroup: {
            title: node => upperFirst(node.name),
            slug: node => `#${node.id}`,
            type: node => "API"
          },
          OctokitApiMethod: {
            name: node => node.name,
            scope: node => node.scope,
            route: node => `${node.method} ${node.url}`,
            method: node => `${node.example}`,
            slug: node => `#${node.id}`,
            type: node => "API method"
          }
        }
      }
    },
    // map over the version config object and add git sources
    // for their docs from this repo and generated endpoint method docs
    ...Object.entries(versions)
      .flatMap(([version, { branch, endpoints }]) => [
        branch && {
          resolve: `gatsby-source-git`,
          options: {
            name: version,
            remote: `https://github.com/octokit/rest.js.git`,
            branch,
            patterns: `docs/src/pages/api/**`
          }
        },
        {
          resolve: `gatsby-source-git`,
          options: {
            // endpoint method sourceInstanceNames follow this specific
            // naming convention so they may be queried later
            name: version + `-endpoints`,
            remote: `https://github.com/octokit/plugin-rest-endpoint-methods.js.git`,
            branch: endpoints,
            patterns: `docs/**`
          }
        }
      ])
      .filter(Boolean)
  ]
};
