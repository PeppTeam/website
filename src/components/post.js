import React from "react"
import Img from "gatsby-image"
import { H3, Tag } from "./typography"
import { Clickable } from "../components/actions"

export const Post = ({ image, slug, title, tags }) => (
  <Clickable to={`/blogg/${slug}`}>
    {image && (
      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: "16px",
        }}
      >
        <Img fluid={image.fluid} />
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
