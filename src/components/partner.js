import React from "react"

export const Partner = ({ name, link, logo }) => (
  <a href={link}>
    <img
      src={`https:${logo.file.url}`}
      alt={name}
      style={{ width: "100%", margin: 0 }}
    />
  </a>
)
