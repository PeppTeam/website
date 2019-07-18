import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const Clickable = styled(Link)`
  text-decoration: none;
  width: 100%;
  color: inherit;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`
