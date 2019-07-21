import React from "react"
import { graphql } from "gatsby"
import { FluidImage } from "../components/assets"
import moment from "moment"
import Page from "../renderers/Page"
import { Bio } from "../components/Bio"
import { H1, H2, P, Tag } from "../components/typography"
import { RichText } from "../renderers/RichText"
import { Section, Content } from "../components/layout"
import { Post } from "../components/Post"
import styled from "styled-components"
import SEO from "../components/SEO"

const Title = styled(H1)`
  text-align: center;
`

const Intro = styled(P)`
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 0;
`

const Date = styled(P)`
  line-height: 1.5;
  text-align: center;
  color: ${props => props.theme.meta};
`

function getRelatedPosts(posts, tags) {
  let recommendedPosts = []

  const relatedPosts = posts.filter(({ node }) => {
    return node.tags.some(t => {
      return tags.includes(t)
    })
  })

  if (relatedPosts.length > 0) {
    recommendedPosts = relatedPosts
  } else {
    recommendedPosts = posts
  }

  recommendedPosts.sort(function(a, b) {
    return 0.5 - Math.random()
  })

  return recommendedPosts.slice(0, 3)
}

export default function PostTemplate({ data }) {
  const post = data.contentfulBlogPost
  const document = data.contentfulBlogPost.body.json
  const author = post.author
  const recommendedPosts = getRelatedPosts(
    data.allContentfulBlogPost.edges,
    post.tags
  )

  // Todo: Filtrera bort den här posten, random order, om det inte finns, visa tre random

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
        <FluidImage fluid={post.image.fluid} />
      </Section>

      <Section>
        <Content>
          <RichText document={document} />
        </Content>
        <div style={{ maxWidth: "200px", margin: "0 auto" }}>
          <Bio
            name={author.name}
            role={author.role}
            image={author.image.file.url}
          />
        </div>
      </Section>
      {recommendedPosts && (
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
            {recommendedPosts.map(({ node }) => {
              return (
                <Post
                  image={node.image.file.url}
                  slug={node.slug}
                  title={node.title}
                  key={node.title}
                />
              )
            })}
          </div>
        </Section>
      )}
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
          file {
            url
          }
        }
      }
      publishDate
      tags
      slug
    }
    allContentfulBlogPost(limit: 100, filter: { slug: { ne: $slug } }) {
      edges {
        node {
          title
          slug
          image {
            file {
              url
            }
          }
          tags
        }
      }
    }
  }
`
