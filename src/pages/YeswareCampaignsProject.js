import breakpoint from "styled-components-breakpoint"
import Grid from "styled-components-grid"
import React from "react"
import styled from "styled-components"

import yeswareAnnSmith from "../img/yeswareAnnSmith.png"
import { ContentContainer, TextContainer } from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"
import SectionDivider from "../components/SectionDivider"
import { LargeTitleText, LargeBodyText } from "../components/typography"
import { HeaderMd, BodyText, BoldBodyText } from "../components/typography"
import Scenarios from "./YeswareCampaignsProject/Scenarios"

const YeswareCampaignsProject = () => {
  return (
    <>
      <HeadlineContainer>
        <ProjectButtons />
        <ContentContainer style={{ maxWidth: "930px" }}>
          <BlueTitle>Decreasing user experience friction</BlueTitle>
          <SubTitle>
            Can we increase Yesware Campaigns user satisfaction and close the
            gap between expected behavior and what is intuitive to users?
          </SubTitle>
          <YeswareAnnSmith src={yeswareAnnSmith} />
        </ContentContainer>
      </HeadlineContainer>
      <FullWidthBackground
        className="responsive-align-center"
        backgroundColor="white"
      >
        <ContentContainer style={{ maxWidth: "1020px" }}>
          <Grid>
            <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
              <TextContainer>
                <HeaderMdWithMargin>background</HeaderMdWithMargin>
                <BodyText>
                  I was the Lead Designer for Yesware's Campaigns feature for
                  almost two years. The team consisted of myself, a product
                  manager, an engineering lead, and four engineers. Campaigns is
                  one of Yesware's more complex features and I worked on many
                  different Campaigns projects from a complete redesign to the
                  addition of new functionality and capabilities both large and
                  small.
                </BodyText>
              </TextContainer>
            </Grid.Unit>
            <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
              <TextContainer>
                <HeaderMdWithMargin>role</HeaderMdWithMargin>
                <BoldBodyTextWithMargin>
                  Lead Product Designer
                </BoldBodyTextWithMargin>
                <BodyTextWithMargin>
                  User Research <br />
                  Wireframing & Prototyping <br />
                  UX & UI Design <br />
                </BodyTextWithMargin>
                <BodyTextWithMargin style={{ fontStyle: "italic" }}>
                  Mar '18 - Dec '19
                </BodyTextWithMargin>
              </TextContainer>
            </Grid.Unit>
          </Grid>
        </ContentContainer>
      </FullWidthBackground>
      <FullWidthBackground
        className="responsive-align-center"
        backgroundColor="lightBlue"
      >
        <ContentContainer style={{ maxWidth: "1020px" }}>
          <TextContainer>
            <HeaderMdWithMargin>the problem</HeaderMdWithMargin>
            <BodyTextWithMargin>
              Campaigns Is a tool that allows salespeople to send a series of
              customized messages (called “touches") to many recipients at once
              through a number of different channels: email, phone, LinkedIn
              message, etc.
            </BodyTextWithMargin>
            <BodyTextWithMargin>
              In May 2018, the Campaigns feature was being adopted by more and
              more users. But the more users using the product, the more signals
              we started to receive that users were experiencing unintuitive
              behavior and missing functionality in the campaign editing
              workflow.
            </BodyTextWithMargin>
            <BodyTextWithMargin>
              At the time, there was no easy way for users to make changes to a
              campaign while there were recipients scheduled to receive touches.
              If a user needed to change the content of an email or change
              recipient details, they had no easy way of doing so. We needed to
              introduce the ability to make edits to an in-progress campaign and
              make it intuitive to do so.
            </BodyTextWithMargin>
          </TextContainer>
        </ContentContainer>
      </FullWidthBackground>
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
                    By decreasing friction in the Campaigns user experience, we
                    hope to increase satisfaction, and thereby increase
                    retention.
                  </NumberedBlockText>
                </NumberedBlock>
                <NumberedBlock>
                  <BlueNumber>2 )</BlueNumber>
                  <NumberedBlockText>
                    By increasing the flexibility of Campaigns, we should also
                    be able to offer more opportunities to personalize
                    messaging.
                  </NumberedBlockText>
                </NumberedBlock>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
                <NumberedBlock className="with-left-margin">
                  <BlueNumber>3 )</BlueNumber>
                  <NumberedBlockText>
                    If we don't work on this, we will continue to grow a cohort
                    of users who try Campaigns and, finding that it is either
                    too unintuitive or inflexible, discard campaigns as a viable
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
              Before jumping into research, Jamie (our product manager) and I
              wrote out all the different scenarios in which a user would make
              changes to an in-flight campaign, listing our assumptions, and
              prioritizing the types of scenarios that we would try to solve
              for.
            </UserExplorationText>
          </TextContainer>
        </ContentContainer>
      </FullWidthBackground>
      <FullWidthBackground backgroundColor="lightGrey">
        <ContentContainer style={{ maxWidth: "1350px" }}>
          <Scenarios />
        </ContentContainer>
      </FullWidthBackground>
    </>
  )
}

const HeadlineContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  ${breakpoint("tablet")`
    padding-bottom: 80px;
  `}
`

// backgroundColor prop must be one of colors in the styled-components theme
const FullWidthBackground = styled.div`
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  padding: 35px 0;

  &.responsive-align-center {
    text-align: center;
  }

  ${breakpoint("tablet")`
    padding: 65px 0;

    &.responsive-align-center {
      text-align: left;
    }
  `}
`

const BlueTitle = styled(LargeTitleText)`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  margin-bottom: 15px;
  margin-top: 30px;

  ${breakpoint("tablet")`
    margin-bottom: 15px;
    margin-top: 60px;
  `}
`

const SubTitle = styled(LargeBodyText)`
  text-align: center;

  ${breakpoint("tablet")`
      line-height: 40px;
  `}
`

const YeswareAnnSmith = styled.img`
  margin-top: 35px;
  width: 100%;
  -webkit-box-shadow: -1px 1px 21px 0px rgba(163, 163, 163, 1);
  -moz-box-shadow: -1px 1px 21px 0px rgba(163, 163, 163, 1);
  box-shadow: -1px 1px 21px 0px rgba(163, 163, 163, 1);

  ${breakpoint("tablet")`
      margin-top: 70px;
  `}
`

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`

const BoldBodyTextWithMargin = styled(BoldBodyText)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
`}
`

const BodyTextWithMargin = styled(BodyText)`
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

export default YeswareCampaignsProject
