import React from "react"
import styled from "styled-components"

export const H1 = styled.h1`
  margin-bottom: 1.45rem;
  font-family: "Catamaran";
  font-weight: 900;
  color: ${props => props.theme.body};
`
export const H2 = styled.h2`
  margin-bottom: 1.45rem;
  font-family: "Catamaran";
  font-weight: 900;
  color: ${props => props.theme.body};
`
export const H3 = styled.h3`
  margin-bottom: 1.45rem;
  font-family: "Catamaran";
  font-weight: 900;
  color: ${props => props.theme.body};
`
export const H4 = styled.h4`
  margin-bottom: 1.45rem;
  font-family: "Catamaran";
  font-weight: 900;
`

export const P = styled.p`
  margin-bottom: 1.45rem;
  font-family: "Catamaran";
  color: ${props => props.theme.text};
`

export const Bold = styled(P)`
  font-weight: 800;
`

export const Meta = styled(P)`
  font-size: 0.7em;
  font-style: italic;
  margin: 0;
  color: ${props => props.theme.meta};
`

export const Link = styled.a`
  color: ${props => props.theme.link};
  font-weight: 800;
  text-decoration: none;
  :hover {
    font-weight: 800;
    text-decoration: underline;
  }
`
export const Name = styled(P)`
  font-weight: 800;
  margin: 0;
`
export const Role = styled(P)`
  font-size: 0.8em
  margin: 0;
  color: ${props => props.theme.meta};

`

export const Person = ({ name, role }) => {
  return (
    <div>
      {name && <Name>{name}</Name>}
      {role && <Role>{role}</Role>}
    </div>
  )
}

export const Tag = styled.span`
  color: white;
  font-family: Catamaran;
  font-weight: 800;
  display: inline-flex;
  background-color: ${props => props.theme.pop};
  align-items: center;
  border-radius: 8px;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  text-align: center;
`

export const Quote = styled.blockquote`
  font-size: 2em;
  font-weight: 800;
  text-align: center;
  max-width: 16em;
  margin: 80px auto;
  line-height: 1.2;

  > p {
    color: ${props => props.theme.pop};
  }
`
