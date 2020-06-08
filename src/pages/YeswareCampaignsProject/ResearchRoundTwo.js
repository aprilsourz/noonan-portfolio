import breakpoint from "styled-components-breakpoint"

import React from "react"
import styled from "styled-components"

import {
  ContentContainer,
  TextContainer,
  FullWidthBackground,
} from "../../components/layout"
import {
  BodyText,
  BoldBodyText,
  LargeTitleText,
  LargeBodyText,
  HeaderSm,
} from "../../components/typography"

const ResearchRoundTwo = () => (
  <FullWidthBackground backgroundColor="white">
    <ContentContainer style={{ maxWidth: "1030px" }}>
      <TextContainer>
        <BlueHeaderSm>RESEARCH ROUND TWO</BlueHeaderSm>
        <BodyTextWithMargin>
          To validate the new designs, Jamie and I conducted usability testing.
          The script again asked users to complete specific tasks within the
          workflows with the goal of assessing whether the changes improved the
          user's understanding of which mode they were in and what actions they
          could or could not take in that mode. We conducted 8 interviews during
          which, we kept track of how often users successfully completed their
          tasks, asked for feedback on the new functionality and workflows, and
          gathered insights into whether the new Ul updates had helped simplify
          and clarify user understanding.
        </BodyTextWithMargin>
      </TextContainer>
    </ContentContainer>
  </FullWidthBackground>
)

const BlueHeaderSm = styled(HeaderSm)`
  color: ${({ theme }) => theme.colors.blue};
`

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 20px;

  ${breakpoint("tablet")`
    margin-top: 40px;
  `}
`

export default ResearchRoundTwo
