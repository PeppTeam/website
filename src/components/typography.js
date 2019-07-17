import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const H1 = ({ children }) => (
  <h1
    style={{
      marginBottom: `1.45rem`,
      fontFamily: "Catamaran",
      fontWeight: 900,
    }}
  >
    {children}
  </h1>
)

export const H2 = ({ children }) => (
  <h2
    style={{
      marginBottom: `1.45rem`,
      fontFamily: "Catamaran",
      fontWeight: 800,
    }}
  >
    {children}
  </h2>
)

export const H3 = ({ children }) => (
  <h3
    style={{
      marginBottom: `1.45rem`,
      fontFamily: "Catamaran",
      fontWeight: 800,
    }}
  >
    {children}
  </h3>
)

export const P = ({ children }) => (
  <p
    style={{
      marginBottom: `1.45rem`,
      fontFamily: "Catamaran",
    }}
  >
    {children}
  </p>
)

export const Meta = ({ children }) => (
  <p
    style={{
      fontSize: "0.8em",
      fontFamily: "Catamaran",
      margin: 0,
    }}
  >
    {children}
  </p>
)

export const Tag = ({ children }) => (
  <div
    style={{ backgroundColor: "black", padding: "2px", borderRadius: "4px" }}
  >
    <span
      style={{
        color: "white",
        fontFamily: "Catamaran",
        fontWeight: "bold",
        fontSize: "10px",
      }}
    >
      {children}
    </span>
  </div>
)

export const Quote = ({ children }) => (
  <p
    style={{
      color: "orange",
      fontWeight: "600",
      fontSize: "1em",
      as: "p",
    }}
  >
    {children}
  </p>
)

export const RichText = ({ document }) => documentToReactComponents(document)
