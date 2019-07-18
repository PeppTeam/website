import React from "react"
import { Meta } from "../components/typography"

export const Asset = ({ url, description }) => (
  <div style={{ marginBottom: "1.45rem" }}>
    <img
      src={`https:${url}`}
      alt={description}
      style={{ width: "100%", margin: 0, borderRadius: "4px" }}
    />
    <Meta>{description}</Meta>
  </div>
)
