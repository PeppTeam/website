import React from "react"

export const Section = ({ children }) => (
  <section
    style={{
      marginBottom: `72px`,
    }}
  >
    <div style={{ margin: `0 auto`, maxWidth: 960 }}>{children}</div>
  </section>
)
