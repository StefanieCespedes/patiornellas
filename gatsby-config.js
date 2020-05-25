module.exports = {
    siteMetadata: {
      title: 'Patrícia Ornellas',
      description: 'A site that...',
    },
    plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
            defaultLayouts: {
                default: require.resolve('./src/components/layout.js')
            }
        }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'posts',
              path: 'posts',
          }
      }
    ],
  };
  