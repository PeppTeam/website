import React from "react"
import styled from "styled-components"
import { Clickable } from "../components/actions"

const Wrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  background-color: ${props => props.theme.link};
  padding-top: 56.25%;
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

const Title = styled.p`
  margin: 0;
  font-family: "Catamaran";
  font-weight: 800;
  color: white;
  font-size: 1.2em;
`

export const Card = ({ slug, title }) => (
  <Clickable to={`/${slug}`}>
    <Wrapper>
      <Absolute>
        <Title>{title}</Title>
      </Absolute>
    </Wrapper>
  </Clickable>
)
