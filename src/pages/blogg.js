import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Page from "../renderers/Page"
import SEO from "../components/SEO"
import { Post } from "../components/Post"

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
                  key={node.slug}
                  image={node.image.file.url}
                  slug={node.slug}
                  title={node.title}
                  tags={node.tags}
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
