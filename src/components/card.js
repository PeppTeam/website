import React from "react"
import styled from "styled-components"
import { Clickable } from "../components/actions"

const Ratio = ({ children }) => (
  <div
    style={{
      borderRadius: "16px",
      overflow: "hidden",
      width: "100%",
      backgroundColor: "#3EC6FF",
      paddingTop: "56.25%",
      position: "relative",
    }}
  >
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      {children}
    </div>
  </div>
)

const Title = styled.p`
  margin: 0;
  font-family: "Catamaran";
  font-weight: 800;
  color: white;
  font-size: 1.2em;
`

export const Card = ({ slug, title }) => (
  <Clickable to={`/${slug}`}>
    <Ratio>
      <Title>{title}</Title>
    </Ratio>
  </Clickable>
)
