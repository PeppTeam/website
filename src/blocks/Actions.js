import React from "react"
import { Card } from "../components/Card"
import { Section, getGridWidth } from "../components/layout"
import { H2 } from "../components/typography"
import { RichText } from "../renderers/RichText"

export const Actions = fields => {
  let heading = undefined
  if (fields.fields.copy && fields.fields.copy["en-US"].fields.heading) {
    heading = fields.fields.copy["en-US"].fields.heading["en-US"]
  }
  let body = undefined
  if (fields.fields.copy && fields.fields.copy["en-US"].fields.body) {
    body = fields.fields.copy["en-US"].fields.body["en-US"]
  }

  const actions = fields.fields.actions["en-US"]
  const width = getGridWidth(actions.length)

  return (
    <Section>
      <H2>{heading}</H2>
      {body && <RichText document={body} />}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${width}px, 1fr))`,
          gridGap: "20px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {actions.map(i => {
          const title = i.fields.title["en-US"]
          const slug = i.fields.slug["en-US"]
          return <Card key={title} title={title} slug={slug} />
        })}
      </div>
    </Section>
  )
}
