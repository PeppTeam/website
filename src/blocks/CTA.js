import React from "react"
import { Section } from "../components/layout"
import { H2 } from "../components/typography"
import { RichText } from "../components/RichText"
import styled from "styled-components"
import { Link } from "gatsby"

const Callout = styled.div`
  background-color: ${props => props.theme.callout};
  padding: 32px;
  border-radius: 16px;
  text-align: center;
`

const Button = styled(Link)`
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

export const CTA = fields => {
  let heading = undefined
  if (fields.fields.copy && fields.fields.copy["en-US"].fields.heading) {
    heading = fields.fields.copy["en-US"].fields.heading["en-US"]
  }
  let body = undefined
  if (fields.fields.copy && fields.fields.copy["en-US"].fields.body) {
    body = fields.fields.copy["en-US"].fields.body["en-US"]
  }
  const page = fields.fields.page["en-US"]
  const title = page.fields.title["en-US"]
  const slug = page.fields.slug["en-US"]

  return (
    <Section>
      <Callout>
        {heading && <H2>{heading}</H2>}
        {body && <RichText document={body} />}
        <Button to={`/${slug}`}>{title}</Button>
      </Callout>
    </Section>
  )
}
