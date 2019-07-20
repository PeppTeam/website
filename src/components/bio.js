import React from "react"
import { Person } from "../components/typography"

export const Bio = ({ name, role, image }) => (
  <div style={{ textAlign: "center" }}>
    {image && (
      <div
        style={{
          borderRadius: "50%",
          background: `url(https:${image})`,
          paddingTop: "100%",
          position: "relative",
          backgroundSize: "cover",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      </div>
    )}
    <Person name={name} role={role} />
  </div>
)
