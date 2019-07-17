import React from "react"
import Layout from "../components/layout"
import { RichText } from "../components/typography"

export default function BlogPost({ data }) {
  const document = data.contentfulPage.body.json
  return (
    <Layout>
      <RichText document={document} />
    </Layout>
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
