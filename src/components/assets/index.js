import React from "react"
import { Meta } from "../typography"
import Img from "gatsby-image"
import styled from "styled-components"

export const Image = ({ src, description }) => (
  <div style={{ marginBottom: "1.45rem" }}>
    <img
      src={`https:${src}?w=1200&q=80`}
      alt={description}
      style={{ width: "100%", margin: 0, borderRadius: "4px" }}
    />
    {description && <Meta>{description}</Meta>}
  </div>
)

const Circle = styled.div`
  padding-top: 100%;
  border-radius: 50%;
  background: url(https:${props => props.src}?w=480&q=75);
  position: relative;
  background-size: cover;
`

const Square = styled.div`
  padding-top: 100%;
  border-radius: 16px;
  background: url(https:${props => props.src}?w=800&q=80);
  position: relative;
  background-size: cover;
`

const Absolute = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const CircleImage = ({ src }) => (
  <Circle src={src}>
    <Absolute></Absolute>
  </Circle>
)

export const SquareImage = ({ src }) => (
  <Square src={src}>
    <Absolute></Absolute>
  </Square>
)

export const FluidImage = styled(Img)`
  border-radius: 16px;
`
