import React from "react"
import styled from "styled-components"

const Relative = styled.div`
  overflow: hidden;
  width: 100%;
  padding-top: ${props => props.ratio || "75.25%"};
  position: relative;
`

const Absolute = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const Ratio = ({ ratio, children }) => (
  <Relative ratio={ratio}>
    <Absolute>{children}</Absolute>
  </Relative>
)
