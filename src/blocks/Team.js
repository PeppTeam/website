import React from "react"
import { Bio } from "../components/bio"
import { RichText } from "../components/RichText"
import { H2 } from "../components/typography"

import { Section } from "../components/layout"

export const Team = fields => {
  const heading = fields.fields.copy["en-US"].fields.heading["en-US"]
  let body = undefined
  if (fields.fields.copy["en-US"].fields.body) {
    body = fields.fields.copy["en-US"].fields.body["en-US"]
  }
  const persons = fields.fields.persons["en-US"]

  return (
    <Section>
      <H2>{heading}</H2>
      {body && <RichText document={body} />}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gridGap: "50px",
        }}
      >
        {persons.map(p => {
          const name = p.fields.name["en-US"]
          const role = p.fields.role["en-US"]
          const image = p.fields.image["en-US"].fields.file["en-US"].url
          return <Bio name={name} role={role} key={name} image={image} />
        })}
      </div>
    </Section>
  )
}
