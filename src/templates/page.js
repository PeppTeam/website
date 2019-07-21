import React from "react"
import { graphql } from "gatsby"
import Page from "../renderers/Page"
import { RichText } from "../renderers/RichText"
import { Section } from "../components/layout"
import SEO from "../components/SEO"

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
