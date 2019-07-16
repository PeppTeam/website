import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { H1, P, RichText } from "../components/typography"
import { Bio } from "../components/bio"
import { graphql } from "gatsby"

export default function Group({ data }) {
  const group = data.contentfulGroup
  const document = data.contentfulGroup.text.json

  return (
    <Layout>
      <H1>{group.title}</H1>
      <P>{group.intro.intro}</P>
      <Img fluid={group.featuredImage.fluid} />
      <RichText document={document} />
      {group.persons.map(person => {
        return <Bio name={person.name} />
      })}
    </Layout>
  )
}

export const groupPageQuery = graphql`
  query GroupPageBySlug($slug: String!) {
    contentfulGroup(slug: { eq: $slug }) {
      title
      featuredImage {
        fluid(maxWidth: 2048) {
          ...GatsbyContentfulFluid
        }
      }
      intro {
        intro
      }
      text {
        json
      }
      persons {
        name
        role
        education
        image {
          fluid(maxWidth: 1024, maxHeight: 1024) {
            src
            srcSet
            sizes
            aspectRatio
          }
        }
      }
    }
  }
`
