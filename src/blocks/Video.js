import React from "react"
import { Section } from "../components/layout"
import { H2 } from "../components/typography"
import { RichText } from "../renderers/RichText"
import styled from "styled-components"

const Relative = styled.div`
  overflow: hidden;
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`
const Absolute = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

export const Video = ({ fields }) => {
  const heading =
    fields.copy && fields.copy["en-US"].fields.heading
      ? fields.copy["en-US"].fields.heading["en-US"]
      : null

  const body =
    fields.copy && fields.copy["en-US"].fields.body
      ? fields.copy["en-US"].fields.body["en-US"]
      : null

  const title = fields.title ? fields.title["en-US"] : null
  const videoId = fields.videoId ? fields.videoId["en-US"] : null

  return (
    <Section>
      {heading && <H2>{heading}</H2>}
      {body && <RichText document={body} />}
      {videoId && (
        <Relative>
          <Absolute
            title={title}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Absolute>
        </Relative>
      )}
    </Section>
  )
}
