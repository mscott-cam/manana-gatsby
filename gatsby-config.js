module.exports = {
  siteMetadata: {
    title: "Manana Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "",
        accessToken: "",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
