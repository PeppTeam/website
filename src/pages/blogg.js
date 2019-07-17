import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Page from "../components/page"
import SEO from "../components/seo"
import { Post } from "../components/post"

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
        <Page>
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
              return <Post {...node} key={node.title} />
            })}
          </div>
        </Page>
      )}
    />
  )
}
export default BlogPage
