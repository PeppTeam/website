import React from "react"
import { Post } from "../components/post"
import { Section } from "../components/layout"
import { H2 } from "../components/typography"
import { RichText } from "../components/RichText"

export const Posts = fields => {
  let heading = undefined
  if (fields.fields.copy && fields.fields.copy["en-US"].fields.heading) {
    heading = fields.fields.copy["en-US"].fields.heading["en-US"]
  }
  let body = undefined
  if (fields.fields.copy && fields.fields.copy["en-US"].fields.body) {
    body = fields.fields.copy["en-US"].fields.body["en-US"]
  }

  const posts = fields.fields.posts["en-US"]

  return (
    <Section>
      {heading && <H2>{heading}</H2>}
      {body && <RichText document={body} />}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridGap: "30px",
          justifyItems: "center",
        }}
      >
        {posts.map(i => {
          const title = i.fields.title["en-US"]
          const slug = i.fields.slug["en-US"]
          const image = i.fields.image["en-US"].fields.file["en-US"].url
          return <Post title={title} slug={slug} image={image} key={title} />
        })}
      </div>
    </Section>
  )
}
