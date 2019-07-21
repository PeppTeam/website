import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  body: "rgb(0, 0, 0)",
  text: "rgba(0, 0, 0, 0.75)",
  pop: "#ffd839",
  link: "#3ec6ff",
  meta: "rgba(0, 0, 0, 0.5)",
  callout: "#f7f7f7",
}

export function Theme(children) {
  return <ThemeProvider theme={theme} {...children} />
}
