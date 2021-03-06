import React from "react"
import { Link, graphql } from "gatsby"
import Page from "../renderers/Page"
import SEO from "../components/SEO"
import { H1, H2, P } from "../components/typography"
import { Partner } from "../components/Partner"
import { Post } from "../components/Post"
import { Card } from "../components/Card"
import { Section, HeroSection } from "../components/layout"
import { Button } from "../components/Button"

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
      <SEO />
      <HeroSection>
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
        </P>
      </HeroSection>
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
            return (
              <Post
                image={node.image.file.url}
                slug={node.slug}
                title={node.title}
                key={node.slug}
              />
            )
          })}
        </div>
        <Button to="/blogg">Till bloggen</Button>
      </Section>
      <Section>
        <H2>Mentorsprogram</H2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(160px, 1fr))`,
            gridGap: "20px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {groups.map(({ node }) => {
            return <Card {...node} key={node.slug} />
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
            return (
              <Partner
                key={node.name}
                name={node.name}
                link={node.link}
                logo={node.logo.file.url}
              />
            )
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
            return (
              <Partner
                key={node.name}
                name={node.name}
                link={node.link}
                logo={node.logo.file.url}
              />
            )
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
            file {
              url
            }
          }
        }
      }
    }
  }
`
