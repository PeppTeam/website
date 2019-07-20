import React from "react"
import { H3, Tag } from "./typography"
import { Clickable } from "../components/actions"

export const Post = ({ image, slug, title, tags }) => (
  <Clickable to={`/blogg/${slug}`}>
    {image && (
      <div
        style={{
          background: `url(https:${image}?w=800&q=80)`,
          paddingTop: "100%",
          position: "relative",
          backgroundSize: "cover",
          marginBottom: "16px",
          borderRadius: "16px",
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
    )}
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
          return <Tag key={t}>{t}</Tag>
        })}
    </div>
    <H3>{title}</H3>
  </Clickable>
)
