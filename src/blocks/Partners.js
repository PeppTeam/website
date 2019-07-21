import React from "react"
import { Partner } from "../components/Partner"
import { Section } from "../components/layout"
import { H2 } from "../components/typography"
import { RichText } from "../renderers/RichText"

export const Partners = fields => {
  let heading = undefined
  if (fields.fields.copy && fields.fields.copy["en-US"].fields.heading) {
    heading = fields.fields.copy["en-US"].fields.heading["en-US"]
  }
  let body = undefined
  if (fields.fields.copy && fields.fields.copy["en-US"].fields.body) {
    body = fields.fields.copy["en-US"].fields.body["en-US"]
  }

  const partners = fields.fields.partners["en-US"]

  return (
    <Section>
      {heading && <H2>{heading}</H2>}
      {body && <RichText document={body} />}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gridGap: "75px",
          justifyItems: "center",
          alignItems: "end",
        }}
      >
        {partners.map(i => {
          const name = i.fields.name["en-US"]
          const link = i.fields.link["en-US"]
          const logo = i.fields.logo["en-US"].fields.file["en-US"].url
          return <Partner key={name} name={name} link={link} logo={logo} />
        })}
      </div>
    </Section>
  )
}
