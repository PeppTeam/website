import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { P } from "../components/typography"
const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      <P>Om Pepp</P>

      <Link to="/om-pepp">Om Pepp</Link>

      <Link to="/organisation">Organisation</Link>
      <Link to="/mentorsprogram">Mentorsprogram</Link>
      <Link to="/samarbete">Samarbete</Link>

      <P>Vart finns vi?</P>
      <Link to="/stockholm">Stockholm</Link>
      <Link to="/goteborg">Göteborg</Link>
      <Link to="/lulea">Luleå</Link>
      <Link to="/linkoping">Linköping</Link>
      <Link to="/umea">Umeå</Link>
      <P>
        <Link to="/">Vill du vara med?</Link>
      </P>
      <P>
        <Link to="/blogg">Blogg</Link>
      </P>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
