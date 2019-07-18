import React from "react"
import styled from "styled-components"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Asset } from "../components/asset"

export const H1 = styled.h1`
  margin-bottom: 1.45rem;
  font-family: "Catamaran";
  font-weight: 900;
`
export const H2 = styled.h2`
  margin-bottom: 1.45rem;
  font-family: "Catamaran";
  font-weight: 900;
`
export const H3 = styled.h3`
  margin-bottom: 1.45rem;
  font-family: "Catamaran";
  font-weight: 900;
`
export const H4 = styled.h4`
  margin-bottom: 1.45rem;
  font-family: "Catamaran";
  font-weight: 900;
`

export const P = styled.p`
  margin-bottom: 1.45rem;
  font-family: "Catamaran";
`

export const Meta = styled(P)`
  font-size: 0.7em;
  font-style: italic;
  margin: 0;
`

export const Link = styled.a`
  color: #3ec6ff;
  font-weight: 800;
  text-decoration: none;
  :hover {
    font-weight: 800;
    text-decoration: underline;
  }
`

export const Tag = styled.span`
  color: white;
  font-family: Catamaran;
  font-weight: 800;
  display: inline-flex;
  background-color: #ffd839;
  align-items: center;
  border-radius: 8px;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  text-align: center;
`

export const Quote = styled.blockquote`
  color: #7878e7;
  font-size: 2em;
  font-weight: 800;
  text-align: center;
  max-width: 16em;
  margin: 0 auto;
  line-height: 1;
`

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
    [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri}>{children}</Link>
    ),
    [BLOCKS.QUOTE]: (node, children) => <Quote>{children}</Quote>,
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const { description, image } = node.data.target.fields
      const url = image["en-US"].fields.file["en-US"].url
      const text = description["en-US"]
      return <Asset url={url} description={text} />
    },
  },
}

export const RichText = ({ document }) =>
  documentToReactComponents(document, options)
