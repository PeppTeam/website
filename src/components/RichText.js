import React from "react"
import { P, H1, H2, H3, H4, Link, Quote } from "../components/typography"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Asset } from "../components/asset"
import { Actions } from "../blocks/Actions"
import { Team } from "../blocks/Team"

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
      const fields = node.data.target.fields
      switch (node.data.target.sys.contentType.sys.id) {
        case "blockTeam":
          return <Team fields={fields} />
        case "blockActions":
          return <Actions fields={fields} />
        case "image":
          const { description, image } = fields
          const url = image["en-US"].fields.file["en-US"].url
          const text = description["en-US"]
          return <Asset url={url} description={text} />
        default:
          return null
      }
    },
  },
}

export const RichText = ({ document }) =>
  documentToReactComponents(document, options)
