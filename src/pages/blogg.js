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
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulBlogPost, props }) => (
        <Page>
          <SEO title="Blogg" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gridGap: "30px",
              justifyItems: "center",
            }}
          >
            {allContentfulBlogPost.edges.map(({ node }) => {
              return (
                <Post
                  image={node.image.file.url}
                  slug={node.slug}
                  title={node.title}
                  tags={node.tags}
                  key={node.title}
                />
              )
            })}
          </div>
        </Page>
      )}
    />
  )
}
export default BlogPage
