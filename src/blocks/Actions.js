import React from "react"
import { Card } from "../components/card"

export const ActionsGroups = fields => {
  const groups = fields.fields.groups["en-US"]
  console.log(groups)
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gridGap: "30px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {groups.map(i => {
        console.log(i)
        const title = i.fields.title["en-US"]
        const slug = i.fields.slug["en-US"]
        return <Card key={title} title={title} slug={slug} />
      })}
    </div>
  )
}

export const ActionsLinks = fields => {
  const pages = fields.fields.pages["en-US"]
  console.log(pages)
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        gridGap: "30px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {pages.map(i => {
        console.log(i)
        const title = i.fields.title["en-US"]
        const slug = i.fields.slug["en-US"]
        return <Card key={title} title={title} slug={slug} />
      })}
    </div>
  )
}

export const ActionsJoin = fields => {
  const pages = fields.fields.pages["en-US"]
  console.log(pages)
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        gridGap: "30px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {pages.map(i => {
        console.log(i)
        const title = i.fields.title["en-US"]
        const slug = i.fields.slug["en-US"]
        return <Card key={title} title={title} slug={slug} />
      })}
    </div>
  )
}
