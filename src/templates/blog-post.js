import React from "react"
import Img from "gatsby-image"
import moment from "moment"
import Layout from "../components/layout"
import { Bio } from "../components/bio"
import { H1, RichText, Meta, P, Tag } from "../components/typography"

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost
  const document = data.contentfulBlogPost.text.json
  return (
    <Layout>
      {post.tags.map(tag => {
        return <Tag key={tag}>{tag}</Tag>
      })}
      <H1>{post.title}</H1>
      <Meta>{moment(post.publishDate).format("LL", "fr")}</Meta>
      <P>{post.description.description}</P>
      <Img fluid={post.heroImage.fluid} />
      <RichText document={document} />
      <Bio name={post.author.name} />
    </Layout>
  )
}

export const blogPostPageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      heroImage {
        fluid(maxWidth: 1600, maxHeight: 900) {
          src
          srcSet
          sizes
          aspectRatio
        }
      }
      description {
        description
      }
      text {
        json
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
