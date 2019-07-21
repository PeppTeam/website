import React from "react"
import { H3, Tag } from "./typography"
import { Clickable } from "./Clickable"
import { SquareImage } from "./assets"

export const Post = ({ image, slug, title, tags }) => (
  <Clickable to={`/blogg/${slug}`}>
    <div style={{ marginBottom: "16px" }}>
      {image && <SquareImage src={image} />}
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: "8px",
      }}
    >
      {tags &&
        tags.map(t => {
          return (
            <div style={{ marginRight: "4px" }}>
              <Tag key={t}>{t}</Tag>
            </div>
          )
        })}
    </div>
    <H3>{title}</H3>
  </Clickable>
)
