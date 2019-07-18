import React from "react"
import { Link } from "gatsby"
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
            <p
              style={{
                fontFamily: "catamaran",
                fontWeight: 800,
                textTransform: "uppercase",
                margin: 0,
                color: "#181818",
              }}
            >
              {d.heading}
            </p>
            {d.links.map(l => {
              return (
                <Link
                  key={l.children}
                  style={{
                    fontFamily: "catamaran",
                    color: "black",
                    textDecoration: "none",
                  }}
                  {...l}
                />
              )
            })}
          </div>
        )
      })}
    </footer>
  )
}

export default Footer
