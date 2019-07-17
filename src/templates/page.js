import React from "react"
import Page from "../components/page"
import { RichText } from "../components/typography"

export default function BlogPost({ data }) {
  const document = data.contentfulPage.body.json
  return (
    <Page>
      <RichText document={document} />
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
