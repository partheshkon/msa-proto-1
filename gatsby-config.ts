import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e10tfretv76d`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `lfKeSSDjHQDOG7A3SBwjleflbmldOyQ4IfFnfBM0q6Q`
      }
    },
    `gatsby-plugin-image`
  ],
  jsxRuntime: `automatic`
};

export default config;
