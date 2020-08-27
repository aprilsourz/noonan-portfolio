import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import { BodyText, HeaderSm } from "../../components/typography"
import SectionDivider from "../../components/SectionDivider"

import EmptyStatesVerticalCards from "./LookingAhead/EmpyStatesVerticalCards"
import EmptyStatesHorizontalCards from "./LookingAhead/EmptyStatesHorizontalCards"

const LookingAhead = () => (
  <>
    <FullWidthBackground className="responsive-align-center">
      <ContentContainer>
        <SectionDivider bgColor="green" color="white">
          / final designs and looking ahead
        </SectionDivider>
      </ContentContainer>
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <BodyTextMargin60>
          In order to finalize the user interface I started to consider what
          interactions might be needed, how the dashboard could be responsive,
          and what different “empty”, “loading”, and nuanced states each card
          might end up in. I worked with one of our engineers to build out a
          spreadsheet that accounted for all the different states a card could
          get into based on what data might or might not be available to the
          user. While working through the final user interface and experience, I
          also synced with our internal sales team who we often gather internal
          user feedback from. By asking a series of questions and showing the
          designs, we validated that we had chosen the most relevant and
          valuable insights from each report to display at the dashboard level.
        </BodyTextMargin60>
        <GreenHeaderSm>DATA NUANCES</GreenHeaderSm>
      </ContentContainer>
      <EmptyStatesVerticalCards />
      <EmptyStatesHorizontalCards />
    </FullWidthBackground>
  </>
)

const BodyTextMargin60 = styled(BodyText)`
  margin-top: 30px;

  ${breakpoint("tablet")`
    margin-top: 60px;
`}
`

const GreenHeaderSm = styled(HeaderSm)`
  color: ${({ theme }) => theme.colors.green};

  margin-top: 15px;

  ${breakpoint("tablet")`
    margin-top: 30px;
  `}
`

export default LookingAhead
