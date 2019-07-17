import React from "react"
import Img from "gatsby-image"

export const Bio = ({ name, role, image }) => (
  <div style={{ textAlign: "center" }}>
    {image && (
      <div
        style={{
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "inset 0 0 24px #A6A6A6",
          marginBottom: "16px",
        }}
      >
        <Img fluid={image.fluid} style={{ zIndex: -1 }} />
      </div>
    )}

    <p
      style={{
        fontFamily: "Catamaran",
        fontWeight: 800,
        margin: 0,
      }}
    >
      {name}
    </p>
    <p
      style={{
        fontFamily: "Catamaran",
        margin: 0,
        fontSize: "0.8em",
      }}
    >
      {role}
    </p>
  </div>
)
