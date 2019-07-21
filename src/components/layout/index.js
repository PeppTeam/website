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
  text-align: ${props => (props.center ? "center" : "left")};
`
