import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1, H2, P } from "../components/typography"
import { Bio } from "../components/bio"
import { graphql } from "gatsby"

function OrganisationPage({ data }) {
  const groups = data.allContentfulOrganisation.edges

  return (
    <Layout>
      <SEO title="Organisationen" />
      <H1>Organisationen</H1>
      <P>Mer info</P>

      <section>
        {groups.map(({ node }) => {
          return (
            <>
              <H2>{node.title}</H2>
              {node.persons.map(({ name }) => {
                return <Bio name={name} />
              })}
            </>
          )
        })}
      </section>
    </Layout>
  )
}

export default OrganisationPage

export const organisationPageQuery = graphql`
  query Organisations {
    allContentfulOrganisation {
      edges {
        node {
          title
          persons {
            name
          }
        }
      }
    }
  }
`
