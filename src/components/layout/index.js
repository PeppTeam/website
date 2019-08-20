import styled from "styled-components"

export const Section = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 64px;
  padding-bottom: 64px;
`

export const Wide = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

export const HeroSection = styled.div`
  max-width: 40rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 64px;
  padding: 0px 1.0875rem 1.45rem;
  min-height: 60vh;
`

export const Content = styled.div`
  max-width: 40em;
  margin: 0 auto;
`

export const Callout = styled.div`
  background-color: ${props => props.theme.callout};
  padding: 32px;
  border-radius: 16px;
  width: 100%;
  text-align: ${props => (props.center ? "center" : "left")};
`

export function getGridWidth(columns) {
  switch (columns) {
    case 1:
      return 350
    case 2:
      return 350
    case 3:
      return 250
    case 4:
      return 170
    case 5:
      return 160
    case 6:
      return 100
    default:
      return 200
  }
}
