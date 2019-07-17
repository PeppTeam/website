import React from "react"
import { Link } from "gatsby"

export const Card = ({ slug, title }) => (
  <Link
    to={`/${slug}`}
    style={{ textDecoration: "none", color: "black", width: "100%" }}
  >
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "black",

        paddingTop: "56.25%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <p
          style={{
            fontFamily: "Catamaran",
            fontWeight: 800,
            color: "white",
            margin: 0,
            fontSize: "1.3em",
          }}
        >
          {title}
        </p>
      </div>
    </div>
  </Link>
)
