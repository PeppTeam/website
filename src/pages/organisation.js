import React from "react"
import Page from "../components/page"
import SEO from "../components/seo"
import { H1, H2, P } from "../components/typography"
import { Bio } from "../components/bio"
import { graphql } from "gatsby"

function OrganisationPage({ data }) {
  const groups = data.allContentfulOrganisation.edges

  return (
    <Page>
      <SEO title="Organisationen" />
      <H1>Organisationen</H1>
      <P>Mer info</P>

      <section>
        {groups.map(({ node }) => {
          return (
            <div key={node.title}>
              <H2>{node.title}</H2>
              <P>{node.text.text}</P>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gridGap: "50px",
                }}
              >
                {node.persons.map(p => {
                  return <Bio {...p} key={p.name} />
                })}
              </div>
            </div>
          )
        })}
      </section>
    </Page>
  )
}

export default OrganisationPage

export const organisationPageQuery = graphql`
  query Organisation {
    allContentfulOrganisation {
      edges {
        node {
          title
          text {
            text
          }
          persons {
            name
            role
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
    }
  }
`
