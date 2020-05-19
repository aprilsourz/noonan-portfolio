import breakpoint from "styled-components-breakpoint"
import Grid from "styled-components-grid"
import React from "react"
import styled from "styled-components"

import {
  ContentContainer,
  TextContainer,
  FullWidthBackground,
} from "../../components/layout"
import SectionDivider from "../../components/SectionDivider"

import { HeaderMd, BodyText, BoldBodyText } from "../../components/typography"

const GoalsExplorationAndResearch = () => (
  <FullWidthBackground
    className="responsive-align-center"
    backgroundColor="white"
  >
    <ContentContainer style={{ maxWidth: "1020px" }}>
      <TextContainer>
        <HeaderMdWithMargin>goals</HeaderMdWithMargin>
        <Grid>
          <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
            <NumberedBlock>
              <BlueNumber>1 )</BlueNumber>
              <NumberedBlockText>
                By decreasing friction in the Campaigns user experience, we hope
                to increase satisfaction, and thereby increase retention.
              </NumberedBlockText>
            </NumberedBlock>
            <NumberedBlock>
              <BlueNumber>2 )</BlueNumber>
              <NumberedBlockText>
                By increasing the flexibility of Campaigns, we should also be
                able to offer more opportunities to personalize messaging.
              </NumberedBlockText>
            </NumberedBlock>
          </Grid.Unit>
          <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
            <NumberedBlock className="with-left-margin">
              <BlueNumber>3 )</BlueNumber>
              <NumberedBlockText>
                If we don't work on this, we will continue to grow a cohort of
                users who try Campaigns and, finding that it is either too
                unintuitive or inflexible, discard campaigns as a viable
                solution and churn.
              </NumberedBlockText>
            </NumberedBlock>
          </Grid.Unit>
        </Grid>
      </TextContainer>
    </ContentContainer>
    <ContentContainer>
      <BlueSectionDivider>/ exploration and research</BlueSectionDivider>
    </ContentContainer>
    <ContentContainer style={{ maxWidth: "1030px" }}>
      <TextContainer>
        <UserExplorationText>
          Before jumping into research, Jamie (our product manager) and I wrote
          out all the different scenarios in which a user would make changes to
          an in-flight campaign, listing our assumptions, and prioritizing the
          types of scenarios that we would try to solve for.
        </UserExplorationText>
      </TextContainer>
    </ContentContainer>
  </FullWidthBackground>
)

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`
const BlueNumber = styled(BoldBodyText)`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 700;
  font-style: italic;
  display: none;

  ${breakpoint("tablet")`
    width: 8%;
    display: inline;
  `}
`

const NumberedBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &:last-of-type {
    margin-bottom: 25px;
  }

  &:not(:last-of-type) {
    margin-bottom: 25px;
  }

  ${breakpoint("tablet")`

    &:last-of-type {
      margin-bottom: 0px;
    }
  `}
`

const NumberedBlockText = styled(BodyText)`
  width: 100%;

  ${breakpoint("tablet")`
     width: 80%
  `};
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
