import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { H2, Tag } from "../components/typography"

function BlogPage() {
  return (
    <StaticQuery
      query={graphql`
        query BlogPage {
          allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
            edges {
              node {
                title
                slug
                publishDate
                tags
                heroImage {
                  fluid(maxWidth: 800, maxHeight: 600) {
                    src
                    srcSet
                    sizes
                    aspectRatio
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulBlogPost, props }) => (
        <Layout>
          <SEO title="Blog" />

          {allContentfulBlogPost.edges.map(({ node }) => {
            return (
              <Link to={`blogg/${node.slug}`}>
                <Img fluid={node.heroImage.fluid} />
                {node.tags.map(tag => {
                  return <Tag>{tag}</Tag>
                })}
                <H2>{node.title}</H2>
              </Link>
            )
          })}
        </Layout>
      )}
    />
  )
}
export default BlogPage
