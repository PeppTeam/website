import React from "react"
import { Meta } from "../components/typography"

export const Asset = ({ src, description }) => (
  <div style={{ marginBottom: "1.45rem" }}>
    <img
      src={`https:${src}?w=1200&q=80`}
      alt={description}
      style={{ width: "100%", margin: 0, borderRadius: "4px" }}
    />
    {description && <Meta>{description}</Meta>}
  </div>
)
