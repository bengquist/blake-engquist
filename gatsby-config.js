module.exports = {
  siteMetadata: {
    title: 'Blake Engquist',
    author: 'Blake Engquist',
    description: 'Blake Engquist Full Stack Developer Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'blake-engquist',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon-32x32.png',
      },
    },
    'gatsby-plugin-sass',
  ],
}
