import React from "react"
import Img from "gatsby-image"
import moment from "moment"
import Page from "../components/page"
import { Bio } from "../components/bio"
import { H1, RichText, Meta, P, Tag } from "../components/typography"

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost
  const document = data.contentfulBlogPost.body.json
  return (
    <Page>
      {post.tags.map(tag => {
        return <Tag key={tag}>{tag}</Tag>
      })}
      <H1>{post.title}</H1>
      <Meta>{moment(post.publishDate).format("LL", "fr")}</Meta>
      <P>{post.intro.intro}</P>
      <Img fluid={post.image.fluid} />
      <RichText document={document} />
      <Bio {...post.author} />
    </Page>
  )
}

export const blogPostPageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      intro {
        intro
      }
      body {
        json
      }
      image {
        fluid(maxWidth: 600, maxHeight: 600, quality: 100) {
          src
          srcSet
          sizes
          aspectRatio
        }
      }
      author {
        name
        role
        image {
          fluid(maxWidth: 1024, maxHeight: 1024) {
            src
            srcSet
            sizes
            aspectRatio
          }
        }
      }
      publishDate
      tags
    }
  }
`
