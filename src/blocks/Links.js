import React from "react"
import { Section, getGridWidth } from "../components/layout"
import { Link } from "../components/Link"

export const Links = fields => {
  const links = fields.fields.links["en-US"]

  const width = getGridWidth(links.length)

  return (
    <Section>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${width}px, 1fr))`,
          gridGap: "30px",
          justifyItems: "start",
          alignItems: "start",
        }}
      >
        {links.map(l => {
          let heading = undefined
          if (l.fields.copy && l.fields.copy["en-US"].fields.heading) {
            heading = l.fields.copy["en-US"].fields.heading["en-US"]
          }
          let body = undefined
          if (l.fields.copy && l.fields.copy["en-US"].fields.body) {
            body = l.fields.copy["en-US"].fields.body["en-US"]
          }
          const label = l.fields.label["en-US"]
          const url = l.fields.url["en-US"]

          return (
            <Link
              heading={heading}
              body={body}
              label={label}
              url={url}
              key={url}
            />
          )
        })}
      </div>
    </Section>
  )
}
