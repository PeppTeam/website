import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./page.css"
import { Theme } from "../renderers/Themes"

const Page = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Theme>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: "64px",
          }}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </Theme>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
