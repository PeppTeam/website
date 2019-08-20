import React from "react"
import { graphql } from "gatsby"
import Page from "../renderers/Page"
import { RichText } from "../renderers/RichText"
import { Card } from "../components/Card"
import { Section, Wide, HeroSection } from "../components/layout"
import SEO from "../components/SEO"
import { H1, P } from "../components/typography"

export default function Group({ data }) {
  const group = data.contentfulGroup
  const document = data.contentfulGroup.body.json

  const otherGroups = data.allContentfulGroup.edges.filter(({ node }) => {
    return node.slug !== group.slug
  })

  const title = group.title
  console.log(group)
  const intro = group.intro ? group.intro.intro : null

  return (
    <Page>
      <SEO title={title} />
      <Wide>
        <HeroSection>
          {title && <H1>{title}</H1>}
          {intro && <P>{intro}</P>}
        </HeroSection>
        {document && <RichText document={document} />}

        {otherGroups && (
          <Section>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
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
      </Wide>
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
      intro {
        intro
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
