import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1, H2, P } from "../components/typography"

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
    <Layout>
      <SEO title="Home" />
      <H1>Hej, vi är Pepp!</H1>
      <P>
        Pepp är ett mentorsskapsprogram där du som tjej* får en mentor från
        universitetet som hjälper dig upptäcka de oändliga möjligheterna
        teknikbranschen har att erbjuda. Det spelar ingen roll om du är helt
        oteknisk, väldigt teknikintresserad eller något däremellan. Pepp är för
        alla oavsett bakgrund eller intressen!
      </P>
      <P>
        Sedan starten 2013 har över 800 gymnasietjejer och ingenjörsstudenter
        deltagit i Pepp som adepter, mentorer eller i någon av våra
        projektgrupper.
      </P>
      <P>
        * Pepp välkomnar alla som identifierar sig som tjejer och som går i
        gymnasiet.
      </P>
      <section>
        {blogPosts.map(({ node }) => {
          return <Link to={`/blogg/${node.slug}`}>{node.title}</Link>
        })}
      </section>
      <section>
        <H2>Mentorsprogram</H2>
        {groups.map(({ node }) => {
          return <Link to={`/${node.slug}`}>{node.title}</Link>
        })}
      </section>
      <section>
        <H2>Om Pepp</H2>
        <P>Vi startde..</P>
        <Link to="/om-pepp/">Läs mer</Link>
      </section>
      <section>
        <H2>Vi stödjer Pepp</H2>
        {partners.map(({ node }) => {
          return <P>{node.name}</P>
        })}
      </section>
      <section>
        <H2>Våra vänner</H2>
        {friends.map(({ node }) => {
          return <P>{node.name}</P>
        })}
      </section>
    </Layout>
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
      limit: 3
      sort: { order: DESC, fields: publishDate }
    ) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
