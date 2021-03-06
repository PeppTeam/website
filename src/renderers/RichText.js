import React from "react"
import { P, H1, H2, H3, H4, Link, Quote } from "../components/typography"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Image } from "../components/assets"
import { Actions } from "../blocks/Actions"
import { Links } from "../blocks/Links"
import { Team } from "../blocks/Team"
import { Partners } from "../blocks/Partners"
import { Posts } from "../blocks/Posts"
import { Testimonial } from "../blocks/Testimonial"
import { CTA } from "../blocks/CTA"
import { Video } from "../blocks/Video"

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
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { file } = node.data.target.fields
      let type = file["en-US"].contentType
      console.log(type)
      type = type.split("/")[0]
      let src = file["en-US"].url

      switch (type) {
        case "image":
          src = file["en-US"].url
          const description = file["en-US"].description
          return <Image src={src} description={description} />
        default:
          return null
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const fields = node.data.target.fields
      switch (node.data.target.sys.contentType.sys.id) {
        case "blockActions":
          return <Actions fields={fields} />
        case "blockCta":
          return <CTA fields={fields} />
        case "blockLinks":
          return <Links fields={fields} />
        case "blockPartners":
          return <Partners fields={fields} />
        case "blockPosts":
          return <Posts fields={fields} />
        case "blockTeam":
          return <Team fields={fields} />
        case "blockTestimonial":
          return <Testimonial fields={fields} />
        case "blockVideo":
          return <Video fields={fields} />
        default:
          return null
      }
    },
  },
}

export const RichText = ({ document }) =>
  documentToReactComponents(document, options)
