import React from "react"
import { graphql } from "gatsby"
import Page from "../components/page"
import { H1 } from "../components/typography"
import { RichText } from "../components/RichText"
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
