import React from "react"
import { Link } from "gatsby"
const data = [
  {
    heading: "Om Pepp",
    links: [
      { to: "/", children: "Bakgrund och vision" },
      { to: "/", children: "Organisation" },
      { to: "/", children: "Kontakt" },
      { to: "/", children: "Press" },
      { to: "/", children: "Dataskydd" },
      { to: "/", children: "Värderingar" },
      { to: "/", children: "In English" },
    ],
  },
  {
    heading: "Vart finns vi?",
    links: [
      { to: "/", children: "Stockholm" },
      { to: "/", children: "Göteborg" },
      { to: "/", children: "Luleå" },
      { to: "/", children: "Linköping" },
      { to: "/", children: "Umeå" },
    ],
  },
  {
    heading: "Vill du vara med?",
    links: [
      { to: "/", children: "Gymnasietjej" },
      { to: "/", children: "Mentor" },
      { to: "/", children: "Projektgrupp" },
      { to: "/", children: "Nationellt" },
      { to: "/", children: "Samarbete" },
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
