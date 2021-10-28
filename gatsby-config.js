module.exports = {
  siteMetadata: {
    siteUrl: "https://www.elysemontano.com",
    title: "Elyse Montano Portfolio",
    description: "Full stack software developer portfolio page",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#574166`,
        // Disable the loading spinner.
        showSpinner: true
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/elyse.jpg',
      },
    },
  ],
};
