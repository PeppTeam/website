import React from "react"
import styled from "styled-components"

export const Section = ({ children }) => (
  <section
    style={{
      marginBottom: `128px`,
    }}
  >
    <div style={{ margin: `0 auto`, maxWidth: 960 }}>{children}</div>
  </section>
)

export const Content = styled.div`
  max-width: 40em;
  margin: 0 auto;
`

export const Callout = styled.div`
  background-color: ${props => props.theme.callout};
  padding: 32px;
  border-radius: 16px;
  width: 100%;
  text-align: ${props => (props.center ? "center" : "left")};
`

export function getGridWidth(columns) {
  switch (columns) {
    case 1:
      return 800
    case 2:
      return 300
    case 3:
      return 250
    case 4:
      return 170
    case 5:
      return 160
    case 6:
      return 100
    default:
      return 200
  }
}
