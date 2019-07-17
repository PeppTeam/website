import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { H2 } from "../components/typography"

export const Card = ({ image, slug, title, tags }) => (
  <Link
    to={`/blogg/${slug}`}
    style={{ textDecoration: "none", color: "black" }}
  >
    {image && (
      <div style={{ borderRadius: "16px", overflow: "hidden" }}>
        <Img fluid={image.fluid} />
      </div>
    )}
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {tags &&
        tags.map(t => {
          return (
            <div
              style={{
                backgroundColor: "black",
                borderRadius: "4px",

                margin: "2px",
                padding: "2px 10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  textDecoration: "none",
                  fontSize: "0.7em",
                  color: "white",
                  lineHeight: 1.2,
                  fontFamily: "Catamaran",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                {t}
              </span>
            </div>
          )
        })}
    </div>
    <H2>{title}</H2>
  </Link>
)
