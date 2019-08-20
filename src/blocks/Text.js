import React from "react"
import { RichText } from "../renderers/RichText"
import { Section } from "../components/layout"

export const Text = fields => {
  let body = undefined
  if (fields.fields.text) {
    body = fields.fields.text["en-US"]
  }

  return <Section>{body && <RichText document={body} />}</Section>
}
