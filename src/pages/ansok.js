import React from "react"
import Page from "../components/page"
import SEO from "../components/seo"
import { H1, P } from "../components/typography"
import { Card } from "../components/card"

function JoinPage({ data }) {
  //   const groups = data.allContentfulOrganisation.edges

  return (
    <Page>
      <SEO title="Ansök" />
      <H1>Ansök</H1>
      <P>Mer info</P>

      <section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "50px",
          }}
        >
          {[
            { slug: "adept", title: "Adept" },
            { slug: "mentor", title: "Mentor" },
            { slug: "projektgrupp", title: "Projektgrupp" },
          ].map(l => {
            return <Card key={l.title} {...l} />
          })}
        </div>
      </section>
    </Page>
  )
}

export default JoinPage

// export const joinPageQuery = graphql`
//   query Organisations {
//     allContentfulOrganisation {
//       edges {
//         node {
//           title
//           text {
//             text
//           }
//           persons {
//             name
//             role
//             image {
//               fluid(maxWidth: 1024, maxHeight: 1024) {
//                 src
//                 srcSet
//                 sizes
//                 aspectRatio
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
