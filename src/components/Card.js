import React from "react"
import styled from "styled-components"
import { Clickable } from "./Clickable"
import { Ratio } from "./Ratio"

const Background = styled.div`
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  background-color: ${props => props.theme.link};
`

const Title = styled.p`
  margin: 0;
  font-family: "Catamaran";
  font-weight: 800;
  color: white;
  font-size: 1.6em;
`

export const Card = ({ slug, title }) => (
  <Clickable to={`/${slug}`}>
    <Background>
      <Ratio ratio="56.25%">
        <Title>{title}</Title>
      </Ratio>
    </Background>
  </Clickable>
)
