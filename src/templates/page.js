import React from "react"
import Page from "../components/page"
import { RichText } from "../components/typography"
import { Section } from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const document = data.contentfulPage.body.json
  const title = data.contentfulPage.title
  return (
    <Page>
      <SEO title={title} />
      <Section>
        <RichText document={document} />
      </Section>
    </Page>
  )
}

export const blogPostPageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      body {
        json
      }
    }
  }
`
