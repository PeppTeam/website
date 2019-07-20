import React from "react"
import { Section } from "../components/layout"
import { Person } from "../components/typography"
import { RichText } from "../components/RichText"
import styled from "styled-components"

const Callout = styled.div`
  background-color: #f7f7f7;
  padding: 32px;
  border-radius: 16px;
`

export const Testimonial = fields => {
  let body = undefined
  if (fields.fields.testimonial["en-US"]) {
    body = fields.fields.testimonial["en-US"]
  }

  let name = undefined
  if (fields.fields.name) {
    name = fields.fields.name["en-US"]
  }

  let role = undefined
  if (fields.fields.role) {
    role = fields.fields.role["en-US"]
  }

  let image = undefined
  if (fields.fields.image) {
    image = fields.fields.image["en-US"].fields.file["en-US"].url
  }
  return (
    <Section>
      <Callout>
        {image && (
          <div
            style={{
              maxWidth: "100px",
              margin: "0 auto",
              marginBottom: "1.45rem",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                background: `url(https:${image})`,
                paddingTop: "100%",
                position: "relative",
                backgroundSize: "cover",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
              />
            </div>
          </div>
        )}
        {body && <RichText document={body} />}
        <div
          style={{ maxWidth: "150px", margin: "0 auto", textAlign: "center" }}
        >
          <Person name={name} role={role}></Person>
        </div>
      </Callout>
    </Section>
  )
}
