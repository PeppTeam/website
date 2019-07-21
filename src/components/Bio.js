import React from "react"
import { Person } from "./typography"
import { CircleImage } from "./assets"

export const Bio = ({ name, role, image }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ marginBottom: "16px" }}>
      {image && <CircleImage src={image} />}
    </div>
    <Person name={name} role={role} />
  </div>
)
