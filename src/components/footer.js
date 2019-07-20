import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Bold } from "../components/typography"

const NavLink = styled(Link)`
  color: ${props => props.theme.text};

  text-decoration: none;
  :hover {
    color: ${props => props.theme.link};
  }
`
const Heading = styled(Bold)`
  text-transform: uppercase;
  margin-bottom: 0.5em;
`

const data = [
  {
    heading: "Om Pepp",
    links: [
      { to: "/om-pepp", children: "Bakgrund och vision" },
      { to: "/organisation", children: "Organisation" },
      { to: "/kontakt", children: "Kontakt" },
      { to: "/press", children: "Press" },
      { to: "/dataskydd", children: "Dataskydd" },
      { to: "/varderingar", children: "Värderingar" },
      { to: "/in-english", children: "In English" },
    ],
  },
  {
    heading: "Vart finns vi?",
    links: [
      { to: "/stockholm", children: "Stockholm" },
      { to: "/goteborg", children: "Göteborg" },
      { to: "/lulea", children: "Luleå" },
      { to: "/linkoping", children: "Linköping" },
      { to: "/umea", children: "Umeå" },
    ],
  },
  {
    heading: "Vill du vara med?",
    links: [
      { to: "/adept", children: "Gymnasietjej" },
      { to: "/mentor", children: "Mentor" },
      { to: "/projektgrupp", children: "Projektgrupp" },
      { to: "/ansok", children: "Nationellt" },
      { to: "/samarbete", children: "Samarbete" },
    ],
  },
]

const Footer = () => {
  return (
    <footer
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "50px",
      }}
    >
      {data.map(d => {
        return (
          <div
            key={d.heading}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "24px",
            }}
          >
            <Heading>{d.heading}</Heading>
            {d.links.map(l => {
              return <NavLink key={l.children} {...l} />
            })}
          </div>
        )
      })}
    </footer>
  )
}

export default Footer
