import React from "react"
import { Section, Callout } from "../components/layout"
import { H2 } from "../components/typography"
import { RichText } from "../renderers/RichText"
import { Button } from "../components/Button"

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
      <Callout center>
        {heading && <H2>{heading}</H2>}
        {body && <RichText document={body} />}
        <Button to={`/${slug}`}>{title}</Button>
      </Callout>
    </Section>
  )
}
