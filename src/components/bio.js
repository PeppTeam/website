import React from "react"
import Img from "gatsby-image"
import { P, Meta } from "./typography"

export const Bio = ({ name, role, image }) => (
  <div style={{ textAlign: "center" }}>
    {image && (
      <div style={{ borderRadius: "50%", overflow: "hidden" }}>
        <Img fluid={image.fluid} />
      </div>
    )}

    <P>{name}</P>
    <Meta>{role}</Meta>
  </div>
)
