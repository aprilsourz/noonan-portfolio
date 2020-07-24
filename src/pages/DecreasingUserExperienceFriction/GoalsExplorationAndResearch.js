import breakpoint from "styled-components-breakpoint"
import Grid from "styled-components-grid"
import React from "react"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import SectionDivider from "../../components/SectionDivider"

import {
  HeaderMd,
  BodyText,
  NumberedBlock,
  ColoredNumber,
  NumberedBlockText,
} from "../../components/typography"

const GoalsExplorationAndResearch = () => (
  <FullWidthBackground
    className="responsive-align-center"
    backgroundColor="white"
  >
    <ContentContainer style={{ maxWidth: "1020px" }}>
      <HeaderMdWithMargin>goals</HeaderMdWithMargin>
      <Grid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
          <NumberedBlock>
            <ColoredNumber>1 )</ColoredNumber>
            <NumberedBlockText>
              By decreasing friction in the Campaigns user experience, we hope
              to increase satisfaction, and thereby increase retention
            </NumberedBlockText>
          </NumberedBlock>
          <NumberedBlock>
            <ColoredNumber>2 )</ColoredNumber>
            <NumberedBlockText>
              By increasing the flexibility of Campaigns, we should also be able
              to offer more opportunities to personalize messaging
            </NumberedBlockText>
          </NumberedBlock>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
          <NumberedBlock className="with-left-margin">
            <ColoredNumber>3 )</ColoredNumber>
            <NumberedBlockText>
              If we don't work on this, we will continue to grow a cohort of
              users who try Campaigns and, finding that it is either too
              unintuitive or inflexible, discard Campaigns as a viable solution
              and churn
            </NumberedBlockText>
          </NumberedBlock>
        </Grid.Unit>
      </Grid>
    </ContentContainer>
    <ContentContainer>
      <BlueSectionDivider>/ exploration and research</BlueSectionDivider>
    </ContentContainer>
    <ContentContainer style={{ maxWidth: "1040px" }}>
      <UserExplorationText>
        Before jumping into research, Jamie (our product manager) and I wrote
        out all the different scenarios in which a user would make changes to an
        in-flight campaign, listing our assumptions, and prioritizing the types
        of scenarios that we would try to solve for.
      </UserExplorationText>
    </ContentContainer>
  </FullWidthBackground>
)

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`

const BlueSectionDivider = styled(SectionDivider)`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 35px;

  ${breakpoint("tablet")`
     margin-top: 65px;
  `}
`

const UserExplorationText = styled(BodyText)`
  margin-top: 25px;

  ${breakpoint("tablet")`
     margin-top: 65px;
  `}
`

export default GoalsExplorationAndResearch
