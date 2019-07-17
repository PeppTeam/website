const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allContentfulGroup(limit: 1000) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      const groupTemplate = path.resolve(`./src/templates/group.js`)

      _.each(result.data.allContentfulGroup.edges, edge => {
        createPage({
          path: `/${edge.node.slug}/`,
          component: slash(groupTemplate),
          context: {
            slug: edge.node.slug,
          },
        })
      })
    })
    .then(() => {
      graphql(
        `
          {
            allContentfulBlogPost(limit: 1000) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          throw result.errors
        }

        const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
        _.each(result.data.allContentfulBlogPost.edges, edge => {
          createPage({
            path: `/blogg/${edge.node.slug}/`,
            component: slash(blogPostTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })
      })
    })
    .then(() => {
      graphql(
        `
          {
            allContentfulPage(limit: 1000) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          throw result.errors
        }

        const pageTemplate = path.resolve(`./src/templates/page.js`)
        _.each(result.data.allContentfulPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })
      })
    })
}
