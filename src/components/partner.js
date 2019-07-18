import React from "react"
import styled from "styled-components"

export const Clickable = styled.a`
  text-decoration: none;
  width: 100%;
  color: inherit;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export const Partner = ({ name, link, logo }) => (
  <Clickable href={link}>
    <img
      src={`https:${logo.file.url}`}
      alt={name}
      style={{ width: "100%", margin: 0 }}
    />
  </Clickable>
)
