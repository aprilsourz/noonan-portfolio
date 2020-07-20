import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "./layout"
import { HeaderMd, BodyText } from "./typography"

const TheProblem = ({ blocksOfText, backgroundColor }) => (
  <FullWidthBackground
    className="responsive-align-center"
    backgroundColor={backgroundColor || "lightBlue"}
  >
    <ContentContainer style={{ maxWidth: "1020px" }}>
      <HeaderMdWithMargin>the problem</HeaderMdWithMargin>
      {blocksOfText.map((blockOfText, idx) => (
        <BodyTextWithMargin key={idx}>{blockOfText}</BodyTextWithMargin>
      ))}
    </ContentContainer>
  </FullWidthBackground>
)

const BodyTextWithMargin = styled(BodyText)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`

export default TheProblem
