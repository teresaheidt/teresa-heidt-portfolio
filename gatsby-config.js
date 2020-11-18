module.exports = {
  addons: [
    {
       name: '@storybook/addon-docs',
       options: { configureJSX: true }
    }
  ],
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`
    `@babel/plugin-syntax-jsx`,
    {
      "plugins": ["@babel/plugin-syntax-jsx"]
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        pathPrefix: "/reponame",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Teresa's Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        // background_color: `#fff`,
        // theme_color: `#02aab0`,
        display: `standalone`,
        // icon: 'src/images/favicon.ico',
      },
    },
  ],
};
