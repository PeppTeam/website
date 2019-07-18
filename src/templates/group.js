import React from "react"
import Page from "../components/page"
import { H1, RichText } from "../components/typography"
import { Bio } from "../components/bio"
import { graphql } from "gatsby"
import { Partner } from "../components/partner"
import { Post } from "../components/post"
import { Card } from "../components/card"
import { Section } from "../components/layout"

export default function Group({ data }) {
  const group = data.contentfulGroup
  const document = data.contentfulGroup.body.json
  const otherGroups = data.allContentfulGroup.edges.filter(({ node }) => {
    return node.slug !== group.slug
  })

  return (
    <Page>
      <Section>
        <H1>{group.title}</H1>
      </Section>
      <Section>
        <RichText document={document} />
      </Section>
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: "50px",
          }}
        >
          {group.persons &&
            group.persons.map(person => {
              return <Bio key={person.name} {...person} />
            })}
        </div>
      </Section>
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(75px, 1fr))",
            gridGap: "50px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {group.partners &&
            group.partners.map(partner => {
              return <Partner key={partner.name} {...partner} />
            })}
        </div>
      </Section>
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "30px",
            justifyItems: "center",
          }}
        >
          {group.blogPosts &&
            group.blogPosts.map(post => {
              return <Post key={post.title} {...post} />
            })}
        </div>
      </Section>
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: "30px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {otherGroups &&
            otherGroups.map(({ node }) => {
              return <Card key={node.title} {...node} />
            })}
        </div>
      </Section>
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
      persons {
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
