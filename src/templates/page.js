import React from "react"
import Page from "../components/page"
import { RichText } from "../components/typography"
import { Section } from "../components/layout"

export default function BlogPost({ data }) {
  const document = data.contentfulPage.body.json
  return (
    <Page>
      <Section>
        <RichText document={document} />
      </Section>
    </Page>
  )
}

export const blogPostPageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      body {
        json
      }
    }
  }
`
