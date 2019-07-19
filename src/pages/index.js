import React from "react"
import { Link } from "gatsby"

import Page from "../components/page"
import SEO from "../components/seo"
import { H1, H2, P } from "../components/typography"
import { Partner } from "../components/partner"
import { Post } from "../components/post"
import { Card } from "../components/card"
import { Section } from "../components/layout"
function IndexPage({ data }) {
  const partners = data.allContentfulPartner.edges.filter(({ node }) => {
    return node.homePage === "Partner"
  })
  const friends = data.allContentfulPartner.edges.filter(({ node }) => {
    return node.homePage === "Friend"
  })
  const groups = data.allContentfulGroup.edges
  const blogPosts = data.allContentfulBlogPost.edges

  return (
    <Page>
      <SEO title="Pepp" />
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <H1>Hej, vi är Pepp!</H1>
        <P>
          Pepp är ett mentorsskapsprogram där du som tjej* får en mentor från
          universitetet som hjälper dig upptäcka de oändliga möjligheterna
          teknikbranschen har att erbjuda. Det spelar ingen roll om du är helt
          oteknisk, väldigt teknikintresserad eller något däremellan. Pepp är
          för alla oavsett bakgrund eller intressen!
        </P>
        <P>
          Sedan starten 2013 har över 800 gymnasietjejer och ingenjörsstudenter
          deltagit i Pepp som adepter, mentorer eller i någon av våra
          projektgrupper.
        </P>
        <P>
          * Pepp välkomnar alla som identifierar sig som tjejer och som går i
          gymnasiet.
        </P>{" "}
      </section>

      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridGap: "30px",
            justifyItems: "center",
          }}
        >
          {blogPosts.map(({ node }) => {
            return <Post {...node} key={node.title} />
          })}
        </div>
      </Section>
      <Section>
        <H2>Mentorsprogram</H2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "30px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {groups.map(({ node }) => {
            return <Card {...node} key={node.title} />
          })}
        </div>
      </Section>
      <Section>
        <H2>Om Pepp</H2>
        <P>Vi startade..</P>
        <Link to="/om-pepp/">Läs mer</Link>
      </Section>
      <Section>
        <H2>Vi stödjer Pepp</H2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(75px, 1fr))",
            gridGap: "50px",
            justifyItems: "center",
            alignItems: "end",
          }}
        >
          {partners.map(({ node }) => {
            return <Partner key={node.name} {...node} />
          })}
        </div>
      </Section>
      <Section>
        <H2>Våra vänner</H2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(125px, 1fr))",
            gridGap: "50px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {friends.map(({ node }) => {
            return <Partner key={node.name} {...node} />
          })}
        </div>
      </Section>
    </Page>
  )
}

export default IndexPage

export const homePageQuery = graphql`
  query Partners {
    allContentfulPartner(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          logo {
            file {
              url
              fileName
            }
          }
          homePage
          link
        }
      }
    }
    allContentfulGroup(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
    allContentfulBlogPost(
      limit: 4
      sort: { order: DESC, fields: publishDate }
    ) {
      edges {
        node {
          title
          slug
          image {
            fluid(maxWidth: 600, maxHeight: 600, quality: 100) {
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
`
