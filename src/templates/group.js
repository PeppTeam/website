import React from "react"
import Layout from "../components/layout"
import { H1, P, RichText } from "../components/typography"
import { Bio } from "../components/bio"
import { Link, graphql } from "gatsby"
import { Partner } from "../components/partner"
import { Card } from "../components/card"

export default function Group({ data }) {
  const group = data.contentfulGroup
  const document = data.contentfulGroup.text.json
  const otherGroups = data.allContentfulGroup.edges.filter(({ node }) => {
    return node.slug !== group.slug
  })

  return (
    <Layout>
      <H1>{group.title}</H1>
      <P>{group.intro.intro}</P>
      <RichText document={document} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "50px",
        }}
      >
        {group.persons &&
          group.persons.map(person => {
            return <Bio key={person.name} {...person} />
          })}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(75px, 1fr))",
          gridGap: "50px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {group.partners &&
          group.partners.map(partner => {
            return <Partner key={partner.name} {...partner} />
          })}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "30px",
          justifyItems: "center",
        }}
      >
        {group.blogPosts &&
          group.blogPosts.map(post => {
            return <Card key={post.title} {...post} />
          })}
      </div>
      {otherGroups &&
        otherGroups.map(({ node }) => {
          return (
            <Link key={node.slug} to={`/${node.slug}`}>
              {node.title}
            </Link>
          )
        })}
    </Layout>
  )
}

export const groupPageQuery = graphql`
  query GroupPageBySlug($slug: String!) {
    contentfulGroup(slug: { eq: $slug }) {
      slug
      title
      intro {
        intro
      }
      text {
        json
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
      partners {
        name
        logo {
          file {
            url
            fileName
          }
        }
        link
      }
      blogPosts {
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
    allContentfulGroup(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
