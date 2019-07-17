import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { H3 } from "./typography"

export const Post = ({ image, slug, title, tags }) => (
  <Link
    to={`/blogg/${slug}`}
    style={{ textDecoration: "none", color: "black" }}
  >
    {image && (
      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: "16px",
        }}
      >
        <Img fluid={image.fluid} />
      </div>
    )}
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: "8px",
      }}
    >
      {tags &&
        tags.map(t => {
          return (
            <div
              style={{
                backgroundColor: "black",
                borderRadius: "4px",
                marginRight: "4px",
                marginBottom: "4px",
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
    <H3>{title}</H3>
  </Link>
)
