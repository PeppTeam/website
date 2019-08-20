import React from "react"
import { Intro as IntroP, Link, Quote } from "../components/typography"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <IntroP>{children}</IntroP>,
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri}>{children}</Link>
    ),
    [BLOCKS.QUOTE]: (node, children) => <Quote>{children}</Quote>,
  },
}

export const Intro = ({ document }) =>
  documentToReactComponents(document, options)
