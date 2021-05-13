module.exports = {
  siteMetadata: {
    title: "Manana Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "manana-surf",
        accessToken: process.env.API_KEY,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
