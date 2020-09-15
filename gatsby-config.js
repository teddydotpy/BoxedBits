module.exports = {
  siteMetadata: {
    title: `BoxedBits`,
    description: `A website dedicated to letting you gift yourself with the best.`,
    author: `BoxedBits`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product-images`,
        path: `${__dirname}/src/product-images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3f704d`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/f0db4c2e-7f38-468e-b3df-6887e3119617.JPG`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  
}
