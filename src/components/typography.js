import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const H1 = ({ children }) => (
  <h1
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    {children}
  </h1>
)

export const H2 = ({ children }) => (
  <h2
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    {children}
  </h2>
)

export const P = ({ children }) => (
  <p
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    {children}
  </p>
)

export const Meta = ({ children }) => (
  <p
    style={{
      marginBottom: `1.45rem`,
      fontSize: "0.5em",
    }}
  >
    {children}
  </p>
)

export const Tag = ({ children }) => (
  <p
    style={{
      marginBottom: `1.45rem`,
      fontSize: "0.5em",
      color: "green",
    }}
  >
    {children}
  </p>
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
