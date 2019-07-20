import React from "react"
import { Image } from "../components/image"
import moment from "moment"
import Page from "../components/page"
import { Bio } from "../components/bio"
import { H1, H2, P, Tag } from "../components/typography"
import { RichText } from "../components/RichText"
import { Section, Content } from "../components/layout"
import { Post } from "../components/post"
import styled from "styled-components"
import SEO from "../components/seo"

const Title = styled(H1)`
  text-align: center;
`

const Intro = styled(P)`
  font-size: 1.2em;
  line-height: 1.5;
`

const Date = styled(P)`
  line-height: 1.5;
  text-align: center;
`

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost
  const document = data.contentfulBlogPost.body.json
  const posts = data.allContentfulBlogPost.edges
  return (
    <Page>
      <SEO title={post.title} />
      <Section>
        <Content>
          <div
            style={{
              marginBottom: "1em",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {post.tags.map(tag => {
              return <Tag key={tag}>{tag}</Tag>
            })}
          </div>
          <Title>{post.title}</Title>
          <Date>{moment(post.publishDate).format("LL", "fr")}</Date>
          <Intro>{post.intro.intro}</Intro>
        </Content>
      </Section>
      <Section>
        <Image fluid={post.image.fluid} />
      </Section>

      <Section>
        <Content>
          <RichText document={document} />
        </Content>{" "}
        <div style={{ maxWidth: "200px", margin: "0 auto" }}>
          <Bio {...post.author} />
        </div>
      </Section>
      <Section>
        <H2>Läs mer</H2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gridGap: "30px",
            justifyItems: "center",
          }}
        >
          {posts.map(({ node }) => {
            return <Post key={node.title} {...node} />
          })}
        </div>
      </Section>
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
        fluid(maxWidth: 1200, maxHeight: 800, quality: 100) {
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
    allContentfulBlogPost(
      limit: 3
      sort: { order: DESC, fields: publishDate }
    ) {
      edges {
        node {
          title
          slug
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
`
