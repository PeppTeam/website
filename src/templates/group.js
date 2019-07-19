import React from "react"
import Page from "../components/page"
import { H1, RichText, H2 } from "../components/typography"
import { graphql } from "gatsby"
import { Partner } from "../components/partner"
import { Post } from "../components/post"
import { Card } from "../components/card"
import { Section } from "../components/layout"
import SEO from "../components/seo"

export default function Group({ data }) {
  const group = data.contentfulGroup
  const document = data.contentfulGroup.body.json
  const otherGroups = data.allContentfulGroup.edges.filter(({ node }) => {
    return node.slug !== group.slug
  })

  return (
    <Page>
      <SEO title={group.title} />
      {group.title && (
        <Section>
          <H1>{group.title}</H1>
          {document && <RichText document={document} />}
        </Section>
      )}

      {group.blogPosts && (
        <Section>
          <H2>Senaste blogginläggen från {group.title}</H2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gridGap: "30px",
              justifyItems: "center",
            }}
          >
            {group.blogPosts.map(post => {
              return <Post key={post.title} {...post} />
            })}
          </div>
        </Section>
      )}
      {group.partners && (
        <Section>
          <H2>Våra samarbetspartners</H2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(75px, 1fr))",
              gridGap: "50px",
              justifyItems: "center",
              alignItems: "end",
            }}
          >
            {group.partners.map(partner => {
              return <Partner key={partner.name} {...partner} />
            })}
          </div>
        </Section>
      )}
      {otherGroups && (
        <Section>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gridGap: "30px",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {otherGroups.map(({ node }) => {
              return <Card key={node.title} {...node} />
            })}
          </div>
        </Section>
      )}
    </Page>
  )
}

export const groupPageQuery = graphql`
  query GroupPageBySlug($slug: String!) {
    contentfulGroup(slug: { eq: $slug }) {
      slug
      title

      body {
        json
      }

      partners {
        name
        logo {
          file {
            url
            fileName
          }
        }
        link
      }
      blogPosts {
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
    allContentfulGroup(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
