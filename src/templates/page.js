import React from "react"
import { graphql } from "gatsby"
import Page from "../renderers/Page"
import { RichText } from "../renderers/RichText"
import { Section } from "../components/layout"
import SEO from "../components/SEO"
import { H1 } from "../components/typography"
import { Intro } from "../renderers/Intro"

export default function BlogPost({ data }) {
  const document = data.contentfulPage.body.json
  const title = data.contentfulPage.title
  const heading = data.contentfulPage.heading
  let intro = undefined
  if (data.contentfulPage.intro) {
    intro = data.contentfulPage.intro.json
  }

  return (
    <Page>
      <SEO title={title} />
      <Section>
        {heading && <H1>{heading}</H1>}
        {intro && <Intro document={intro} />}
      </Section>
      <RichText document={document} />
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
      heading
      intro {
        json
      }
    }
  }
`
