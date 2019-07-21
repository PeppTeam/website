import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  display: inline-block;
  border-radius: 8px;
  margin: 0.5rem 1rem;
  padding: 15px 32px;

  color: white;
  background-color: ${props => props.theme.link};
  border: none;

  text-align: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 800;

  transition-duration: 0.4s;

  :hover {
    opacity: 0.8;
  }
`
