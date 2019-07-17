import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "../components/card"

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
                tags
                image {
                  fluid(maxWidth: 600, maxHeight: 600, quality: 100) {
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gridGap: "30px",
              justifyItems: "center",
            }}
          >
            {allContentfulBlogPost.edges.map(({ node }) => {
              return <Card {...node} key={node.title} />
            })}
          </div>
        </Layout>
      )}
    />
  )
}
export default BlogPage
