import React from "react"
import { Callout } from "../components/layout"
import { H3, Link as TextLink } from "../components/typography"
import { RichText } from "../renderers/RichText"

export const Link = ({ heading, body, label, url }) => {
  return (
    <Callout center>
      <H3>{heading}</H3>
      {body && <RichText document={body} />}
      <TextLink href={url} target="_blank">
        {label}
      </TextLink>
    </Callout>
  )
}
